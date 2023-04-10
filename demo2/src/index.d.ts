declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
    getDistance(p: Point): number;
}
interface Point {
    distanceFromOrigin(point: Point): number;
}
