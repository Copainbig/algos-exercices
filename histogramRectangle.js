//https://www.youtube.com/watch?v=RVIh0snn4Qc 
//https://www.youtube.com/watch?v=VNbkzsnllsU

//O(n^2) -- Brute force
const getLargestRect = (histo) => {
    let max = 0
    for (let i = 0; i < histo.length; i++) {
        let j = i
        let count = 0
        while (j >= 0 && histo[j] >= histo[i]) {
            count += histo[i]
            j--
        }
        j = i + 1
        while (histo[j] >= histo[i] && j < histo.length) {
            count += histo[i]
            j++
        }
        if (count > max) 
            max = count
    }
    return max
}

//O(n)
const maxArea = (histo) => {
    let max = 0
    let rectangles = [
        [0, histo[0]]
    ]

    function getLastRectangleArea(){
        let lastRect = rectangles.pop();
        let length = i - lastRect[0]
        let height = lastRect[1]
        max=Math.max(length*height,max)
    }

    let i = 1
    while (i < histo.length) {

        if (histo[i] > histo[i - 1]) {
            rectangles.push([i, histo[i]])
        }
        if (histo[i] < histo[i - 1]) {

            let tmp;
            while (rectangles.length>0 && rectangles[rectangles.length - 1][1] > histo[i]) {
                tmp = rectangles[rectangles.length - 1]
                getLastRectangleArea()
            }

            if((rectangles.length === 0) || (histo[i] > rectangles[rectangles.length-1][1])){
                rectangles.push([tmp[0], histo[i]])
            }
        }
        i++
    }

    while (rectangles.length > 0) {
        getLastRectangleArea()
    }

    return max
}


//TEST
const histogram = [1,2,3,4,5,3,3,2]
const histogram2 = [0,0,6,1,7,2,1,9,0,4,4,4,4,7,1]
const histogram3 = [2,2,1,2,1,1,2,3,1,1,2,1,2]
console.log(getLargestRect(histogram))
console.log(maxArea(histogram))
console.log(getLargestRect(histogram2))
console.log(maxArea(histogram2))
console.log(getLargestRect(histogram3))
console.log(maxArea(histogram3))