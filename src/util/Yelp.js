const clientId = '8nA58KujKHy1k57IuKqocw';
const apiKey = 'Yx-45h-XM5NjVifC05Pb91QFmEaLKsorIcjHMGEz1oGadCtm0QAgS5fkJn83MhB_oPlIuArRSecn205HqKP0TzUG-7fSO8w2bldkW2UZb9qHUlwE8MvCmkl2b-i7WnYx';

Yelp = {
  search(term, location, sortBy) {
    //const cors = 'https://cors-anywhere.herokuapp.com/';
    //const url = 'https://api.yelp.com/v3/businesses/search?term=TERM&location=LOCATION&sort_by=SORT_BY';
    //const = cors +
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        console.log(jsonResponse.businesses);
        /*
        return jsonResponse.businesses.map(business => ({
          id: ,
          imageSrc: ,
          name: ,
          address: ,
          city: ,
          state: ,
          zipCode: ,
          category: ,
          rating: ,
          reviewCount:
          */
        }));
      }

    });
  };
}

export default Yelp;
