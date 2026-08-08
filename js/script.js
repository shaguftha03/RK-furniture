/*===========================================
 RK Furnitures & Wood Work
 script.js
===========================================*/

// =======================
// Sticky Navbar
// =======================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#4a3123";
        header.style.padding = "10px 8%";

    } else {

        header.style.background = "#5A3E2B";
        header.style.padding = "15px 8%";

    }

});

// =======================
// Hero Text Animation
// =======================

const heroHeading = document.querySelector(".hero-content h1");

const heroText = [

"Premium Teak Wood Furniture",

"Custom Furniture for Every Home",

"Luxury Wooden Interiors",

"Designed with Perfection"

];

let textIndex = 0;

setInterval(() => {

    textIndex++;

    if(textIndex >= heroText.length){

        textIndex = 0;

    }

    heroHeading.innerHTML = heroText[textIndex];

},3000);

// =======================
// Welcome Alert
// =======================

window.onload = function(){

    setTimeout(function(){

        alert("Welcome to RK Furnitures & Wood Work");

    },1000);

}

// =======================
// Back To Top Button
// =======================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.left = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#D4AF37";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

window.addEventListener("scroll",function(){

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// =======================
// Contact Form Validation
// =======================

function validateForm(){

    let name=document.getElementById("name").value;

    let phone=document.getElementById("phone").value;

    let message=document.getElementById("message").value;

    if(name=="" || phone=="" || message==""){

        alert("Please fill all fields.");

        return false;

    }

    if(phone.length!=10){

        alert("Enter a valid 10 digit phone number.");

        return false;

    }

    alert("Thank you! We will contact you shortly.");

    return true;

}

// =======================
// Image Hover Animation
// =======================

const images=document.querySelectorAll(".gallery img");

images.forEach(function(img){

img.addEventListener("mouseover",function(){

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseout",function(){

img.style.transform="scale(1)";

});

});

// =======================
// Product Search
// =======================

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase();

let products=document.querySelectorAll(".product");

products.forEach(function(product){

let title=product.innerText.toLowerCase();

if(title.includes(input)){

product.style.display="block";

}

else{

product.style.display="none";

}

});

}

// =======================
// Furniture Counter
// =======================

let count=0;

let counter=document.getElementById("counter");

if(counter){

let interval=setInterval(function(){

count++;

counter.innerHTML=count+"+ Happy Customers";

if(count==500){

clearInterval(interval);

}

},5);

}

// =======================
// Dark Mode
// =======================

function darkMode(){

document.body.classList.toggle("dark");

}

// =======================
// Current Year in Footer
// =======================

let year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

// =======================
// WhatsApp Button
// =======================

function whatsapp(){

window.open(

"https://wa.me/917989861880?text=Hello RK Furnitures, I am interested in your furniture."

);

}

// =======================
// Loading Screen
// =======================

window.addEventListener("load",function(){

const loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

});

// =======================
// Console Message
// =======================

console.log("RK Furnitures Website Loaded Successfully");