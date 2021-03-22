import { useState } from 'react';
import MenuItem from './MenuItem';
import { MENU_ITEMS } from './MenuConstants';

import './Menu.css';

const Menu = ({
    onMenuItemSelect
}) => {
    const [currItem, setCurrItem] = useState();
    const menuItemClickHandler = (id) => {
        setCurrItem(id);
        onMenuItemSelect(id);
    }
    // console.log(currItem);
    return (
        <aside className="menu">
            <ul>
            {MENU_ITEMS.map(x => 
                <MenuItem 
                    key={x.id} 
                    id={x.id}
                    isSelected={x.id == currItem }
                    onClick={menuItemClickHandler}
                >
                    {x.text}
                </MenuItem>
                )}
            </ul>
        </aside>
    );
}

export default Menu;
