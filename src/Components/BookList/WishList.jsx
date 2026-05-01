import React, { useContext, useEffect, useState } from 'react';
import { bookContext } from '../../ContextApi/BookProvider';

const WishList = ({sort}) => {
     const {wishlist}=useContext(bookContext)


 const[filterdwishlist,setfilterdwishlist]=useState(wishlist)
            // shorrting function
            useEffect(()=>{
           if(sort){
            if(sort==='pages'){
          const shortData=[...wishlist].sort((a,b)=>a.totalPages-b.totalPages);
          console.log(shortData)
          setfilterdwishlist(shortData);
            
           }
           else if(sort==='rating'){
          const shortData=[...wishlist].sort((a,b)=>b.rating-a.rating);
          console.log(shortData)
          setfilterdwishlist(shortData);
          
           }
        }
            },[sort,wishlist])

     {/* conditon for empty data */}
            if(wishlist.length===0 ){
                return <div className='flex justify-center items-center bg-red-200 h-100'>
                    <h1 className='text-6xl font-bold opacity-70'>there is no foun wishing  book</h1></div>
            }
    return (
        <>
        <div className='my-y'>
                   
                    
                 {
                    filterdwishlist.map(book=>{
                        return(
            <div className="grid md:grid-cols-4 gap-4 card card-side bg-base-100 shadow-sm flex justify-center items-center py-8">
             <figure className='flex justify-center items-center bg-gray-100 rounded-xl h-full'>
            <img className=' w-40 h-60 rounded-xl py-8'
              src={book.image}
              alt={book.bookName} />
          </figure>
            <div className="card-body col-span-3">
        
        
               <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
                   <p>{book.author}</p>
                   <p className='border-b border-gray-200'>{book.category}</p>
                  
                   <p className=' flex gap-6 mr-3 items-center text-green-500 font-bold'>tags:
                     {
                       book.tags.map(tag=><p className='border-b border-gray-200'>{tag}</p>)
                     }
                   </p>
                   <p className='font-bold'>totalPages:<span className='font-bold'>{book.totalPages}</span></p>
                   <p>publisher:<span className='font-bold'>{book.publisher}</span></p>
                   <p>yearOfPublishing: <span className='font-bold'>{book.yearOfPublishing}</span></p>
                   <p className='flex text-xl justify-between items-center'> Rating:<span className='font-bold'>{book.rating}</span></p>
        
                
            </div>
        </div>
                        )
                    })
                 }
                </div>
        </>
    );
};

export default WishList;