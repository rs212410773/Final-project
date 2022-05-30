import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import {addCategory} from '../../../api/managment/categoryApi'
import '../../../styles/managment.css';

const AddCategory = ({ setAddCategoryShow }) => {
    const [open, setOpen] = useState(true);
    const [categoryName, setCategoryName] = useState('');

    const handleChange = (event) => {
        setCategoryName(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async (event, reason) => {
        const category = await addCategory(categoryName);
        if (category)
            alert(category.name)

        if (reason !== 'backdropClick') {
            setOpen(false);
            setAddCategoryShow(false)
           
        }};
        return (
            <div>
                {/* <Button onClick={handleClickOpen}>Open select dialog</Button> */}
                <h1>hhhhhhhhhhhhhh</h1>
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>
                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                {/* <InputLabel htmlFor="demo-dialog-native">Age</InputLabel> */}
                                <TextField id="outlined-basic" label="Category_name" variant="outlined" onChange={handleChange} />

                            </FormControl>

                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    
}
export default AddCategory;