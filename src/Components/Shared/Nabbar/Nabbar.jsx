import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Nabbar = () => {
    // const [active ,setactive]=useState(false)

    // const handleactivebtn=()=>{
    // console.log('actibe')
    // setactive(true)
    // }
    return (
        <div className='container mx-auto my-4 sticky'>
            <nav className='flex justify-between items-center sticky'>
                <h1 className='font-bold text-2xl'>Book vibe</h1>
                <ul className='flex gap-4'>
                    <NavLink className={({isActive})=>
                    `py-1 px-3 font-bold ${isActive ? ('text-green-800 border border-green-800'):('')}`}
                      to={'/'}>
                        Home</NavLink>
                    <NavLink to='Books' className={({isActive})=>
                    `py-1 px-3 font-bold ${isActive ? ('text-green-800 border border-green-800'):('')}`}
                    >
                    listed book</NavLink>
                    <NavLink to={'page to read'} className={({isActive})=>
                    `py-1 px-3 font-bold ${isActive ? ('text-green-800 border border-green-800'):('')}`}
                    >
                        pages to read</NavLink>
                </ul>
                <div>
                 <button className='btn btn-ghost rounded-sm py-1 px-3 mr-4 bg-green-700 font-bold text-amber-50'>sign in</button>
                 <button className='rounded-sm py-1 px-4 bg-blue-400 font-bold  text-amber-50'>sign out</button>
                </div>
            </nav>
        </div>
    );
};

export default Nabbar;