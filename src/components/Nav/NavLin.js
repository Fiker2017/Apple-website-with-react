import React from 'react'


function NavLin(props) {
    return (
     
        <div>
            <li className="nav-item  "><a className="nav-link js-scroll-trigger active " href={props.linkUrl}>{props.linkName}{props.Image}</a></li>
 
        </div>
    )
}

export default NavLin







// Project Console: https://console.firebase.google.com/project/apple-react-b37b9/overview
// Hosting URL: https://apple-react-b37b9.web.app