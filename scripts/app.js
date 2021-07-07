window.main = document.getElementById('main')
window.vid = document.getElementById("video1")

document.body.style.height = main.clientHeight + 'px'
window.cliHeight = document.documentElement.clientHeight

const scrDisplay = document.getElementById("scrDisplay")
//Scroll event listener
document.addEventListener("scroll", function(){
    //Percentage the user has scrolled of the page
    let scrPerc = ((window.scrollY / (document.documentElement.scrollHeight - cliHeight)) * 100)

    //Move the container
    main.style.transform = `translate3d(0,-${window.scrollY}px,0)`
    //Get the point in the video corrosponding to the page position
    vid.currentTime = (vid.duration / 100) * scrPerc

    //Display where we are on the page with text
    scrDisplay.innerText = vid.currentTime +" / "+ vid.duration
})