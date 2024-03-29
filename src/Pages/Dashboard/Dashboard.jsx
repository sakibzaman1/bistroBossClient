import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa6";
import { RiUserShared2Line } from "react-icons/ri";
import { MdOutlineManageSearch } from "react-icons/md";
import UseCart from "../../Hooks/UseCart";
import { AuthContext } from "../../Providers/AuthProvider";

const Dashboard = () => {
    const [cart] = UseCart();
    const {user, admin} = useContext(AuthContext)

    const isAdmin = user?.email.toLowerCase() === admin;
    return (
        <div className="flex">
        <div className="w-96 bg-[#D1A054] min-h-screen  p-6">
          <h1 className="font-Cinzel font-bold text-2xl">Bistro BOSS</h1>
          <h2 className="font-Cinzel font-medium text-2xl mb-10">Resturant</h2>
  
          {isAdmin ? (
            <>
            
            <ul className="text-2xl space-y-6 font-Jost">
           
            <li className="flex items-center gap-4 justify-start">
              <IoHomeOutline></IoHomeOutline>
              <NavLink to="/dashboard/">Admin Home</NavLink>
            </li>
            <li className="flex items-center gap-4 justify-start">
              <FaRegAddressBook></FaRegAddressBook>
              <NavLink to="/dashboard/additems">Add Items</NavLink>
            </li>
            <li className="flex items-center gap-4 justify-start">
              <RiUserShared2Line></RiUserShared2Line>
              <NavLink to="/dashboard/manageitems">Manage Items</NavLink>
            </li>
            <li className="flex items-center gap-4 justify-start">
              <MdOutlineManageSearch></MdOutlineManageSearch>
              <NavLink to="/dashboard/managebookings">Manage Bookings</NavLink>
            </li>
            <li className="flex items-center gap-4 justify-start">
              <MdOutlineManageSearch></MdOutlineManageSearch>
              <NavLink to="/dashboard/allusers">All Users</NavLink>
            </li>
  
           
          </ul>
            
            </>
          ) : (
            <ul className="text-2xl space-y-6 font-Jost">
              <li className="flex items-center gap-4 justify-start">
                <IoHomeOutline></IoHomeOutline>
                <NavLink to="/dashboard/">Home</NavLink>
              </li>
              <li className="flex items-center gap-4 justify-start">
                <FaRegAddressBook></FaRegAddressBook>
                <NavLink to="/dashboard/mybooking">My Booking</NavLink>
              </li>
              <li className="flex items-center gap-4 justify-start">
                <RiUserShared2Line></RiUserShared2Line>
                <NavLink to="/dashboard/payment">Payment</NavLink>
              </li>
              <li className="flex items-center gap-4 justify-start">
                <MdOutlineManageSearch></MdOutlineManageSearch>
                <NavLink to="/dashboard/reservation">Reservation</NavLink>
              </li>
              <li className="flex items-center gap-4 justify-start">
                <MdOutlineManageSearch></MdOutlineManageSearch>
                <NavLink to="/dashboard/addreview">Add Review</NavLink>
              </li>
              <li className="flex items-center gap-4 justify-start">
                <FiShoppingCart></FiShoppingCart>
                <NavLink to="/dashboard/cart">
                  My Cart <sup className="text-red-600">{cart.length}</sup>
                </NavLink>
              </li>
            </ul>
          )}
  
          <div className="divider"></div>
          <ul className="text-2xl space-y-6 font-Jost">
            <li className="flex items-center gap-4 justify-start">
              <IoHomeOutline></IoHomeOutline>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex items-center gap-4 justify-start">
              <IoHomeOutline></IoHomeOutline>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li className="flex items-center gap-4 justify-start">
              <IoHomeOutline></IoHomeOutline>
              <NavLink to="/order/salad">Shop</NavLink>
            </li>
            <li className="flex items-center gap-4 justify-start">
              <IoHomeOutline></IoHomeOutline>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex=grow-1 w-full">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;