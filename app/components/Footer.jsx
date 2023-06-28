import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div className="bg-white p-5 text-gray-500 md:p-10 lg:px-40 dark:bg-gray-900">
            <p className="text-sm text-center">©{currentYear} Ethan-React-Portfolio</p>
        </div>
    )
}

export default Footer;