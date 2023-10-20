import React from "react";
import style from './MenuItem.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// function MenuItem({ title, icon, onClick = () => { }, active = false }) {
//     return <li className={active ? style.active : ''} style={{ textAlign: "start" }
//     } onClick={e => onClick()} > <span className={style.icon}> <FontAwesomeIcon icon={icon} /></span >
//         <span className={style.item}> {title} < /span></li >
// }

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