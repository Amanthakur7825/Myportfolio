from django.shortcuts import render, redirect
from django.contrib import messages

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        subject = request.POST.get('subject', '').strip()
        message = request.POST.get('message', '').strip()

        if name and email and message:
            messages.success(request, f"Thank you, {name}! Your message has been sent successfully. I will get back to you shortly.")
            return redirect('contact')
        else:
            messages.error(request, "Please fill in all required fields (Name, Email, and Message).")

    return render(request, 'contact.html')