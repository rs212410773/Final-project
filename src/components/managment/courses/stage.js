import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import '../../../styles/managment.css'

const Stage = ({amount}) => {
    const [amountLessons, setAmountLessons] = useState(false);
    const [lessonShow, setLessonShow] = useState(false);
    return (
        <>
            {[...Array(amount)].map((el, i) => (

                <div>

                    <h2>stage</h2>
                    <TextField id="outlined-basic" label="stage name" variant="outlined" />
                    <TextField id="outlined-number" label="Number of Rating" type="number" />
                    <TextField id="outlined-number" label="Number of lessons" type="number"  onChange={e => setAmountLessons(Number(e.target.value))}  InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }} />
                    <br/><br/>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={()=>setLessonShow(true)}>
                        Add
                    </Button>
                    {lessonShow &&  <stage amount={amountLessons} />}
                    {/* <Lesson></Lesson> */}
                </div>
            ))}
        </>
    )
}
export default Stage;