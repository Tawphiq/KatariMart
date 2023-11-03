# Generated by Django 4.2.2 on 2023-09-24 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mart', '0002_remove_product_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone_number', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField()),
            ],
        ),
    ]
