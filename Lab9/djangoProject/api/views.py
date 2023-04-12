from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status, generics, mixins
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Vacancy, Company
from api.serializer import CompanySerializer, VacancySerializer


def index(request):
    return HttpResponse("Welcome to the shop")


class CompanyList(generics.GenericAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CompanyByID(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get(self, request, pk, *args, **kwargs):
        return self.retrieve(request, pk, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class VacancyList(generics.ListAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin,):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class VacancyByID(generics.RetrieveAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, pk, *args, **kwargs):
        return self.retrieve(request, pk, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class VacancyListByCompanyID(generics.CreateAPIView, mixins.ListModelMixin):
    def get_queryset(self):
        company_id = self.kwargs['company_id']
        return Vacancy.objects.filter(company_id=company_id)
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class VacancyTopTen(generics.CreateAPIView):
    def get_queryset(self):
        return Vacancy.objects.all().order_by('-salary')[:10]
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

#
# class ProductByCategory(APIView):
#     def get(self, request, category_id):
#         category = Category.objects.get(id=category_id)
#         products = category.products.all()
#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data)
# Create your views here.
