import "./MenuToggleButton.css";
import * as React from "react";
interface MenuToggleButtonProps {
    isOpen: boolean;
    onClick: () => void;
}
declare const MenuToggleButton: React.FC<MenuToggleButtonProps>;
export default MenuToggleButton;
