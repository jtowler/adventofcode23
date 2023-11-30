from django.http import HttpResponse
from django.shortcuts import render


def day(request, day_id):
    return render(request, "advent/day.html", {"day_id": day_id})


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
