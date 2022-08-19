import * as React from 'react';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function SideBar() {
  return (
    <Paper sx={{ width: '280px', maxWidth: '100%' , pt:"10px",position : "fixed"}}>
      <MenuList>
        <MenuItem>
          <ListItemText>マイコミュニティ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>

          <ListItemText>コミュニティを探す</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>レシピ
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>みんなのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>キーワードを探す</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>お気に入りのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>レシピを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>つくレポ</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>レシピを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>レシピを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>困った時は</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>デザインを勉強する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>ツールの使い方を見る</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>よくある質問</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
