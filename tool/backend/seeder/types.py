from graphene import List, NonNull, ObjectType, Scalar, Field
from django.contrib.gis.db import models
from graphene_django.converter import convert_django_field
from graphene_django.types import DjangoObjectType
from seeder.models import Tag, Kind, Place, OpeningTime


@convert_django_field.register(models.PointField)
def convert_field_to_geojson(field, registry=None):
    return Field(GeoJSON, description=field.help_text, required=not field.null)


class GeoJSON(Scalar):
    @classmethod
    def serialize(cls, value):
        import json

        return json.loads(value.geojson)


class TagType(DjangoObjectType):
    class Meta:
        model = Tag


class KindType(DjangoObjectType):
    class Meta:
        model = Kind


class PlaceType(DjangoObjectType):
    class Meta:
        model = Place


class OpeningTimeType(DjangoObjectType):
    class Meta:
        model = OpeningTime
