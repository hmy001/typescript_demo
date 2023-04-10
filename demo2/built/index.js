class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getDistance(p) {
        let dx = p.x - this.x;
        let dy = p.y - this.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}
;
// Point.prototype.distanceFromOrigin = function(point: Point) {
//     return this.getDistance({ x: 0, y: 0});
// }
Point.prototype.distanceFromOrigin = function (point) {
    return this.getDistance({ x: 0, y: 0 });
};


function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        console.log(aa)
        for (var i = 0; i < currentRow.length; i++) {
            var aa = 5;
            sum += currentRow[i];
        }
    }

    return sum;
}

console.log(sumMatrix([[1,2,3],[4,5,6],[4,5,6],[4,5,6],[4,5,6]]))

let [, second, , fourth] = [1, 2, 3, 4];
console.log(second,fourth)
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let {  b ,a} = o;
console.log(a,b)

function keepWholeObject(wholeObject) {
    let { a, b = 1001 } = wholeObject;
    b=6699
    console.log(a,b)
}
let som = {a:66,b:99,c:100}
keepWholeObject(som)
console.log(som)