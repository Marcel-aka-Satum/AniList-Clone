from django.contrib import admin

from .models import ForumPost, StatusPost, Anime, Profile

# Register your models here.

admin.site.register(ForumPost)
admin.site.register(StatusPost)
admin.site.register(Anime)
admin.site.register(Profile)
