# Generated by Django 4.2.2 on 2023-10-11 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mart', '0005_order_products'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='quantity',
            field=models.PositiveIntegerField(default=1),
        ),
    ]