import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const AxiosConnection = (props) => {
  const [over, setOver] = useState(false);
  const [count, setCount] = useState(0);
  const [aestheticdata, setAestheticData] = useState([]);
  const API_URL = "http://127.0.0.1:8000/clinics"
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get(API_URL).then((response) => {
      const mydata = response.data;
      if (mydata && Array.isArray(mydata)) {
        console.log(mydata);
        setAestheticData(mydata);
      }
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
    })
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Nothing here..</p>
    </div>
  )
}
export default AxiosConnection;