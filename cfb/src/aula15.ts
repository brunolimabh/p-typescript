// parametro REST

function fsoma(...n:number[]){
    let s:number = 0;
    for( let en of n){
        s+=en;
    }
    // n.forEach((en)=>{
    //     s += en;
    // })
    return s;
}

console.log(fsoma(5,5,10,40))
