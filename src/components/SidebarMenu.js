import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({active, text,Icon}) => {
    return (
        <div className ={`sidebarMenu ${active && 'sidebarMenu--active'}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarMenu
