from django.views import View
from django.http import JsonResponse
from .models import SityInfo, PlaceMarks, Pictures, PopPlaces

class SityDataView(View):
    def get(self, request):
        sity_name = request.GET.get('sityName')  # Получение параметра sityName из запроса

        # Получение данных из моделей
        sity_info = SityInfo.objects.filter(sityName=sity_name).values()
        placemarks = PlaceMarks.objects.filter(sityName=sity_name).values()
        pictures = Pictures.objects.filter(sityName=sity_name).values()
        pop_places = PopPlaces.objects.filter(sityName=sity_name).values()

        # Формирование массива данных
        data = {
            'sity_info': list(sity_info),
            'placemarks': list(placemarks),
            'pictures': list(pictures),
            'pop_places': list(pop_places)
        }
        print(list(SityInfo.objects.all()))
        return JsonResponse({'name': data})

