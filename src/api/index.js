import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
      
    },
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': '7ed94262e6msh2d8bf058416563fp12a98cjsn8aec7a66ffb1'
    }
  };
  
  export const getPlacesData = async () => {
      try {
          const response = await axios.get(URL, options);

          return response;
      } catch (error) {
          console.log(error)

      }
  }