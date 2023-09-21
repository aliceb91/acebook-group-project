import React from "react";

const dropdownElement = (props) => {
    return (
        <div>

            <li className="dropdown-item">
                <img src={props.img} alt='icon'></img>
                <a href>{props.text}</a>
            </li>
        </div>
    )
}

export default dropdownElement;