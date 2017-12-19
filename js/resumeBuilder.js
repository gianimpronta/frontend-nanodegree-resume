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
        "email": "gian.impronta@gmail.com",
        "github": "gianimpronta",
        "location": "Rio de janeiro"
    },
    "picture": "images/fry.jpg",
    "message": "Welcome",
    "skill": "R, Python, JavaScript, Oracle, Linux, Html, CSS",
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
            "dates": "10/04/2010-02/12/2012",
            "degree": "graduate",
            "location": "Rio de Janeiro",
            "majors": [
                "military",
                "Firefighter",
                "physics",
            ]
        },
        {
            "name": "INFNET",
            "dates": "01/07/2016-31/06/2020",
            "degree": "graduate",
            "location": "Rio de Janeiro",
            "majors": [
                "Bussiness Inteligence",
                "Data Science",
                "Databases",
                "Data Warehouse"
            ]
        }
    ],
    onlineCourses : [
        {
            "title": "Getting and Cleaning Data",
            "school": "John Hopkins University",
            "dates": "21/09/2016",
            "url": "https://www.coursera.org/account/accomplishments/certificate/YQBWYA7LV8CK"
        },
        {
            "title": "R Programming",
            "school": "John Hopkins University",
            "dates": "24/06/2016",
            "url": "https://www.coursera.org/account/accomplishments/certificate/HFJ8SWB8SV9E"
        },
        {
            "title": "The Data Scientist’s Toolbox",
            "school": "John Hopkins University",
            "dates": "24/06/2016",
            "url": "https://www.coursera.org/account/accomplishments/certificate/6HDW2RUCSCN2"
        },
        {
            "title": "Intro into Programming",
            "school": "Udacity",
            "dates": "21/09/2017",
            "url": "https://www.udacity.com"
        }
    ]

var projects = [
    {
        "tilte": ,
        "dates": ,
        "description": ,
        "images":
    }
]


};



$("#main").append(work.position);
$("#main").append(education.name);
