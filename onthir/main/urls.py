# urls.py
from django.urls import path
from .views import CategoryListAPIView, CategoryDetailAPIView, PostListAPIView, PostDetailAPIView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('categories/', CategoryListAPIView.as_view(), name='category_list'),  # For list and create
    path('categories/<int:id>/', CategoryDetailAPIView.as_view(), name='category_detail'),  # For retrieve, update, delete

    path('posts/', PostListAPIView.as_view(), name="post_list"),
    path('posts/<int:id>/', PostDetailAPIView.as_view(), name="post_details")
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)