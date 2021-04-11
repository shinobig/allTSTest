import axios from 'axios';
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;


const GOOGLE_API_KEY = 'AIzaSyDM2Cf96DDF132kla4zNdpXye3lqT8tg_A';
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number, lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
}


function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;


  // Send this to Google API

  axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
    .then(response => {
      if (response.data.status !== 'OK') {
        throw new Error("Could not fetch location")
      }
      const coordinates = response.data.results[0].geometry.location;

      const map = new google.maps.Map(document.getElementById("map")!, {
        center: coordinates,
        zoom: 8,
      });

      new google.maps.Marker({
        position: coordinates,
        map: map,
      });
    })
    .catch(err => console.log(err));
}


form.addEventListener('submit', searchAddressHandler);