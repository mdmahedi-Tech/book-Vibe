import React, { use } from 'react';


;
import BooksCard from '../Ui/BooksCard';
const bookpromise=fetch('/booksData.json').then((res)=>res.json());
const Allbooks = () => {
    const booksData=use(bookpromise);
    console.log(booksData)

    return (
         <div className='container mx-auto'>

            <h1 className='font-bold text-3xl text-center'>All Books</h1>
            
           <div className='grid md:grid-cols-2 lg:grid-cols-3'>

             {
                booksData.map((book,index)=><BooksCard key={index} book={book}></BooksCard>)
            }

           </div>
        </div>
    );
};

export default Allbooks;