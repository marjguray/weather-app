const request = require('request')
//const url = 'http://api.weatherstack.com/current?access_key=7ef69bfca2b4c708351b54b104fcf1bf&query=37.8267,-112'

//request({ url: url, json: true}, (error, response) => {
   //if (error){
     //  console.log('Unable to connect to weather service!')
   //} else if (response.body.error) {
     //  console.log('Unable to find location')
   //}else{
//  console.log(response.body.daily.data[0].summary + ". It is currently " + response.body.current.temperature + " degress out. " + "There is a " + response.body.current.precip + "% chance of rain.")
 //  }
//})

//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiZXlyb24iLCJhIjoiY2t2YjdiaDJxMzkwNDMybXM5Y3N5dWx5dCJ9.8FZ_bpn5QjR62YDB5tS9Dw&limit=1'

//request({ url: geocodeURL, json: true}, (error, response) => {
    //if (error){
        //console.log('Unable to connect to location services!')
    //}else if (response.body.features.length == 0) {
        //console.log;ongamepadconnected('Unable to find location.Try another search.')
    //} else {
       // const latitude = response.body.features[0].center[0]
        //const longitude = response.body.features[0].center[1]
       // console.log(latitude, longitude)
   // }   
//})


const geocode = (address,callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiZXlyb24iLCJhIjoiY2t2YjdiaDJxMzkwNDMybXM5Y3N5dWx5dCJ9.8FZ_bpn5QjR62YDB5tS9Dw&limit=1'

  request({ url: url, json: true }, (error,response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    }else if (response.body.feature.lenght === 0) {
        callback('Unable to find location. Try another search.', undefined)
    }
  })
}

geocode('12what', (error,data) => {
  console.log('Error', error)
  console.log('Data', data)
})