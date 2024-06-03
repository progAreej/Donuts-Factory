let name=window.prompt("Enter your Name:","");
let gender=window.prompt("Enter your Gender:","Male Or Female");
console.log (gender);

if (gender == "Male"){
   window.alert("Mr. " +name);
}
else if(gender == "Female"){
    window.alert("Miss. " + name);
}
else{
    window.alert("   ");
}
window.alert("Do you want to order Donut or Coffee or Ice Cream or Bakery?? " );
let order=window.prompt("write name of your order","Donut or Coffee or Ice Cream or Bakery");
window.alert("your order is getting prapar. " );
console.log(name+order)