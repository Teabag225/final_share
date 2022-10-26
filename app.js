const express = require('express');
const app = express();
const PORT = 9898;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (request, response) {
    response.render('index')
});


// dicegame.ejs
app.get('/dicegame', function (request, response) {
    response.render('dicegame')
});

// detail_page.ejs 을밀대냉면
app.get('/detail_page', function (request, response) {
    response.render('detail_page')
});
app.get('/detail_page2', function (request, response) {
    response.render('detail_page2')
});
app.get('/detail_page3', function (request, response) {
    response.render('detail_page3')
});
app.get('/detail_page4', function (request, response) {
    response.render('detail_page4')
});
app.get('/detail_page5', function (request, response) {
    response.render('detail_page5')
});
app.get('/detail_page6', function (request, response) {
    response.render('detail_page6')
});
app.get('/detail_page7', function (request, response) {
    response.render('detail_page7')
});
app.get('/detail_page8', function (request, response) {
    response.render('detail_page8')
});
app.get('/detail_page9', function (request, response) {
    response.render('detail_page9')
});
app.get('/detail_page10', function (request, response) {
    response.render('detail_page10')
});
app.get('/detail_page11', function (request, response) {
    response.render('detail_page11')
});
app.get('/detail_page12', function (request, response) {
    response.render('detail_page12')
});
app.get('/detail_page13', function (request, response) {
    response.render('detail_page13')
});
app.get('/detail_page14', function (request, response) {
    response.render('detail_page14')
});
app.get('/detail_page15', function (request, response) {
    response.render('detail_page15')
});
app.get('/detail_page16', function (request, response) {
    response.render('detail_page16')
});
app.get('/detail_page17', function (request, response) {
    response.render('detail_page17')
});
app.get('/detail_page18', function (request, response) {
    response.render('detail_page18')
});
app.get('/detail_page19', function (request, response) {
    response.render('detail_page19')
});
app.get('/detail_page20', function (request, response) {
    response.render('detail_page20')
});
app.get('/detail_page21', function (request, response) {
    response.render('detail_page21')
});
app.get('/detail_page22', function (request, response) {
    response.render('detail_page22')
});
app.get('/detail_page23', function (request, response) {
    response.render('detail_page23')
});


app.get('/scratch', function (request, response) {
    response.render('scratch')
});
app.get('/map', function (request, response) {
    response.render('map')
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}!`);
});