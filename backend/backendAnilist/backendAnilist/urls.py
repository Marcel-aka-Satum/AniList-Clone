"""
URL configuration for backendAnilist project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from apiAnilist import views
from apiAnilist.views import MyTokenObtainPairView
from django.conf import settings
from django.conf.urls.static import static


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/users", views.user_list),
    path("api/users/<int:pk>", views.users_detail),
    path("api/blogs/<int:pk>", views.detail_blog),
    path("api/forum/<int:pk>", views.forum_list),
    path("api/forum", views.forum_list_all),
    path("api/register", views.register_user),
    path("api/token/", MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/profile_info/<int:pk>", views.user_data),
    path("api/update_profile/<int:pk>", views.update_profile),
    path("api/watched_anime/<int:pk>", views.watched_animes),
    path("api/favorite_anime/<int:pk>", views.favorite_animes),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
