import { ObjectHTMLAttributes } from "react";

export type CommuCardType = {
    src:string;
    title:string;
    tool:string;
    feature:string;
    theme1:string;
    theme2:string;
    theme3:string;
}
export type RecipeCardType = {
    src:string;
    title:string;
    tool:string;
    feature:string;
    theme1:string;
    theme2:string;
    theme3:string;
}
export type DesignCardType = {
    src:string;
}

export type BreadCrumbs ={
    second : string;
    secondHref : string;
    third :string;
    thirdHref : string;
}

export type ChipData = {
    key: number;
    sx: object;
    label: string;
    variant: "filled" | "outlined";
    icon: string
}

export type Color = "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined;

export type ChipArray = {
    chips: ChipData[];
    color: Color
}

export type FBCommentType = {
    key: number;
	user: string;
	time: string;
	positive: string;
	negative: string;
}