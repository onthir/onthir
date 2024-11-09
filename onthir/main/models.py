from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self) -> str:
        return self.name
    

class Post(models.Model):
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    title =  models.CharField(max_length=250)
    body = models.TextField(max_length=10000)
    image = models.ImageField(upload_to='post_images/', null=True, blank=True)
    published_on = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=False)
    views = models.IntegerField()


    def __str__(self):
        return self.title
    

