# Generated by Django 3.2.7 on 2023-12-06 10:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eclass', '0002_class_createrid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='class',
            old_name='createrid',
            new_name='hostid',
        ),
    ]
