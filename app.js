// 1.Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function func(num1){
//     return function(num2){
//         console.log(num1+num2)
//     }
// } 
// let innerFunc=func(15)
// innerFunc(10)

// 2.Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested


// function search(val,array){
//     for(let i=0;i<=array.length;i++){
//         if(val===array[i]){
//             return "true"
//             break
//         }  
//     }
//     if(val==="true"){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let array=[10,11,12,13,14,15]
// let val=+prompt("Enter a value you want to find")
// let searched=search(val,array)
// console.log(searched)

// 3.Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// function paragraph(text){
//     newPara=document.createElement("p")
//     newPara.innerHTML=text
//     body = document.querySelector("body")
//     body.appendChild(newPara)
// }
// paragraph("Hi this is me")


// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// function listItem(text){
//     list=document.createElement("li")
//     list.innerHTML=text
//     let unorderList=document.getElementById("unorderList")
//     unorderList.appendChild(list)
// }
// listItem("hello")
// listItem("hello")
// listItem("hello")
// listItem("hello")

// 5.Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// function bgcolor(element,colorr){
//     element.style.backgroundColor=colorr
// }

// let element=prompt("Enter a element whom you want to change color")     // i will change of h1
// let colorr=prompt("Enter a color you want")     //color
// let element1=document.querySelector(element)
// bgcolor(element1,colorr)

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// let previousStudent = localStorage.getItem("student")
// let students = previousStudent ? JSON.parse(previousStudent) : [];
// function save() {
//     let student = {
//         namee: "laiba",
//         rollNo: 18,
//         class: "JavaScript"
//     }
//     students.push(student)
//     let stringify = JSON.stringify(students)
//     localStorage.setItem("student", stringify)
// }
// save()

// 7.Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// function getFromStorage(key) {
    //     let obj_str = localStorage.getItem(key)
    //     obj = JSON.parse(obj_str)

//      return obj
// }
// let storageItem=getFromStorage("student")
// console.log(storageItem)


// 8.Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

// function saveInStorage(student){
//     for(var prop in student){
//         let stringify = JSON.stringify(student[prop])
//         localStorage.setItem(prop,stringify)
//     }
//     let newobj={}
//     for(var prop in student){
//         newobj[prop] = JSON.parse(localStorage.getItem(prop))
//     }
//     return newobj
// }
// let student = {
//     namee: "laiba",
//     rollNo: 18,
//     class: "JavaScript"
// }
// newobj=saveInStorage(student)
// console.log(newobj)