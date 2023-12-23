# Generated by Django 4.2.6 on 2023-12-23 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pictures',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sityName', models.CharField(max_length=255)),
                ('Museums', models.CharField(max_length=255)),
                ('Restaurants', models.CharField(max_length=255)),
                ('Activities', models.CharField(max_length=255)),
                ('Parks', models.CharField(max_length=255)),
                ('Stores', models.CharField(max_length=255)),
                ('Beautiful', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='PlaceMarks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sityName', models.CharField(max_length=255)),
                ('coordinates', models.CharField(max_length=255)),
                ('title', models.CharField(max_length=255)),
                ('img', models.CharField(max_length=255)),
                ('text', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='PopPlaces',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sityName', models.CharField(max_length=255)),
                ('title', models.CharField(max_length=255)),
                ('img', models.CharField(max_length=255)),
                ('favourite', models.BooleanField()),
                ('rating', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='SityInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sityName', models.CharField(max_length=255)),
                ('sityCoord', models.CharField(max_length=255)),
            ],
        ),
    ]
