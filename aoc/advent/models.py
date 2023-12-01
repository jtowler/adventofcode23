from django.db import models


class Day(models.Model):
    day_id = models.IntegerField(unique=True)


class Data(models.Model):
    day = models.ForeignKey(Day, on_delete=models.CASCADE)
    input_data = models.TextField()
    main_input = models.BooleanField()
    expected_output_1 = models.CharField(max_length=255, null=True, blank=True)
    expected_output_2 = models.CharField(max_length=255, null=True, blank=True)
