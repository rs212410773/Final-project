import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import NavTabs from '../tab';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stage from './stage'
import AddCategory from './category';
import '../../../styles/managment.css'
import { getCategory } from '../../../api/managment/categoryApi';




const Courses = () => {
    const [CategoryName, setCategoryName] = useState('');
    const [addCategoryShow, setAddCategoryShow] = useState(false);
    const [amountStages, setAmountStages] = useState(1);
    const [stageShow, setStageShow] = useState(false);
    const [categories, setCategories] = useState([]);
    const history = useHistory();
    const courses = () => {
        history.push("/courses")
    }

    const handleChange = (event) => {
        setCategoryName(event.target.value);

    };
    useEffect(() => {
        async function fetchMyAPI() {
            const response = await getCategory()
            setCategories(response)
            }
      fetchMyAPI()
    },[], categories)

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
                        {
                            categories&&
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={CategoryName}
                            label="Cours_name"
                            onChange={handleChange}>

                            {categories.map((el) => (<MenuItem value={el.categoryName} key={el.categoryName}>{el.categoryName}</MenuItem>))}
                         
                        </Select>
    
                        }
                    </FormControl>
                    <br /> <br />

                    <p>add category</p>
                    <Fab color="primary" aria-label="add" onClick={() => setAddCategoryShow(true)}>

                        <AddIcon />
                    </Fab>

                    <br></br>

                    {addCategoryShow && <AddCategory setAddCategoryShow={setAddCategoryShow} />}
                    <br /> <br />
                    <TextField id="outlined-number" label="Number of states" type="number" onChange={e => setAmountStages(Number(e.target.value))}
                        InputProps={{ inputProps: { min: "1", max: "10", step: "1" } }}  />
                    <br /><br />
                    <Button variant="contained" startIcon={<AddIcon />} onClick={() => setStageShow(true)}>

                        Add
                    </Button>
                    {stageShow && <Stage amount={amountStages} />}

                </div>
            </div>
        </div>
    )
}
export default Courses;