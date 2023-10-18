import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoFastFood } from 'react-icons/io5';
import { categories } from '../utils/data';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import menuList from '../utils/menudata';
import Slider from './Slider/Slider';



const Menu = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [menuData, setMenuData] = useState(menuList);
  const [filter, setFilter] = useState('chicken');
  const [{ foodItems }] = useStateValue();

  const handleCardClick = (menu) => {
    if (selectedId === menu.id) {
      setSelectedId(null);
    } else {
      setSelectedId(menu.id);
    }
  };

  const handleBuyButtonClick = (menu) => {
    // Handle adding the selected menu item to your list or cart
    // You can update your state or context here
    console.log(`Item added to the list: ${menu.title}`);
  };

  return (
    <div>
      <Slider />
      <section className="w-full my-6" id="menu">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
            Our Hot Dishes
          </p>

          <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
            {categories &&
              categories.map((category) => (
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  key={category.id}
                  className={`group ${
                    filter === category.urlParamName ? 'bg-cartNumBg' : 'bg-card'
                  } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                  onClick={() => setFilter(category.urlParamName)}
                >
                  <div
                    className={`w-10 h-10 rounded-full shadow-lg ${
                      filter === category.urlParamName
                        ? 'bg-white'
                        : 'bg-cartNumBg'
                    } group-hover:bg-white flex items-center justify-center`}
                  >
                    <IoFastFood
                      className={`${
                        filter === category.urlParamName
                          ? 'text-textColor'
                          : 'text-white'
                      } group-hover:text-textColor text-lg`}
                    />
                  </div>
                  <p
                    className={`text-sm ${
                      filter === category.urlParamName
                        ? 'text-white'
                        : 'text-textColor'
                    } group-hover:text-white`}
                  >
                    {category.name}
                  </p>
                </motion.div>
              ))}
          </div>

          <div className="w-full">
            <RowContainer
              flag={false}
              data={foodItems?.filter((n) => n.category === filter)}
            />
          </div>
        </div>
      </section>

      

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
                      &#10006;
                    </div>
                    <div className="image-container">
                      <img className="card-img" src={menu.img} alt="" />
                      <div className="overlay-text">
                        <h4>{menu.title}</h4>
                        <h3>{menu.category}</h3>
                        <h3>{menu.price}</h3>
                        <p>{menu.description}</p>
                      </div>
                    </div>
                    <div className="button-container">
                      <button
                        className="buy-button"
                        onClick={() => handleBuyButtonClick(menu)}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </motion.div>
        )}
      </AnimatePresence>

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
              onClick={() => handleCardClick(menu)}
              className="relative"
            >
              <div className="card">
                <div className="card-overlay">
                  <img
                    className="card-img transform scale-100 hover:scale-105 transition-transform"
                    src={menu.img}
                    alt=""
                  />
                  <div className="overlay-text">
                    <h4>{menu.title}</h4>
                    <h3>{menu.category}</h3>
                    <h3>{menu.price}</h3>
                    <p>{menu.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Menu;
