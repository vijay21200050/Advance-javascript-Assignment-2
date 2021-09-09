var xmlhttp = new XMLHttpRequest();
var url = "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

let output = {
    'Actors': [],
    'Genres': []
}

function myFunction(data) {

    let actorArr = [];
    let genreArr = [];

    data.forEach(element => {
        element.genres.forEach(val => {
            if (!genreArr.includes(val))
                genreArr.push(val);
        });

    });

    data.forEach(element => {
        element.cast.forEach(val => {
            if (!actorArr.includes(val))
                actorArr.push(val);
        });

    });

    fillValueGenres(genreArr, data);
    fillValueActor(actorArr, data);

}

function fillValueGenres(arr, data) {

    arr.forEach(element => {
        let genre = {
            'type': '',
            'Movies': []
        }

        genre['type'] = element;

        data.forEach(val => {
            if (val.genres.includes(element))
                genre['Movies'].push(val.title);
        });
        output['Genres'].push(genre);
    });
}

function fillValueActor(arr, data) {

    arr.forEach(element => {
        let actor = {
            'name': '',
            'Movies': []
        }
        actor['name'] = element;

        data.forEach(val => {
            if (val.cast.includes(element))
                actor['Movies'].push(val.title);
        });
        output['Actors'].push(actor);
    });
}

console.log(output);