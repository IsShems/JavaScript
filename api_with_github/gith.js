let somename = document.getElementById('name')
let logIn = document.getElementById('logIn')
let link = document.getElementById('link')
let location_ = document.getElementById('location')
let mail = document.getElementById('mail')
let followers_ = document.getElementById('followers')
let following_ = document.getElementById('following')
let photo = document.getElementById("photo")
let AccInput = document.getElementById('AccInput')
let request;

if (window.XMLHttpRequest){ 
    request = new XMLHttpRequest();
}
else {
    request = ActiveXObject("Microsoft.XMLHTTP");
}
request.responseType = 'json'
const getAcc = ()=> {
    console.log("Hello");
    queryText = AccInput.value
    request.open("GET", `https://api.github.com/users/${queryText}`)
    request.send()
    AccInput.value = ''
}
const a = ()=>{
    getAcc()
}

request.onload = ()=>{
    let githubAcc = request.response
    console.log(githubAcc.login);
    if (request.status === 200){
        somename.innerText = `Name: ${githubAcc.login}`
        console.log(githubAcc);
        logIn.innerText = `LogIn: ${githubAcc.login}`
        link.innerText = `Link: ${githubAcc.url}`
        location_.innerText = `Location: ${githubAcc.location}`
        mail.innerText = `Mail: ${githubAcc.email}`
        followers_.innerText = `Followers: ${githubAcc.followers}`
        following_.innerText = `Followings: ${githubAcc.following}`
        photo.src = githubAcc.avatar_url
    }

}

