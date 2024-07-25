const carousel=document.getElementById("carousel");
const buttons=document.querySelectorAll(".nav-button")
const progress=document.querySelector(".progress")
const cardWidth=document.querySelector(".card").offsetWidth
let isDraggable=false,startX,startScrollLeft;

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        makeProgressBar();
        carousel.scrollLeft+=btn.id==="left"?-cardWidth:cardWidth;
        
    })
})

function mouseDown(e){
    isDraggable=true;
    carousel.classList.add("dragging")
    startX=e.pageX;
    startScrollLeft=carousel.scrollLeft;
}

function dragging(e){
    if(isDraggable){
        // scrollLeft means how much an element has scrolled horizontally
        // suppose startX is 200 and we move mouse to the left, the value will decrease
        // so leets say it will go from 200 to 100
        // so e.pageX will be 100 and pageX-startX will be 200-100=100
        // Now, initially the scrollLeft will be zero because the element hasnt scroll yet. So startScrollLeft=0
        // Therefore startScrollLeft-(e.pageX-startX) will be -100; The scrollable component wont move as its in negative which means no space.
        // If we move the mouse to the right the value will be positive and the component will move to the right
        carousel.scrollLeft=startScrollLeft-(e.pageX-startX);
        makeProgressBar();
    }
}

function mouseup(){
    isDraggable=false;
    carousel.classList.remove("dragging")
}


function makeProgressBar(){
progress.style.background="#03346E"
progress.style.width=carousel.scrollLeft+"px"
}

carousel.addEventListener("mousemove",dragging)
carousel.addEventListener("mousedown",mouseDown)
document.addEventListener("mouseup",mouseup)





