import React, { useState } from 'react'
import menuList from "../utils/menudata";

const Menu = ({  }) => {

  const [menuData, setMenutData] = useState(MenuList);

  const displayData = () => {
    return menuData.map(menu) => (
      <div className="col-md-3 mb-4">
        <div className="card">
          <img className="card-img-top" src={restaurant.image} alt="" />
          <div className="card-body">
            <h4>{restaurant.name}</h4>
            <h3>{restaurant.area}</h3>
            <h2>*{restaurant.rating}</h2>
          </div>
        </div>
      </div>
    ));
  };

    // return (
    //   <div className="section-center">
    //     {menu.map((item) => {
    //       const { id, title, img, desc, price } = item;
    //       return (
    //         <article key={id} className="menu-item">
    //           <img src={img} alt={title} className="photo" />
    //           <div className="item-info">
    //             <header>
    //               <h4>{title}</h4>
    //               <h4 className="price">₹{price}</h4>
    //             </header>
    //             <p className="item-text">{desc}</p>
    //           </div>
    //         </article>
    //       );
    //     })}
    //   </div>
    // );
  };

export default Menu
