import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

function MenuIcon() {
    return (
        <FontAwesomeIcon icon={faBars} style={{ fontSize: "2rem" }} />
    )
}

export default MenuIcon;