from rest_framework import serializers
from .models import CustomUser, Good


class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = CustomUser
        fields = ['email', 'password']
    

    def create(self, validated_data):
        print(validated_data)
        user = CustomUser.objects.create(
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class GoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Good
        fields = '__all__'