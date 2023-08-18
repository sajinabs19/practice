interface Icloths{
    name:string,
    color:string,
    price:number,
    size?:string

}

let cloths:Icloths={name:"kurthi",color:"blue",price:310}
console.log(cloths)
console.log(cloths.price)
cloths.size="l"