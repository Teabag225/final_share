const express = require('express');
const app = express();
const PORT = 9898;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(request, response){
    response.render('index')
});
    

// dicegame.ejs
app.get('/dicegame', function(request, response){
    response.render('dicegame')
});

// detail_page.ejs 을밀대냉면
app.get('/detail_page', function(request, response){
    response.render('detail_page')
});


app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}!`);
});