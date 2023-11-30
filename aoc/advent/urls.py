from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:day_id>/", views.day, name="day"),
]