from django.db import models
from django.contrib.gis.db import models as geo_models
from django.core.validators import MaxValueValidator, MinValueValidator


class Tag(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'<Tag name={self.name}>'

class Kind(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'<Kind name={self.name}>'

class OpeningTime(models.Model):
    from_time = models.IntegerField(help_text="Minutes from day start")
    to_time = models.IntegerField(help_text="Minutes from day start")
    weekday = models.IntegerField(validators=[MaxValueValidator(7), MinValueValidator(1)])

    def __str__(self):
        return f'<OpeningTime from_time={self.from_time} to_time={self.to_time} weekday={self.weekday}>'


class Place(models.Model):
    name = models.TextField()
    address = models.TextField()
    latlng = geo_models.PointField()
    description = models.TextField(blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)

    # Relations
    tags = models.ManyToManyField(Tag)
    kinds = models.ManyToManyField(Kind)
    opening_times = models.ManyToManyField(OpeningTime)

    def __str__(self):
        return f'<Place name={self.name} address={self.address}>'