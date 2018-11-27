//https://www.youtube.com/watch?v=eaYX0Ee0Kcg&t=0s&list=PLBZBJbE_rGRVnpitdvpdY9952IsKMDuev&index=6

const DistanceToOrigin = (point) => {
    return point[0]*point[0] + point[1]*point[1]
}

//notopti
const getKClosestToO = (points, k) => {
    return points.map(point => [DistanceToOrigin(point), point])
        .sort((a,b) => a[0] - b[0])
        .slice(0,k)
        .map(elt => elt[1])
}

const data = [[-1,1],[2,3],[3,2],[5,7],[2,1],[9,1],[-6,1],[-2,1]]
console.log(getKClosestToO(data, 4))