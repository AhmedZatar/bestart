
var answer="yes";
var youranswer=prompt("Please write yes to confirm you are not bot");
while (answer !=youranswer.toLowerCase()){
    youranswer=prompt("Please try again");
}
confirm("Welcome To The Art House");
var name=prompt("What is your Name ?")
var a=prompt("Do you like paint ?");
var no="no";
var yes="yes";

if (a.toLowerCase() === no){
    alert("this Website is not for you !");
}else if(a.toLowerCase() === yes){
    alert("this Website creat for you !");
}else{ alert("wrong input");}

var b=document.getElementById('username');
b.innerText='WELCOME '+name.toUpperCase();

function avgOfRating(r1,r2,r3){
  
    var sum= parseInt(r1)+parseInt(r2)+parseInt(r3);
    var avg=sum/3;
    
    var c=document.getElementById('rating');
    c.innerText='Your Rating Us '+ avg+'/5'; 
}

var counter=0;

while (counter<3){
if (counter==0){
    var r1 =prompt("How do you rate the drawings on our site from 5");

}else if (counter==1){
   var r2 =prompt("How would you rate us for choosing our site painter out of 5");
       
}else {
   var r3 =prompt("What is your rating for website design from 5");
}
counter+=1;

}

avgOfRating(r1,r2,r3);

for (var i=prompt("how many LEONARDO DA VINCI down the page you want ? "); parseInt(i)>=1;i-=1){
        document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/220px-Francesco_Melzi_-_Portrait_of_Leonardo.png">');
}