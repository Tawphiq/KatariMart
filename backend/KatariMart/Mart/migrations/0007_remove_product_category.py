# Generated by Django 4.2.2 on 2023-10-13 23:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Mart', '0006_product_quantity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
    ]
