
from django.urls import re_path
from UniversitiesAPI import views


from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    re_path(r'^universities/$',views.universityGalleryApi),
    re_path(r'^countries/$',views.countriesApi),
    re_path(r'^regions/$',views.regionsApi),
    re_path(r'^cities/$',views.citiesApi),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)