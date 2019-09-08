from django.contrib import admin
from seeder.models import Tag, Kind, Place, OpeningTime

admin.site.register(Tag)
admin.site.register(Kind)
admin.site.register(Place)
admin.site.register(OpeningTime)