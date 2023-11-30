import React from "react";
import style from './MenuItem.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface MenuItemProps {
    title: string,
    icon: any,
    onClick: () => {},
    active: false
}

const MenuItem = (props: MenuItemProps) => {
    return <li className={props.active ? style.active : ''} style={{ textAlign: "start" }
    } onClick={e => props.onClick()} > <span className={style.icon}> <FontAwesomeIcon icon={props.icon} /></span >
        <span className={style.item}> {props.title} </span></li >
}
export default MenuItem