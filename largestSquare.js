//https://www.youtube.com/watch?v=FO7VXDfS8Gk

const getLargestSquare = (matrix) => {
    let acc = []

    acc[0] = matrix[0]
    for(let i=1; i<matrix.length; i++){
        if (!acc[i])
            acc[i] = []
        acc[i][0] = matrix[i][0]
    }

    for (let i=1; i<matrix.length; i++){
        for (let j=1; j<matrix[0].length; j++){
            if(matrix[i][j] === 1) {
                acc[i][j] = Math.min(acc[i][j - 1], acc[i - 1][j], acc[i - 1][j - 1]) + 1
            }else{
                acc[i][j] = 0
            }
        }
    }

    let max = [0,0,0]
    for(let i = 0; i<acc.length; i++){
        for(let j = 0; j<acc[0].length; j++){
            if(acc[i][j]>max[0])
                max = [acc[i][j], i-(acc[i][j]-1),j-(acc[i][j]-1)]
        }
    }

    return max

}


const matrix = [[0,1,0,1,0],
                [1,1,1,1,0],
                [1,1,1,1,0],
                [0,1,1,1,1]]

console.log(getLargestSquare(matrix))