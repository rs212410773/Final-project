import React, { useState ,useEffect} from 'react'
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
import AddCategory from './category';
<<<<<<< HEAD
import { getCategory } from '../../../api/categoryApi';
=======
import {getCategory} from '../../../api/managment/categoryApi';
>>>>>>> ad58641f1649e1ed2a64311a78895f604cca1844

import '../../../styles/managment.css'

const Courses = () => {
    const [categoryName, setCategoryName] = useState('');
    const [addCategoryShow, setAddCategoryShow] = useState(false);
    const [amountStages, setAmountStages] = useState(false);
    const [stageShow, setStageShow] = useState(false);
    const [categories, setCategories] = useState([]);
    const history = useHistory();
    const courses = () => {
        history.push("/courses")
    }



    const handleChange = (event) => {
        setCategoryName(event.target.value);
    };
    const handleGetCategory = async () => {
<<<<<<< HEAD
        setCategories(await getCategory());
        if (categories) {
            console.log(categories);
            categories.forEach(element => {
                alert(element.name)
            });
        }


    }

=======
        setCategories( await getCategory());
        if (categories){
        categories.forEach(element => {
             alert(element.name) 
        });
    }     
        
    }
     useEffect(async() => {
        setCategories( await getCategory());
        if (categories){
        categories.forEach(element => {
             alert(element.name) 
        })}
      },[]);
    
>>>>>>> ad58641f1649e1ed2a64311a78895f604cca1844
    return (
        <div onLoad={() => handleGetCategory()}>
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
<<<<<<< HEAD
                            {[...Array(categories)].map((el) => (<MenuItem value={10}>{el.name}</MenuItem>))}

                            {/* <MenuItem value={20}>Twenty</MenuItem>
                             <MenuItem value={30}>Thirty</MenuItem> */}
                        </Select>
                    </FormControl>
                    <br /> <br />
=======
                        {/* {[...Array(categories)].map((el) => (<MenuItem key={el.toString()} value={10}>{el.name}</MenuItem>))} */}
                         {categories.map((el) => (<MenuItem key={el.toString()} value={el.name}>{el.name}</MenuItem>))}   
                        </Select>
                    </FormControl>
                    
                    <br /> <br /> 
>>>>>>> ad58641f1649e1ed2a64311a78895f604cca1844
                    <p>add category</p>
                    <Fab color="primary" aria-label="add" onClick={() => setAddCategoryShow(true)}>

                        <AddIcon />
                    </Fab>

                    <br></br>
<<<<<<< HEAD
                    {addCategoryShow && <AddCategory setAddCategoryShow={setAddCategoryShow} />}
                    <br /> <br />
                    <TextField id="outlined-number" label="Number of states" type="number" onChange={e => setAmountStages(Number(e.target.value))}
                        InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }} />
                    <br /><br />
                    <Button variant="contained" startIcon={<AddIcon />} onClick={() => setStageShow(true)}>
=======
                    {addCategoryShow && <AddCategory setAddCategoryShow={(e)=>{setAddCategoryShow(e)}}/>}
                    <br /> <br />
                    <TextField id="outlined-number" label="Number of stages" type="number"  onChange={e => setAmountStages(Number(e.target.value))} 
                     InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }} />
                    <br/><br/>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={()=>setStageShow(true)}>
>>>>>>> ad58641f1649e1ed2a64311a78895f604cca1844
                        Add
                    </Button>
                    {stageShow && <Stage amount={amountStages} />}

                </div>
            </div>
        </div>
    )
}
export default Courses;
