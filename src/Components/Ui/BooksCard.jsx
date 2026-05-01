import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';
const BooksCard = ({book}) => {
    return (
        <Link to={`/booksdetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm">
         <figure className='p-6 flex justify-center'>
           <img
           className='h-50 w-30 text-center rounded-sm'
       
             src={book.image}/>
         </figure>
         <div className="card-body"> 
           <div className='flex justify-between py-1'>
               {
                   book.tags.map(tag=>{
                       return <span className="font-bold text-green-500 rounded-xl px-3">{tag}</span>
                   })
               }

           </div>
           <div className='pb-4'>
               <h2 className="text-2xl font-bold card-title">{book.bookName}</h2>
              <p2 className="card-title pb-2">{book.author}</p2>
           </div>
           
           <div className="card-actions justify-end border-t border-dashed 
           border-gray-400 pt-5">
           
            <div className='flex justify-between items-end'>
               <p>{book.category}</p>
            <p className='flex justify-between items-center font-bold text-xl'>{book.rating}<FaRegStar />
       </p>
            </div>
           </div>
         </div>
       </Link> 
    );
};

export default BooksCard;