import { useEffect, useState } from "react";
import { getDatabase, ref, push, child, get, onValue, update} from "firebase/database";
import firebaseApp from "../firebase";
import ReportModel from './reportModel';
import ReportItemModel from './reportItemModel';
import { RecipeCardType } from "../plugins/type"

export const readReportCount: ()=>number = () => {
	let data = 0;
	get(child(ref(getDatabase()), `/report`)).then((snapshot) => {
		if (snapshot.exists()) {
			data = snapshot.val();
			console.log(data);
			console.log("length " + Object.keys(data).length);
		} else {
			return 1;
		}
	});
	return Object.keys(data).length;
};

export const addReport = (newData : ReportItemModel):void => {
	const database = getDatabase(firebaseApp);
	const pathRef = ref(database, '/report/');
	push(pathRef, newData);
};

export const addRecipe = (newData : RecipeCardType):void => {
	const database = getDatabase(firebaseApp);
	const pathRef = ref(database, '/recipe/');
	push(pathRef, newData);
}

export const updateAvailability = (tool_name:string):void => {
	const database = getDatabase(firebaseApp);
	const pathRef = ref(database, '/recipe/');
	get(child(ref(database), `/recipe`)).then((snapshot) =>{
		const data = snapshot.val();
		for (const key in data) {
			if (tool_name == "popular") {
				data[key].available = true;
			}	else if (data[key].tool == tool_name) {
				data[key].available = true;
			} else {
				data[key].available = false;
			}
		};
		update(pathRef, data)
	});
}