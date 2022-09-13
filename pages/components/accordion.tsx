import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div style={{borderRadius:"15px"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} 
                sx = {{
                  boxShadow:"none",
                  filter:"drop-shadow(0 0 15px rgba(0 ,0 ,0 ,.1))",
                  border:"none",
                  zIndex:"4000",
                  borderRadius:"15px",
                  "&::before":{
                    backgroundColor:"white"
                  }
                }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"

        >
          <Typography sx={{ width: '50%', flexShrink: 0,fontWeight:"bold" }}>
            1.まず、blenderを起動します。
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx ={{overflow:"hidden"}}>
          <div style = {{minWidth:"256px",width:"100%",overflow:"hidden"}}> 
          <Typography>
          blenderのアイコンをダブルクリックすると、blenderを起動することができます。開くと右のような画面になります。
          </Typography>
          <img src="/static/images/recipe_sample/sample_1.png" alt="blender image" width="80%" />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
      sx = {{
        boxShadow:"none",
        filter:"drop-shadow(0 0 15px rgba(0 ,0 ,0 ,.1))",
        border:"0px",
        zIndex:"3000",
        borderRadius:"15px",
        "&::before":{
          backgroundColor:"white"
        }
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,fontWeight:"bold"  }}>2.立方体を配置します。</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            立体パネルから立方体を選択します。すると立方体が画面に表示されるのを確認することができます。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
      sx = {{
        boxShadow:"none",
        filter:"drop-shadow(0 0 15px rgba(0 ,0 ,0 ,.1))",
        zIndex:"2000",
        borderRadius:"15px",
        "&::before":{
          backgroundColor:"white"
        }
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:"bold" }}>
            3.エフェクトから「巨大化」を選択します
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {"[エフェクト]>[変形]>[巨大化]を選択してそれからボタンを押し、パラメータを調整します"}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
      sx = {{
        boxShadow:"none",
        filter:"drop-shadow(0 0 15px rgba(0 ,0 ,0 ,.1))",
        zIndex:"1000",
        borderRadius:"15px",
        "&::before":{
          backgroundColor:"white"
        }
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,fontWeight:"bold"}}> 4. 立方体を移動します</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {"パラメータを調整したら、「移動」からX軸を選択するとX軸に沿って立方体を移動することができます"}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
