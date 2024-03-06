from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from .serializers import UserSerializer



# Create your views here.
def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return JsonResponse(serializer.data, safe=False)