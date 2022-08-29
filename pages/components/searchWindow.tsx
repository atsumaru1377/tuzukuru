import ChipsArray from "./chipsArray";
import { ChipData } from '../../plugins/type';
import Typography from "@mui/material/Typography";

const categoryChipData:ChipData[] = [
	{ key: 0, label: "全て", variant: "outlined", icon: ""},
	{ key: 1, label: "レシピ", variant: "outlined", icon: ""},
	{ key: 2, label: "でざレポ", variant: "outlined", icon: ""},
	{ key: 3, label: "コミュニティ", variant: "outlined", icon: ""},
];
const toolChipData:ChipData[] = [
	{ key: 1, label: "figma", variant: "outlined", icon: "/static/images/adobelogo/figma.svg"},
	{ key: 2, label: "After Effect", variant: "outlined", icon: "/static/images/adobelogo/AfterEffects.png"},
	{ key: 3, label: "illustrator", variant: "outlined", icon: "/static/images/adobelogo/illustrator.png"},
	{ key: 4, label: "indesign", variant: "outlined", icon: "/static/images/adobelogo/indesign.png"},
	{ key: 5, label: "photoshop", variant: "outlined", icon: "/static/images/adobelogo/photoshop.png"},
	{ key: 6, label: "Premiere", variant: "outlined", icon: "/static/images/adobelogo/Premiere.png"},
	{ key: 7, label: "XD", variant: "outlined", icon: "/static/images/adobelogo/xd.png"},
	{ key: 8, label: "blender", variant: "outlined", icon: "/static/images/adobelogo/blender.svg"},
];
const difficultyChipData:ChipData[] = [
	{ key: 1, label: "初心者", variant: "outlined", icon: ""},
	{ key: 2, label: "中級者", variant: "outlined", icon: ""},
	{ key: 3, label: "上級者", variant: "outlined", icon: ""},
];
const outputChipData:ChipData[] = [
	{ key: 1, label: "ポスター", variant: "outlined", icon: ""},
	{ key: 2, label: "動画", variant: "outlined", icon: ""},
	{ key: 3, label: "CG", variant: "outlined", icon: ""},
	{ key: 4, label: "ロゴ", variant: "outlined", icon: ""},
	{ key: 5, label: "冊子", variant: "outlined", icon: ""},
	{ key: 6, label: "スライド", variant: "outlined", icon: ""},
	{ key: 7, label: "アニメーション", variant: "outlined", icon: ""},
];
const otherChipData:ChipData[] = [
	{ key: 1, label: "広告", variant: "outlined", icon: ""},
	{ key: 2, label: "SF", variant: "outlined", icon: ""},
	{ key: 3, label: "シック", variant: "outlined", icon: ""},
	{ key: 4, label: "クール", variant: "outlined", icon: ""},
	{ key: 5, label: "かわいい", variant: "outlined", icon: ""},
	{ key: 6, label: "おしゃれ", variant: "outlined", icon: ""},
	{ key: 7, label: "かっこいい", variant: "outlined", icon: ""},
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
			<ChipsArray chips={categoryChipData} color="error"></ChipsArray>

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
