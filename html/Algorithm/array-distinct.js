// 方法一（常规方法）
// 思路:
// 1.构建一个新的数组存放结果
// 2.for循环中每次从原数组中取出一个元素，用这个元素循环与结果数组对比
// 3.若结果数组中没有该元素，则存到结果数组中
Array.prototype.UniqArray1 = function () {
    var res = [this[0]];
    for(var i=1;i<this.length;i++){
        var repeat = false;
        for(var j=0;j<res.length;j++){
            if(this[i] === res[j]){
                repeat = true;
                break;
            }
        }
        if(!repeat){
            // 向数组的末尾添加一个或多个元素，并返回新的长度
            res.push(this[i]);
            // 要想数组的开头添加一个或多个元素，请使用 unshift() 方法
        }
    }
    return res;
}

// 方法二（比方法一效率要高）
//  思路:
// 1.先将原数组进行排序
// 2.检查原数组中的第i个元素与结果数组中的最后一个元素是否相同，因为已经排序，所以重复元素会在相邻位置
// 3.如果不相同，则将该元素存入结果数组中
// 此方法也有一定的局限性，因为在去重前进行了排序，所以最后返回的去重结果也是排序后的。如果要求不改变数组的顺序去重，那这种方法便不可取了。
Array.prototype.UniqArray2 = function () {
    this.sort(); //对数组的元素进行排序
    var res = [this[0]];
    for(var i=0;i<this.length;i++){
        if(this[i] !== res[res.length-1]){
            res.push(this[i]);
        }
    }
    return res;
}

// 方法三（推荐使用）
// 思路:
// 1.创建一个新的数组存放结果
// 2.创建一个空对象
// 3.for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，
// 同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。
// 说明：至于如何对比，就是每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，则说明重复。
Array.prototype.UniqArray3 = function () {
    var res = [];
    var obj = {};
    for(var i=0;i<this.length;i++){
        if(!obj[this[i]]){
            res.push(this[i]);
            obj[this[i]] = 1;
        }
    }
    return res;
}