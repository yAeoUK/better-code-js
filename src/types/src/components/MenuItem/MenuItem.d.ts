import React from "react";
export interface MenuItemProps {
    title: string;
    icon: any;
    onClick: () => {};
    active: false;
}
declare const MenuItem: (props: MenuItemProps) => React.JSX.Element;
export default MenuItem;
