from django.db import models


class SityInfo(models.Model):
    sityName = models.CharField(max_length=255)
    sityCoord = models.CharField(max_length=255)

class PlaceMarks(models.Model):
    sityName = models.CharField(max_length=255)
    coordinates = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    img = models.CharField(max_length=255)
    text = models.CharField(max_length=255)

class Pictures(models.Model):
    sityName = models.CharField(max_length=255)
    Museums = models.CharField(max_length=255)
    Restaurants = models.CharField(max_length=255)
    Activities = models.CharField(max_length=255)
    Parks = models.CharField(max_length=255)
    Stores = models.CharField(max_length=255)
    Beautiful = models.CharField(max_length=255)

class PopPlaces(models.Model):
    sityName = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    img = models.CharField(max_length=255)
    favourite = models.BooleanField()
    rating = models.CharField(max_length=255)