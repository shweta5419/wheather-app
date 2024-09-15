// hello welcome to weather app 



const api_key = '0315f4349b9a13d6e559c698b64d47d5'
const api_url = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const icon_url = 'https://openweathermap.org/img/wn/'



async function chek_kar() {

    var place = document.querySelector('#searchBox').value;
    const res = await fetch(api_url + `&q=${place}&appid=${api_key}`);
    var data = await res.json();

    if (data.cod != 200) {
        alert('Please check place name')

    } else {
        document.querySelector('#humi').innerHTML = data.main.humidity
        document.querySelector('#wind').innerHTML = data.wind.speed
        document.querySelector('#temp').innerHTML = data.main.temp
        document.querySelector('#feels_like').innerHTML = data.main.feels_like
        document.querySelector('#sky').innerHTML = data.weather[0].main
        // document.querySelector('.Weather_type').innerHTML = data.weather[0].description
        document.querySelector('#min_temp').innerHTML = data.main.temp_min
        document.querySelector('#max_temp').innerHTML = data.main.temp_max
        document.querySelector('#sun_rise').innerHTML = sun(data.sys.sunrise)
        document.querySelector('#sun_set').innerHTML = sun(data.sys.sunset)
        // document.querySelector('.status_img').src = icon_url + data.weather[0].icon + '@2x.png'

        console.log(data);
    }
}

function sun(sec) {
    const utcDate = new Date(5);
    utcDate.setUTCSeconds(sec)
    console.log(utcDate)
    return utcDate.getHours() + ':' + utcDate.getMinutes()
    // return utcDate.toUTCString()

}



// function sun(sec) {
//     sec = 3685;

//     dateObj = new Date(sec * 1000);
//     hours = dateObj.getUTCHours();
//     minutes = dateObj.getUTCMinutes();
//     seconds = dateObj.getSeconds();

//     timeString = hours.toString().padStart(2, '0')
//         + ':' + minutes.toString().padStart(2, '0')
//         + ':' + seconds.toString().padStart(2, '0');

//     return timeString
// }