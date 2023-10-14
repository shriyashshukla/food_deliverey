import React, { useState , useEffect} from 'react'
import restaurantList from "../utils/dummydata";
import StarRating from './StarRating';
import { motion } from "framer-motion";





const Restaurant = () => {

  
   
  const [restaurantData, setrestaurantData] = useState(restaurantList);

  const area =["Chowk","Gomti Nagar","Aminabad","Hazratganj","Kapoorthala"];

  const [selOptions, setSelOptions] = useState([]);

  const displayData = () => {
    return restaurantData.map((restaurant) => (
      <motion.div className="col-md-3 mb-4"
       >
        <div className="card">
          <img className="card-img-top" src={restaurant.image} alt="" />
          <div className="card-body">
            <h4>{restaurant.name}</h4>
            <h3>{restaurant.area}</h3>
             <StarRating rating={restaurant.rating} />
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
    if (e.target.value === "") return  setrestaurantData(restaurantList);
    const selname = e.target.value;
    const result = restaurantList.filter((restaurant) => {
      return restaurant.area === selname;
    });
    setrestaurantData(result);
  };

   const selectOption = (area) => {
    if(selOptions.includes(area)) {
         setSelOptions(selOptions.filter((b) => b !== area));
    }else{
       setSelOptions([...selOptions, area]);
    }
   }

  useEffect(() => {
    if(selOptions.length === 0) return setrestaurantData(restaurantList);
    setrestaurantData(restaurantList.filter((restaurant) => {
        return selOptions.includes(restaurant.area);
    }))
  }, [ selOptions ]);
  

  return (
    <div>
      <header className="bg-dark text-white py-5">
        <div className="container py-5">
          <h1 className="text-center">Restaurant List</h1>
          <hr />
          <input type="text" className="form-control" onChange={searchrestaurant} />

          <div className="row mt-4">
            <div className="col-md-4">
              <select className="form-control" onChange={filterarea}>
                <option value="">Select Restaurant</option>
                {area.map((b) => (
                  <option value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4 my-auto">
                <input checked={selOptions.includes('Chowk')} onClick={() => {selectOption('Chowk')}} className="form-check-input" type="checkbox" /> Chowk&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('Gomti Nagar')} onClick={() => {selectOption('Gomti Nagar')}} className="form-check-input" type="checkbox" />Gomti Nagar&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('Aminabad')} onClick={() => {selectOption('Aminabad')}} className="form-check-input" type="checkbox" />Aminabad&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('Hazratganj')} onClick={() => {selectOption('Hazratganj')}} className="form-check-input" type="checkbox" /> Hazratganj&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('Kapoorthala')} onClick={() => {selectOption('Kapoorthala')}} className="form-check-input" type="checkbox" /> Kapoorthala&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">{displayData()}</div>
      </div>
    </div>
  );
};

export default Restaurant;
