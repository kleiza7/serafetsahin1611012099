var express = require('express');
var router = express.Router();

const name =  "Şerafet Şahin";

const anaSayfa = function(req, res, next) {
  res.render('mekanlar-liste', 
  { 'baslik' : 'Anasayfa',
    name : name,
    'sayfaBaslik' :{
      'siteAd' : 'Mekan32',
      'aciklama' : 'Isparta civarındaki mekanları keşfedin!'
    },
    'mekanlar':[
      {
        'ad':'Starbucks',
        'adres':'Centrum Garden',
        'puan':3,
        'imkanlar':['kahve','çay','pasta'],
        'mesafe':'10km'
      },
      {
        'ad':'Gloria Jeans',
        'adres':'Iyaş Avm',
        'puan':2,
        'imkanlar':['kahve','kek','çay'],
        'mesafe':'5km'
      },
      {
        'ad':'Cinema Pink',
        'adres':'Iyaş Avm',
        'puan':5,
        'imkanlar':['mısır','kola','su'],
        'mesafe':'5km'
      },
      {
        'ad':'Yemen Kahvesi',
        'adres':'Kafeler Caddesi',
        'puan':2,
        'imkanlar':['kahve','çay', 'kuruyemiş'],
        'mesafe':'6km'
      },
      {
        'ad':'Zilli Öküz',
        'adres':'Kafeler Caddesi',
        'puan':1,
        'imkanlar':['hamburger','patates','kola'],
        'mesafe':'6km'
      },
    ]
  });
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekan-detay', { 
      'baslik': 'Mekan Bilgisi', 
      name:name,
      'sayfaBaslik':'Starbucks',
      'mekanBilgisi' :{
      'ad':'Starbucks',
      'adres':'Centrum Garden',
      'puan':3,
      'imkanlar':['Kahve', 'Pasta', 'Kek'],
      'koordinatlar':{
        'enlem':37.781885,
        'boylam':30.566034
      },
      'saatler':[
        {
        'gunler':'Pazartesi-Cuma',
        'acilis':'7:00',
        'kapanis':'23:00',
        'kapali':false
        },
        {
          'gunler':'Cumartesi',
          'acilis':'9:00',
          'kapanis':'22:30',
          'kapali':false
          },
        {
        'gunler':'Pazar',
        'kapali':true
        },  
      ],
      'yorumlar':[
        {
          'yorumYapan':'ahmet',
          'puan':2,
          'tarih':'22 Eylül 2019',
          'yorumMetni':'Geliştirilebilir'
        },
        {
          'yorumYapan':'mehmet',
          'puan':4,
          'tarih':'14 Mayıs 2019',
          'yorumMetni':'Güzel mekan'
        }
      ]
    }
    });
}

const yorumEkle = function(req, res, next) {
  res.render('yorum-ekle', { title: 'yorumEkle', name:name});
}


module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
};
