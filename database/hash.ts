export const hash = (v : string):number => {
	const len = v.length;
	let r = 0;

	for (let i = 0; i < len; i++){
		r *= 93;
		r += v.charCodeAt(i);
	}

  return r % 6700417;
}