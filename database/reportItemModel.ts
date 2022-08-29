import Comments from "./comments";
import Questions from "./questions";4

type ReportItemModel = {
	recipe_id : number;
	point : string;
	questions : Questions;
	likes : number;
	comments : Comments;
};

export default ReportItemModel;