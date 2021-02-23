confirm("Welcome To The Art House");
var name=prompt("What is your Name ?")
var age=prompt("how old are you ?")
var a=prompt("Do you like paint ?");
var no="no";
var yes="yes";

if (a.toLowerCase() === no){
    alert("this Website is not for you !");
}else if(a.toLowerCase() === yes){
    alert("this Website creat for you !");
}else{ alert("wrong input");}

var b=document.getElementById('username');
b.innerText='Name : '+name.toUpperCase()

var c=document.getElementById('userage');
c.innerText='Age : '+age.toUpperCase()


