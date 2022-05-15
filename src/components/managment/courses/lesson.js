import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import '../../../styles/managment.css'

const Lesson = () => {
    return (
        <div>

            <h2>Lesson</h2>
            <TextField id="outlined-basic" label="Lesson name" variant="outlined" />
            <TextField id="outlined-number" label="Number of Rating" type="number" />

        </div>
    )
}
export default Lesson;