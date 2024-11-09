from rest_framework import serializers
from .models import *
from drf_extra_fields.fields import Base64ImageField

# serializers to serialize data for different models
class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    image = Base64ImageField(
        max_length=None,
        use_url=True,
        required=False
    )
    class Meta:
        model = Post
        fields = ['id', 'category', 'title', 'body', 'image']

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url
        return None




