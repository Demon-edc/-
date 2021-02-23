// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 示例 1：
// 输入：nums = [-4, -1, 0, 3, 10]
// 输出：[0, 1, 9, 16, 100]
// 解释：平方后，数组变为[16, 1, 0, 9, 100]
// 排序后，数组变为[0, 1, 9, 16, 100]

// 示例 2：
// 输入：nums = [-7, -3, 2, 3, 11]
// 输出：[4, 9, 9, 49, 121]

/**
 * 我的解法
 * @param {*} accounts 
 */
// var sortedSquares = function (nums) {
// 	return nums.map(ele => Math.pow(ele, 2)).sort((a, b) => {
// 		return a > b ? 1 : -1;
// 	})
// };

/**
 * 他人解法
 * 双指针
 */
var sortedSquares = function (A) {
	var count = A.length;
	var result = [];
	var lastnumber = 0;
	var i = 0, j = count - 1;
	while (i <= j) {
		var leftnumber = Math.pow(A[i], 2);
		var rightnumber = Math.pow(A[j], 2);
		if (leftnumber > rightnumber) {
			result.unshift(leftnumber);
			i++;
		} else {
			result.unshift(rightnumber);
			j--;
		}
	}
	return result;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]))

