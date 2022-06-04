from django.db import models

# Create your models here.
class Country(models.Model):
    CountryId = models.AutoField(primary_key=True)
    CountryName = models.CharField(max_length=150)

class Region(models.Model):
    RegionId = models.AutoField(primary_key=True)
    RegionName = models.CharField(max_length=150)
    CountryId = models.ForeignKey(Country,on_delete=models.CASCADE)


class City(models.Model):
    CityId = models.AutoField(primary_key=True)
    CityName = models.CharField(max_length=150)
    RegionId = models.ForeignKey(Region,on_delete=models.CASCADE)


class University(models.Model):
    UniversityId = models.AutoField(primary_key=True)
    UniversityName = models.CharField(max_length=150)
    CityId = models.ForeignKey(City,on_delete=models.CASCADE)