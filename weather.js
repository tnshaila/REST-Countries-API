var today = new Date();
    var mm = today.getMonth();
    var dd = today.getDate();
    var yy = today.getFullYear();
    var hours = addZero(today.getHours());
    var mins = addZero(today.getMinutes());


    var day = today.getDay() - 1;
    console.log("Day: " + day);
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var todayDate = `${dd}, ${month[mm]}, ${yy}`;
    var todaytime;
    var k = addZero(hours % 12);
    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    if (hours > 12) {
        var todaytime = `${k} : ${mins} AM`;
    } else {
        var todaytime = `${hours}: ${mins} PM`;
    }
    document.getElementById("addDate").innerHTML = todayDate;
    document.getElementById("addTime").innerHTML = todaytime;
    var f = day;
    for (i = 0; i < 5; i++) {
        if (f + 1 > 6) {
            f = -1;
        }
        f = f + 1;
        console.log("Day: in:" + f);
        console.log("Day: " + i + ":" + f);
        document.getElementById("weekn" + (i + 1)).innerHTML = daysName[f];
    }
    console.log("Time: " + todaytime);
    console.log(" Date" + todayDate);
    console.log(" Day: " + daysName[day]);
    document.getElementsByClassName("city")[0].innerHTML = "DHAKA";

var cityName ="" ;
cityName = document.getElementById("sCity").value;
cityName = cityName.toUpperCase()

if(!cityName){
    cityName="dhaka";
}
console.log(" City Name : "+cityName);

var api = "https://api.openweathermap.org/data/2.5/forecast?q=Dhaka&appid=67a10e6b2833917d3e00f4edcd08f30f";
apiKey = "83b5943a2f9f3ab384f95917b5ea4687";
fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Dhaka&exclude=hourly,minutely&units=metric&appid=" + this.apiKey
)
    .then((response) => {
        if (!response.ok) {
            alert("No data weather found.");
            throw new Error("No data weather found.");
        }
        return response.json();
    })
    .then((data) => {
        document.getElementById("d1feels_like").innerHTML = Number(data.list[0].main.feels_like).toFixed(1) + "&#176;C";
        console.log(" day1 feels like : "+data.list[0].main.feels_like);
        document.getElementById("d1humidity").innerHTML = data.list[0].main.humidity + "%";
        console.log(" day1 humidtiy : "+data.list[0].main.humidity);


        for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1)).innerHTML = Number(data.list[i].main.temp).toFixed(1) + "&#176;C";
            console.log("day" + (i + 1) + " temp : " + data.list[i].main.temp)

            document.getElementById("day" + (i + 1) + "weather").innerHTML = data.list[i].weather[0].main;
            console.log("day" + (i + 1) + " weather status : " + data.list[i].weather[0].main)

            document.getElementById("d" + (i + 1) + "wind-speed").innerHTML = data.list[i].wind.speed + " Kmph";
            console.log("day" + (i + 1) + " wind speed : " + data.list[i].wind.speed);

            document.getElementById("d" + (i + 1) + "pressure").innerHTML = data.list[i].main.pressure;
            console.log("day" + (i + 1) + " pressure: " + data.list[i].main.pressure);

            document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
                data.list[i].weather[0].icon + ".png";
        }
        console.log(data)
    });

document.getElementById("sCity").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        getDataOnClick();
    }
});



function getDataOnClick() {

    var cityName ="" ;
    cityName = document.getElementById("sCity").value;
    cityName = cityName.toUpperCase()

    if(!cityName){
        cityName="DHAKA";
    }

    var today = new Date();
    var mm = today.getMonth();
    var dd = today.getDate();
    var yy = today.getFullYear();
    var hours = addZero(today.getHours());
    var mins = addZero(today.getMinutes());


    var day = today.getDay() - 1;
    console.log("Day: " + day);
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var todayDate = `${dd}, ${month[mm]}, ${yy}`;
    var todaytime;
    var k = addZero(hours % 12);
    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    if (hours > 12) {
        var todaytime = `${k} : ${mins} PM`;
    } else {
        var todaytime = `${hours}: ${mins} AM`;
    }
    document.getElementById("addDate").innerHTML = todayDate;
    document.getElementById("addTime").innerHTML = todaytime;
    var f = day;
    for (i = 0; i < 5; i++) {
        if (f + 1 > 6) {
            f = -1;
        }
        f = f + 1;
        console.log("Day: in:" + f);
        console.log("Day: " + i + ":" + f);
        document.getElementById("weekn" + (i + 1)).innerHTML = daysName[f];
    }
    console.log("Time: " + todaytime);
    console.log(" Date" + todayDate);
    console.log(" Day: " + daysName[day]);
    document.getElementsByClassName("city")[0].innerHTML = cityName;
    getWeatherInfo();
    function getWeatherInfo() {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&exclude=hourly,minutely&units=metric&appid=" + this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No data weather found.");
                    throw new Error("No data weather found.");
                }
                return response.json();
            })
            .then((data) => {
                document.getElementById("d1feels_like").innerHTML = Number(data.list[0].main.feels_like).toFixed(1) + "&#176;C";
                console.log(" day1 feels like : "+data.list[0].main.feels_like);
                document.getElementById("d1humidity").innerHTML = data.list[0].main.humidity + "%";
                console.log(" day1 humidtiy : "+data.list[0].main.humidity);

                for (i = 0; i < 5; i++) {
                    document.getElementById("day" + (i + 1)).innerHTML = Number(data.list[i].main.temp).toFixed(1) + "&#176;C";
                    console.log("day" + (i + 1) + " temp : " + data.list[i].main.temp)

                    document.getElementById("day" + (i + 1) + "weather").innerHTML = data.list[i].weather[0].main;
                    console.log("day" + (i + 1) + " weather status : " + data.list[i].weather[0].main)

                    document.getElementById("d" + (i + 1) + "wind-speed").innerHTML = data.list[i].wind.speed + " Kmph";
                    console.log("day" + (i + 1) + " wind speed : " + data.list[i].wind.speed);

                    document.getElementById("d" + (i + 1) + "pressure").innerHTML = data.list[i].main.pressure;
                    console.log("day" + (i + 1) + " pressure: " + data.list[i].main.pressure);

                    document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
                        data.list[i].weather[0].icon + ".png";
                }
                console.log(data)
            });
    }
}
