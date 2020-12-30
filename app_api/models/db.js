var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://mekan32:mekan32@cluster0.6u9l1.mongodb.net/mekan32?retryWrites=true&w=majority';

mongoose.connect(dbURI,{useNewUrlParser:true});

mongoose.connection.on('connected', function(){
    console.log('Mongoose' + dbURI + ' adresinde ki veri tabanına bağlandı\n');
});


mongoose.connection.on('error', function(err){
    console.log('Mongoose bağlantı hatası\n: ' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose bağlantısı kesildi\n');

});

kapat = function(msg, callback){
    mongoose.connection.close(function(){
        console.log('Mongoose kapatıldı\n' + msg);
        callback();
    });
};

process.once('SIGUSR2', function(){
    kapat('nodemon kapatıldı\n', function(){
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.once('SIGINT', function(){
    kapat('uygulama kapatıldı\n', function(){
        process.exit(0);
    });
});

process.once('SIGTERM', function(){
    kapat('heroku kapatıldı\n', function(){
        process.exit(0);
    });
});

require('./mekansema');