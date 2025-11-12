import { useState } from "react";
import CheckoutInput from "../components/CheckoutInput";
import CheckoutLabel from "../components/CheckoutLabel";

export default function Checkout({ cartItems, totalPrice }) {
  const checkoutArr = cartItems.map(
    (item) => item.title + " " + "(" + "*" + item.quantity + ")"
  );
  const checkoutItemArr = checkoutArr.join(", ");

  const [openPayment, setOpenPayment] = useState(null);

  function handleClick(num) {
    setOpenPayment(num);
  }

  return (
    <>
      <div className="mt-15 w-[65%] mx-auto p-2 flex flex-col gap-2 bg-gray-100 rounded-xl shadow-lg max-[540px]:w-[85%]">
        <div className="flex justify-center text-2xl">Checkout</div>
        <div className="font-bold flex flex-col gap-4">
          <div className="mt-5 flex justify-between">
            <p className="flex gap-5">
              Items:<span>{checkoutItemArr}</span>
            </p>
          </div>
          <div>
            <p className="flex gap-5">
              Total:{" "}
              <span className="flex flex-col flex-wrap">${totalPrice}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 shadow-lg mt-15 w-[65%] rounded-xl mx-auto flex flex-col justify-center max-[540px]:w-[85%]">
        <h3 className="mx-6 mt-6 font-bold text-lg my-4">Details</h3>
        <form className="flex flex-col flex-wrap gap-5 p-5">
          <CheckoutInput type={"text"} placeholder={"Full Name"} />
          <CheckoutInput type={"text"} placeholder={"E-mail"} />
          <CheckoutInput type={"text"} placeholder={"Address"} />
          <CheckoutInput type={"text"} placeholder={"Pin Code"} />
          <div className="flex flex-col pl-2">
            <h3 className=" font-bold text-lg my-4">Payment Options</h3>
            <CheckoutLabel
              name={"payment"}
              onClick={() => handleClick(1)}
              value={"credit"}
              text={"Credit / Debit Card"}
            />
            {openPayment == 1 && (
              <div className="bg-white border border-stone-200 rounded-lg p-4 flex flex-col gap-3 w-[80%]">
                <CheckoutInput type={"text"} placeholder={"Cardholder Name"} />
                <CheckoutInput type={"text"} placeholder={"Card Number"} />
                <CheckoutInput type={"text"} placeholder={"MM/YY"} />
                <CheckoutInput type={"text"} placeholder={"CVV"} />
                <div className="flex justify-between gap-4"></div>
              </div>
            )}
            <div>
              <CheckoutLabel
                name={"payment"}
                onClick={() => handleClick(2)}
                value={"upi"}
                text={"UPI / Net Banking"}
              />
              {openPayment == 2 && (
                <div className="bg-white border border-stone-200 rounded-lg p-4 flex flex-col gap-3 w-[90%] mx-auto">
                  <CheckoutInput
                    type={"text"}
                    placeholder={"Enter UPI ID (e.g. username@bank)"}
                  />
                  <button
                    type="button"
                    className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
                  >
                    Verify UPI ID
                  </button>
                </div>
              )}
            </div>
            <div>
              <CheckoutLabel
                name={"payment"}
                onClick={() => handleClick(null)}
                value={"cod"}
                text={"Cash on Delivery"}
              />
            </div>
          </div>
          <button
            className="mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
            onClick={(e) => e.preventDefault()}
          >
            Place Order
          </button>
        </form>
      </div>
    </>
  );
}
