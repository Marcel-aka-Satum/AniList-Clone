from rest_framework import serializers
from django.contrib.auth.models import User

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

  # def create(self, validated_data):
  #   """
  #   Create a new User object.

  #   This method creates a new User object based on the validated data.
  #   It uses the User.objects.create_user() method to create the user.

  #   Args:
  #     validated_data (dict): The validated data for creating the User object.

  #   Returns:
  #     User: The newly created User object.

  #   """
  #   user = User.objects.create_user(**validated_data)
  #   return user
