import React, { useState, useEffect } from 'react'

const List = () => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    }, [])

    function handleScroll(){
        if(window.innerHeight + document.documentElement.scrollTop!==document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    useEffect(() => {
        if(!isFetching) return;
        fetchMoreListItems();
    },[isFetching])

    function fetchMoreListItems(){
        setTimeout(() =>{
            setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
            setIsFetching(false);
        }, 2000)
    }
  
    return (
      <>
        <ul className="list-group mb-2">
          {listItems.map(listItem => <li  key={listItem} className="list-group-item">List Item {listItem}</li>)}
        </ul>
      </>
    );
}

export default List;