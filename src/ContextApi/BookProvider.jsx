import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const bookContext=createContext()
const BookProvider = ({children}) => {

   const [markread,setmarkread]=useState([])

  const handlemark=(currentBook)=>{

    const existbook=markread.find(book=>book.bookId == currentBook.bookId);
    
    if(existbook){
      //alert('data already exist')
      toast.error(`${currentBook.bookName} already existed in read list`);

    }
    else{
      setmarkread([...markread,currentBook])
      toast.success(`${currentBook.bookName} is added in read list`);
    }
    console.log(currentBook,markread,"current book")
  }
  // for wishlist
  const [wishlist,setwishlist]=useState([])
   const handlesishlist=(currentBook)=>{

    // check data is exist in readlist or not
    const existinreadlist=markread.find(book=>book.bookId === currentBook.bookId)
    if(existinreadlist){
      toast.error(`${currentBook.bookName} already in read list`)
      return
    }

    const existbook=wishlist.find(book=>book.bookId == currentBook.bookId);
    
    if(existbook){
      //alert('data already exist')
      toast.error(`${currentBook.bookName} already existed in wish list`);

    }
    else{
      setwishlist([...wishlist,currentBook])
      toast.success(`${currentBook.bookName} is added to wishlist`);
    }
    console.log(currentBook,wishlist,"current book")
  }

     const data={
        markread,
        setmarkread,
        handlemark,
        wishlist,
        setwishlist,
        handlesishlist
     }
   //const data='mahedi'
    return <bookContext.Provider value={data}>{children}</bookContext.Provider>
};

export default BookProvider;