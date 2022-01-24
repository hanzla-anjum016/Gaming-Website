from django.contrib import admin
from blog.models import *
# Register your models here.

admin.site.register(Postcomment)
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    class Media:
        js= ('tinyinject.js',)