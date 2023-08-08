import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(authContext)
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="navbar lg:px-12 bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><NavLink className={({ isActive }) => isActive ? "bg-slate-200 rounded-xl font-semibold mx-1" : "font-semibold mx-1"} to='/dashboard'>Dashboard</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "bg-slate-200 rounded-xl font-semibold mx-1" : "font-semibold mx-1"} to='/blogs'>Blogs</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' style={{ fontFamily: ['Lobster', 'cursive'] }} className="text-[#004aad] hover:underline text-xl lg:text-5xl font-bold">MobiHub</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink className={({ isActive }) => isActive ? "bg-slate-200 rounded-xl font-semibold mx-2" : "font-semibold mx-2"} to='/home'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "bg-slate-200 rounded-xl font-semibold mx-2" : "font-semibold mx-2"} to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "bg-slate-200 rounded-xl font-semibold mx-2" : "font-semibold mx-2"} to='/dashboard'>Dashboard</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "bg-slate-200 rounded-xl font-semibold mx-2" : "font-semibold mx-2"} to='/blogs'>Blogs</NavLink></li>
                        {
                            user?.uid ?
                                <li><button onClick={handelLogOut} className='btn rounded-lg btn-ghost bg-[#004aad] text-white hover:text-black'>SignOut</button></li>
                                :
                                <li><NavLink to='/login' className={({ isActive }) => isActive ? 'btn rounded-lg btn-ghost bg-blue-700 text-white hover:text-black' : 'btn rounded-lg btn-ghost bg-[#004aad] text-white hover:text-black'} > Login</NavLink></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end lg:hidden ">
                    {
                        user?.uid ?
                            <button onClick={handelLogOut} className='btn rounded-lg btn-ghost bg-[#004aad] text-white hover:text-black mx-2'>SignOut</button>
                            :
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'btn rounded-lg btn-ghost bg-blue-700 text-white hover:text-black mx-2' : 'btn rounded-lg btn-ghost mx-2 bg-[#004aad] text-white hover:text-black'} > Login</NavLink>
                    }
                    <label htmlFor="dashboard-drawer" className='btn btn-ghost'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                </div>
            </div>
        </div >
    );
};

export default NavBar;