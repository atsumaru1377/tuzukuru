import UseChipsArray from "./useChipsArray";
import { ChipData } from '../../plugins/type';
import Typography from "@mui/material/Typography";

const categoryChipData:ChipData[] = [
	{ key: 0, label: "全て", variant: "outlined", icon: ""},
	{ key: 1, label: "レシピ", variant: "outlined", icon: ""},
	{ key: 2, label: "でざレポ", variant: "outlined", icon: ""},
	{ key: 2, label: "コミュニティ", variant: "outlined", icon: ""},
];
const toolChipData:ChipData[] = [
	{ key: 0, label: "figma", variant: "outlined", icon: "/static/images/adobelogo/figma.svg"},
	{ key: 1, label: "After Effect", variant: "outlined", icon: "/static/images/adobelogo/AfterEffects.png"},
	{ key: 2, label: "illustrator", variant: "outlined", icon: "/static/images/adobelogo/illustrator.png"},
	{ key: 3, label: "indesign", variant: "outlined", icon: "/static/images/adobelogo/indesign.png"},
	{ key: 4, label: "photoshop", variant: "outlined", icon: "/static/images/adobelogo/photoshop.png"},
	{ key: 5, label: "Premiere", variant: "outlined", icon: "/static/images/adobelogo/Premiere.png"},
	{ key: 6, label: "XD", variant: "outlined", icon: "/static/images/adobelogo/xd.png"},
	{ key: 7, label: "blender", variant: "outlined", icon: "/static/images/adobelogo/blender.svg"},
];
const difficultyChipData:ChipData[] = [
	{ key: 0, label: "初心者", variant: "outlined", icon: ""},
	{ key: 1, label: "中級者", variant: "outlined", icon: ""},
	{ key: 2, label: "上級者", variant: "outlined", icon: ""},
];
const outputChipData:ChipData[] = [
	{ key: 0, label: "ポスター", variant: "outlined", icon: ""},
	{ key: 1, label: "動画", variant: "outlined", icon: ""},
	{ key: 2, label: "CG", variant: "outlined", icon: ""},
	{ key: 3, label: "ロゴ", variant: "outlined", icon: ""},
	{ key: 4, label: "冊子", variant: "outlined", icon: ""},
	{ key: 5, label: "スライド", variant: "outlined", icon: ""},
	{ key: 6, label: "アニメーション", variant: "outlined", icon: ""},
];
const otherChipData:ChipData[] = [
	{ key: 0, label: "広告", variant: "outlined", icon: ""},
	{ key: 1, label: "SF", variant: "outlined", icon: ""},
	{ key: 2, label: "シック", variant: "outlined", icon: ""},
	{ key: 3, label: "クール", variant: "outlined", icon: ""},
	{ key: 4, label: "かわいい", variant: "outlined", icon: ""},
	{ key: 5, label: "おしゃれ", variant: "outlined", icon: ""},
	{ key: 6, label: "かっこいい", variant: "outlined", icon: ""},
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
			<UseChipsArray chips={categoryChipData} color="error"></UseChipsArray>

			<Typography variant = "h2" sx={{
					fontSize:"1.5rem",
					fontWeight:"500",
					mt:"16px",
					ml:"16px"
			}}>ツール</Typography>
			<UseChipsArray chips={toolChipData} color="warning"></UseChipsArray>

			<Typography variant = "h2" sx={{
					fontSize:"1.5rem",
					fontWeight:"500",
					mt:"16px",
					ml:"16px"
			}}>制作難易度</Typography>
			<UseChipsArray chips={difficultyChipData} color="success"></UseChipsArray>

			<Typography variant = "h2" sx={{
					fontSize:"1.5rem",
					fontWeight:"500",
					mt:"16px",
					ml:"16px"
			}}>制作物</Typography>
			<UseChipsArray chips={outputChipData} color="info"></UseChipsArray>

			<Typography variant = "h2" sx={{
					fontSize:"1.5rem",
					fontWeight:"500",
					mt:"16px",
					ml:"16px"
			}}>その他タグ</Typography>
			<UseChipsArray chips={otherChipData} color="default"></UseChipsArray>
		</div>
	)
}
