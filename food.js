//objekte
let flija = {
    category: 'pastries' ,
    vegeterian: 'no',
    price: 10
}
let byrek ={
    category: 'pastries',
    vegetarian: 'yes' ,
    price: 2
}
let stuffed_peppers ={
    category: 'meats',
    vegetarian:'no' ,
    price: 5
    }
let ajvar ={
    category: 'vegetables',
    vegetarian: 'yes' ,
    price: 2.5
}
let qofte ={
    category:'meats' ,
    vegetarian: 'no' ,
    price: 3.5
}
let sarma ={
    category: 'meats',
    vegetarian: 'no' ,
    price: 4.5
}
let trileqe ={
    category:'pastries' ,
    vegetarian: 'yes' ,
    price: 1.5
}
//array
let foods = [flija, byrek, stuffed_peppers, ajvar , qofte , sarma , trileqe];

console.log(foods);  

//funksioni filter
let lloji = foods.filter(function(s, j, k){
if(k[j].vegetarian=='yes'){
    return s;

}
})
console.log(lloji); 


