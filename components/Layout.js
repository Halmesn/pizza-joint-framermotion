import React, { useState } from 'react';
import Header from 'components/Header';
import Modal from 'components/Modal';

export const GlobalContext = React.createContext();

export default function Layout({ children, setShowModal, showModal }) {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const globalContext = { addBase, pizza, addTopping, setShowModal };

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <GlobalContext.Provider value={globalContext}>
        <main>{children}</main>
      </GlobalContext.Provider>
    </>
  );
}
