import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import NavTabs from '../../tab';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stage from './stage'
import AddCategory from './category'

import '../../../styles/managment.css'

const Courses = () => {
    const [categoryName, setCategoryName] = useState('');
    const [addCategoryShow, setAddCategoryShow] = useState(false);
    const [amountStages, setAmountStages] = useState(false);
    const [stageShow, setStageShow] = useState(false);
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
                    <p>add category</p>
                    <Fab color="primary" aria-label="add" onClick={() => setAddCategoryShow(true)}>
                        
                        <AddIcon />
                    </Fab>
                   
                    <br></br>
                    {addCategoryShow && <AddCategory setAddCategoryShow={setAddCategoryShow}/>}
                    <br /> <br />
                    <TextField id="outlined-number" label="Number of states" type="number"  onChange={e => setAmountStages(Number(e.target.value))} 
                     InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }} />
                    <br/><br/>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={()=>setStageShow(true)}>
                        Add
                    </Button>
                    {stageShow &&  <Stage amount={amountStages} />}
                   
                </div>
            </div>
        </div>
    )
}
export default Courses;
