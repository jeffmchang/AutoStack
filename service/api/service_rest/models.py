from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("show_technician", kwargs={'id': self.id})

class Appointment(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    customer_name = models.CharField(max_length=100)
    date = models.DateTimeField(null=True)
    reason = models.CharField(max_length=200)
    vip = models.BooleanField(default=False, blank=True, null=True)

    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.vin


    def get_api_url(self):
        return reverse("show_appointment", kwargs={'id': self.id})











# class Status(models.Model):
#     id = models.PositiveSmallIntegerField(primary_key=True)
#     name = models.CharField(max_length= 10)

#     def __str__(self):
#         return self.name

#     class Meta:
#         ordering = ('id',)
#         verbose_name_plural = "statuses"

    # status = models.ForeignKey(
    #     Status,
    #     related_name='appointments',
    #     on_delete=models.PROTECT,
    # )

        # def submitted(self):
    #     status=Status.objects.get(name="SUBMITTED")
    #     self.status = status
    #     self.save()

    # def canceled(self):
    #     status=Status.objects.get(name="CANCELED")
    #     self.status = status
    #     self.save()

    # def finished(self):
    #     status=Status.objects.get(name="FINISHED")
    #     self.status = status
    #     self.save()
