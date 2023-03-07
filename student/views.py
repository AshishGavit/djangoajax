from django.shortcuts import render
from .forms import StudentForm

def home(request):
    form = StudentForm()
    context = {
        'form':form,
    }
    return render(request, 'home.html', context)