from django.db import models
from django.contrib.auth.models import User 
from django.utils.timezone import now
# from home.models import Userdetail

# Create your models here.
class Post(models.Model):
    serial_no = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200, default='')
    content = models.TextField()
    slug = models.CharField(max_length=130, default="")
    time_stamp = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=50, default="Hanzla Anjum")
    publish = models.BooleanField(default=False, null=True)
    views = models.IntegerField(default=0)
    thumbnail_link = models.CharField(null=True, max_length=500, default="")
    def __str__(self):
        return self.title

class Postcomment(models.Model):
    serial_no = models.AutoField(primary_key=True)
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True)
    time_stamp = models.DateTimeField(default=now)

    def __str__(self):
        return self.comment[0:15] +"....."+" by " + self.user.username
