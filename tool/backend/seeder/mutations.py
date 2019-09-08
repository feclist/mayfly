from graphene import (
    Boolean,
    Field,
    ID,
    InputObjectType,
    Mutation,
    String,
    Float,
    Int,
    List,
    NonNull,
)
from django.contrib.gis.geos import Point
from rest_framework import serializers
from seeder.models import Place
from .types import PlaceType


class TagInputType(InputObjectType):
    name = String()


class PlaceInputType(InputObjectType):
    name = String(required=True)
    address = String(required=True)
    lat = Float(required=True)
    lng = Float(required=True)
    description = String(required=False)
    price = String(required=False)
    tags = List(NonNull(TagInputType), required=False)


class PlaceCreate(Mutation):
    class Arguments:
        input = PlaceInputType(required=True)

    place = Field(PlaceType)

    @classmethod
    def mutate(cls, root, info, input, **data):
        point = Point(input.pop("lat"), input.pop("lng"))
        # TODO: Add the tags to the place relation, same goes for kind etc.
        # TODO: Also need to add some form of validation, making sure we don't
        #       get duplicate entries. Maybe address and name together are unique.
        tags = input.pop("tags", [])
        place = Place(**input, latlng=point)
        place.save()
        return PlaceCreate(place=place)
