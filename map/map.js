const width = 700;
const height = 472;

getRandomNumber = (size) => Math.floor(Math.random() * size);

let count = 0;
let target = {
    x: getRandomNumber (width),
    y: getRandomNumber (height)
}

getDistance = (e, target) =>{
    const diffX = e.offsetX - target.x;
    const diffY = e.offsetY - target.y;
    return Math.hypot(diffX, diffY)
}

getDistanceHint = (distance) =>{
    if(distance < 10) return "Fire!";
    else if(distance < 20) return "Hot";
    else if(distance < 40) return "A little bit hot";
    else if(distance < 80) return "Warm";
    else if(distance < 160) return "Cold";
    else if(distance < 320) return "Very Cold";
    else return "Frost"
}

getColor = (distance)=>{
    let color
    if (distance < 10) color="red";
    else if(distance < 20) color="orange";
    else if(distance < 40) return "gold";
    else if(distance < 80) return "yellow";
    else if(distance < 160) return "cyan";
    else if(distance < 320) return "blue";
    else color = "darkblue";
    return color;
}

map.onclick = (e) =>{
    console.log("K");
    count++;
    let dst = getDistance(e, target);
    let dstHint = getDistanceHint(dst);
    distance.innerText = dstHint;
    distance.style.color = getColor(dst);
    map.style.boxShadow = `1px 2px 26px 0px ${getColor(dst)}`; 
    if (dst < 8) alert(`You found this tresure by ${count} tries`)
}