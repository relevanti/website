import "./FullScreenMenu.css";
import * as React from "react";
interface FullScreenMenuProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const FullScreenMenu: React.FC<FullScreenMenuProps>;
export default FullScreenMenu;
