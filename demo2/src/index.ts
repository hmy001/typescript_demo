class Point {
    constructor(public x: number, public y: number) {}
    getDistance(p: Point) {
        let dx = p.x - this.x;
        let dy = p.y - this.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}
// ...

// Reopen the interface.
interface Point {
    distanceFromOrigin(point: Point): number;
};
// Point.prototype.distanceFromOrigin = function(point: Point) {
//     return this.getDistance({ x: 0, y: 0});
// }
Point.prototype.distanceFromOrigin = function(this: Point, point: Point) {
    return this.getDistance({ x: this.x, y: this.y} as Point);
}