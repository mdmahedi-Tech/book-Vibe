import React, { useContext, useState } from 'react';
// import { bookContext } from '../../ContextApi/ContextBooks';
import { bookContext } from '../../ContextApi/BookProvider';
import { LuBookMarked } from 'react-icons/lu';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/BookList/ReadList';
import WishList from '../../Components/BookList/WishList';


const Books = () => {
    const {markread,wishlist}=useContext(bookContext)
        // console.log(markread,"read");
        // console.log(wishlist,"wishlist");
        // state for shorting
        const [sort,setsort]=useState('');
        console.log(sort);
        
    return (
        <div className='container mx-auto'>
            <div className='flex justify-end '>
              <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="font-bold btn m-1">shorted by {sort} ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setsort('pages')}>
      <a>pages</a></li>
    <li onClick={()=>setsort('rating')}>
      <a>rating</a></li>
  </ul>
</div>
            </div>
            
    <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ReadList sort={sort}></ReadList>
    </TabPanel>
    <TabPanel>
      <WishList sort={sort}></WishList>
    </TabPanel>
  </Tabs>

        
        
        </div>
    );
};

export default Books;