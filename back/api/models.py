from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class Good(models.Model):
    name = models.CharField(max_length=255, default='Good Name')
    description = models.TextField(default='')
    date_created = models.CharField(max_length=255, default='01.01.2024')
    price_roubles = models.FloatField()
    image_url = models.CharField(max_length=1000, default='https://img4.labirint.ru/rc/1c536a1679215455457025be87026aa3/363x561q80/books79/787592/cover.jpg?1659961518')
    
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