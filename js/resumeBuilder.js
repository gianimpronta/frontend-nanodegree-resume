var formattedName = HTMLheaderName.replace("%data%", "Gianpaolo Impronta");
var formattedRole = HTMLheaderRole.replace("%data%", "Cientista de Dados");
var formattedEmail = HTMLemail.replace("%data%", "gian.impronta@gmail.com");
$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
    "name": "Gianpaolo Martins Impronta",
    "role": "Cientista de dados",
    "contacts": {
        "mobile": "(21) 99252-3338",
        "emeila": "gian.impronta@gmail.com",
        "github": "gianimpronta"
    },
    "picture": "images/fry.jpg",
    "message": "Welcome",
    "skill": "R, Python, JS"
};

var work = {
    "jobs": [
        {
            "title": "Analista de Projetos",
            "employer": "CBMERJ",
            "dates": "From 10/04/2010 until now",
            "city": "Rio de janeiro"
        }
    ]
};

var education = {
    schools: [
        {
            "name": "ABMDPII",
            "dates": "10/04/2010 to 02/12/2012",
            "degree": "graduate",
            "location": "Rio de Janeiro",
            "majors":
        }
    ]

};

$("#main").append(work.position);
$("#main").append(education.name);
