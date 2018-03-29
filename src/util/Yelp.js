const apiKey = 'Yx-45h-XM5NjVifC05Pb91QFmEaLKsorIcjHMGEz1oGadCtm0QAgS5fkJn83MhB_oPlIuArRSecn205HqKP0TzUG-7fSO8w2bldkW2UZb9qHUlwE8MvCmkl2b-i7WnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        }));
      }
    });
  }
}

export default Yelp;
