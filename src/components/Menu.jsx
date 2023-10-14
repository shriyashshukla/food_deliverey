import React, { useState } from 'react';
import MenuList from "../utils/menudata"; 

const Menu = () => {
  const [menuData, setMenuData] = useState(MenuList);

  const displayData = () => {
    return menuData.map((Menu) => (
      <div className="col-md-3 mb-4" key={Menu.id}>
        <div className="card">
          <img className="card-img-top" src={Menu.img} alt={Menu.name} />
          <div className="card-body">
            <h4>{Menu.name}</h4>
            <h3>{Menu.area}</h3>
            <h3>{Menu.category}</h3>
            <h3>{Menu.price}</h3>
            <h2>{Menu.rating}</h2>
            <h2>{Menu.desc}</h2>
          </div>
        </div>
      </div>
    ));
  };

}



export default Menu;
