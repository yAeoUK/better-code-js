import React from "react";
import style from './NavbarButton.module.css'

export interface NavbarProps {
    children: any
    onClick: () => {}
}

const NavbarButton = (props: NavbarProps) => {
    return <div className={style['wrapper']} onClick={e => props.onClick()}>{props.children}</div>
}
export default NavbarButton