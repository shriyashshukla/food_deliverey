import React, { useState } from 'react';
import menuList from '../utils/menudata';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [menuData, setMenuData] = useState(menuList);
  
  const handleCardClick = (menu) => {
    if (selectedId === menu.id) {
      // If the card is already selected, deselect it
      setSelectedId(null);
    } else {
      setSelectedId(menu.id);
    }
  };

  return (
    <>
      <>
  <AnimatePresence>
    {selectedId !== null && (
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        {menuData.map((menu) => {
          if (menu.id === selectedId) {
            return (
              <div className="card-overlay" key={menu.id}>
                <div className="close-button" onClick={() => setSelectedId(null)}>
                  &#10006; {/* "X" symbol */}
                </div>
                <img className="card-img" src={menu.img} alt="" />
                <div className="overlay-text">
                  <h4>{menu.title}</h4>
                  <h3>{menu.category}</h3>
                  <h3>{menu.price}</h3>
                  <p>{menu.description}</p>
                </div>
                <div className="button-container">
                  <button className="buy-button">Buy</button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </motion.div>
    )}
  </AnimatePresence>
</>

<div className="row">
        {menuData.map((menu) => (
          <div key={menu.id} className="col-md-3 mb-4">
            <motion.div
              layoutId={menu.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              onClick={() => setSelectedId(menu.id)}
              className="relative" // Add a relative class to the container
            >
              <div className="card">
                <div className="card-overlay">
                  {/* Apply the transformation on hover */}
                  <img
                    className="card-img transform scale-100 hover:scale-105 transition-transform"
                    src={menu.img}
                    alt=""
                  />
                  <div className="overlay-text">
                    <h4>{menu.title}</h4>
                    <h3>{menu.category}</h3>
                    <h3>₹{menu.price}</h3>
                    <p>{menu.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
