# Generated by Django 4.0.3 on 2023-03-07 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_automobilevo_alter_technician_employee_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.PositiveSmallIntegerField(unique=True),
        ),
    ]
