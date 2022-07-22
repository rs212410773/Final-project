import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import {addLesson} from '../../../api/managment/lessonApi';
// import Stage from '../../managment/courses/stage';
import AddIcon from '@mui/icons-material/Add';
import '../../../styles/managment.css';
import { TableBody } from '@mui/material';
import { TableRow, TableCell, Table } from '@mui/material';
// import { ColCountByScreen } from 'devextreme-react/data-grid';
import Fab from '@mui/material/Fab';


import '../../../styles/managment.css'

const Lesson = (props) => {
    const [open, setOpen] = useState(true);
    const [lessonName, setLessonName] = useState('');
    const [rowCountArray, setRowCountArray] = useState([]);
    const [colCountArray, setColCountArray] = useState(["name", 'order', 'parts']);
    const [addlesson, setAddlesson] = useState(false);
    const [lessons, setLesson] = useState([]);

  
    const handleChange = (event) => {
        setLessonName(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async (event, reason) => {
        const Lesson = await addLesson(lessonName);
        if (Lesson)
            alert(Lesson.name)
        if (reason !== 'backdropClick') {
            setOpen(false);
            props.setAddlesson(false)
          

        }};
      
        const CreateTable = () => {
          rowCountArray.length = 0;
          colCountArray.length = 4;
      
          for (let i = 1; i <= props.amount; i++) {
            rowCountArray.push(i);
          }
          setRowCountArray([...rowCountArray]);
      
        }
        useEffect(async () => {
          CreateTable();
        }, [props.amount]);


        return (
            <div>
                  
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>
                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                
                                {/* <InputLabel htmlFor="demo-dialog-native">Age</InputLabel> */}
                                {/* <TextField id="outlined-basic" label="Lesson_name" variant="outlined" onChange={handleChange} />
                                <TextField id="outlined-basic" label="sort" variant="outlined" onChange={handleChange} />
                                <TextField id="outlined-basic" label="העלאת קובץ" variant="outlined" onChange={handleChange} /> */}
                                  <Table>
        <TableBody>
          {rowCountArray.map((row, index) => (
          
            <TableRow key={index}>
              {/* {colCountArray.map((col, index) => ( */}
              <TableCell key={index}>
                <TextField id="outlined-basic" label="lesson_name" variant="outlined" />
              </TableCell>
              <TableCell key={index}>
                <TextField id="outlined-basic" label="sort" variant="outlined" />
              </TableCell>
              <TableCell key={index}>
              <input type="file" label="file uploading"></input>
              </TableCell>
              
              {/* <TableCell key={4}> */}
               
                {/* <Fab color="primary" aria-label="add" 
                onClick={() => setAddlesson(true)}
                >
                  <AddIcon />
                </Fab>
              </TableCell> */}
              {/* ))} */}
            </TableRow>
          ))}
              
        </TableBody>
      </Table>


      {/* {addlesson && <Lesson amount={4}  setAddlesson={(e)=>{setAddlesson(e)}} />} */}
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

