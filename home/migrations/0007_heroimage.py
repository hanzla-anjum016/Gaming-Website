# Generated by Django 3.2.11 on 2022-02-09 22:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_rename_video_tag_video_ref'),
    ]

    operations = [
        migrations.CreateModel(
            name='HeroImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hero_thumbnail_link', models.CharField(default='', max_length=500)),
                ('game_card_thumbnail_link', models.CharField(default='', max_length=500)),
                ('blog_card_thumbnail_link', models.CharField(default='', max_length=500)),
            ],
        ),
    ]