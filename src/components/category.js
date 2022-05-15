// import React from 'react';
// import config from 'devextreme/core/config';
// import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';
// import DataGrid, {
//   Column, Editing, Lookup, Texts, Selection,
// } from 'devextreme-react/data-grid';
// import { SpeedDialAction } from 'devextreme-react/speed-dial-action';
// import { SelectBox } from 'devextreme-react/select-box';
// import { employees, states, directions } from './data.js';
// import { useState } from 'react';
// import '../styles/category.css'
// const optionDirections = ['auto', 'up', 'down'];

// const  Category =()=> {
//   const[selectedRowIndex,setSelectedRowIndex]=useState(-1)
    
//     const grid = null;
//     // const selectionChanged = this.selectedChanged.bind(this);
//     // // const directionChanged = this.directionChanged.bind(this);
//     // const addRow = this.addRow.bind(this);
//     // const deleteRow = this.deleteRow.bind(this);
//     // const editRow = this.editRow.bind(this);
 

//   function selectedChanged(e) {
//     this.setState({
//       selectedRowIndex: e.component.getRowIndexByKey(e.selectedRowKeys[0]),
//     });
//   }

//   function directionChanged(e) {
//     config({
//       floatingActionButtonConfig: directions[e.selectedItem],
//     });

//     repaintFloatingActionButton();
//   }

//   function editRow() {
//     this.grid.instance.editRow(this.state.selectedRowIndex);
//     this.grid.instance.deselectAll();
//   }

//   function deleteRow() {
//     this.grid.instance.deleteRow(this.state.selectedRowIndex);
//     this.grid.instance.deselectAll();
//   }

//   function addRow() {
//     this.grid.instance.addRow();
//     this.grid.instance.deselectAll();
//   }


//     // const { selectedRowIndex } = selectedRowIndex;

//     return (
//       <div>
//         <DataGrid
//           id="grid"
//           dataSource={employees}
//           keyExpr="ID"
//           ref={(ref) => { this.grid = ref; }}
//           showBorders={true}
//           onSelectionChanged={this.selectionChanged}>
//           <Column dataField="Prefix" caption="Title" />
//           <Column dataField="FirstName" />
//           <Column dataField="LastName" />
//           <Column dataField="Position" width={130} />
//           <Column dataField="StateID" caption="State" width={125}>
//             <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
//           </Column>
//           <Column dataField="BirthDate" dataType="date" width={125} />
//           <Selection mode="single" />
//           <Editing mode="popup">
//             <Texts confirmDeleteMessage="" />
//           </Editing>
//         </DataGrid>
//         <SpeedDialAction
//           icon="add"
//           label="Add row"
//           index={1}
//           onClick={this.addRow} />
//         <SpeedDialAction
//           icon="trash"
//           label="Delete row"
//           index={2}
//           visible={selectedRowIndex !== undefined && selectedRowIndex !== -1}
//           onClick={this.deleteRow} />
//         <SpeedDialAction
//           icon="edit"
//           label="Edit row"
//           index={3}
//           visible={selectedRowIndex !== undefined && selectedRowIndex !== -1}
//           onClick={this.editRow} />
//         <div className="options">
//           <div className="caption">Options</div>
//           <div className="option">
//             <span>Direction: </span>
//             <SelectBox
//               dataSource={optionDirections}
//               defaultValue="auto"
//               onSelectionChanged={this.directionChanged}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }


// export default Category;
