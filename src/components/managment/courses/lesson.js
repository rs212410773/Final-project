import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import {createLesson} from '../../../api/lessonApi'

import '../../../styles/managment.css'

const Lesson = ({ setAddlesson }) => {
    const [open, setOpen] = useState(true);
    const [lessonName, setLessonName] = useState('');

    const handleChange = (event) => {
        setLessonName(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
            setLessonName(false)
            const Lesson = await createLesson(lessonName);
            if (Lesson)
                alert(Lesson.name)

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
                                <TextField id="outlined-basic" label="Lesson_name" variant="outlined" onChange={handleChange} />
                                <TextField id="outlined-basic" label="sort" variant="outlined" onChange={handleChange} />
                                <TextField id="outlined-basic" label="העלאת קובץ" variant="outlined" onChange={handleChange} />
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
export default Lesson;

