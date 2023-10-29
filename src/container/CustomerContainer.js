import {
  Button,
  Divider,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CustomButton = styled(Button)`
  text-transform: none;
  color: black;
  font-size: 13px;
`;

const Container = styled("div")`
  border-radius: 8px;
  background-color: white;
  margin-left: 80px;
  width: 93%;
  margin-top: 10px;
`;

const Row = styled("div")`
  margin-bottom: 1px;
  display: flex;
  gap: 26px;
  margin-left: 10px;
`;
const TextFieldWrapper = styled("div")`
  margin: 8px 0;
`;

const Asterisk = styled("span")`
  color: red;
//   margin-right: 240px;
`;

const AsteriskTypography = styled(Typography)`
  display: inline-flex;
  align-items: center;

`;

const CustomerContainer = () => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const handleEditorChange = (state) => {
  //   setEditorState(state);
  // };

  return (
    <>
  
      <Container>
      <div style={{backgroundColor:"aliceblue",display:"flex",height:"50px"}}>
        <Typography sx={{marginLeft:"17px",marginTop:"15px"}}>Date & Time :</Typography>
    </div>
        <Row>
          <CustomButton>Basic Information</CustomButton>
          <CustomButton>Official Mapping</CustomButton>
          <CustomButton>Contact Information</CustomButton>
          <CustomButton>Registration Information</CustomButton>
          <CustomButton>Registration & KYC Information</CustomButton>
          <CustomButton>Promoter Information</CustomButton>
          <CustomButton>Compliances Information</CustomButton>
        </Row>
        <Divider
          sx={{
            bgcolor: "grey.500",
            width: "98%",
            marginLeft: "10px",
            marginBottom: "10px",
          }}
        />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <AsteriskTypography>
              Type
              <Asterisk>*</Asterisk>
            </AsteriskTypography>
          </Grid>
          <Grid item xs={4}>
            <AsteriskTypography>
              Name
              <Asterisk>*</Asterisk>
            </AsteriskTypography>
          </Grid>
          <Grid item xs={4}>
            <AsteriskTypography>
              Phone Number
              <Asterisk>*</Asterisk>
            </AsteriskTypography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <TextFieldWrapper>
              <TextField sx={{ width: "92%" }} />
            </TextFieldWrapper>
          </Grid>
          <Grid item xs={4}>
            <TextField sx={{ width: "92%" }} />
          </Grid>
          <Grid item xs={4}>
            <TextField sx={{ width: "92%" }} />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <AsteriskTypography>
              Address Line 1<Asterisk>*</Asterisk>
            </AsteriskTypography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Address Line 2</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Address Line 3</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <TextFieldWrapper>
              <TextField sx={{ width: "92%" }} />
            </TextFieldWrapper>
          </Grid>
          <Grid item xs={4}>
            <TextField sx={{ width: "92%" }} />
          </Grid>
          <Grid item xs={4}>
            <TextField sx={{ width: "92%" }} />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <AsteriskTypography>
              country
              <Asterisk>*</Asterisk>
            </AsteriskTypography>
          </Grid>
          <Grid item xs={4}>
            <AsteriskTypography>
              city
              <Asterisk>*</Asterisk>
            </AsteriskTypography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Description</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="flex-start" style={{ marginBottom: "-58px" }}>
          <Grid item xs={4}>
          <TextFieldWrapper>
            <TextField sx={{ width: "92%" }} />
            </TextFieldWrapper>
          </Grid>
          <Grid item xs={4}>
          <TextFieldWrapper>
            <TextField sx={{ width: "92%" }} />
            </TextFieldWrapper>
          </Grid>
      
          <Grid item xs={4} >
            <ReactQuill style={{height:"118px", width: "92%" ,marginLeft:"15px",marginTop:"5px"}}
              value={description}
              onChange={handleDescriptionChange}
            />
            {/* <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
      /> */}
              </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={4}>
            <AsteriskTypography>
              state
              <Asterisk>*</Asterisk>
            </AsteriskTypography>
          </Grid>
          <Grid item xs={4}>
            <AsteriskTypography>
              pincode
              <Asterisk>*</Asterisk>
            </AsteriskTypography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={4}>
            <TextFieldWrapper>
              <TextField sx={{ width: "92%" }} />
            </TextFieldWrapper>
          </Grid>
          <Grid item xs={4}>
            <TextField sx={{ width: "92%" }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CustomerContainer;
