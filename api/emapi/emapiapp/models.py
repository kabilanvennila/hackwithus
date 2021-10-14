from django.db import models

# Create your models here.

class Api(models.Model):
    Currency=models.CharField(max_length=20)
    Address=models.CharField(max_length=200)
    gas_emitted=models.IntegerField()
    co2_emitted=models.IntegerField()

    def __str__(self):
        return self.id   