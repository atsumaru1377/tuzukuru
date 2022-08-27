import Comments from "./comments";
import Questions from "./questions";4

type ReportItemModel = {
	recipe_id : number;
	point : string;
	q_who : string;
	q_where : string;
	q_when : string;
	q_how : string;
	likes : number;
	comments : Comments;
};

export default ReportItemModel;