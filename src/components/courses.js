import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import NavTabs from './tab';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';




// import Dialog from "@material-ui/core/Dialog";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import Button from "@material-ui/core/Button";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

import '../styles/managment.css'


const Lesson = () => {
    return (
        <div>

            <h2>Lesson</h2>
            <TextField id="outlined-basic" label="Lesson name" variant="outlined" />
            <TextField id="outlined-number" label="Number of Rating" type="number" />

        </div>
    )
}
const State = (props) => {
    return (
        <>
            {[...Array(props.amount)].map((el, i) => (

                <div>

                    <h2>State</h2>
                    <TextField id="outlined-basic" label="State name" variant="outlined" />
                    <TextField id="outlined-number" label="Number of Rating" type="number" />
                    <TextField id="outlined-number" label="Number of lesson" type="number" />
                    {/* <Lesson></Lesson> */}
                </div>
            ))}
        </>
    )
}



const AddCategory = () => {
    const [open, setOpen] = useState(true);
    const [categoryName, setCategoryName] = useState('');

    const handleChange = (event) => {
        setCategoryName(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);

        }
    };
    // handleClickOpen()
    return (
        <div>
            {/* <Button onClick={handleClickOpen}>Open select dialog</Button> */}

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



const Courses = () => {
    const [categoryName, setCategoryName] = useState('');
    const [addCategoryShow, setAddCategoryShow] = useState(false);
    const [amountStates, setAmountStates] = useState(false);
    const [stateShow, setStateShow] = useState(false);
    const history = useHistory();
    const courses = () => {
        history.push("/courses")
    }



    const handleChange = (event) => {
        setCategoryName(event.target.value);
    };
    return (
        <div>

            <NavTabs></NavTabs>
            <div className="managment-wrap">
                <div className="managment-html">
                    <h1>courses</h1>
                    <TextField id="outlined-basic" label="Cours_name" variant="outlined" />
                    <br /> <br />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categoryName}
                            label="Cours_name"
                            onChange={handleChange}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <br /> <br />
                    <Fab color="primary" aria-label="add" onClick={() => setAddCategoryShow(true)}>
                        add category
                        <AddIcon />
                    </Fab>
                    <br></br>
                    {addCategoryShow && <AddCategory />}
                    <button onClick={() => setAddCategoryShow(false)}>init</button>
                    <br /> <br />
                    <TextField id="outlined-number" label="Number of states" type="number"  onChange={e => setAmountStates(Number(e.target.value))}  min="1" max="5" />
                    <br/><br/>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={()=>setStateShow(true)}>
                        Add
                    </Button>
                    {stateShow &&  <State amount={amountStates} />}
                   
                </div>
            </div>
        </div>
    )
}
export default Courses;
