import React, { use, useContext, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { bookContext } from '../../ContextApi/BookProvider';
// const bookpromise=fetch('/booksData.json').then((res)=>res.json());
const BookDetails = () => {
    
   const {bookId}=useParams()
  //  console.log("book id",bookId)

//    const bookdata=use(bookpromise)
const bookdata=useLoaderData();
  //  console.log(bookdata);
const expectdbook=bookdata.find((book)=>book.bookId === Number(bookId))
  //  console.log(expectdbook)

  // mark read handling
const {handlesishlist,handlemark,markread}=useContext(bookContext)
    console.log(markread);
    return (
        <div className='container mx-auto py-8'>
           
            <div className="grid sm:grid-cols-1 lg:grid-cols-2  
            justify-between items-center card lg:card-side bg-base-100 shadow-sm">
  <figure className='flex justify-center items-center bg-gray-100 rounded-xl h-full'>
    <img className=' w-90 h-120 rounded-xl py-8'
      src={expectdbook.image}
      alt={expectdbook.bookName} />
  </figure>
  <div className="card-body p-8 space-y-4">
    <h2 className="card-title text-2xl font-bold">{expectdbook.bookName}</h2>
    <p>{expectdbook.author}</p>
    <p className='border-b border-gray-200'>{expectdbook.category}</p>
    <p><span className=' font-bold'>Review:</span>{expectdbook.review}</p>
    <p className=' flex gap-6 mr-3 items-center text-green-500 font-bold'>tags:
      {
        expectdbook.tags.map(tag=><p className='border-b border-gray-200'>{tag}</p>)
      }
    </p>
    <p className='font-bold'>totalPages:<span className='font-bold'>{expectdbook.totalPages}</span></p>
    <p>publisher:<span className='font-bold'>{expectdbook.publisher}</span></p>
    <p>yearOfPublishing: <span className='font-bold'>{expectdbook.yearOfPublishing}</span></p>
    <p className='flex text-xl justify-between items-center'> Rating:<span className='font-bold'>{expectdbook.rating}</span><FaRegStar /></p>
    <div className="card-actions flex gap-2">
     <button className='border px-4 py-2 rounded-sm'
     onClick={()=>handlemark(expectdbook)}
     >Mark as read</button>
     <button onClick={()=>handlesishlist(expectdbook)}
     className='border px-4 py-2 rounded-sm'>Mark as wished</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default BookDetails;