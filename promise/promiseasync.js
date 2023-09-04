// console.log('person1: show ticket')
// console.log('person2: show ticket')


// const promiseWifeBringingTicks = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     },3000)
// });


// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('wife : i have the tickets')
//     console.log('husband : we should go in')
//     console.log('wife : no i am hungry')
//     return new Promise((resolve,reject) => {
//         resolve(`${t} popcorn`);
//     })
// })

// const getButter = getPopcorn.then((t) =>{
//     console.log('husband : i got some popcorn')
//     console.log('husband : we should go in')
//     console.log('wife : i need buttor on my popcorn')
//     return new Promise((resolve,reject) => {
//         resolve(`${t} buttor`);
//     })
// } )

// getButter.then((t) => console.log(t))

// console.log('person3: show ticket')
// console.log('person4: show ticket')



console.log('person1: show ticket')
console.log('person2: show ticket')


const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000)
    })

    const getPopcorn = new Promise((resolve,reject) => resolve(`${t} popcorn`))
    const addButter = new Promise((resolve, reject) => resolve('Butter'))
    const getColdDrink = new Promise(resolve, reject => resolve('coka coka tuuuu'))
    let ticket = await promiseWifeBringingTicks;
    console.log(`wife : i have the ${ticket}`)
    console.log('husband : we should go in')
    console.log('wife : no i am hungry')

   
    let popcorn = await getPopcorn;

        console.log(`husband : i got some ${popcorn}`)
    console.log('husband : we should go in')
    console.log('wife : i need buttor on my popcorn')

    let buttor = await addButter;
    console.log(`husband : i got some ${buttor} on popcorn`)

    let cokacoka = await getColdDrink
    console.log(`husband : le ${cokacoka}`)
    return ticket
}

preMovie.then((m) => console.log(`person3: shows ${m}`))

console.log('person3: show ticket')
console.log('person4: show ticket')
