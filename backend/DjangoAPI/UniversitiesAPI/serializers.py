from rest_framework import serializers
from UniversitiesAPI.models import Country, Region, City, University


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('CountryId',
                  'CountryName')


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ('RegionId',
                  'RegionName',
                  'CountryId')


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('CityId',
                  'CityName',
                  'RegionId')


class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ('UniversityId',
                  'UniversityName',
                  'CityId')
