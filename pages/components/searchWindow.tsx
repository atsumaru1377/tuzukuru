import ChipsArray from "./chipsArray";
import { ChipData } from '../../plugins/type';
import Typography from "@mui/material/Typography";

const categoryChipData:ChipData[] = [
	{ sx:{}, key: 0, label: "全て", variant: "outlined", icon: ""},
	{ sx:{}, key: 1, label: "レシピ", variant: "outlined", icon: ""},
	{ sx:{}, key: 2, label: "でざレポ", variant: "outlined", icon: ""},
	{ sx:{}, key: 3, label: "コミュニティ", variant: "outlined", icon: ""},
];
const toolChipData:ChipData[] = [
	{ sx:{}, key: 1, label: "figma", variant: "outlined", icon: "/static/images/adobelogo/figma.svg"},
	{ sx:{}, key: 2, label: "After Effect", variant: "outlined", icon: "/static/images/adobelogo/AfterEffects.png"},
	{ sx:{}, key: 3, label: "illustrator", variant: "outlined", icon: "/static/images/adobelogo/illustrator.png"},
	{ sx:{}, key: 4, label: "indesign", variant: "outlined", icon: "/static/images/adobelogo/indesign.png"},
	{ sx:{}, key: 5, label: "photoshop", variant: "outlined", icon: "/static/images/adobelogo/photoshop.png"},
	{ sx:{}, key: 6, label: "Premiere", variant: "outlined", icon: "/static/images/adobelogo/Premiere.png"},
	{ sx:{}, key: 7, label: "XD", variant: "outlined", icon: "/static/images/adobelogo/xd.png"},
	{ sx:{}, key: 8, label: "blender", variant: "outlined", icon: "/static/images/adobelogo/blender.svg"},
	{ sx:{}, key: 9, label: "word", variant: "outlined", icon: "/static/images/adobelogo/word.svg"},
	{ sx:{}, key:10, label: "excel", variant: "outlined", icon: "/static/images/adobelogo/excel.svg"},
	{ sx:{}, key:11, label: "powerpoint", variant: "outlined", icon: "/static/images/adobelogo/powerpoint.svg"},
	{ sx:{}, key:12, label: "canva", variant: "outlined", icon: "/static/images/adobelogo/canva.svg"},
];
const difficultyChipData:ChipData[] = [
	{ sx:{}, key: 1, label: "初心者", variant: "outlined", icon: ""},
	{ sx:{}, key: 2, label: "中級者", variant: "outlined", icon: ""},
	{ sx:{}, key: 3, label: "上級者", variant: "outlined", icon: ""},
];
const outputChipData:ChipData[] = [
	{ sx:{}, key: 1, label: "ポスター", variant: "outlined", icon: ""},
	{ sx:{}, key: 2, label: "動画", variant: "outlined", icon: ""},
	{ sx:{}, key: 3, label: "CG", variant: "outlined", icon: ""},
	{ sx:{}, key: 4, label: "ロゴ", variant: "outlined", icon: ""},
	{ sx:{}, key: 5, label: "冊子", variant: "outlined", icon: ""},
	{ sx:{}, key: 6, label: "スライド", variant: "outlined", icon: ""},
	{ sx:{}, key: 7, label: "アニメーション", variant: "outlined", icon: ""},
];
const otherChipData:ChipData[] = [
	{ sx:{}, key: 1, label: "広告", variant: "outlined", icon: ""},
	{ sx:{}, key: 2, label: "SF", variant: "outlined", icon: ""},
	{ sx:{}, key: 3, label: "シック", variant: "outlined", icon: ""},
	{ sx:{}, key: 4, label: "クール", variant: "outlined", icon: ""},
	{ sx:{}, key: 5, label: "かわいい", variant: "outlined", icon: ""},
	{ sx:{}, key: 6, label: "おしゃれ", variant: "outlined", icon: ""},
	{ sx:{}, key: 7, label: "かっこいい", variant: "outlined", icon: ""},
];

export default function searchWindow(){
	return (
		<div style={{maxWidth:"100%"}}>
			<Typography variant = "h2" sx={{
				fontSize:"1.5rem",
				fontWeight:"500",
				mt:"16px",
				ml:"16px"
			}}>ジャンル</Typography>
			<ChipsArray chips={categoryChipData} color="secondary"></ChipsArray>
			<Typography variant = "h2" sx={{
				fontSize:"1.5rem",
				fontWeight:"500",
				mt:"16px",
				ml:"16px"
			}}>ツール</Typography>
			<ChipsArray chips={toolChipData} color="warning"></ChipsArray>

			<Typography variant = "h2" sx={{
				fontSize:"1.5rem",
				fontWeight:"500",
				mt:"16px",
				ml:"16px"
			}}>制作難易度</Typography>
			<ChipsArray chips={difficultyChipData} color="success"></ChipsArray>

			<Typography variant = "h2" sx={{
				fontSize:"1.5rem",
				fontWeight:"500",
				mt:"16px",
				ml:"16px"
			}}>制作物</Typography>
			<ChipsArray chips={outputChipData} color="info"></ChipsArray>

			<Typography variant = "h2" sx={{
				fontSize:"1.5rem",
				fontWeight:"500",
				mt:"16px",
				ml:"16px"
			}}>その他タグ</Typography>
			<ChipsArray chips={otherChipData} color="default"></ChipsArray>
		</div>
	)
}
