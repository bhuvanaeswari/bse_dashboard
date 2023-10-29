import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import Navbar2 from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineIcon from "lineicons-react";
// import Logo from "../../../../assets/images/logo-resized.svg";
import Logo from "../../src/bse_logo2.png";
// import { connect } from "react-redux";
import menuItems from "./menuItems";
import { Avatar, Breadcrumbs, InputBase, Link, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
// import {
//   faArrowLeft,
//   faFolder,
//   faMinus,
//   faPlus
// } from "@fortawesome/pro-duotone-svg-icons";
// import appConfig from "../../../Utilities/app.config";
// import Translation from "../../../Language/Translation";
// import lineIconsToFA from "../../../Utilities/lineIconsToFA";
// import { useHistory } from "react-router-dom";
import {
  Box,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import BreadCrums from "../BreadCrumbs/BreadCrums";
import CardComp from "../container/CardComp";
// import CustomerContainer from "../container/CustomerContainer";
const drawerWidth = 195;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const StyledListItemButton = styled(ListItemButton)({
  flexGrow: 0,
});
const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  paddingLeft: "5px",
  height: "16px",
  width: "16px",
  color: "#393F49",
  minWidth: "35px !important",
}));
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root": {
    fontSize: "13px",
    color: "#393F49",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
}));
const RowContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  width: 300, // Adjust the width as needed
  borderRadius: 25,
  backgroundColor: "#f0f0f0",
  overflow: "hidden",
  height: "35px",
});

const ProfileContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginRight: "25px",
});

const SquareIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 8,
  padding: 8,
  backgroundColor: "#f0f0f0",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  fontSize: 16,
  fontWeight: "bold",
  padding: theme.spacing(1, 2),
  color:"black"
}));
const CustomStack = styled(Stack)(({ theme, open }) => ({
  flexDirection: "row",
  alignItems: "center",
  marginTop: "66px",
  marginLeft: open ? "230px" : "100px",
  backgroundColor:"#f5f5f5"
}));
const DrawerLeft = ({ projectName, headerHidden }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [activeTopMenuIndex, setActiveTopMenuIndex] = useState(-1);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(-1);
  const [activeSubMenuItemIndex, setActiveSubMenuItemIndex] = useState(-1);
  const [showBlogMenu, setShowBlogMenu] = useState(true);
  const [subIndex, setSubIndex] = useState(0);
  const [topIndex, setTopIndex] = useState(0);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const [showFinanceCard, setShowFinanceCard] = useState(false);
  const [showFinancecfCard, setShowFinancecfCard] = useState(false);
  const [showFinancefrCard, setShowFinancefrCard] = useState(false);
  const [showAceEquityCard, setShowAceEquityCard] = useState(false);
  
  const [state, setState] = useState({ showFinanceCard: false });
  const [all,setAll] = useState(false);
  const financeData = {
    title: "ACE Finance",
    numberOfData: 200,
    status: "success",
    timestamp: new Date().toLocaleString(),
    colr :"red",
    marginLeft:"200px"
  };
  const Data = {
    "ace_finance": {
      title: "ACE Finance",
      numberOfData: 200,
      status: "success",
      timestamp: new Date().toLocaleString(),
      colr: "red",
      // marginLeft: all ? "200px":open ? "500px" : "270px",
      marginLeft:open ? "200px" : "70px"
    },
    "ace_finance_cf": {
      title: "ACE Finance CF",
      numberOfData: 300,
      status: "success",
      timestamp: new Date().toLocaleString(),
      colr: "green",
      marginLeft:open ? "200px" : "70px",
    },
    "ace_finance_fr": {
      title: "ACE Finance FR",
      numberOfData: 3000,
      status: "success",
      timestamp: new Date().toLocaleString(),
      colr: "yellow",
      marginLeft:open ? "200px" : "70px",
    },
    "ace_equity": {
      title: "ACE Equity",
      numberOfData: 4500,
      status: "success",
      timestamp: new Date().toLocaleString(),
      colr: "purple",
      marginLeft:open ? "200px" : "70px",
    },
  };
 
  const BlogsSubMenu = [];
  const EasyEditSubMenu = [];
  let blogsGroup = "";
  let blogsIcon = "";
  const menu = menuItems(Data,setShowFinanceCard,setShowFinancecfCard,setShowFinancefrCard,setShowAceEquityCard,setAll);
  console.log("menu=======", menu, breadcrumbs);
  menu.map((menu, index) => {
    if (menu.group) {
      blogsGroup = menu.group;
      blogsIcon = menu.icon;
      BlogsSubMenu?.push({
        text: menu.label,
        icon: <LineIcon name="spinner" />,
        onClick: menu.onClick
      });
    } else {
      EasyEditSubMenu?.push({
        text: menu.label,
        icon: <FontAwesomeIcon icon="fa-solid fa-shield-halved" />,
        onClick: menu.onClick
      });
    }
  });

  const BlogSideBar = [
    {
      text: blogsGroup,
      icon: <FontAwesomeIcon icon="fa-solid fa-shield-halved" />,
      subMenuItems: BlogsSubMenu,
    },
  ];

  const EasyEditSideMenuBar = [...BlogSideBar, ...EasyEditSubMenu];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClick = (topIndex, subIndex) => {
    const updatedBreadcrumbs = [menu[topIndex].text];
    setBreadcrumbs(updatedBreadcrumbs);
    setActiveTopMenuIndex(topIndex);
    setActiveSubMenuIndex(subIndex);

    if (menu[topIndex]?.subMenuItems?.length != 0) {
      setActiveTopMenuIndex(topIndex);
      setShowMainMenu(false);
    }
    if (subIndex === 0 && topIndex === 4) {
      setShowBlogMenu(!showBlogMenu);
      setActiveSubMenuItemIndex((prevState) => {
        localStorage.setItem(
          "selectedSubMenuItemIndex",
          prevState === subIndex ? -1 : subIndex
        );
        return prevState === subIndex ? -1 : subIndex;
      });

      localStorage.setItem("selectedShowBlogMenu", showBlogMenu);
    }
    localStorage.setItem("selectedMenuIndex", topIndex);
    localStorage.setItem("selectedSubMenuIndex", subIndex);
  };
  const handleBackClick = () => {
    setShowMainMenu(true);
    setActiveTopMenuIndex(-1);
    setActiveSubMenuIndex(-1);
  };

  useEffect(() => {
    const storedTopIndex = localStorage.getItem("selectedMenuIndex");
    const storedSubIndex = localStorage.getItem("selectedSubMenuIndex");
    const storedActiveSubMenuItemIndex = localStorage.getItem(
      "selectedSubMenuItemIndex"
    );
    const storedShowBlogMenu = localStorage.getItem("selectedShowBlogMenu");
    if (menu[storedTopIndex]?.subMenuItems?.length != 0) {
      setActiveTopMenuIndex(parseInt(storedTopIndex));
      setShowMainMenu(false);
    }
    if (storedActiveSubMenuItemIndex) {
      setActiveSubMenuItemIndex(parseInt(storedActiveSubMenuItemIndex));
    }
  }, [subIndex]);

  return (
    <Box>
      <AppBar
        position="fixed"
        open={open}
        color="default"
        style={{
          backgroundColor: "white",
          boxShadow:
            " 0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 0px 2px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <Toolbar
          className="p-0"
          style={{
            paddingRight: "0px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <RowContainer>
            <SearchContainer>
              <SearchInput placeholder="Search..." />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </SearchContainer>
            <ProfileContainer>
              <SquareIconButton sx={{ marginRight: "15px",height:"33px",width:"33px"}}>
                <NotificationsOutlinedIcon sx={{height:"23px",width:"23px"}}/>
              </SquareIconButton>
              <Avatar
                alt="Remy Sharp"
                src="avatar.png"
                variant="rounded"
                sx={{height:"30px",width:"30px"}}
              />
            </ProfileContainer>
          </RowContainer>
        </Toolbar>
      </AppBar>
   
      <div style={{backgroundColor:"#f5f5f5",width:"100%",height:"100%"}}>
      <CustomStack open={open}>
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{marginTop:"10px"}}>
          <Link
            href="/"
            underline="hover"
            sx={{
              fontSize: "12px",
              color: "#000",
              cursor: "pointer",
            }}
          >
            Home
          </Link>
          {breadcrumbs.map((breadcrumb, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: "12px",
                color: "#000",
                cursor: "pointer",
              }}
            >
              {breadcrumb}
            </Link>
          ))}
        </Breadcrumbs>
      </CustomStack>
      {/* <CustomerContainer/> */}
      <Stack alignItems="center" flexDirection="row" className="mt-20">
     {showFinanceCard  && <CardComp data={Data["ace_finance"]} />}
     {showFinancecfCard && <CardComp data={Data["ace_finance_cf"]} />}
     {showFinancefrCard && <CardComp data={Data["ace_finance_fr"]} />}
     {showAceEquityCard && <CardComp data={Data["ace_equity"]} />}
      </Stack>
      </div>
      <Drawer variant="permanent" open={open}>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 999,
            backgroundColor: "white",
          }}
        >
          <DrawerHeader>
            <img
              src={Logo}
              width={150}
              height={100}
              //   onClick={() => history.push(`/${projectName}/dashboard`)}
              alt={""}
              style={{ marginLeft: "0px", marginRight: "10px" }}
            />
            {/* <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                marginRight: "2px",
                marginLeft: "0px",
              }}
            >
              BSE
            </Typography> */}
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </div>
        <Divider
          style={{
            backgroundColor: "white",
            boxShadow:
              " 0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 0px 2px 0px rgb(0 0 0 / 12%)",
          }}
        />
        <Box
          sx={{
            height: showMainMenu ? "100%" : "auto",
            overflowY: "auto",
            overflowX: showMainMenu ? "auto" : "hidden",
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              height: showMainMenu ? "100%" : "auto",
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            {showMainMenu ? (
              <>
                {menu.map((item, index) => (
                  <>
                    <StyledListItemButton
                      key={index}
                      selected={activeTopMenuIndex === index}
                      onClick={() => {
                        handleMenuClick(index, -1);
                        item.onClick();
                      }}
                      sx={
                        item.divider
                          ? {
                              borderTop: "0.3px solid rgba(0, 0, 0, 0.12)",
                            }
                          : {}
                      }
                    >
                      {open ? (
                        <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                      ) : (
                        <Tooltip
                          //   {...appConfig.tooltip}
                          title={item.text}
                          className="w-fit"
                          placement="right"
                        >
                          <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                        </Tooltip>
                      )}
                      <StyledListItemText primary={item.text} />
                    </StyledListItemButton>
                  </>
                ))}
              </>
            ) : (
              <>
                <ListItemButton
                  onClick={handleBackClick}
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 999,
                    backgroundColor: "white",
                    overflow: "hidden",
                  }}
                >
                  {open ? (
                    <StyledListItemIcon>
                      <FontAwesomeIcon icon="fa-solid fa-shield-halved" />
                    </StyledListItemIcon>
                  ) : (
                    <Tooltip
                      //   {...appConfig.tooltip}
                      title="Back"
                      className="w-fit"
                      placement="right"
                    >
                      <StyledListItemIcon>
                        <FontAwesomeIcon icon="fa-solid fa-shield-halved" />
                      </StyledListItemIcon>
                    </Tooltip>
                  )}
                  <StyledListItemText primary="Back To Main Menu" />
                </ListItemButton>
                <List>
                  {menu[activeTopMenuIndex]?.subMenuItems.map(
                    (subItem, subIndex) => (
                      <>
                        <ListItemButton
                          key={subIndex}
                          selected={activeSubMenuIndex === subIndex}
                          onClick={() => {
                            handleMenuClick(activeTopMenuIndex, subIndex);
                            subItem.onClick();
                          }}
                        >
                          {open ? (
                            <StyledListItemIcon>
                              {subItem.icon}
                            </StyledListItemIcon>
                          ) : (
                            <Tooltip
                              //   {...appConfig.tooltip}
                              title={subItem.text}
                              className="w-fit"
                              placement="right"
                            >
                              <StyledListItemIcon>
                                {subItem.icon}
                              </StyledListItemIcon>
                            </Tooltip>
                          )}
                          <StyledListItemText primary={subItem.text} />
                          {subItem?.subMenuItems && (
                            <StyledListItemIcon
                              sx={{ visibility: open ? "visible" : "hidden" }}
                            >
                              {/* <FontAwesomeIcon
                                className="blog-icon"
                                // icon={showBlogMenu ? faPlus : faMinus}
                              /> */}
                            </StyledListItemIcon>
                          )}
                        </ListItemButton>
                        {!open &&
                          activeTopMenuIndex >= 0 &&
                          subItem?.subMenuItems && (
                            <List
                              sx={{
                                paddingTop: 0,
                                paddingBottom: 0,
                              }}
                            >
                              <Divider />
                              {subItem?.subMenuItems.map(
                                (subMenuItem, subMenuItemIndex) => (
                                  <ListItem button key={subMenuItemIndex}>
                                    {open ? (
                                      <StyledListItemIcon>
                                        {subMenuItem.icon}
                                      </StyledListItemIcon>
                                    ) : (
                                      <Tooltip
                                        // {...appConfig.tooltip}
                                        title={subMenuItem.text}
                                        className="w-fit"
                                        placement="right"
                                      >
                                        <StyledListItemIcon>
                                          {subMenuItem.icon}
                                        </StyledListItemIcon>
                                      </Tooltip>
                                    )}
                                    <StyledListItemText
                                      primary={subMenuItem.text}
                                    />
                                  </ListItem>
                                )
                              )}
                              <Divider />
                            </List>
                          )}
                        {subIndex === activeSubMenuItemIndex && open && (
                          <List
                            sx={{
                              paddingTop: 0,
                              paddingBottom: 0,
                            }}
                          >
                            {subItem.subMenuItems && <Divider />}
                            {subItem?.subMenuItems?.map(
                              (subMenuItem, subMenuItemIndex) => (
                                <ListItem
                                  button
                                  key={subMenuItemIndex}
                                  onClick={() => subMenuItem.onClick()}
                                >
                                  {open ? (
                                    <StyledListItemIcon>
                                      {subMenuItem.icon}
                                    </StyledListItemIcon>
                                  ) : (
                                    <Tooltip
                                      //   {...appConfig.tooltip}
                                      title={subMenuItem.text}
                                      className="w-fit"
                                      placement="right"
                                    >
                                      <StyledListItemIcon>
                                        {subMenuItem.icon}
                                      </StyledListItemIcon>
                                    </Tooltip>
                                  )}
                                  <StyledListItemText
                                    primary={subMenuItem.text}
                                  />
                                </ListItem>
                              )
                            )}
                            {subItem.subMenuItems && <Divider />}
                          </List>
                        )}
                        {showBlogMenu &&
                        subIndex === 0 &&
                        open &&
                        subItem.text === "Services & Packages" ? (
                          <Divider />
                        ) : (
                          ""
                        )}
                      </>
                    )
                  )}
                </List>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default DrawerLeft;
