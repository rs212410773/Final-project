import React, { useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Checkbox } from '@mui/material';
import { useEffect } from 'react';
import { getCategory } from '../../api/managment/categoryApi';
import '../../styles/filter.css'



const Filter = () => {
    const [open, setOpen] = React.useState(true);
    const [categories, setCategories] = useState([]);
    const [stages] = useState(["aaa", "bbb", "ccc"]);
    const [checked, setChecked] = useState(false)

    useEffect(() => {
            async function fetchMyAPI() {
                const response = await getCategory()
                setCategories(response)
                }
          fetchMyAPI()
    }, [], categories
    )


    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="div" >
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader" >
                <ListItemButton onClick={handleClick}>

                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="category" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <div className="col">
                           {categories.map((item) => (
                                <div key={item.categoryName}>
                                    <label key={item.categoryName}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   <input type="checkbox"
                                            defaultChecked={checked}
                                            onChange={() => setChecked(!checked)}
                                            key={item.categoryName}
                                        />
                                        {item.categoryName}
                                    </label>

                                     {/* <Checkbox key={item.length} text={item.categoryName} ></Checkbox>  */}
                                </div>
                            ))}
                         
                        </div>
                    </List>
                </Collapse>
            </List>


            {/* <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader" >
                <ListItemButton onClick={handleClick}>

                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="stage" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>

                    <List component="div" disablePadding>
                        {stages.map((item) => (
                            <div key={item}>
                                <label key={item}>
                                    <input type="checkbox"
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                        key={item}
                                    />
                                    {item}
                                </label>
                            </div>
                        ))}





                    </List>
                </Collapse>
            </List> */}

        </div>
    );
}
export default Filter;