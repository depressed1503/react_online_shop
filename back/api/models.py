from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class Good(models.Model):
    name = models.CharField(max_length=255, default='Good Name')
    description = models.TextField(default='')
    price_roubles = models.FloatField()
    image_url = models.ImageField(upload_to='goods_images')
    
class CustomUser(AbstractUser):
    USERNAME_FIELD = 'email'
    username = None
    groups = models.ManyToManyField('auth.Group', related_name='custom_users', blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='custom_users', blank=True)
    email = models.EmailField(unique=True, blank=False)
    first_name = models.CharField(max_length=150, blank=False)
    middle_name = models.CharField(max_length=150, blank=True, null=True, default=None)
    last_name = models.CharField(max_length=150, blank=False)
    REQUIRED_FIELDS = ['password']

    def __str__(self):
        return self.email