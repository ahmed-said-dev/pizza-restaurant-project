let right = document.getElementsByClassName("bi-caret-right-fill")[0];
let left = document.getElementsByClassName("bi-caret-left-fill")[0];
let cards = document.getElementsByClassName("cards")[0];
left.addEventListener("click",()=>{cards.scrollLeft = -140;});
right.addEventListener("click",()=> {cards.scrollLeft = +700;} );
let poster = document.getElementById("poster");
let title = document.getElementById("title")
let price =document.getElementById("price_count")
Array.from(document.getElementsByClassName("card")).forEach((ele,i)=>{
    ele.addEventListener("click",()=>{ 
        poster.src = ele.getElementsByTagName("img")[0].src;
        title.textContent = ele.getElementsByTagName("h5")[0].textContent;
        price.textContent = ele.getElementsByTagName("h4")[0].textContent;
    } )
})
