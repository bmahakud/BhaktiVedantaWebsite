# Generated by Django 3.2.7 on 2023-12-28 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0016_auto_20231228_1338'),
    ]

    operations = [
        migrations.RenameField(
            model_name='achievements',
            old_name='description',
            new_name='designation',
        ),
        migrations.RemoveField(
            model_name='achievements',
            name='endDate',
        ),
        migrations.RemoveField(
            model_name='achievements',
            name='startDate',
        ),
        migrations.AddField(
            model_name='achievements',
            name='period',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]