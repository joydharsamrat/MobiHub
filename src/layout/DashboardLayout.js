import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { authContext } from '../context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import NavBar from '../pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    const { user } = useContext(authContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <NavBar></NavBar>
            {user && <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-white">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu py-4 w-80 bg-slate-100 text-base-content">


                        {
                            isAdmin &&
                            <><li><NavLink className={({ isActive }) => isActive ? "bg-white font-semibold" : "font-semibold"} to='/dashboard/allSellers'>All Sellers</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "bg-white font-semibold" : "font-semibold"} to='/dashboard/allBuyers'>All Buyers</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "bg-white font-semibold" : "font-semibold"} to='/dashboard/reportedProducts'>Reported products</NavLink></li>

                            </>
                        }
                        {
                            isSeller &&
                            <><li><NavLink className={({ isActive }) => isActive ? "bg-white font-semibold" : "font-semibold"} to='/dashboard/myOrders'>My Orders</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "bg-white font-semibold" : "font-semibold"} to='/dashboard/addProducts'>Add products</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "bg-white font-semibold" : "font-semibold"} to='/dashboard/myProducts'>My products</NavLink></li>

                            </>
                        }
                    </ul>

                </div>
            </div>}
        </div>
    );
};

export default DashboardLayout;