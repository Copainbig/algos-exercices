//https://www.youtube.com/watch?v=zGv3hOORxh0

const rectangles = (rect1p1, rect1p2, rect2p1, rect2p2) => {
    const overlap_x_dist = Math.min(rect1p2[0], rect2p2[0]) - Math.max(rect1p1[0], rect2p1[0])
    const overlap_y_dist = Math.min(rect1p1[1], rect2p1[1]) - Math.max(rect1p2[1], rect2p2[1])
    if(overlap_x_dist <=0 || overlap_y_dist <=0) {
        return 0
    }
    return overlap_x_dist * overlap_y_dist
}


const ex_r1_p1 = [0,2]
const ex_r1_p2 = [3,0]
//const ex_r2_p1 = [2,4]
//const ex_r2_p2 = [5,1]

const ex_r2_p1 = [-2,7]
const ex_r2_p2 = [6,-1]

console.log(rectangles(ex_r1_p1,ex_r1_p2,ex_r2_p1,ex_r2_p2));

