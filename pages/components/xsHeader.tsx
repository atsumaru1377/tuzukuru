import Divider from "@mui/material/Divider"
import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link"
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function XsHeader() {
	const [value, setValue] = React.useState(0);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
  return (
		<Paper
			style={{margin:"0px", padding:"16px"}}
			sx={{width:{sm:"0px"},height:{sm:"0px"}, visibility:{xs:'visible',sm:'hidden'}, padding:"8px", display:'flex',justifyContent:"space-between",alignItems:'center',filter:"drop-shadow(0 0 15px rgba(0,0,0,.1))",borderRadius:"24px"}}
			elevation={0}
			>
			<Link href="/">
				<a>
				<img src="/logo.svg" alt= "Tuzukuru Logo" ></img>
				</a>
			</Link>
			<IconButton
					role="button"
					onClick={handleClick}
					size="small"
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
				>
				<div style={{background:"white",borderRadius:"20px",padding:"0px",display:"flex"}}>
					<MenuIcon sx={{ width: 32, height: 32 ,margin:"0px 8px", mr:"0px"}} />
				</div>
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 2,
					sx: {
						overflow: 'visible',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
						},
						width: "100%",
						height: "100%",
						filter:"drop-shadow(0 0 15px rgba(0,0,0,.1))",
						borderRadius:"24px",
						overflowY:"scroll"
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<Box
					style={{margin:"8px 8px", padding:"16px"}}
					component="div"
					sx={{
						width:{sm:"0px"},
						height:{sm:"0px"},
						visibility:{xs:'visible',sm:'hidden'},
						padding:"8px",
						display:'flex',
						justifyContent:"space-between",
						alignItems:'center',
						overflow: "hidden",
						overflowY:"scroll" }}
					>
					<Link href="/">
						<a>
						<img src="/logo.svg" alt= "Tuzukuru Logo" ></img>
						</a>
					</Link>
					<IconButton
							role="button"
							onClick={handleClick}
							size="small"
							aria-controls={open ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
						>
						<div style={{background:"white",borderRadius:"20px",padding:"0px",display:"flex"}}>
							<CloseIcon sx={{ width: 32, height: 32 ,margin:"0px 8px", mr:"0px"}} />
						</div>
					</IconButton>
				</Box>

				<Box
					component="div"
					style={{padding:"16px"}}
					sx={{
						display: "flex",
          	flexDirection: "column",
						overflow:"hidden",
						overflowY:"scroll"
					}}>
					<Link href ="/mypage">
						<MenuItem alia-label="マイコミュニティ">
							<ListItemText
							primaryTypographyProps={{
								fontSize:16,
								fontWeight:"bold"
							}}>マイコミュニティ</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Link href="/community">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>コミュニティを探す</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Divider />

					<MenuItem>
						<ListItemText
						sx={{"&:hover":"none"}}
						primaryTypographyProps={{
							fontWeight:"bold"
						}}>レシピ
						</ListItemText>
					</MenuItem>
					<Link href="/recipe">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>みんなのレシピ</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Link href="/mypage">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>お気に入りのレシピ</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Link href="/underConstruction">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>レシピを投稿する</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Divider />

					<Link href="/designreport">
						<MenuItem>
							<ListItemText
							primaryTypographyProps={{
								fontWeight:"bold"
							}}>でざレポ</ListItemText>
						</MenuItem>
					</Link>
					<Link href="/designreport">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>みんなのでざレポを見る</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Link href="/designreport/post">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>でざレポを投稿する</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Divider />

					<Link href="/underConstruction">
						<MenuItem>
							<ListItemText
							primaryTypographyProps={{
								fontWeight:"bold"
							}}>困った時は</ListItemText>
						</MenuItem>
					</Link>
					<Link href="/underConstruction">
						<MenuItem>
							<ListItemText  primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>デザインを勉強する</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Link href="/underConstruction">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>ツールの使い方を見る</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Link href="/underConstruction">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>よくある質問</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Divider />

					<MenuItem>
						<ListItemText
						primaryTypographyProps={{
							fontWeight:"bold"
						}}>アカウントメニュー</ListItemText>
					</MenuItem>
					<Link href="/mypage">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>マイページ</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Link href="/underConstruction">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>Setting</ListItemText>
							<KeyboardArrowRightIcon/>
						</MenuItem>
					</Link>
					<Link href="/underConstruction">
						<MenuItem>
							<ListItemText primaryTypographyProps={{
								fontSize:14
							}}sx={{py:"4px"}}>Logout</ListItemText>
						</MenuItem>
					</Link>
				</Box>
			</Menu>
		</Paper>
  );
}
