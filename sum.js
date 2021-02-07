/**
 * kahan Sum
 * https://en.wikipedia.org/wiki/Kahan_summation_algorithm
 * @param  {array} arr - source array
 * @param  {(v: number, i?: number) => number} [map] - optional map function
 * @return {number} compensated sum
 */
export default function(arr, map) {
	let err = 0.0,
			sum = 0.0
	if (map) for (let i=0; i<arr.length; ++i) {
		const val = map(arr[i], i) - err,
					tot = sum + val
		err = (tot - sum) - val
		sum = tot
	}
	else for (const itm of arr) {
		const val = itm - err,
					tot = sum + val
		err = (tot - sum) - val
		sum = tot
	}
	return sum
}
