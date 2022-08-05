import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Divider } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import BottomNavigationScreen from './BottomNavigationScreen';
import CustomizedInputs from './CustomizedInputs';
import axios from "axios";
import { useEffect } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const baseURL = "http://127.0.0.1:8000/dispatchhistory";
export const LogisticsHistory = () => {
  const classes = loginPageStyles();
  const buttonStyle = { fontFamily: 'Mulish', backgroundColor: '#F2F4F7', textTransform: "capitalize", color: '#455066', fontSize: '12px', fontWeight: '400', lineHeight: '15px' };
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
  }, [post]);
  if (!post) return null;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '100%', mb: '8px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} >
              <Box className={classes.heading10} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', color: '#0F2853', fontWeight: '700', fontSize: '21px', lineHeight: '27px' }} > History</Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', marginRight: '14px', width: '100%' }}>
              <Box sx={{ display: "flex", alignItems: "center", border: 1, borderRadius: '3px', marginLeft: '12px', borderColor: '#DAE0EB', width: { xs: 300, md: '100%', sm: 475, lg: '100%' } }}  >
                <SearchIcon sx={{ color: "#DADADA", display: 'flex', alignItems: 'center', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '8px', borderColor: '#DADADA', paddingRight: '7px' }} />
                <TextField variant="standard" placeholder='Search [Section]'
                  sx={{
                    display: 'flex', alignItems: 'center',
                    '& .MuiInput-input': { fontSize: '17px', lineHeight: '21px', fontWeight: '400', fontFamily: 'Mulish' }
                  }} InputProps={{ disableUnderline: true }} />
              </Box>
              <FilterListIcon color="action" sx={{ fontSize: '37px' }} />
            </Box>
            <Box sx={{ mt: '14px', pl: '10px', bgcolor: '#054E8B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '4px' }}>
              <Box className={classes.heading10} sx={{ color: '#FAFAFA', fontWeight: '700', fontSize: '20px', lineHeight: '33.24px' }}>Dispatch History </Box>
            </Box>
            <Box sx={{ my: '8px', mx: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box className={classes.heading10} sx={{ fontSize: '17px', fontWeight: '700', lineHeight: '22px', color: '#2A3752' }}>[Clinic Name]</Box>
              </Box>
              <Button variant='text' sx={{ width: '101px', height: '23px', borderRadius: '20px', border: 2, borderColor: '#54CB83' }} style={buttonStyle}>Delivered</Button>
            </Box>
            <Box>
              {post.map((data, index) => (
                <>
                  <Box sx={{ pl: '10px', py: '5.5px', pr: '20px', bgcolor: '#EBEFF5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Box sx={{ fontFamily: 'Mulish', color: '#2A3752', fontWeight: '400', fontSize: '14px', lineHeight: '19px', maxWidth: '150px', width: '100%', mr: '3px' }}>{data.orderid}</Box>

                    </Box>
                    <Box sx={{ display: 'flex', alignContent: 'end', alignItems: 'center', }}>
                      <CustomizedInputs />
                    </Box>
                  </Box>
                  <Divider sx={{ bgcolor: "#DAE0EB" }} />
                </>
              ))}
            </Box>
            <Box sx={{ width: '100%', mt: '20px' }} elevation='3'>
              <Box position='fixed' sx={{ bottom: 0, width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }, }}>
                <BottomNavigationScreen />
              </Box>
            </Box>
          </Box>
        </Grid >
      </Container >
    </React.Fragment >
  );
}
export default LogisticsHistory