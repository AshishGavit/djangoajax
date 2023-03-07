from django.shortcuts import render
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