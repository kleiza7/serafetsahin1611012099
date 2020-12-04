var express = require('express');
var router = express.Router();

const anaSayfa = function(req, res, next) {
  res.render('mekanlar-liste', { title: 'Ana Sayfa', namee: 'Şerafet Şahinn' });
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekan-detay', { title: 'mekanBilgisi', namee: 'Şerafet Şahinn' });
}

const yorumEkle = function(req, res, next) {
  res.render('yorum-ekle', { title: 'yorumEkle', namee: 'Şerafet Şahin'  });
}


module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
};
