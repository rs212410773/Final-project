import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import '../../../styles/managment.css';
import { TableBody } from '@mui/material';
import { TableRow, TableCell, Table } from '@mui/material';
import { ColCountByScreen } from 'devextreme-react/data-grid';
import Fab from '@mui/material/Fab';
import Lesson from './lesson';

const Stage = ({ amount }) => {
  const [amountLessons, setAmountLessons] = useState(false);
  const [lessonShow, setLessonShow] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [rowCountArray, setRowCountArray] = useState([]);
  const [colCountArray, setColCountArray] = useState(["name", 'order', 'parts']);
  const [addlesson, setAddlesson] = useState(false);
  const [amountLesson, setAmountLesson] = useState(false);

  const CreateTable = () => {
    rowCountArray.length = 0;
    colCountArray.length = 4;

    for (let i = 1; i <= amount; i++) {
      rowCountArray.push(i);
    }
    setRowCountArray([...rowCountArray]);

    // for (let i = 1; i <= amount; i++) {
    //   colCountArray.push(i);
    // }
    // setColCountArray(colCountArray);

    // setShowTable(true);
  }
  useEffect(async () => {
    CreateTable();
  }, [amount]);
  
  return (
    <div >
      {/* {[...Array(amount)].map((el, i) => ()} */}
      <h3>stage</h3>
      <Table>
        <TableBody>
          {rowCountArray.map((row, index) => (
          
            <TableRow key={index}>
              {/* {colCountArray.map((col, index) => ( */}
              <TableCell key={index}>
                <TextField id="outlined-basic" label="Cours_name" variant="outlined" />
              </TableCell>
              <TableCell key={index}>
                <TextField id="outlined-basic" label="sort" variant="outlined" />
              </TableCell>
              <TableCell key={index}>
                
              </TableCell>
              {/* <TableCell key={index}>
            <TextField id="outlined-number" label="num of lessons" type="number" onChange={e => setAmountLesson(Number(e.target.value))} 
             InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }} />
              </TableCell> */}
              <TableCell key={index}>
                <p>add lesson</p>
                <Fab color="primary" aria-label="add" 
                onClick={() => setAddlesson(true)} >
                  <AddIcon />
                </Fab>
              </TableCell>
              {/* ))} */}
            </TableRow>
          ))}
        </TableBody>
      </Table>


      {addlesson && <Lesson 
      // amount={amountLesson}  setAddlesson={(e)=>{setAddlesson(e)}} 
      />}
    </div>
  )
}

export default Stage;


