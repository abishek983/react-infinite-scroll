import React, { useState } from 'react';
import useInfiniteScroll from './useInfiniteScroll'

const List = () => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

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
          {isFetching && <p>Fetching More items...</p>}
        </ul>
      </>
    );
}

export default List;