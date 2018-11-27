//https://www.youtube.com/watch?v=5o-kdjv7FD0&index=2&list=PLBZBJbE_rGRVnpitdvpdY9952IsKMDuev

num_ways = (N) => {
  let sum = 0
  if(N === 1){
    sum++
  }else if (N === 2){
    sum +=2
  }else{
    sum += num_ways(N-2) + num_ways(N-1)
  }
  return sum
}

//Optim
numways = (N) => {
  let arr = [1,1] //[newways(0), newways(1)]
  if (N>1){
    for(let i = 2; i <= N; i++){
      let tmpArr = [arr[1], arr[0]+arr[1]]
      arr = tmpArr
    }
  }
  return arr[1]
}

//Non opti
numWays = (N,X) => {
  let sum = 0
  if(N === 0)
    return 1
  X.forEach((val) => {
    if (N-val >= 0)
      sum+= numWays(N-val, X)
  })
  return sum
}


// Opti :
numWays = (N, X) => {
  if(N === 0)
    return 1
  let arr=[1]
  for(let i=1; i <= N; i++){
    let total = 0;
    X.forEach(val => {
      if(i>=val)
        total += arr[i-val]
    })
    arr[i]=total
  }
  return arr[N]
}
