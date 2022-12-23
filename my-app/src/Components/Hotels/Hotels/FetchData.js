import axios from "axios";
//  Fetch requiest for hotels data using axios 
const getData = async ({ sort, bedRoom, bathroom }) => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/results`);
  const data = res.data;

  let updatedData = [];

  if (sort == "HL") {
    // Sort The data High to Low
    updatedData = data.sort((a, b) => {
      return b.starting_price_in_usd - a.starting_price_in_usd;
    });
    return updatedData;
  } else if (sort == "LH") {
    // Sort The data Low to High
    updatedData = data.sort((a, b) => {
      return a.starting_price_in_usd - b.starting_price_in_usd;
    });
    return updatedData;

    //Filter Data Acording to bedroom and Bathroom Count
  } else if (bathroom != 0 && bedRoom == 0) {
    updatedData = data.filter((el) => {
      return el.number_of_bathrooms == bathroom;
    });
    console.log(updatedData);
    return updatedData;
  } else if (bathroom == 0 && bedRoom != 0) {
    updatedData = data.filter((el) => {
      return el.number_of_rooms == bedRoom;
    });
    console.log(updatedData);
    return updatedData;
  } else if (bathroom !== 0 && bedRoom !== 0) {
    updatedData = data.filter((el) => {
      return (
        el.number_of_rooms == bedRoom && el.number_of_bathrooms == bathroom
      );
    });
    console.log(updatedData);
    return updatedData;
  } else {
    return data;
  }
};

export default getData;
