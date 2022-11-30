function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
      return 1.5;
      break;
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default: return 2.5
  }
}

// const orders = [
//   'Tropical Island',
//   'Energizer',
//   'Limetime',
//   'All or Nothing',
//   'Pure Strawberry Joy',
// ]
// let timeLeft = 7

  // const orders = [
  //     'Pure Strawberry Joy',
  //     'Pure Strawberry Joy',
  //     'Vitality',
  //     'Tropical Island',
  //     'All or Nothing',
  //     'All or Nothing',
  //     'All or Nothing',
  //     'Green Garden',
  //     'Limetime',
  //   ];
  // let timeLeft = 13

//   const orders = [
//       'Energizer',
//       'Green Garden',
//       'Ruby Glow',
//       'Pure Strawberry Joy',
//       'Tropical Island',
//       'Limetime',
//     ];
// let timeLeft = 12

  const orders = ['Bananas Gone Wild', 'Pure Strawberry Joy'];
let timeLeft = 0.2

do {
  let name = orders[0]
  let time = timeToMixJuice(name)
  if (timeLeft > time) {
    timeLeft = timeLeft - time
    console.log(timeLeft)
    orders.shift()
  } else if (timeLeft <= time) {
    orders.shift()
    break;
  }
} while(timeLeft>0)
console.log(orders)

//    if(orders.length === 1){
//   return orders
// } else if(num === orders.length){
//     orders.splice(0, num)
//     console.log(orders)
//     return orders
//   } else {
//     orders.splice(0, num -1)
//     console.log(orders)
//     return orders
//   }