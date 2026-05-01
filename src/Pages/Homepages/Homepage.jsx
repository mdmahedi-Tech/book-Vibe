import React, { useContext } from 'react';
import HeroHomepage from '../../Components/Homepage/HeroHomepage';
import Allbooks from '../../Components/Homepage/Allbooks';
import { bookContext } from '../../ContextApi/ContextBooks';

const Homepage = () => {
     const booktst=useContext(bookContext)
        console.log(booktst)
    return (
        <div>
            <HeroHomepage></HeroHomepage>
            <Allbooks></Allbooks>
        </div>
    );
};

export default Homepage;