import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import CallIcon from '@mui/icons-material/Call';
import erroralert from '../Images/erroralert.svg'
import Box from '@mui/material/Box';
import { loginPageStyles } from "../LoginScreens/LoginStyles";
import wazeimg from '../Images/wazeimg.svg'
import uparrow from '../Images/up.png'
import alertimg from '../Images/alertimg.svg'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Divider } from '@mui/material';

const baseURL = "http://127.0.0.1:8000/currentpickup";

const CurrentPickData = () => {

  const buttonStyle = { fontFamily: 'Mulish', backgroundColor: '#ffffff', textTransform: "capitalize", color: '#455066', fontSize: '11px', fontWeight: '400', lineHeight: '15px' };

  const [style1, setStyle1] = useState("");
  const handleButton1 = (index) => {
    console.log(index)
    setStyle1(index);
  };
  const classes = loginPageStyles();
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

  return (
    <div>

      <Box>
        {post.map((data, index) => (
          <>
            <Box key={index} >
              <Box sx={{ bgcolor: 'background.paper', width: 1, display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <Box sx={{ px: '12px', color: '#111111', display: 'inline', fontWeight: '700', fontSize: '25px', lineHeight: '41px', marginTop: '9px', width: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: '8px', alignItems: 'end', alignContent: 'end' }}>
                    <Box className={classes.heading10} sx={{ marginBottom: '8px', color: '#000000', fontWeight: '700', fontSize: '17px', lineHeight: '22px', display: 'flex', alignItems: 'center' }}>
                      {data.name}
                      <Box sx={{ mx: '5px' }}></Box>
                      <img src={erroralert} alt='' style={{ width: '22px', height: '22px' }} />
                      <Box sx={{ mx: '5px' }}></Box>
                      <Box className={classes.heading} sx={{ color: '#8493AE', fontWeight: '400', fontSize: '13px', lineHeight: '16px' }}>[distance]</Box>
                    </Box>
                    <Box>
                      <img src={wazeimg} alt='' />
                    </Box>
                  </Box>
                  <Box sx={{ mt: '-2px', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                      <CallIcon sx={{ fontSize: 19, marginRight: '7px', color: '#8493AE' }} />
                      <Box className={classes.heading} sx={{ fontSize: '13px', fontWeight: '400', lineHeight: '16px', color: '#455066' }}>{data.phone}</Box>
                    </Box>
                    <Button variant='text' sx={{ width: '101px', height: '23px', borderRadius: '20px', border: 1, borderColor: '#8493AE' }} style={buttonStyle}>{data.status}</Button>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', mt: '3px' }}>
                    <Box className={classes.heading10} sx={{ color: '#455066', fontWeight: '700', fontSize: '15px', lineHeight: '20px', display: 'flex', alignItems: 'center' }}> XX</Box>
                    <Box sx={{ mr: '4px' }}></Box>
                    <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', display: 'flex', alignItems: 'center' }}>
                      {data.Urgentorder}
                      <img src={alertimg} alt='' />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', mt: '4px' }}>
                    <Box className={classes.heading10} sx={{ color: '#455066', fontWeight: '700', fontSize: '15px', lineHeight: '20px', display: 'flex', alignItems: 'center' }}> XX</Box>
                    <Box sx={{ mr: '4px' }}></Box>
                    <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', display: 'flex', alignItems: 'center' }}>
                      {data.eOrder}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', mt: '4px' }}>
                    <Box className={classes.heading10} sx={{ color: '#455066', fontWeight: '700', fontSize: '15px', lineHeight: '20px', display: 'flex', alignItems: 'center' }}> XX</Box>
                    <Box sx={{ mr: '4px' }}></Box>
                    <Box className={classes.heading} sx={{ color: '#455066', fontWeight: '400', fontSize: '13px', lineHeight: '16px', display: 'flex', alignItems: 'center' }}>
                      {data.noneorder}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box onClick={() => handleButton1(index)} sx={{ display: 'flex', marginTop: '10px', marginBottom: '9px', justifyContent: 'center' }}>
                <img src={uparrow} alt='' style={{ width: '29px', height: '8.6px', }} />
              </Box>
              <Divider />
            </Box>
          </>
        ))}
      </Box>
    </div >
  );
}
export default CurrentPickData;
