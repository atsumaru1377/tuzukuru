import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import SortIcon from '@mui/icons-material/Sort';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import  { useState } from 'react';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseNew = () => {
    setAnchorEl(null);
    setText("新着順")
  };
  const handleCloseView = () => {
    setAnchorEl(null);
    setText("閲覧数")
  };
  const handleCloseFav = () => {
    setAnchorEl(null);
    setText("いいね")
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [text, setText] = useState("新着順");

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
        <Tab icon = {<img src="/static/images/adobelogo/figma.svg" alt = "figma logo" style={{width:"24px",height:"24px"}}/>} label="figma"sx={{width:"144px"}} />
        <Tab icon = {<img src="/static/images/adobelogo/powerpoint.svg" alt = "powerpoint logo" style={{width:"24px",height:"24px"}}/>} label="powerpoint"sx={{width:"144px"}} />
        <Tab icon= { <img src="/static/images/adobelogo/AfterEffects.png" alt = "aftereffects logo" style={{width:"24px",height:"24px"}}/>} label="After Effects" sx={{width:"144px"}}/>
        <Tab icon = {<img src="/static/images/adobelogo/illustrator.png" alt = "illustrator logo" style={{width:"24px",height:"24px"}}/>} label="illustrator" sx={{width:"144px"}}/>
        <Tab icon = {<img src="/static/images/adobelogo/indesign.png" alt = "indesign logo" style={{width:"24px",height:"24px"}}/>} label="indesign"sx={{width:"144px"}} />
        <Tab icon = {<img src="/static/images/adobelogo/photoshop.png" alt = "photoshop logo" style={{width:"24px",height:"24px"}}/>} label="photoshop" sx={{width:"144px"}}/>
        <Tab icon = {<img src="/static/images/adobelogo/Premiere.png" alt = "Premiere logo" style={{width:"24px",height:"24px"}}/>} label="Premiere" sx={{width:"144px"}}/>
        <Tab icon = {<img src="/static/images/adobelogo/xd.png" alt = "xd logo" style={{width:"24px",height:"24px"}}/>} label="XD"sx={{width:"144px"}} />
        <Tab icon = {<img src="/static/images/adobelogo/blender.svg" alt = "blender logo" style={{width:"24px",height:"24px"}}/>} label="blender"sx={{width:"144px"}} />
        <Tab icon = {<img src="/static/images/adobelogo/word.svg" alt = "word logo" style={{width:"24px",height:"24px"}}/>} label="word"sx={{width:"144px"}} />
        <Tab icon = {<img src="/static/images/adobelogo/excel.svg" alt = "excel logo" style={{width:"24px",height:"24px"}}/>} label="excel"sx={{width:"144px"}} />
        <Tab icon = {<img src="/static/images/adobelogo/canva.svg" alt = "canva logo" style={{width:"24px",height:"24px"}}/>} label="canva"sx={{width:"144px"}} />
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
      id="demo-positioned-button"
      aria-controls={open ? 'demo-positioned-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      >
        {text}
      </Button>
    </Box>
        <Divider sx={{mb:"16px"}}/>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleCloseNew}>新着順</MenuItem>
        <MenuItem onClick={handleCloseView}>閲覧数順
        </MenuItem>
        <MenuItem onClick={handleCloseFav}>いいね数順</MenuItem>
      </Menu>
    </Box>
    
  );
}
