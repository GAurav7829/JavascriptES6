for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log('----------break if i = 3');
for(let i = 0; i < 5; i++){
    if(i === 3){
        break;
    }
    console.log(i);
}

console.log('----------skip if i = 3');
for(let i = 0; i < 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}

console.log('---------nested for loop');
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        console.log(i, j);
    }
}