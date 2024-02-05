from django.urls import path, include
from .views import *

urlpatterns = [
    path('registration/', CustomUserCreateAPIView.as_view()),
    path('catalog/', GoodListAPIView.as_view()),
]