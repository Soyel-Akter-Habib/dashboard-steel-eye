import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("USD");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({
    // "buySellIndicator": "BUYI",
    //     "orderStatus": "NEWO",
    //     "orderType": "Market"
  });
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({
    // "orderReceived": "2022-11-04T15:29:00Z",
    //     "orderStatusUpdated": "2022-11-04T15:29:00Z",
    //     "orderSubmitted": "2022-11-04T15:29:00Z"
  });

  

  var size = Object.keys(mockData.results).length;

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={size + " orders"} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)
            }
            data={mockData.results}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={mockData.results} time={timestamps.results} curr={currency} details={selectedOrderDetails} setDetails={setSelectedOrderDetails} tms={selectedOrderTimeStamps} setTms={setSelectedOrderTimeStamps} sText = {searchText} />
      </div>
    </div>
  );
};

export default Dashboard;
