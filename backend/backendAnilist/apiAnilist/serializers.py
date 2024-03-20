from rest_framework import serializers
from django.contrib.auth.models import User
from .models import StatusPost, ForumPost, Profile

class UserSerializer(serializers.ModelSerializer):
  """
  Serializer class for the User model.

  This serializer is used to serialize and deserialize User objects.
  It defines the fields to be included in the serialized representation of a User,
  and provides a create() method to handle object creation.

  Attributes:
    model (class): The User model class.
    fields (tuple): The fields to be included in the serialized representation.
    extra_kwargs (dict): Additional keyword arguments for specific fields.

  Methods:
    create(validated_data): Creates a new User object based on the validated data.

  """
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True, 'required': True}}



class BlogSerializer(serializers.ModelSerializer):
  """
  Serializer class for the StatusPost model.

  This serializer is used to serialize and deserialize StatusPost objects.
  It defines the fields to be included in the serialized representation of a StatusPost,
  and provides a create() method to handle object creation.

  Attributes:
    model (class): The StatusPost model class.
    fields (tuple): The fields to be included in the serialized representation.
    extra_kwargs (dict): Additional keyword arguments for specific fields.

  Methods:
    create(validated_data): Creates a new StatusPost object based on the validated data.

  """
  class Meta:
    model = StatusPost
    fields = ('id', 'title', 'content', 'author', 'date_posted')
    extra_kwargs = {'author': {'read_only': True}}


class ForumSerializer(serializers.ModelSerializer):
  """
  Serializer class for the ForumPost model.

  This serializer is used to serialize and deserialize ForumPost objects.
  It defines the fields to be included in the serialized representation of a ForumPost,
  and provides a create() method to handle object creation.

  Attributes:
    model (class): The ForumPost model class.
    fields (tuple): The fields to be included in the serialized representation.
    extra_kwargs (dict): Additional keyword arguments for specific fields.

  Methods:
    create(validated_data): Creates a new ForumPost object based on the validated data.

  """
  class Meta:
    model = ForumPost
    fields = ('id', 'title', 'content', 'author', 'date_posted')
    extra_kwargs = {'author': {'read_only': True}}

class ProfileSerializer(serializers.ModelSerializer):

    """
    Serializer class for the Profile model.

    This serializer is used to serialize and deserialize Profile objects.
    It defines the fields to be included in the serialized representation of a Profile,
    and provides a create() method to handle object creation.

    Attributes:
      model (class): The Profile model class.
      fields (tuple): The fields to be included in the serialized representation.
      extra_kwargs (dict): Additional keyword arguments for specific fields.

    Methods:
      create(validated_data): Creates a new Profile object based on the validated data.

    """
    class Meta:
        model = Profile
        fields = ('id', 'username', 'avatar', 'banner', 'is_authenticated')
        extra_kwargs = {'user': {'read_only': True}}
