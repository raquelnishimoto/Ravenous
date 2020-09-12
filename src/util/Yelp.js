const apiKey = "PH1-Io68YaPVxH79ELp-6lAHJcX0uOmIuYi1mEMjzVPC5dDRIhbU8vT8DtURlKpUVCUf1auwY6ICgLUGOjVjtOEPcZm8bsAQobFLZVKJcRRk9rzB_uMevpPW_eNJX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
