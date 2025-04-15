import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Services", url: "/services" },
    { id: 4, name: "Portfolio", url: "/portfolio" },
    { id: 5, name: "Contact", url: "/contact" }
  ];
  

const Navbar = () => {

    const links = navLinks.map(route => <Link key={route.id} route ={route}></Link>)


    const [Open,setopen] = useState(false)
    return (
       <nav className='flex items-center justify-between mx-6 mt-5'>
            <span className='flex items-center gap-5' >
                <span className='max-md:cursor-pointer' onClick={() =>setopen(!Open)}>
                {Open?<X className='md:hidden'></X>:<Menu className='md:hidden'></Menu>}
               
               <ul className={`md:hidden absolute bg-amber-300 ${Open?'top-14':'-top-40'} duration-1000 py-2 px-4`}>
                {
                    links
                }
               </ul>
               </span>
                <h3>My Navbar</h3>
            </span>
        <ul className='flex gap-10 justify-center max-md:hidden'>
            {
                links
            }
        </ul>
            <button className='btn'>Sign In</button>


        {/* <ul className='flex gap-10 justify-center'>

            {
                navLinks.map(route => 
                    <li key={route.id}>
                <a href={route.url}>{route.name}</a>
                </li>)
            }
        </ul> */}

{/* 
        <ul className='flex gap-10 justify-center'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About us</a>
            </li>
            <li>
                <a href="/services">Services</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
        </ul> */}

       </nav>
    );
};

export default Navbar;