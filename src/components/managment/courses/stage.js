import React, { Fragment, useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

export default function Stage({amount}) {
  const [rowCount, setRowCount] = useState(amount);
  const [colCount, setColCount] = useState(3);

  const [rowCountArray, setRowCountArray] = useState([]);
  const [colCountArray, setColCountArray] = useState([]);

  const [showTable, setShowTable] = useState(true);

  const CreateTable = () => {
     rowCountArray.length = 0;
     colCountArray.length = 0;

    for (let i = 1; i <= rowCount; i++) {
      rowCountArray.push(i);
    }
    setRowCountArray(rowCountArray);

    for (let i = 1; i <= colCount; i++) {
      colCountArray.push(i);
    }
    // setColCountArray(colCountArray);

    // setShowTable(true);
  }
  
  return (
        <div onLoad={()=>{CreateTable()}}>  
      
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



