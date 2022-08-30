import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import SortIcon from '@mui/icons-material/Sort';
import {recipeData} from '../../database/recipeData';
import { RecipeCardType } from '../../plugins/type';
import { updateAvailability } from '../../database/addReport';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

type ToolID = {
  key : number;
  tool_name: string;
  extension: string;
}

const toolList:ToolID[] = [
  {key:0, tool_name:"popular", extension:""},
  {key:1, tool_name:"figma", extension:".svg"},
  {key:2, tool_name:"AfterEffects", extension:".png"},
  {key:3, tool_name:"illustrator", extension:".png"},
  {key:4, tool_name:"indesign", extension:".png"},
  {key:5, tool_name:"Photoshop", extension:".png"},
  {key:6, tool_name:"Premiere", extension:".png"},
  {key:7, tool_name:"xd", extension:".png"},
  {key:8, tool_name:"blender", extension:".svg"},
  {key:9, tool_name:"word", extension:".svg"},
  {key:10, tool_name:"excel", extension:".svg"},
  {key:11, tool_name:"powerpoint", extension:".svg"},
  {key:12, tool_name:"canva", extension:".svg"},
];

const imgRef:string = "/static/images/adobelogo/"

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState<RecipeCardType[]>(
    recipeData
  )

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    updateAvailability(toolList[newValue].tool_name);
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
        {toolList.map((data: ToolID,index:number) => {
          if (data.key !== 0) {
            return (
              <Tab icon={
                <img
                  src={imgRef + data.tool_name + data.extension}
                  alt={data.tool_name + " logo"}
                  style={{width:"24px",height:"24px"}}
                />}
                  sx={{width:"144px"}}
                  label={data.tool_name}
              />
            )
          }
        })};
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
