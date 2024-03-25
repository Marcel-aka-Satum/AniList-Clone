from django.http import JsonResponse
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import authenticate, login
from django.core.files.base import ContentFile
import requests

from .models import StatusPost, ForumPost, Profile, Anime
from .forms import ProfileForm
from .serializers import (
    UserSerializer,
    BlogSerializer,
    ForumSerializer,
    ProfileSerializer,
    AnimeSerializer,
)
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["username"] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# Create your views here.
@api_view(["GET", "POST"])
def user_list(request):
    # get all users
    if request.method == "GET":
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)
    # create a new user
    elif request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def users_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = UserSerializer(user)
        return Response(serializer.data)
    elif request.method == "PUT":
        pass
    elif request.method == "DELETE":
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET", "POST", "PUT"])
def detail_blog(request, pk):
    if request.method == "GET":
        blog = StatusPost.objects.get(pk=pk)
        serializer = BlogSerializer(blog)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == "PUT":
        pass


@api_view(["GET"])
def forum_list_all(request):
    if request.method == "GET":
        forum = ForumPost.objects.all()
        serializer = ForumSerializer(forum, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(["GET", "POST", "PUT"])
def forum_list(request, pk):
    if request.method == "GET":
        forum = ForumPost.objects.get(pk=pk)
        serializer = ForumSerializer(forum)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        serializer = ForumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == "PUT":
        pass


@api_view(["POST"])
def register_user(request):
    if request.method == "POST":
        data = request.data
        userName = data.get("username")
        userEmail = data.get("email")
        password = data.get("password")

        try:
            user = User.objects.get(username=userName)
            emailUser = User.objects.get(email=userEmail)
            return Response(
                {"message": "User with this username/email already exists"},
                status=status.HTTP_409_CONFLICT,
            )
        except ObjectDoesNotExist:
            # Update User model
            user = User.objects.create_user(userName, userEmail, password)
            userAuth = authenticate(request, username=userName, password=password)
            # Update Profile model
            profile, created = Profile.objects.get_or_create(user=user)
            profile.save()

            login(request, user)
            token = Token.objects.create(user=user)
            response = Response(
                {"message": "User created successfully", "token": token.key},
                status=status.HTTP_201_CREATED,
            )
            return response


# data that should be in browser's local storage
@api_view(["GET"])
def user_data(request, pk):
    if request.method == "GET":
        user = User.objects.get(pk=pk)
        serializer = ProfileSerializer(user)
        return JsonResponse(serializer.data, safe=False)


@api_view(["POST"])
def update_profile(request, pk):
    if request.method == "POST":
        # Update User model
        user = User.objects.get(pk=pk)
        if "email" in request.POST:
            user.email = request.POST["email"]
        if "password" in request.POST:
            user.set_password(request.POST["password"])
        user.save()

        # Update Profile model
        profile, created = Profile.objects.get_or_create(user=user)
        profile.avatar = request.FILES.get("avatar", profile.avatar)
        profile.banner = request.FILES.get("banner", profile.banner)
        profile.save()

        return JsonResponse({"message": "Profile updated successfully"}, safe=False)

    else:
        return JsonResponse({"message": "Invalid request"}, safe=False)


@api_view(["GET", "POST"])
def watched_animes(request, pk):
    if request.method == "GET":
        user = User.objects.get(id=pk)
        watched_animes = user.profile.watched_animes.all()
        serializer = AnimeSerializer(watched_animes, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":  # add watched anime
        anime, created = Anime.objects.get_or_create(name=request.data.get("name"))
        if created:  # if the anime is new
            response = requests.get(request.data.get("image"))
            anime.image.save(
                f"{anime.name}.jpg", ContentFile(response.content), save=True
            )
            anime.name = request.data.get("name")
            anime.save()
        user = User.objects.get(id=pk)
        user.profile.watched_animes.add(anime)
        user.save()
        return JsonResponse({"message": "Anime added to watched"}, safe=False)


@api_view(["GET", "POST"])
def favorite_animes(request, pk):
    # get all favorite animes
    if request.method == "GET":
        user = User.objects.get(id=pk)
        fav_animes = user.profile.favorite_animes.all()
        serializer = AnimeSerializer(fav_animes, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":  # add a favorite anime
        anime, created = Anime.objects.get_or_create(name=request.data.get("name"))
        if created:  # if the anime is new
            response = requests.get(request.data.get("image"))
            anime.image.save(
                f"{anime.name}.jpg", ContentFile(response.content), save=True
            )
            anime.name = request.data.get("name")
            anime.save()
        user = User.objects.get(id=pk)
        user.profile.favorite_animes.add(anime)
        user.save()
        return JsonResponse({"message": "Anime added to favorites"}, safe=False)
