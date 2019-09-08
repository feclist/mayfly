from graphene import List, NonNull
from seeder.models import Tag, Kind, Place, OpeningTime
from seeder.types import TagType, KindType, PlaceType, OpeningTimeType
from seeder.mutations import PlaceCreate


class Query(object):
    tags = List(
        NonNull(TagType),
        resolver=lambda self, info, **kwargs: Tag.objects.all(),
        required=True,
    )

    places = List(
        NonNull(PlaceType),
        resolver=lambda self, info, **kwargs: Place.objects.all(),
        required=True,
    )
    kinds = List(
        NonNull(KindType),
        resolver=lambda self, info, **kwargs: Kind.objects.all(),
        required=True,
    )
    opening_times = List(
        NonNull(OpeningTimeType),
        resolver=lambda self, info, **kwargs: OpeningTime.objects.all(),
        required=True,
    )


class Mutation(object):
    place_create = PlaceCreate.Field()
