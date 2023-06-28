import React from 'react';
import Image from 'next/image';
import Listing from './Listing'

function Card(props){
    return(
        <div className="text-center py-10 px-5 rounded-xl my-5 shadow-lg md:px-10 dark:bg-white">
            <div className="w-100 flex items-center justify-center flex-col">
                <Image className="mt-2" src={props.images} width={100} height={100} alt="card-svg"/>
                <h3 className="text-lg text-gray-600 font-medium pt-8 pb-2">{props.title}</h3>
                <p className="text-gray-600">{props.description}</p>

                <Listing list1={props.details1} list2={props.details2} list3={props.details3}/>
            </div>
        </div>
    )
}

export default Card;