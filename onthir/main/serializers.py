from rest_framework import serializers
from .models import *
from drf_extra_fields.fields import Base64ImageField

# serializers to serialize data for different models
class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = ["id", "name"]

class PostSerializer(serializers.ModelSerializer):
    image = Base64ImageField(
        max_length=None,
        use_url=True,
        required=False
    )
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    class Meta:
        model = Post
        fields = ['id', 'category', 'title', 'body', 'image']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Provide a more detailed response for category
        representation['category'] = {
            "id": instance.category.id,
            "name": instance.category.name
        }
        return representation

