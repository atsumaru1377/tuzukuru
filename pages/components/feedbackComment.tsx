import * as React from 'react';
//import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {FBCommentType} from "../../plugins/type"
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send"
import Box from "@mui/material/Box"

type Props = {
	comments: FBCommentType[];
}

export default function AlignItemsList(props:Props) {
  return (
    <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
			<div style={{height:"32px"}}></div>
			<Paper style={{borderRadius:0, padding:"10px"}} key="title" elevation={0}>
				<Typography variant = {"h3"} sx={{
					fontSize:"1.5rem",
				}}>10件のフィードバック</Typography>
			</Paper>
			<Paper style={{borderRadius:0, padding:"10px 0px"}} key="do_fb" elevation={0}>
				<ListItem alignItems="flex-start" key="submit" >
						<ListItemAvatar>
							<Avatar alt="Naoki Kondo" src="/static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItem style={{padding:0, width:"100%"}} key="textfield">
							<Box component="div" sx={{width:{xs:"80%",sm:"90%" }}}>
								<TextField color='warning' size="small" sx={{width:"100%"}} label="褒めポイント"></TextField>
								<div style={{width:"100%", height:"16px"}}></div>
								<TextField color='primary' size="small" sx={{width:"100%"}} label="改善ポイント"></TextField>
							</Box>
							<Box component="div" sx={{width:{xs:"20%",sm:"10%"},padding:"0px", alignItems:"flex-end"}}>
								<Button variant="contained" sx={{height:"60%", width:"80%", margin:"70% 10% 10%" ,color:"white", display:{xs:"none", sm:"flex"}}} type="submit">投稿</Button>
								<Send color='success' sx={{display:{xs:"flex", sm:"none"}, fontSize:"32px", padding:"16px"}}></Send>
							</Box>
						</ListItem>
				</ListItem>

			</Paper>

			{props.comments?.map((data) => {
				return (
					<Paper style={{borderRadius:0}} key={data.key} elevation={0}>
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt={data.user} src="/static/images/avatar/1.jpg" />
							</ListItemAvatar>
							<ListItemText
								primary={
									<React.Fragment>
										<div>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body1"
												color="text.primary"
											>
												{data.user}
											</Typography>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="text.secondary"
											>
												{" ･ " + data.time}
											</Typography>
										</div>
										<div style={{height:"5px"}}></div>
									</React.Fragment>
								}
								secondary={
									<React.Fragment>
										<div>
											<Typography
												component="span"
												variant="body2"
												color="warning.main"
												fontWeight="bold"
											>
											{"褒めポイント:"}
											</Typography>
											<div>
												{data.positive}
											</div>
										</div>
										<div style={{height:"5px"}}></div>
										<div>
											<Typography
												component="span"
												variant="body2"
												color="primary.main"
												fontWeight="bold"
											>
											{"改善ポイント:"}
											</Typography>
											<div>
												{data.negative}
											</div>
										</div>
									</React.Fragment>
								}
							/>
						</ListItem>
					</Paper>
				);
			})}
			<Paper style={{borderRadius:0, padding:"10px 20px"}} elevation={0}>
				<Typography color="primary.main" textAlign={{xs:"left", sm:"right"}}>全て見る</Typography>
			</Paper>
    </List>
  );
}
