const request = require ('request')
const forecast = (latitude, longitude, callback) =>{
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=44.1545&lon=-75.7088&appid=761143655cc7ce79012b58201ba93084'

request({url, json: true}, (error, {body})=>{
   if (error){
      callback ('Unable to connect weather service!', undefined)
   }else if (body.error) {
      callback ('Unable to find location', undefined)
   }else {
      callback (undefined, 'It is currently ' + body.current.temp + ' degrees out. There is a ' + body.current.humidity + ' % chance of rain ')
   }

   })

}

module.exports = forecast