import React from 'react';

const FoodOrderPage = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-semibold">Food Order</h1>
      </header>
      <main className="p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          <ul className="mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-2">
            <span>Total (USD)</span>
            <span className="font-semibold text-blue-500">${calculateTotal()}</span>
          </div>
          <form className="flex">
            <input
              type="text"
              className="w-1/2 p-2 border rounded-l focus:outline-none"
              placeholder="Promo code"
            />
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
            >
              Redeem
            </button>
          </form>
        </div>

        {/* Billing Information Section */}
        <div className="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          {/* Billing form here */}
        </div>

        {/* Payment Section */}
        <div className="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Payment</h2>
          {/* Payment form here */}
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-gray-500">
        <p className="mb-1">© 2023 Your Food Shop</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default FoodOrderPage;
