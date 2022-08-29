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
    <Box sx={{ bgcolor: 'background.paper',pb:"0",display:'flex',justifyContent:"space-between",alignItems:'center'}} >
      <Tabs
        value={value}
        sx={{
            width:"calc(100% - 128px)",
            mb:"0",
        }}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="design tools tabs"
      > 
        <Tab icon = {<LocalFireDepartmentIcon sx={{color:"red"}}/>} label="人気" sx={{width:"144px"}}/> 
        <Tab icon = {<img src="/static/images/adobelogo/figma_logo.svg" alt = "blender logo" style={{width:"24px",height:"24px"}}/>} label="figma"sx={{width:"144px"}} />
        <Tab icon= { <img src="/static/images/adobelogo/AfterEffects.png" alt = "aftereffects logo"/>} label="After Effects" sx={{width:"144px"}}/> 
        <Tab icon = {<img src="/static/images/adobelogo/illustrator.png" alt = "illustrator logo"/>} label="illustrator" sx={{width:"144px"}}/>
        <Tab icon = {<img src="/static/images/adobelogo/indesign.png" alt = "indesign logo"/>} label="indesign"sx={{width:"144px"}} />
        <Tab icon = {<img src="/static/images/adobelogo/photoshop.png" alt = "photoshop logo"/>} label="photoshop" sx={{width:"144px"}}/>
        <Tab icon = {<img src="/static/images/adobelogo/Premiere.png" alt = "Premiere logo"/>} label="Premiere" sx={{width:"144px"}}/>
        <Tab icon = {<img src="/static/images/adobelogo/xd.png" alt = "xd logo"/>} label="XD"sx={{width:"144px"}} />
        <Tab icon = {<img src="/static/images/adobelogo/blender.svg" alt = "blender logo" style={{width:"32px",height:"32px"}}/>} label="blender"sx={{width:"144px"}} />
      </Tabs>
      <Button startIcon={<SortIcon/>} 
        size = "large" sx={{
        height:"48px",
        padding:'20px',
        mb:"0",
        ml:"16px",
        borderRadius:"8px",
        fontWeight:"bold",
        border:"none",
        boxShadow:"0 0 10px rgba(0,0,0,0.15)",
      }}
      >
        新着順
      </Button>
    </Box>
        <Divider sx={{mb:"16px"}}/>
    </Box>
  );
}
