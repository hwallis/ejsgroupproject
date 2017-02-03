var ejs = require('ejs');
var fs = require('fs');
var express = require('express');
var sweet = express();


sweet.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

// sweet.get('/courses', function(request, response){
//     response.sendFile(__dirname + '/courses.html');
// });

sweet.get('/courses', function(request, response){
    fs.readFile('course.json', 'utf8', function(err, data){
        var courses = JSON.parse(data).courses;
        response.locals = {courses: courses};
        response.render = ('courses.ejs');
    });
});



sweet.listen(3000);

console.log('Server listening on http://localhost:8080');