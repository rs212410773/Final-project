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
import { addStage } from '../../../api/managment/stageApi';
import '../../../styles/uploadingFile.css';
import { Input } from '@mui/material';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


const Lesson = (props) => {
    const [open, setOpen] = useState(true);
    const [lessonName, setLessonName] = useState('');
    // const [addlesson, setAddlesson] = useState(false);
    const [lessons, setLesson] = useState([]);
    // const [lessonName, setLessonName] = useState('');
    const [sort, setSort] = useState('');
    const [add, setAdd] = useState(false);
    const [newArrary, setNewArrary] = useState(true);
    const [numLesson, setnumLesson] = useState(1);
    const [num, setNum] = useState(["a"]);

    const handleFileUploadError = (error) => {
        // Do something...
    }
    const fileLoading = () => {
        alert("ssa")


    }
    const handleFilesChange = (files) => {
        // Do something...
    }


    const addNewLesson = async () => {
        // setnumLesson(numLesson => numLesson + 1)
        setNewArrary(false);
        setNum([...num, "b"]);
      debugger
        await setLesson([...lessons, { lessonName, sort }])
        debugger
        // setAdd(true);
    }
    const handleChange = (event) => {
        setLessonName(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };



    const handleClose = async (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
            const newStage = {
                name: props.stageName,
                stageNumber: props.stageSort,
            }
            if (newArrary == true) {
               
                setLesson([...lessons, { lessonName, sort }]);
            }
            const insertStage = await addStage(newStage);
            const id = insertStage._id;
            lessons.map(async (l) => {
                debugger;
                const newLesson = {
                    name: l.lessonName,
                    lessonNumber: l.sort,
                    stageId: id
                }
                
                const insertLesson = await addLesson(newLesson);
                alert(insertLesson.name)
            })

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
                                        {num.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell key={index}>
                                                    <TextField id="outlined-basic" label="Lesson_name" variant="outlined"
                                                        onChange={e => setLessonName(e.target.value)} />
                                                </TableCell>
                                                <TableCell key={index}>
                                                    <TextField id="outlined-basic" label="sort" variant="outlined"
                                                        onChange={e => setSort(e.target.value)}
                                                    />
                                                </TableCell >
                                                <Input key={index} type="file" onChange={(e) => fileLoading(e)}></Input>
                                                <TableCell key={index}>
                                                    <p>Add Lesson</p>
                                                    <Fab color="primary" aria-label="add"
                                                        onClick={addNewLesson} >
                                                        <AddIcon />
                                                    </Fab>
                                                </TableCell>
                                            </TableRow>
                                            // <TableRow key={index}>

                                            //     <TableCell key={index}>
                                            //         <TextField id="outlined-basic" label="Stage_name" variant="outlined"
                                            //             onChange={e => setStageName(e.target.value)}
                                            //         />
                                            //     </TableCell>
                                            //     <TableCell key={index}>
                                            //         <TextField id="outlined-basic" label="sort" variant="outlined"
                                            //             onChange={e => setSort(e.target.value)} />
                                            //     </TableCell>

                                            //     <TableCell key={index}>
                                            //         <p>add lesson</p>
                                            //         <Fab color="primary" aria-label="add"
                                            //             onClick={() => setAddlesson(true)} >
                                            //             <AddIcon />
                                            //         </Fab>
                                            //     </TableCell>
                                            //     {/* ))} */}
                                            // </TableRow>
                                        ))}


                                        {/* <TableRow>
                                            <TableCell >
                                                <TextField id="outlined-basic" label="Lesson_name" variant="outlined"
                                                    onChange={e => setLessonName(e.target.value)} />
                                            </TableCell>
                                            <TableCell>
                                                <TextField id="outlined-basic" label="sort" variant="outlined"
                                                    onChange={e => setSort(e.target.value)}
                                                />
                                            </TableCell>
                                            <Input type="file" onChange={(e)=>fileLoading(e)}></Input>
                                            <TableCell>
                                                <p>Add Lesson</p>
                                                <Fab color="primary" aria-label="add"
                                                    onClick={addNewLesson} >
                                                    <AddIcon />
                                                </Fab>
                                            </TableCell>
                                        </TableRow> */}
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

        </div >
    );

}

export default Lesson;

