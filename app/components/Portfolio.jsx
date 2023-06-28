import React from "react";
import Image from "next/image";

function Portfolio(props){
    return(
        <div className="basis-1/3 flex-1">
            <Image src={props.image} className="rounded-lg object-cover" width={'100%'} height={'100%'} alt="project-images"/>
        </div>
    )
}

export default Portfolio;