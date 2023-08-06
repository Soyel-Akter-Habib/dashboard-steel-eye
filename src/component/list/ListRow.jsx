import styles from "./ListRow.module.css";
import mockData from '../../assets/data.json';
import timestamps from '../../assets/timeStamps.json';
import List from "./List";
import { useState } from "react";



const ListCell = ({ children,r,i,d,sd,t,st,searchText }) => {

  const [isSelected,setIsSelected] = useState(null);
  
  
   d = {
    buySellIndicator: r.executionDetails.buySellIndicator,
    orderStatus: r.executionDetails.orderStatus,
    orderType: r.executionDetails.orderType,
  };
  
  t ={
    orderReceived:timestamps.results[i].timestamps.orderReceived,
    orderStatusUpdated:timestamps.results[i].timestamps.orderStatusUpdated,
    orderSubmitted:timestamps.results[i].timestamps.orderStatusUpdated,
  }

  const handleRowClick=(row,index,details,tms)=>{
    setIsSelected((prev)=> (prev===i? -1:i))

    // alert(row.executionDetails.orderType);
    if(isSelected>=0){
      sd(d);
      st(t);
      
    }else{
      sd({});
      st({});
    }
    
    
  }

  if(searchText!=null){
    if(children["@id"].indexOf(searchText)>-1){
      children.style.display = "none";
    }else{
      children.style.display ="";
      
      
    }
  }
  return <tr  onClick={()=> handleRowClick(r,i,d,sd,t,st)} className={styles.cell}>{children}</tr>;
};

export default ListCell;
