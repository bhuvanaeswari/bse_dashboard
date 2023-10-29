import React   from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineIcon from "lineicons-react";
const menuItems = (Data,setShowFinanceCard, setShowFinancecfCard,setShowFinancefrCard,setShowAceEquityCard,setAll) => {
  console.log("menu dtat=====",Data)
  return [
    {
      text: "Dashboard",
      icon: <LineIcon name="grid-alt" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
        setShowFinanceCard(true);
        setShowFinancecfCard(true);
        setShowFinancefrCard(true);
        setShowAceEquityCard(true);
        setAll(true);
        
      }
    },
    {
      text: "ACE Finance",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // handleClick("ace_finance"); // Key for ACE Finance item
        setShowFinanceCard(true);
        setShowFinancecfCard(false);
        setShowFinancefrCard(false);
        setShowAceEquityCard(false);
        setAll(false);
      }
    },
    {
      text: "ACE Finance_cf",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        setShowFinancecfCard(true);
        setShowFinanceCard(false);
        setShowFinancefrCard(false);
        setShowAceEquityCard(false);
        setAll(false);
      }
    },
    {
      text: "ACE Finance_fr",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
        setShowFinancefrCard(true);
        setShowFinancecfCard(false);
        setShowFinanceCard(false);
        setShowAceEquityCard(false);
        setAll(false);
      }
    },
    {
      text: "ACE Equity",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
        setShowAceEquityCard(true);
        setShowFinancecfCard(false);
        setShowFinanceCard(false);
        setShowFinancefrCard(false);
        setAll(false);
        
      }
    },
    {
      text: "ACE Shp",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "ACE Company Master",
    icon: <LineIcon name="dashboard" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "BSE MarketCapital",
    icon: <LineIcon name="lni lni-ticket" />,
      subMenuItems: [],
      divider: true,
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "BSE Shp",
    icon: <LineIcon name="lni lni-ticket" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "BSE Equity",
    icon: <LineIcon name="lni lni-ticket" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
    {
      text: "BSE Finance",
    icon: <LineIcon name="lni lni-ticket" />,
      subMenuItems: [],
      onClick: () => {
        // Handle the click event
        console.log("Dashboard menu item clicked");
      }
    },
  ];
};

export default menuItems;
