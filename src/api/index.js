import axios from 'axios';


  
  export const getPlacesData = async (type, sw, ne) => {
      try {
          const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/restaurants/list-in-boundary`), {

              params: {
                bl_latitude: sw.lat ,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng ,
                tr_longitude: ne.lng,
                
              },
              headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '7ed94262e6msh2d8bf058416563fp12a98cjsn8aec7a66ffb1'
              }
            
          });

          return data;
      } catch (error) {
          console.log(error)

      }
  }