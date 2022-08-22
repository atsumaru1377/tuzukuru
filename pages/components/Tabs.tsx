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
    <Box sx={{ bgcolor: 'background.paper',p:"16px",w:"100%",display:'flex',alignItems:'end'}}>
      <Tabs
        value={value}
        sx={{
            width:"80%"
        }}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      > 
        <Tab icon = {<LocalFireDepartmentIcon/>} label="人気" /> 
        <Tab icon = {<LocalFireDepartmentIcon/>}label="After Effects" />
        <Tab icon = {<LocalFireDepartmentIcon/>}label="Item Three" />
        <Tab icon = {<LocalFireDepartmentIcon/>}label="Item Four" />
        <Tab icon = {<LocalFireDepartmentIcon/>}label="Item Five" />
        <Tab icon = {<LocalFireDepartmentIcon/>}label="Item Six" />
        <Tab icon = {<LocalFireDepartmentIcon/>}label="Item Seven" />
      </Tabs>
      <Button variant="outlined"startIcon={<SortIcon/>} 
      size = "large" color="secondary"sx={{
        height:"48px",
        padding:'20px',
        mb:"10px",
        borderRadius:"20px",
        fontWeight:"bold"
      }}
      >
        新着順
      </Button>
    </Box>
        <Divider/>
    </Box>
  );
}
