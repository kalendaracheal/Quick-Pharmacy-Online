
let num = prompt('Enter a number: ')
for(let n=0; i<=10;i++){

if (num==1){
return [0,1];
}
else{
    return(f(n-1) + f(n-2))
}
}