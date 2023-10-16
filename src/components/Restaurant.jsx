import React, { useState , useEffect} from 'react'
import restaurantList from "../utils/dummydata";
import StarRating from './StarRating';
import { motion } from "framer-motion";
import Footer from "./Footer";



const Restaurant = () => {

  const [restaurantData, setrestaurantData] = useState(restaurantList);

  const area =["Chowk","Gomti Nagar","Aminabad","Hazratganj","Kapoorthala"];

  const [selOptions, setSelOptions] = useState([]);

  const displayData = () => {
    return restaurantData.map((restaurant) => (
      <motion.div className="col-md-3 mb-4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
      }}>
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
      <header className="bg-filter text-black py-0">
        <div className="container py-5 " style={{ backgroundImage: `url('https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&w=600')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className="text-center">Restaurant List</h1>
          
          <input type="text" className="form-control w-50 mx-auto" onChange={searchrestaurant} />
  
          <div className="text-center mt-4">
            
                 
                 
            <div className=" mx-auto">
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Chowk')} onClick={() => {selectOption('Chowk')}} className="form-check-input" type="checkbox" id="chowkCheckbox" />
                <label className="form-check-label" htmlFor="chowkCheckbox">Chowk</label>
              </div>
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Gomti Nagar')} onClick={() => {selectOption('Gomti Nagar')}} className="form-check-input" type="checkbox" id="gomtiNagarCheckbox" />
                <label className="form-check-label" htmlFor="gomtiNagarCheckbox">Gomti Nagar</label>
              </div>
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Aminabad')} onClick={() => {selectOption('Aminabad')}} className="form-check-input" type="checkbox" id="aminabadCheckbox" />
                <label className="form-check-label" htmlFor="aminabadCheckbox">Aminabad</label>
              </div>
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Hazratganj')} onClick={() => {selectOption('Hazratganj')}} className="form-check-input" type="checkbox" id="hazratganjCheckbox" />
                <label className="form-check-label" htmlFor="hazratganjCheckbox">Hazratganj</label>
              </div>
              <div className="form-check form-check-inline">
                <input checked={selOptions.includes('Kapoorthala')} onClick={() => {selectOption('Kapoorthala')}} className="form-check-input" type="checkbox" id="kapoorthalaCheckbox" />
                <label className="form-check-label" htmlFor="kapoorthalaCheckbox">Kapoorthala</label>
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
      <Footer/>
    </div>
  );
                }

export default Restaurant;
