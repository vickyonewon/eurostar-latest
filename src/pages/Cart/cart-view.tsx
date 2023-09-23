import React from "react";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import'./styles.css';


const Cart = () => {
  return (
    <div>
      <Navbar />
      <div
        className="h-[35rem] bg-cover"
        style={{ backgroundImage: `url('/assets/images/deluxe4.jpg')` }}
      >
        <div className="pt-[7rem]">
          <h1 className="text-center text-[5rem] font-bold text-white">Cart</h1>
          <p className="text-center text-[1.8rem] font-semibold text-white">
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            . Cart
          </p>
        </div>
      </div>

      <div className="w-fit m-auto">
        <table className="border-spacing-[2rem]">
          <tbody className="">
          <tr className="bg-gray-300 text-[1.4rem] font-bold">
            <th className="">PRODUCT</th>
            <th className="">PRICE</th>
            <th className="">QUANTITY</th>
            <th className="">SUBTOTAL</th>
            <th className="">&nbsp;</th>
          </tr>
          {
            <tr>
            <td>
              <div className="flex flex-row p-[1rem]">
              <img src="/assets/images/deluxe1.jpg" alt="choosen room" className="w-[6rem] h-[6rem] m-auto" />
              <div className="flex flex-col p-[1rem]">
                <h1 className="text-[1.4rem] font-semibold">Couple Room</h1>
                <p>Check-in Date:30-09-2023</p>
                <p>Check-out Date:30-09-2023</p>
                <p>Adults:30-09-2023</p>
                <p>Children:30-09-2023</p>
                <p>Quantity:30-09-2023</p>
              </div>
              </div>
            </td>
            <td>$ 57</td>
            <td>17 Days(s)</td>
            <td>$ 969</td>
            <td>Cross</td>
          </tr>
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
