// let name=window.prompt("Enter your Name:","");
// let gender=window.prompt("Enter your Gender:","Male Or Female");
// console.log (gender);

// if (gender == "Male"){
//    window.alert("Mr. " +name);
// }
// else if(gender == "Female"){
//     window.alert("Miss. " + name);
// }
// else{
// while(gender!="Male" || gender!="Female"){
//     window.prompt("Enter your Gender:" +"Male Or Female");
//     if(gender == "Male")
//     {
//         window.alert("Mr. " +name);
//      }
//      else (gender == "Female")
//      {
//          window.alert("Miss. " + name);
//      }
// }
// }

// window.alert("Do you want to order Donut or Coffee or Ice Cream or Bakery?? " );
// let order=window.prompt("write name of your order","Donut or Coffee or Ice Cream or Bakery");
// window.alert("your order is getting prapar. " );
// console.log(name+order)

// const array=[];
// array.push(name);
// array.push(gender);
// array.push(order);

// for(let j=0;j<=array.length;j++){
//     console.log(array[j]);
// }


// // Question 7

// for(let i=0;i<=5;i++){
//     window.alert(i);
//     }


// // Question 8
// const num1=[];
// for(let i=0;i<=5;i++){
//      num1.push(i+" ");
//         }
// window.alert(num1);
    
// // Question 9
// const num2=[];
// for(let i=0;i<=20;i+=3){
//      num2.push(i+" ");
//         }
// window.alert(num2);

// // Question 10

// let NuMm=window.prompt("Enter number from 1 to 100","");
// while(NuMm<0 || NuMm>100){
//     window.alert("Error number you should enter number from 0 to 100!!!");
// }

// // Question 11
// let NuM=window.prompt("Enter number from 1 to 100","");
// let n=0;
// for(let i=0;i<=NuM;i++){
//     n=n+i;
// }
// window.alert(n);

function genderr() {
    var name = window.prompt("Enter your Name:", "");
    let gender = window.prompt("Enter your Gender:", "Male or Female").toLowerCase(); 
    console.log(gender);

    if (gender === "male") {
        window.alert("Mr. " + name);
    } else if (gender === "female") {
        window.alert("Miss. " + name);
    } else {
        while (gender !== "male" && gender !== "female") { 
            gender = window.prompt("Enter your Gender: Male or Female").toLowerCase(); 
            if (gender === "male") {
                window.alert("Mr. " + name);
            } else if (gender === "female") { 
                window.alert("Miss. " + name);
            }
        }
    }

    window.alert("Do you want to order Donut or Coffee or Ice Cream or Bakery?? ");
    let order = window.prompt("Write the name of your order: Donut or Coffee or Ice Cream or Bakery");
    window.alert("Your order is being prepared. ");
    console.log(name + " ordered " + order);

    const array = [name, gender, order];

    // DOM manipulation
    const divv = document.getElementById("newDiv");
    divv.style.backgroundColor = "red";
    divv.style.textAlign = "center";
    divv.style.height = "200px";
    let para = document.createElement("p");
    para.innerText = "Name: " + name;
    divv.appendChild(para);

    let orderList = document.createElement("ol");
    divv.appendChild(orderList);

    let list1 = document.createElement("li");
    list1.innerText = "Gender: " + gender;
    orderList.appendChild(list1);

    let list2 = document.createElement("li");
    list2.innerText = "Order: " + order;
    orderList.appendChild(list2);
}

genderr(); 
