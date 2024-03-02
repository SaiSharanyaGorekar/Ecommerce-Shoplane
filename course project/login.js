let userIcon1=document.getElementsByClassName("userIcon1")
console.log(userIcon1[1]); !important;
userIcon1[1].onclick()= ()=>{
    let form1=document.getElementById("form1")
    console.log(form1);
    let a=document.body
    console.log(a);
    let display=form1.classList.toggle("true")
    if(display){
        form1.style.display="block"
        a.style.filter="blur(10px)"
    }
    else{
        form1.style.display="none"
       a.style.filter="none"
    }
}
let a=document.body
console.log(a);
a.onclick=()=>{
    let form1=document.getElementById("form1")
    console.log(form1);
    form1.style.display="none"
    a.style.filter="none"
}