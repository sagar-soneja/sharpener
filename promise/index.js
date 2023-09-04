// callback:- 
// const posts = [
//     {title : 'Post One', body : 'This is post one'},
//     {title : 'Post two', body : 'This is post two'}
// ]

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output +=  `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output
//     }, 1000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }



// createPost({title: 'Post Three', body : 'this is post Three'},getPosts);


// promises :-

// const posts = [
//     {title : 'Post One', body : 'This is post one'},
//     {title : 'Post two', body : 'This is post two'}
// ]

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output +=  `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output
//     }, 1000);
// }

// function createPost(post) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post)
//             const error = false;
//             if(!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong')
//             }
//         }, 2000)
//     }) 
    
// }


// // createPost({title: 'Post Three', body : 'This is post three'})
// // .then(getPosts).catch(err => console.log(err))

// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve,2000),'Goodbye')

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values))


// // async await 

// async function init() {
//     await createPost({title : 'Post Three', body : 'This is post three'} )

//     getPosts();
// }

// init();



// -----------------------------------------------------
// old code 

// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' }
// ];

// let lastActivityTime = new Date();

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);
//     });
// }

// function updateLastUserActivityTime() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             lastActivityTime = new Date();
//             resolve();
//         }, 1000);
//     });
// }

// // Create a post, update user activity time, and then delete the last post
// createPost({ title: 'Post Three', body: 'This is post three' })
//     .then(() => updateLastUserActivityTime())
//     .then(() => {
//         console.log('All posts created:');
//         posts.forEach((post, index) => {
//             console.log(`Post ${index + 1}: ${post.title}`);
//         });
//         console.log('Last Activity Time:', lastActivityTime);
//     })
//     .then(() => {
//         // Delete the last post
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 posts.pop();
//                 resolve();
//             }, 1000);
//         });
//     })
//     .then(() => {
//         console.log('Last post deleted. Updated posts:');
//         posts.forEach((post, index) => {
//             console.log(`Post ${index + 1}: ${post.title}`);
//         });
//     })
//     .catch((err) => console.log(err));


// ==============================

// updated code


const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

let lastActivityTime = new Date();

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

async function main() {
    try {
        // Create a post
        await createPost({ title: 'Post Three', body: 'This is post three' });
        
        // Update user activity time
        await updateLastUserActivityTime();
        
        console.log('All posts created:');
        posts.forEach((post, index) => {
            console.log(`Post ${index + 1}: ${post.title}`);
        });
        
        console.log('Last Activity Time:', lastActivityTime);
        
        // Delete the last post
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.pop();
                resolve();
            }, 1000);
        });
        
        console.log('Last post deleted. Updated posts:');
        posts.forEach((post, index) => {
            console.log(`Post ${index + 1}: ${post.title}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();
