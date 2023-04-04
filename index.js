function rand (limit = 100) {
    return parseInt(Math.random() * limit);
}

const login = document.getElementById('login')
const password = document.getElementById('password')
const submit = document.getElementById('submit')

let loginScale = 1;
let passwordScale = 1;

login.addEventListener('keydown', () => {
    loginScale += 0.3;
    console.log(loginScale)
    login.style.transform = `scale(${loginScale})`
})

password.addEventListener('keydown', () => {
    passwordScale += 0.1
    password.style.transform = `scale(${passwordScale})`
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
})

const firstPic = document.getElementById('firstPic')

let translateFirstPic = 0;

setInterval(() => {
    firstPic.style.transform = `translateX(${translateFirstPic}px)`
    translateFirstPic +=10;
}, 200);

const secondPic = document.getElementById('secondPic')


let translateSecondPic = 0;

setInterval(() => {
    secondPic.style.right = `${translateSecondPic}px`
    translateSecondPic +=1;
}, 18);
