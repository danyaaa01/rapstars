var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Gunna */
router.get('/gunna', function(req, res, next) {
  res.render('rappers', {
    title: "Gunna",
    picture: "images/gunna.png",
    desc: "Gunna — американский рэпер. Наиболее известен благодаря его совместным композициям с Янг Тагом и Lil Baby, он подписан на лейбл Тага — YSL Records, а также 300 Entertainment и Atlantic Records. Его дебютный студийный альбом Drip or Drown 2 вышел 22 февраля 2019."
  })
});

/* Страница Drake */
router.get('/drake', function(req, res, next) {
  res.render('rappers', {
    title: "Drake",
    picture: "images/drake.jpg",
    desc: "О́бри Дрейк Грэм — канадский рэпер, певец, автор песен, музыкальный продюсер, актёр и предприниматель. Получил первое признание в качестве актёра в телевизионном подростковом сериале «Деграсси: Следующее поколение»."
  });
});

/* Страница Young Thug */
router.get('/young_thug', function(req, res, next) {
  res.render('rappers', {
    title: "Young Thug",
    picture: "images/young_thug.jpg",
    desc: "Дже́ффери Лама́р Уи́льямс, выступающий под сценическим именем Янг Таг — американский рэпер, певец и автор песен. Известный своим эксцентричным стилем вокала и отношением к моде, первое внимание к себе он привлёк совместными работами с такими рэперами, как Рич Хоуми Куан, Бердмен и Гуччи Мейн."
  });
});

module.exports = router;
