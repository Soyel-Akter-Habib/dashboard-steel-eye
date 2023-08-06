import ListRow from "./ListRow";
import React from "react";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows,time,curr,details,setDetails,tms,setTms,searchText }) => {

  const handleRowClick = (row) => {

    alert("working");
  };


  const filteredRows ="";
  if(searchText.lenght>0){

     filteredRows = rows.filter((row) =>
    row["&id"].toString().includes(searchText.toLowerCase()) ||
    row.executionDetails.buySellIndicator.toLowerCase().includes(searchText.toLowerCase()) ||
    row.executionDetails.orderStatus.toLowerCase().includes(searchText.toLowerCase()) ||
    row.bestExecutionData.orderVolume[curr].toLowerCase().includes(searchText.toLowerCase())
    // Add other columns to search here
    // Example: row.column3.toLowerCase().includes(searchText.toLowerCase())
    );
  }
 


  

  
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {curr}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {filteredRows.map((row,index) => (

          <ListRow r={row} i={index} d={details} sd={setDetails} t={tms} st={setTms} text = {searchText}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{time[index].timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[curr]}</ListRowCell>
          </ListRow>

        ))}
      </tbody>
    </table>
  );
};

export default List;
