from django.contrib import admin

from .models import ForumPost, StatusPost

# Register your models here.

admin.site.register(ForumPost)
admin.site.register(StatusPost)