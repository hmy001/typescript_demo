"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getDistance(p) {
        let dx = p.x - this.x;
        let dy = p.y - this.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}
;
// Point.prototype.distanceFromOrigin = function(point: Point) {
//     return this.getDistance({ x: 0, y: 0});
// }
Point.prototype.distanceFromOrigin = function (point) {
    return this.getDistance({ x: this.x, y: this.y });
};
