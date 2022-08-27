import { useEffect, useState } from "react";
import { getDatabase, ref, push, child, get, onValue} from "firebase/database";
import firebaseApp from "../firebase";
import ReportModel from './reportModel';
import ReportItemModel from './reportItemModel';

const readReportCount: ()=>number = () => {
	let data = 0;
	get(child(ref(getDatabase()), `/report/report_count`)).then((snapshot) => {
		if (snapshot.exists()) {
			data = snapshot.val();
		} else {
			console.log("No data available");
		}
	});
	return data;
};

export const addReport = (newData : ReportItemModel):void => {
	const database = getDatabase();
	const path = readReportCount() + 1;
	const pathRef = ref(database, '/report/' + path);
	push(pathRef, newData);
};