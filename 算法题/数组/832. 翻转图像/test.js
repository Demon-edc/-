// 给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。
// 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。
// 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。

// 示例 1：
// 输入：[[1,1,0],[1,0,1],[0,0,0]]
// 输出：[[1,0,0],[0,1,0],[1,1,1]]
// 解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
//      然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]

// 示例 2：
// 输入：[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// 输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// 解释：首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
//      然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

var flipAndInvertImage = function (A) {
	let arrs = [];
	for (let j = 0, lens = A.length; j < lens; j++) {
		let arr = new Array(A[0].length);
		arrs[j] = arr;
		let ei = A[j].length - 1;
		for (let i = 0, len = A[0].length / 2; i < len; i++) {
			if (A[j][i] === A[j][ei]) {
				arr[i] = ~~!A[j][i];
				arr[ei] = ~~!A[j][ei];
			} else {
				arr[i] = A[j][i];
				arr[ei] = A[j][ei];
			}
			ei--;
		}
	}
	return arrs;
};

/**
 * 他人解法
 * @param {*} A 
 */
//与我一开始的想法 一样 双指针 比我的优点在于空间复杂度更低 我的空间复杂度是O(n2) 同时少处理了一种逻辑就是不等于的时候不做操作 因为是在操作自己本身的数组
var flipAndInvertImage = function (A) {
	const n = A.length;
	for (let i = 0; i < n; i++) {
		let left = 0, right = n - 1;
		while (left < right) {
			if (A[i][left] === A[i][right]) {
				A[i][left] ^= 1;
				A[i][right] ^= 1;
			}
			left++;
			right--;
		}
		if (left === right) {
			A[i][left] ^= 1;
		}
	}
	return A;
};

console.log(this.flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))