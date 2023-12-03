from django.http import HttpResponse
from django.shortcuts import render
from django.views import generic

from .models import Day


def day(request, day_id):
    return render(request, "advent/day.html", {"day_id": day_id})


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


class IndexView(generic.ListView):
    template_name = "advent/index.html"
    context_object_name = "all_days"

    def get_queryset(self):
        """Retur days ordered by ID."""
        return Day.objects.order_by("day_id")
