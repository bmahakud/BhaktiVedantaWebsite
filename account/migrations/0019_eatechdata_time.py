# Generated by Django 3.2.7 on 2024-05-26 10:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0018_eatechdata'),
    ]

    operations = [
        migrations.AddField(
            model_name='eatechdata',
            name='time',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
