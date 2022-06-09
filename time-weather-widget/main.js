$(document).ready(function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    function setTime() {
        $('.time').text(dayjs().format('hh:mm'))
        setInterval(() => {
            $('.time').text(dayjs().format('hh:mm'))
        }, 1000)
    }

    async function fetchWeatherData(key, location) {
        if (!key) return { response: undefined, error: 'No key defined, set with <code>?key=\<KEY\></code><br>Example: <code>\<URL\>?loc=New York&key=KeyHere<code/>' }
        if (!location) return { response: undefined, error: 'No location specified, set it with <code>?loc=\<LOCATION\></code><br>Example: <code>\<URL\>?loc=New York&key=KeyHere<code/>' }
        try {
            const weather_data = await fetch(`https://api.weatherapi.com/v1/current.json?q=${location}&key=${key}`)
            const response = await weather_data.json()
            return { response, error: undefined }
        } catch (error) {
            return { response: undefined, error }
        }
    }

    function changeBackground(state) {
        switch (state) {
            case 'dawn':
                $('html').css('background-image', 'url(\'assets/dawn.jpg\')')
                $('.time').css('color', '#2a2a2a')
                $('.weather').css('color', '#2a2a2a')
                break
            case 'day':
                $('html').css('background-image', 'url(\'assets/day.jpg\')')
                $('.time').css('color', '#2a2a2a')
                $('.weather').css('color', '#2a2a2a')
                break
            case 'afternoon':
                $('html').css('background-image', 'url(\'assets/afternoon.jpg\')')
                break
            case 'night':
                $('html').css('background-image', 'url(\'assets/nighttime.jpg\')')
                break
        }
    }
    
    function changeTimeBackground() {
        var currentHour = dayjs().format('H')

        if (currentHour >= 0 && currentHour <= 6) {
            changeBackground('dawn')
        } else if (currentHour >= 7 && currentHour <= 12) {
            changeBackground('day')
        } else if (currentHour >= 13 && currentHour <= 18) {
            changeBackground('afternoon')
        } else if (currentHour >= 19 && currentHour <= 24) {
            changeBackground('night')
        }
    }

    
    function setWeather({ response, error }) {
        if (error) {
            $('.location').remove()
            $('.icon').remove()
            $('.temp').remove()
            $('.condition').remove()
            $('.weather').append(`<p class="error">${error}</p>`)
        }

        $('.location').text(response.location.name)
        $('.icon').attr('src', 'https:' + response.current.condition.icon)
        $('.icon').attr('alt', response.current.condition.text)
        if (urlParams.get('scl') === 'f') {
            $('.temp').text(response.current.temp_f + '°F')
        } else if (urlParams.get('scl') === 'c') {
            $('.temp').text(response.current.temp_c + '°C') 
        } else {
            $('.temp').text(response.current.temp_c + '°C')
        }
        $('.condition').text(response.current.condition.text)
        setInterval(() => {
            $('.location').text(response.location.name)
            $('.icon').attr('src', 'https:' + response.current.condition.icon)
            $('.icon').attr('alt', response.current.condition.text)
            $('.temp').text(response.current.temp_c + '°C')
            $('.condition').text(response.current.condition.text)
        }, 30000)
    }

    setTime()
    changeTimeBackground()
    fetchWeatherData(urlParams.get('key'), urlParams.get('loc')).then(res => {
        setWeather(res)
    })

    setInterval(() => {
        changeTimeBackground()
    }, 30000)
})