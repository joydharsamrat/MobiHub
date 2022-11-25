import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../context/AuthProvider/AuthProvider';
import useSeller from '../hooks/useSeller';
import NavBar from '../pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    const { user } = useContext(authContext);

    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#8ecae6]">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isSeller ? <li><Link to='/dashboard/addProducts'>Add products</Link></li> :
                                <li><a>Sidebar Item 2</a></li>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;