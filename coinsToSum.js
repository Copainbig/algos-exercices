/*
    We got some coins of different amount, listed in the array below.
    We want to find the combinations, to reach a certain amount of money.
*/

//TODO


const coins = [1,2,5,10,20,50,100,200]

const getCoinsCombinations = (coins, amount) => {
    console.log(' >>> We want to reach '+ amount+ ' using the coins : ' + coins)
    let result = []

    if(amount === 1 && coins.includes(1))
        return [1]
    if(amount === 2 && coins.includes(2))
        return [[2]].concat(getCoinsCombinations([1], 2))    
    
    coins.forEach(coin => {
        let rest = amount - coin
        if(rest >= 0){
            console.log('> We picked a ' + coin + ' coin and still have to get ' + rest)
            let remainingCoins = coins.filter(elt => rest >= elt)
            console.log('> We can only pick ' + remainingCoins + ' now.')
            let leftCombinations = getCoinsCombinations(remainingCoins, rest)
            leftCombinations.forEach(combine => {
                result.push([coin].concat(combine))
            })
        }
    })    
    
    return result
}



//TEST
console.log(getCoinsCombinations(coins, 3))