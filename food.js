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


//Përdorimi i JS data tipeve (data types) në raste të ndryshme
let ushqimi={
    lloji:"byrek",
    p1:"miell",
    p2:"uje",
    p3:"djath",
    cmimi:"0.70"
};
console.log(ushqimi);

//Perdorimi i callback funksioneve
function cmimet(cmimi1, cmimi2) {
    let cmimi = cmimi1 + cmimi2;
    return cmimi;
  }
  
  let result = cmimet(0.70, 1.40);
  console.log(result);


  //Perdorimi i timeout
  function u(){
    console.log("Jane te volitshme");
  }
  setTimeout(u,2000);
  console.log("Cmimet e ushqimeve ");
  
  
  let str = "JavaScript is a programming language";
let resultati = str.match(/JavaScript/);
console.log(resultati); // Output: [ "JavaScript" ]

let replaced = str.replace(/JavaScript/, "JS");
console.log(replaced); // Output: "JS is a programming language"




