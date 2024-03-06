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

