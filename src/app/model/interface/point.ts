export interface Point {
    x: number,
    y: number
}

export interface TPoint extends Point {
    translate(delta_x: number, delta_y: number):boolean
}