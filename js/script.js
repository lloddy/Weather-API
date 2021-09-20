$(function () {

    const BASE_URL = 'https://api.openweathermap.org';
    const API_KEY = 'd3b062bb4251958efea14f429195204f';
    let weatherData;

    // cache elements
    const $city = $('#city');
    const $temp = $('#temp');
    const $feel = $('#feel');
    const $weather = $('#weather');
    const $form = $('form');
    const $input = $('input[type="text"]');



    //event listeners
    $form.on('submit', handleGetWeather)

    function handleGetWeather(event) {

        event.preventDefault();

        const cityName = $input.val();
        $input.val("");

        $.ajax(`${BASE_URL}/data/2.5/weather?q=${cityName}&units=imperial&appid=${API_KEY}`).then(function (data) {
            weatherData = data;
            render();
            console.log(weatherData)
        }, function (error) {

        })
    }

    function render() {
        $city.text(weatherData.name);
        $temp.text(weatherData.main.temp);
        $feel.text(weatherData.main.feels_like);
        $weather.text(weatherData.weather[0].main);


    }

})

// 'https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=f510646077768af5295e4554f7740999'
// $.ajax(`${BASE_URL}?apikey=${API_KEY}&t=${movieTitle}`).then(function (data) {