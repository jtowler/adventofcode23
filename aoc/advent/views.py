from django.core.exceptions import ObjectDoesNotExist
from django.views import generic
from django.shortcuts import render

from .models import Day




def day(request, day_id):
    try:
        title = Day.objects.get(pk=day_id).title
    except ObjectDoesNotExist:
        title = None
    return render(request, "advent/day.html", {"day_id": day_id, "title": title})


class IndexView(generic.ListView):
    template_name = "advent/index.html"
    context_object_name = "all_days"

    def get_queryset(self):
        """Return days ordered by ID."""
        return Day.objects.order_by("day_id")
