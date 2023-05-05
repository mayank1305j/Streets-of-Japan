const img1 = document.querySelector('#one');
const img2 = document.querySelector('#two');
const img3 = document.querySelector('#three');


// -------------------------------------------------
img1.addEventListener('mouseenter',e=>{
    const main = document.querySelector('#main');
    main.classList.replace('backgroundimg','backgroundimg1');
})

img1.addEventListener('mouseleave',e=>{
    const main = document.querySelector('#main');
    main.classList.replace('backgroundimg1','backgroundimg');
})

img2.addEventListener('mouseenter',e=>{
    const main = document.querySelector('#main');
    main.classList.replace('backgroundimg','backgroundimg2');
})

img2.addEventListener('mouseleave',e=>{
    const main = document.querySelector('#main');
    main.classList.replace('backgroundimg2','backgroundimg');
})

img3.addEventListener('mouseenter',e=>{
    const main = document.querySelector('#main');
    main.classList.replace('backgroundimg','backgroundimg3');
})

img3.addEventListener('mouseleave',e=>{
    const main = document.querySelector('#main');
    main.classList.replace('backgroundimg3','backgroundimg');
})


// ---------------------------------------------------

// img1.addEventListener('mouseenter',e=>{
//     e.stopPropagation();
//     const main = document.querySelector('#main');
//     main.style.backgroundColor = '#53989f';
// })

// img1.addEventListener('mouseleave',e=>{
//     e.stopPropagation();
//     const main = document.querySelector('#main');
//     main.style.backgroundColor = 'black';
// })

// img2.addEventListener('mouseenter',e=>{
//     e.stopPropagation();
//     const main = document.querySelector('#main');
//     main.style.backgroundColor = '#005486';
// })

// img2.addEventListener('mouseleave',e=>{
//     e.stopPropagation();
//     const main = document.querySelector('#main');
//     main.style.backgroundColor = 'black';
// })

// img3.addEventListener('mouseenter',e=>{
//     e.stopPropagation();
//     const main = document.querySelector('#main');
//     main.style.backgroundColor = '#b950a5';
// })

// img3.addEventListener('mouseleave',e=>{
//     e.stopPropagation();
//     const main = document.querySelector('#main');
//     main.style.backgroundColor = 'black';
// })