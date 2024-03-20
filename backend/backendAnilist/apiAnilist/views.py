from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import StatusPost, ForumPost, Profile
from .serializers import UserSerializer, BlogSerializer, ForumSerializer, ProfileSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
from django.shortcuts import render, redirect
from .forms import ProfileForm

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



# Create your views here.
@api_view(['GET', 'POST'])
def user_list(request):
    #get all users
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)
    #create a new user
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
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
        

@api_view(['GET', 'POST', 'PUT'])
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

@api_view(['GET'])
def forum_list_all(request):
    if request.method == "GET":
        forum = ForumPost.objects.all()
        serializer = ForumSerializer(forum, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'POST', 'PUT'])
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

   
@api_view(['POST'])
def register_user(request):
    if request.method == "POST":
        data = request.data
        userName = data.get('username')
        userEmail = data.get('email')
        password = data.get('password')
        
        try:
            user = User.objects.get(username=userName)
            emailUser = User.objects.get(email=userEmail)
            return Response({"message": "User with this username/email already exists"}, status=status.HTTP_409_CONFLICT)
        except ObjectDoesNotExist:
            user = User.objects.create_user(userName, userEmail, password)
            userAuth = authenticate(request, username=userName, password=password)
            login(request, user)
            token = Token.objects.create(user=user)
            response = Response({"message": "User created successfully", "token": token.key}, status=status.HTTP_201_CREATED)
            response.set_cookie('token', token.key, httponly=True, samesite='None', secure=False)
            return response
        
#data that should be in browser's local storage
@api_view(['GET'])
def user_data(request, pk):
    if request.method == "GET":
        user = User.objects.get(pk=pk)
        serializer = ProfileSerializer(user)
        return JsonResponse(serializer.data, safe=False)
    
    
def update_profile(request):
    if request.method == 'POST':
        try:
            profile = Profile.objects.get(user=request.user)
            form = ProfileForm(request.POST, request.FILES, instance=profile)
        except Profile.DoesNotExist:
            form = ProfileForm(request.POST, request.FILES)

        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = request.user
            profile.save()
            return redirect('profile')
    else:
        try:
            profile = Profile.objects.get(user=request.user)
            form = ProfileForm(instance=profile)
        except Profile.DoesNotExist:
            form = ProfileForm()

    return render(request, {'form': form})