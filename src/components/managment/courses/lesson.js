import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import '../../../styles/managment.css';
import { TableBody } from '@mui/material';
// import { TableRow, TableCell, Table } from '@mui/material';
import { ColCountByScreen } from 'devextreme-react/data-grid';
import Fab from '@mui/material/Fab';
// import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
// import Stage from '../../managment/courses/stage';
import '../../../styles/managment.css';
import { TableRow, TableCell, Table } from '@mui/material';
import { addLesson } from '../../../api/managment/lessonApi';
import {addStage} from '../../../api/managment/stageApi';


const Lesson = (props) => {
    const [open, setOpen] = useState(true);
    const [lessonName, setLessonName] = useState('');
    // const [addlesson, setAddlesson] = useState(false);
    const [lessons, setLesson] = useState([]);
    // const [lessonName, setLessonName] = useState('');
    const [sort, setSort] = useState('');
    const [add, setAdd] = useState(false);



    const addNewLesson = async () => {
        debugger;
        setAdd(true)
        await setLesson([...lessons, { lessonName, sort }])
        setAdd(true);
        // const lesson = {
        //     name: lessonName,
        //     lessonNumber: sort,
        //     // stageId:stageId
        // }
        // const insertLesson = await addLesson(lesson);
    }
    const handleChange = (event) => {
        setLessonName(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async (event, reason) => {
        // const Lesson = await addLesson(lessonName);
        // if (Lesson)
        //     alert(Lesson.name)
        if (reason !== 'backdropClick') {
            setOpen(false);
            const newStage = {
                name: props.stageName,
                stageNumber: props.stageSort,
            }
            const insertStage = await addStage(newStage);
            
     
            alert((insertStage._id));
            debugger;
            const id=insertStage._id;
            // alert(insertStage.name)
            // alert(insertStage._id)
debugger
            lessons.map(async (l) => {
                const newLesson = {
                    name: l.lessonName,
                    lessonNumber: l.sort,
                    stageId:id
                }
                const insertLesson = await addLesson(newLesson);
                alert(insertLesson.name)
            })

            // props.setAddlesson(false)


        }
    };

    return (
        <div>

            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <div>
                                <h3>Lesson</h3>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell >
                                                <TextField id="outlined-basic" label="Lesson_name" variant="outlined"
                                                    onChange={e => setLessonName(e.target.value)} />
                                            </TableCell>
                                            <TableCell>
                                                <TextField id="outlined-basic" label="sort" variant="outlined"
                                                    onChange={e => setSort(e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>
                                                <p>Add Lesson</p>
                                                <Fab color="primary" aria-label="add"
                                                    onClick={addNewLesson} >
                                                    <AddIcon />
                                                </Fab>
                                            </TableCell>

                                            {/* ))} */}
                                        </TableRow>
                                        {add &&
                                            <TableRow>
                                                <TableCell >
                                                    <TextField id="outlined-basic" label="Lesson_name" variant="outlined"
                                                        onChange={e => setLessonName(e.target.value)} />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField id="outlined-basic" label="sort" variant="outlined"
                                                        onChange={e => setSort(e.target.value)}
                                                    />
                                                </TableCell>
                                                <TableCell>

                                                </TableCell>
                                                <TableCell>
                                                    <p>Add Lesson</p>
                                                    <Fab color="primary" aria-label="add"
                                                        onClick={addNewLesson}
                                                    >
                                                        <AddIcon />
                                                    </Fab>
                                                </TableCell>

                                            </TableRow>
                                        }
                                    </TableBody>
                                </Table>

                            </div>
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

