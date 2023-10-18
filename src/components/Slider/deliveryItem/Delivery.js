import React from "react";

import Filters from "../filters";


import ExploreSection from "../exploreCard/index";
import  restaurants  from "../../../utils/restaurants";

const deliveryFilters = [];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      
      
      <ExploreSection
        list={restaurantList}
        collectionName="Order food online in Pune"
      />
    </div>
  );
};

export default Delivery;
