import React from 'react';

function Listing(props){
    return(
        <ul className="flex text-teal-500 pt-4">
            <li>{props.list1}</li>
            <li className="mx-5">{props.list2}</li>
            <li>{props.list3}</li>
        </ul>
    )
}

export default Listing;