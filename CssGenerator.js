//creating the anonymous function [when we enter into the page it will appear first.....so we using the DOMContentLoaded it is case sensitive so be care full] 
document.addEventListener("DOMContentLoaded",()=>{
 //getting the values from the elements and tag and class and id:  
    const container=document.querySelector('.container');
    const btn=document.querySelector('.btn');
    const allBorder=document.getElementById('all');
    const allsize=document.getElementById('size');
    const all_values=document.getElementById('all_values');
    const code=document.getElementById('code');
    const border_styleElement=document.getElementById('border_style');
    const border_value=document.getElementById('border_value');
    const for_color=document.getElementById('color');

//declaring the variables line by line when we want..    
    //assigning the sample inputs to test.......
    var all_radius=10;
    var border_style="solid";
    var border_size=3;
    var coding="test";
    var border_color="green";

    function allBorderUpdate(){
        all_radius=allBorder.value;//getting the original value from the id and class site.
        border_size=allsize.value;
        border_color=for_color.value;
        
        all_values.innerText=all_radius+"px";//by this inner text we can able to change the original value from the id and class we addedon top.
        border_value.innerText=border_size+"px";
        coding=`border-radius:${all_radius}px;
border:${border_size}px ${border_style} ${border_color};`;
        code.value=coding;

        container.style.cssText=coding;
    }
    allBorderUpdate()
// for border radius:
    allBorder.addEventListener('mousemove',allBorderUpdate);
    allBorder.addEventListener('change',allBorderUpdate);
// for border:
    allsize.addEventListener('mousemove',allBorderUpdate);
    allsize.addEventListener('change',allBorderUpdate);
//for border color:
    for_color.addEventListener('mousemove',allBorderUpdate);
    for_color.addEventListener('change',allBorderUpdate);
//for copying the text from the textarea.
    btn.addEventListener('click',()=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
    });

    allBorderUpdate();//calling the function.

//border color:
    for_color.addEventListener('click',()=>{
        document.querySelector('color').select();
        allBorderUpdate();
    });
//border style:
    border_styleElement.addEventListener('change',function(){
        border_style=this.value;
        allBorderUpdate();  //recall the function for the inside anonymous function
    });
    
});