from django.contrib.auth.models import User
from django.db import models


class ForumPost(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True) # If the user is deleted, the post is deleted as well
    # change blank=True to False if you want to require an author for each post, null =False to require an author for each post

class StatusPost(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True) # If the user is deleted, the post is deleted as well
    # change blank=True to False if you want to require an author for each post, null =False to require an author for each post
    likes = models.ManyToManyField(User, related_name='likes', blank=True) # blank=True allows for no likes
    dislikes = models.ManyToManyField(User, related_name='dislikes', blank=True) # blank=True allows for no dislikes