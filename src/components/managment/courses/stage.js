import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import '../../../styles/managment.css';
import { TableBody } from '@mui/material';
import { TableRow ,TableCell,Table} from '@mui/material';
import { ColCountByScreen } from 'devextreme-react/data-grid';

const Stage = ({ amount }) => {
  const [amountLessons, setAmountLessons] = useState(false);
  const [lessonShow, setLessonShow] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [rowCountArray, setRowCountArray] = useState([]);
  const [colCountArray, setColCountArray] = useState([]);


  const CreateTable = () => {
    rowCountArray.length = 0;
    colCountArray.length = 0;

    // for (let i = 1; i <= rowCount; i++) {
    //   rowCountArray.push(i);
    // }
    setRowCountArray(rowCountArray);

    for (let i = 1; i <= amount; i++) {
      colCountArray.push(i);
    }
    // setColCountArray(colCountArray);

    // setShowTable(true);
  }

  return (
    <div onLoad={() => { CreateTable() }}>
        {/* {[...Array(amount)].map((el, i) => ()} */}

      <Table>
        <TableBody>
          {rowCountArray.map((row, index) => (
            <TableRow key={index}>
              {colCountArray.map((col, index) => (
                <TableCell key={index}>
                  Row {row} - Col {col}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  )
}

export default Stage;


