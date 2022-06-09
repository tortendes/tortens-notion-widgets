# ⌚🌤️ Time-Weather Widget

This is a customizable, anime-styled time and weather widget for notion.
## Features
- Background changes as time progresses
- Time and Weather built in

## Use it for free
Use the following link to make this widget yours.
```
https://torten.github.io/tortens-notion-widgets/time-weather-widget?key=<API_KEY_HERE>&loc=<LOCATION_HERE>&scl=<f or c>
```
<<<<<<< HEAD
**Note**: To make the weather part of the widget you need to get a key in [weatherapi.com](https://weatherapi.com), get the key and set it to the `?key=` parameter.
=======
**Note**: This widget would display the temperature in  Celsius (°C). In order to display the temperature to Fahrenheit (°F), please refer to the instructions below.
 
**Note**: To make the weather part of the widget work, you need to get a key in [weatherapi.com](https://weatherapi.com), get the key and set it to the `?key=` parameter.
>>>>>>> ff70aa32c9b13d10068ddeb3117e14a34074d8b8

## On the topic of parameters
To set the parameters of the widget, add an ? and the parameter type, an equal sign, and the value. Like this:
`?key=key1038`

But, after that first parameter, any parameter after that should instead have an & in the end. Like this:
`?key=key1038&loc=New%20York`
### the %20 is just the url equivalent for space. since servers could only process certain characters, these are used as an replacement for them.

List of parameters
| Parameter | Key |
| ----------- | ----------- |
| API Key | `?key=<API_KEY>` |
| Location | `?loc=<YOUR_LOCATION>` |
| Scale *(optional)* | `?scale=<either_f_or_c_SHOULD_BE_LOWERCASE>` |

## Deploy it yourself
In order to customize your widget even further, you could deploy it on [Github](https://github.com), [Vercel](https://vercel.com), [Cloudflare Pages](https://pages.cloudflare.com), and more. Instructions on how to deploy these would be out soon, but for now, just search up `How to deploy an html website to github/vercel/cloudflare`
<<<<<<< HEAD
=======

### In the topic of Celsius as default.
This widget uses the Celsius unit as the default temperature scale, in order to change it to Fahrenheit, you need to self-host this widget thru [Github](https://github.com), [Vercel](https://vercel.com), [Cloudflare Pages](https://pages.cloudflare.com), or other self hosting options, and change `response.current.temp_c` on the setWeather function to `response.current.temp_f` and change the `°C` to `°F`.
>>>>>>> ff70aa32c9b13d10068ddeb3117e14a34074d8b8
