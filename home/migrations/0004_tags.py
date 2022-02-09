# Generated by Django 3.2.11 on 2022-02-03 07:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_video_thumbnail_link'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(blank=True, max_length=70)),
                ('video', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.video')),
            ],
        ),
    ]