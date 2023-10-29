import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import {styled , useTheme} from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "./breadCrums.css"

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const CustomStack = styled(Stack)(({ theme,open }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '80px',
    marginLeft: open ?'230px' :'100px',
    // backgroundColor:"#10486b"
  }));
export default function BreadCrums({open}) {
    console.log(open)
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}  style={{
        fontSize: "12px",
        color: "#000",
        cursor: "pointer"
      }}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      style={{
        fontSize: "12px",
        color: "#000",
        cursor: "pointer"
      }}
    >
      Customers
    </Link>,
    <Link key="3"color="inherit"
    underline="hover"
    sx={{
        fontSize: "12px",
        color: "#000",
        cursor: "pointer"
      }}>
      Add New
    </Link>,
  ];
  return (
    <CustomStack open={open}>
          {/* sx={{marginTop:"80px",marginLeft:"100px"}}> */}
      <Breadcrumbs separator="›" aria-label="breadcrumb" className="custom-breadcrumbs">
        {breadcrumbs}
      </Breadcrumbs>
    </CustomStack>
  );
}