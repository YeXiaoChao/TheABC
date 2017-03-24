// 冒泡排序（从小到大排列顺序）
// 思路:
// 1.比较相邻的两个元素，如果前一个比后一个大，则交换位置
// 2.第一轮的时候最后一个元素应该是最大的一个
// 3.按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较
// 4.那么经过n(n-1)/2 轮，就完成了所有数的排序
// 缺点是比较次数多，效率较低
Array.prototype.BubbleSort1 = function () {
    var len = this.length;
    var temp;
    while (len > 0) {
        for (var i = 0; i < len - 1; i++) {
            if (this[i] > this[i + 1]) {
                temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
            }
        }
        len--;
    }
    return this;
}

// 方法二思路：
// 1.遍历数组，第一轮数组第一个数会和后面的所有数都比较一次，如果大于后面的数，就交换位置。所以，一轮下来，第一个数最小。
// 依此类推，经过 (n-1)+(n-2)+...+2+1 = n(n-1)/2 次比较，就完成了所有数的比较
Array.prototype.BubbleSort2 = function () {
    var len = this.length;
    var temp;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (this[i] > this[j]) {
                temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}