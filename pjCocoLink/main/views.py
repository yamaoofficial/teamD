from django.shortcuts import render

def index(request):
    context = {
        'popup_title': 'お知らせ',
        'popup_message': 'ようこそトップページへ！',
    }
    return render(request, 'main/index.html', context)


def about(request):
    context = {
        'popup_title': '開発チームについて',
        'popup_message': 'CocoLinkを開発しているチームDの紹介です。',
    }
    return render(request, 'main/about.html', context)
