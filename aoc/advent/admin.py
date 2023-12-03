from django.contrib import admin

from .models import Day, Data

class DataInline(admin.StackedInline):
    model = Data
    extra = 2

class DayAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["day_id", "title"]}),
    ]
    inlines = [DataInline]

admin.site.register(Day, DayAdmin)
