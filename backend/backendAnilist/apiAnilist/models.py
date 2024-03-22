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

def user_directory_path_avatar(instance, filename):
    # file will be uploaded to media/user_<id>/avatar/<filename>
    return '{0}/{1}/{2}'.format(instance.user.id, 'avatar', filename)

def user_directory_path_banner(instance, filename):
    # file will be uploaded to media/user_<id>/banners/<filename>
    return '{0}/{1}/{2}'.format(instance.user.id, 'banner', filename)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to=user_directory_path_avatar, null=True, blank=True)
    banner = models.ImageField(upload_to=user_directory_path_banner, null=True, blank=True)    

    @property
    def username(self):
        return self.user.username
    
    @property
    def is_authenticated(self):
        return self.user.is_authenticated
    
    @property
    def email(self):
        return self.user.email
    
    @property
    def id(self):
        return self.user.id