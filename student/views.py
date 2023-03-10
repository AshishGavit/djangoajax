from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from .models import Student
from .forms import StudentForm


def home(request):
    form = StudentForm()
    students = Student.objects.all() 
    context = {
        'form':form,
        'students':students,
    }
    return render(request, 'home.html', context)

@csrf_protect
def save_data(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            # Save the data to the database
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            student = Student(name=name, email=email, phone=phone)
            student.save()

            # Retrieve all the data from the database
            queryset = Student.objects.values()
            students = list(queryset)
            return JsonResponse({'status': 'success', 'message': 'Data saved successfully!', 'students':students})
        else:
            return JsonResponse({'status':'failure', 'message':'Unable to save the data'})
    else:
        return JsonResponse({'status':'failure', 'message':'Unable to save the data'})