// 给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。

// 示例 1：
// 输入：arr = [2,6,4,1]
// 输出：false
// 解释：不存在连续三个元素都是奇数的情况。

// 示例 2：
// 输入：arr = [1,2,34,3,4,5,7,23,12]
// 输出：true
// 解释：存在连续三个元素都是奇数的情况，即 [5,7,23] 。

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
	let count = 0;
	for (let i = 0, len = arr.length; i < len; i++) {
		arr[i] % 2 === 1 ? count++ : count = 0;
	
		if (count >= 3) {
			return true;
		}
	}
	return false;
};

//别人解法
//很直观 直接数组整体取余得到一个只含有01的数组 然后拼接成字符串 去查找字符串有没有111
var threeConsecutiveOdds = function (arr) {
	return arr.map(v => v % 2 == 0 ? "0" : "1").join("").indexOf("111") != -1
};
//效率更高 用了&1
var threeConsecutiveOdds = function (arr) {
	const n = arr.length;
	for (let i = 0; i <= n - 3; ++i) {
		if ((arr[i] & 1) & (arr[i + 1] & 1) & (arr[i + 2] & 1)) {
			return true;
		}
	}
	return false;
};

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
console.log(threeConsecutiveOdds([2, 6, 4, 1]));

