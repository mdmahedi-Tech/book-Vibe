import React from 'react';
import Nabbar from '../Components/Shared/Nabbar/Nabbar';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            
            <Nabbar></Nabbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;