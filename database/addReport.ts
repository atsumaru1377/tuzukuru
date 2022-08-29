import { useEffect, useState } from "react";
import { getDatabase, ref, push, child, get, onValue} from "firebase/database";
import firebaseApp from "../firebase";
import ReportModel from './reportModel';
import ReportItemModel from './reportItemModel';

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