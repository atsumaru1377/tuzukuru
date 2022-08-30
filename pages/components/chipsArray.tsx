import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import {useState} from 'react';
import { ChipData, ChipArray} from '../../plugins/type';

const ListItem = styled('li')(({ theme }) => ({
	margin: theme.spacing(0.5),
}));

export default function ChipsArray(props:ChipArray) {
	const [chipData, setChipData] = useState<ChipData[]>(
		props.chips
	);

	const handleClick = (chipOnClick:ChipData) => {
    setChipData((chips) => (chips.map(chip => {
 			if (chip.key == chipOnClick.key){
				if (chip.variant === "filled") {
					chip.variant="outlined";
					chip.sx={}
				} else {
					chip.variant="filled";
					chip.sx={color:"white"}
				}
			}
			if (chipOnClick.key === 0) {chip.variant = chipOnClick.variant;}
			return chip;
		})));
  };

	return (
		<Paper
		elevation={0}
		sx={{
			display: 'flex',
			justifyContent: 'left',
			flexWrap: 'wrap',
			listStyle: 'none',
			p: 0.5,
			m: 0,
		}}
		component="ul"
	>
		{props.chips?.map((data) => {
			let icon;
			if (data.icon !== "") {icon = <img src={data.icon} alt={data.label} style={{width:"18px",height:"18px"}} />};

			return (
				<ListItem key={data.key}>
					<Chip
						icon={icon}
						color={props.color}
						label={data.label}
						variant={data.variant}
						sx={(props.color == "default") ? undefined: data.sx}
						onClick={() => handleClick(data)}
						/>
				</ListItem>
			);
		})}
	</Paper>
	);
}