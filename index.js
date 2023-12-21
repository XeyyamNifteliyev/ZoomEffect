

let div = document.querySelector("div")
let img = document.querySelector("img")
let d = document.getElementById("d")
let i = document.getElementById("i")



// div.addEventListener("mousemove",function(e){

//     let x = e.clientX - e.target.offsetLeft
//     let y = e.clientY - e.target.offsetTop

//     img.style.transformOrigin = `${x}px ${y}px`

//     img.style.transform = "scale(2)"

  


// })


// div.addEventListener("mouseout",function(){
//     img.style.transformOrigin = 'center center' 
//     img.style.transform = "scale(1)"
// })



div.addEventListener("mousemove",function(e){
    let x = e.clientX  - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    i.style.transformOrigin = `${x}px ${y}px`
    i.style.transform = 'scale(2)'
    i.style.display = 'block'
    
})


div.addEventListener("mouseout",function(){
    i.style.transformOrigin = "center center"
    i.style.transform = 'scale(1)'
    i.style.display = 'none'
})