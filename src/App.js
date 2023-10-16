import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Restaurant from "./components/Restaurant";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import Aboutus from "./components/Aboutus";
import Special from "./components/Special";



const App = () => {
  

  const [ { foodItems },dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, 
  );

  return (
    <AnimatePresence wait>
      <div className="w-screen h-auto flex flex-col ">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/restaurant " element={<Restaurant/>}/>
            <Route element={< Restaurant/>} path="/restaurant" />
            <Route element={< Menu/>} path="/menu" />
            <Route element={< Aboutus/>} path="/aboutus" />
            <Route element={< Special/>} path="/special" />
            <Route element={<NotFound />} path="*" />

          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
