import React, { useState, useEffect } from 'react'
import restaurantList from "../utils/dummydata";
import StarRating from './StarRating';
import { motion } from "framer-motion";



const Restaurant = () => {

  const [restaurantData, setrestaurantData] = useState(restaurantList);

  const area = ["Chowk", "Gomti Nagar", "Aminabad", "Hazratganj", "Kapoorthala"];

  const [selOptions, setSelOptions] = useState([]);

  const displayData = () => {
    return restaurantData.map((restaurant) => (
      <motion.div
  className="col-md-3 mb-4 transform hover:scale-105 hover:shadow-lg transition-transform duration-300 relative overflow-hidden"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }}
>
  <div className="card flex flex-col h-full">
    <div className="relative overflow-hidden">
      <img className="card-img-top object-cover h-48 transform scale-100 hover:scale-110 transition-transform duration-300 translate-y-[-10px] -z-10" src={restaurant.image} alt="" />
    </div>
    <div className="card-body flex flex-col items-center p-4">
      <h4 className="text-xl font-bold mb-2">{restaurant.name}</h4>
      <h3 className="text-lg mb-2">{restaurant.area}</h3>
      <div className="flex items-center space-x-2 mb-2">
        <StarRating rating={restaurant.rating} />
        <a href="#" className="btn bg-blue-500 text-white hover:bg-blue-600 text-sm px-4 py-2 rounded-lg">
          Visit
        </a>
      </div>
    </div>
  </div>
</motion.div>


    ));
  };



  const searchrestaurant = (e) => {
    const search = e.target.value;
    const result = restaurantList.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(search.toLowerCase());
    });
    setrestaurantData(result);
  };

  const filterarea = (e) => {
    if (e.target.value === "") return setrestaurantData(restaurantList);
    const selname = e.target.value;
    const result = restaurantList.filter((restaurant) => {
      return restaurant.area === selname;
    });
    setrestaurantData(result);
  };

  const selectOption = (area) => {
    if (selOptions.includes(area)) {
      setSelOptions(selOptions.filter((b) => b !== area));
    } else {
      setSelOptions([...selOptions, area]);
    }
  }

  useEffect(() => {
    if (selOptions.length === 0) return setrestaurantData(restaurantList);
    setrestaurantData(restaurantList.filter((restaurant) => {
      return selOptions.includes(restaurant.area);
    }))
  }, [selOptions]);


  return (
    <div>
      <header className="bg-relative bg-center bg-cover text-black py-0">
        <div
          className="container py-5 relative"
          style={{
            backgroundImage: `url('https://c8.alamy.com/comp/2C1A20G/banner-raw-uncooked-ingredients-for-cooking-pasta-cooking-background-food-banner-2C1A20G.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-4xl text-center mb-4">Restaurant List</h1>
          <input
            type="text"
            className="form-control w-50 mx-auto"
            onChange={searchrestaurant}
          />

          <div className="text-center mt-4">



            <div className=" mx-auto">
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Chowk')} onClick={() => { selectOption('Chowk') }} className="form-check-input" type="checkbox" id="chowkCheckbox" />
                <label className="form-check-label" htmlFor="chowkCheckbox">Chowk</label>
              </div>
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Gomti Nagar')} onClick={() => { selectOption('Gomti Nagar') }} className="form-check-input" type="checkbox" id="gomtiNagarCheckbox" />
                <label className="form-check-label" htmlFor="gomtiNagarCheckbox">Gomti Nagar</label>
              </div>
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Aminabad')} onClick={() => { selectOption('Aminabad') }} className="form-check-input" type="checkbox" id="aminabadCheckbox" />
                <label className="form-check-label" htmlFor="aminabadCheckbox">Aminabad</label>
              </div>
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Hazratganj')} onClick={() => { selectOption('Hazratganj') }} className="form-check-input" type="checkbox" id="hazratganjCheckbox" />
                <label className="form-check-label" htmlFor="hazratganjCheckbox">Hazratganj</label>
              </div>
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Kapoorthala')} onClick={() => { selectOption('Kapoorthala') }} className="form-check-input" type="checkbox" id="kapoorthalaCheckbox" />
                <label className="form-check-label" htmlFor="kapoorthalaCheckbox">Kapoorthala</label>
                <div className="bg-blur"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mt-4">
        <div className="row">
          {displayData()}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
