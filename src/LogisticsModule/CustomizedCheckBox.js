import Checkbox from '@mui/material/Checkbox';
import React from 'react'

const CustomizedCheckBox = () => {
  return (
    <Checkbox disableRipple={true}
      sx={{
        color: "#8493AE",
        '&.Mui-checked': {
          color: "#054E8B",
        },
        '& .MuiSvgIcon-root': {
        }
      }}
    />
  )
}

export default CustomizedCheckBox
