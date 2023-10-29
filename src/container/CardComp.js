import React from "react";
import { Card, CardContent, Typography } from "@mui/material";


const CardComp = ({data}) => {
  const { title, numberOfData, status, timestamp, colr,marginLeft } = data;
  const cardStyle = {
    backgroundColor: `${colr}`,
    width: "300px", // Set your desired width
    height: "250px", // Set your desired height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft : `${marginLeft}`
  };
  console.log("selcome to card====")
  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number of Data Scraped: {numberOfData}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Timestamp: {timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComp;
