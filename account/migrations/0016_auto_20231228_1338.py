# Generated by Django 3.2.7 on 2023-12-28 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0015_auto_20231228_1333'),
    ]

    operations = [
        migrations.AlterField(
            model_name='edudegree',
            name='degreename',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='edudegree',
            name='institute',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='edudegree',
            name='marks',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]