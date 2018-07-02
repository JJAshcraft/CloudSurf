const axios = require('axios')
const firebase = require('firebase')

var config = {
  apiKey: "AIzaSyBqoreAPCcwQYcpgpft7tKXjncnxu5zJGo",
  authDomain: "theta-decker-209002.firebaseapp.com",
  databaseURL: "https://theta-decker-209002.firebaseio.com",
  projectId: "theta-decker-209002",
  storageBucket: "theta-decker-209002.appspot.com",
  messagingSenderId: "125399240902"
};

firebase.initializeApp(config);



const API_KEY = 'AIzaSyCiLnAnf7lO4xjE_s2mVKRqPDHwK6mWeXw'
const SEARCH_TERM = 'Texas Skydive'
const PLACES_API_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
const PHOTOS_API_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/photo'
const PLACE_DETAILS = 'https://maps.googleapis.com/maps/api/place/details/json'

const db = firebase.database()
const dropzones = db.ref('/dropzones')

axios.get(PLACES_API_ENDPOINT, {
  params: {
    query: SEARCH_TERM,
    key: API_KEY
  }
})
  .then(({data: places}) => {
    places.results.forEach(place => {
      axios.get(PLACE_DETAILS, {
        params: {
          placeid: place.place_id,
          fields: 'formatted_phone_number,website,rating',
          key: API_KEY
        }
      })
        .then(({data: placeDetails}) => {
          dropzones.push({
            name: place.name,
            address: place.formatted_address,
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
            web: placeDetails.result.website,
            phone: placeDetails.result.formatted_phone_number,
            rating: placeDetails.result.rating,
            googlePlacesId: place.id,
            photoURL: createPhotoURL(place.photos[0].photo_reference) 
          })
        })
        .catch(e => console.log('uh oh:', e))
    })
  })
  .catch(e => console.log('uh oh:', e))

function createPhotoURL(photoRef) {
  return `${PHOTOS_API_ENDPOINT}?maxwidth=550&photoreference=${photoRef}&key=${API_KEY}` 
}

