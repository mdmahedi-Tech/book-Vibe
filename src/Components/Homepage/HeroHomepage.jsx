import React from 'react';
import heroimg from '../../assets/hero_img.jpg'
const HeroHomepage = () => {
    return (
        <div>
 <div className="container mx-auto py-20 bg-gray-100">
    <div className="hero-content flex justify-between items-center px-10">
       
            <div>
            <h1 className="text-5xl font-bold"> Books to freshen up <br /> your bookshelf</h1>
            <p className="py-6 text-2xl font-bold">
              
            </p>
            <button className="btn bg-green-00 text-amber-50 px-4 py-2 rounded-sm">View the List</button>
            </div>
             <img
        src={heroimg}
        />
    </div>
</div>
        </div>
    );
};

export default HeroHomepage;