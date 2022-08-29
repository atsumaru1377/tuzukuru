import Comments from "./comments";
import Questions from "./questions";4

type ReportItemModel = {
	photo_url : string;
	recipe_id : number | null;
	point : string;
	q_who : string;
	q_where : string;
	q_when : string;
	q_how : string;
	likes : number;
	comments : Comments;
};

export default ReportItemModel;