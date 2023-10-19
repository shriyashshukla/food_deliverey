import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'; 
import CartContainer from './CartContainer';

const FoodOrderPage = () => {
  const [promoCode, setPromoCode] = useState(''); // Initialize promoCode state
  const [total, setTotal] = useState(20);

  const applyPromoCode = () => {
    if (promoCode === 'WANNABEEGAMING') {
      setTotal(total - 50); // Apply a $5 discount for 'WANNABEEGAMING' promo code
    } else if (promoCode === 'ELICITGAMING') {
      setTotal(total - 100); // Apply a $10 discount for 'ELICITGAMING' promo code
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation logic for name, address, and email here
    // For simplicity, I'll provide a basic example
    const name = e.target.elements.name.value;
    const address = e.target.elements.address.value;
    const email = e.target.elements.email.value;

    if (!name || !address || !email) {
      alert('Please fill in all required fields (Name, Address, Email)');
    } else {
      // Perform your actual form submission or further actions here
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-semibold">Food Order</h1>
       
      </header>
      <main className="p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          {/* <ul className="mb-4">
            <li className="flex justify-between mb-2">
              <span>Product name</span>
              <span>₹12</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Second product</span>
              <span>₹8</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Third item</span>
              <span>₹5</span>
            </li>
          </ul> */}
          
          <div className="flex justify-between items-center mb-2">
            <span>Promo code: EXAMPLECODE</span>
            <span className="text-green-500">-₹5</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Total (INR)</span>
            <span className="font-semibold text-blue-500">₹90</span>
          </div>
          <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="promoCode" // Add a name attribute for the promo code input
          className="w-1/2 p-2 border rounded-l focus:outline-none"
          placeholder="Promo code"
          value={promoCode} // Bind the input value to the promoCode state
          onChange={(e) => setPromoCode(e.target.value)} // Update the promoCode state when the input changes
        />
             <button
          type="button" // Change the type to "button" to prevent form submission
          onClick={applyPromoCode} // Call the applyPromoCode function when the button is clicked
          className="w-1/2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
        >
              Redeem
            </button>
          </form>
        </div>

        <div className="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="First name"
                required
              />
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Last name"
                required
              />
            </div>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded focus:outline-none"
              placeholder="Username"
              required
            />
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded focus:outline-none"
              placeholder="Email (Optional)"
            />
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none"
              placeholder="Address"
              required
            />
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none"
              placeholder="Address 2 (Optional)"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select
                className="w-full p-2 border rounded focus:outline-none"
                required
              >
                <option value="">City...</option>
                <option>Lucknow</option>
              </select>
              <select
                className="w-full p-2 border rounded focus:outline-none"
                required
              >
                <option value="">Area...</option>
                <option>Chowk</option>
                <option>Gomti Nagar</option>
                <option>Chowk</option>
                <option>Chowk</option>

              </select>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Zip"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-blue-500 mr-2"
                  id="same-address"
                />
                <label htmlFor="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-blue-500 mr-2"
                  id="save-info"
                />
                <label htmlFor="save-info">Save this information for next time</label>
              </div>
            </div>
          </form>
        </div>

        <div className="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Payment</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <input
                type="radio"
                id="credit"
                name="paymentMethod"
                className="text-blue-500"
                defaultChecked
                required
              />
              <label htmlFor="credit">Credit card</label>
            </div>
            <div className="space-y-2">
              <input
                type="radio"
                id="debit"
                name="paymentMethod"
                className="text-blue-500"
                required
              />
              <label htmlFor="debit">Debit card</label>
            </div>
            <div className="space-y-2">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                className="text-blue-500"
                required
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none"
              placeholder="Name on card"
              required
            />
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none"
              placeholder="Credit card number"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="p-2 border rounded focus:outline-none"
                placeholder="Expiration"
                required
              />
              <input
                type="text"
                className="p-2 border rounded focus:outline-none"
                placeholder="CVV"
                required
              />
            </div>
          </form>
          <button
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Continue to checkout
          </button>
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

ReactDOM.render(<FoodOrderPage />, document.getElementById('root'));

export default FoodOrderPage;
