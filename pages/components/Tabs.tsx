import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import SortIcon from '@mui/icons-material/Sort';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
    <Box sx={{ bgcolor: 'background.paper',p:"16px",pb:"0",display:'flex',justifyContent:"space-between",alignItems:'center',margin:"0 calc(12.5% - 32px)"}} >
      <Tabs
        value={value}
        sx={{
            width:"80%",
            mb:"0"
        }}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      > 
        <Tab icon = {<LocalFireDepartmentIcon sx={{color:"red"}}/>} label="人気" /> 
        <Tab icon= { <img src="/static/images/adobelogo/AfterEffects.png" alt = "aftereffects logo"/>} label="After Effects" /> 
        <Tab icon = {<img src="/static/images/adobelogo/illustrator.png" alt = "illustrator logo"/>} label="illustrator" />
        <Tab icon = {<img src="/static/images/adobelogo/indesign.png" alt = "indesign logo"/>} label="indesign" />
        <Tab icon = {<img src="/static/images/adobelogo/photoshop.png" alt = "photoshop logo"/>} label="photoshop" />
        <Tab icon = {<img src="/static/images/adobelogo/Premiere.png" alt = "Premiere logo"/>} label="Premiere" />
        <Tab icon = {<img src="/static/images/adobelogo/xd.png" alt = "xd logo"/>} label="XD" />
      </Tabs>
      <Button startIcon={<SortIcon/>} 
        size = "large" color="secondary"sx={{
        height:"48px",
        padding:'20px',
        mb:"0",
        ml:"16px",
        borderRadius:"8px",
        fontWeight:"bold",
        border:"none",
        boxShadow:"0 0 10px rgba(0,0,0,0.15)"
      }}
      >
        新着順
      </Button>
    </Box>
        <Divider sx={{mb:"16px"}}/>
    </Box>
  );
}
