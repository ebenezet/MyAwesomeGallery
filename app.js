console.log("Hi matey")

// I'm creating the array that contains all the images of my gallery
const myImages = [
     
    {src:"https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-615314602?_a=BAVAZGDX0", 
     thumbsrc: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-615314602?_a=BAVAZGDX0",
     alt: "Geronimo"},
   
    {src: "https://ichef.bbci.co.uk/images/ic/1200xn/p0hgdn0c.jpg", 
     thumbsrc:"https://ichef.bbci.co.uk/images/ic/1200xn/p0hgdn0c.jpg",    
     alt:"The struggle"},
    {src:"https://www.eptrail.com/wp-content/uploads/2022/07/TGC-Z-Tepee.jpg?w=1078", 
     thumbsrc: "https://www.eptrail.com/wp-content/uploads/2022/07/TGC-Z-Tepee.jpg?w=1078",  
     alt:"Arapaho tepee"},
    {src: "https://th-thumbnailer.cdn-si-edu.com/nPYQi5j9KDTAPcXZZG-_pz5X0TQ=/fit-in/1072x0/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/e7450b51-e06d-40df-8767-b64e7bb1c598.jpg", 
     thumbsrc: "https://th-thumbnailer.cdn-si-edu.com/nPYQi5j9KDTAPcXZZG-_pz5X0TQ=/fit-in/1072x0/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/e7450b51-e06d-40df-8767-b64e7bb1c598.jpg",   
     alt:"Oglala people"},
    {src: "https://d2ujpqfu85jxzw.cloudfront.net/website/panth-live/styles/full_width_varied_height/s3/artwork/P1967-622/carter_p1967-622_o2_25.jpg", 
     thumbsrc: "https://d2ujpqfu85jxzw.cloudfront.net/website/panth-live/styles/full_width_varied_height/s3/artwork/P1967-622/carter_p1967-622_o2_25.jpg",
     alt:" A council of indian chiefs"}

]

// I want to have access to the div with id=thumb-container. This is where the small image will go
let thumbContainer = document.getElementById("thumb-container")
 
 
//I want tohave to access to the div with id=display. This is where the big image will go
const displayElement = document.getElementById("display")

let imageSeenIndex = 0

let imageElem = document.createElement("img")
// I create a function to display the small images in div with id=thumb-container.
// I want to go through each element of the array (forEach or for of) and create a corresponding image in 
//the HTML file (imageElem) with properties from the element in the array (myImage)
//I then want to display this imageElem in thumbContainer - thereby thumb-container in HTML -
// I then want to create an event whenever I click to an image it display the image in the array
function creationOfThumbnails() {
     for (let myImage of myImages) {
     let imageElem = document.createElement("img")
        imageElem.src = myImage.src
        imageElem.alt = myImage.alt
        imageElem.add = "thumbsmall"
        imageElem.tabindex = "0"
        thumbContainer.appendChild(imageElem)
       imageElem.addEventListener('click', function () {
            imageSeen(myImage)
 
        })
        imageElem.addEventListener("keydown", function(event){
            if (event.key == 'Enter') imageSeen(myImage)
        })
    }
 }
creationOfThumbnails()


function updateScrollBar(imageSeen) {

    let thumbnails = thumbContainer.querySelectorAll('.thumbsmall')
    let seenThumbnail
    thumbnails.forEach(function (thumb) {
        if(thumb.src  === imageSeen.thumbsrc) {
            seenThumbnail = thumb
        }
    })
    if(seenThumbnail) {
        let scrollLeftPos = (activeThumbnail.offsetLeft + thumbRect.width / 2) - containerRect.width / 2

        thumbContainer.scrollTo({
            left: scrollLeftPos,
            behavior: 'smooth'
        })
    }
}



function imageSeen(myImage){
    let biggerImage = displayElement.firstchild
    if(!biggerImage) {
    biggerImage = document.createElement("img")
    displayElement.appendChild(biggerImage)
    }
    biggerImage.src = myImage.src
    biggerImage.scr = myImage.alt
    biggerImage.class = "thumbcontsmall"
    biggerImage.tabindex = "0"
    updateScrollBar(myImage)

}



next.addEventListener('click', function() {chooseNextImage(+1)})
prev.addEventListener('click', function() {chooseNextImage(-1)})



function chooseNextImage(index) {
    imageSeenIndex = imageSeenIndex + index
    if (imageSeenIndex >= myImages.length) 
        imageSeenIndex = 0
    
    if (imageSeenIndex < 0)  imageSeenIndex = myImages.length -1
    imageSeen(myImages[imageSeenIndex])
    
}



function chooseWithKeyboard(event) {
    if (event.key === 'ArrowRight') {
        chooseNextImage(1);
    } else if (event.key === 'ArrowLeft') {
        chooseNextImage(-1);
    }
}



window.addEventListener('keydown', chooseWithKeyboard);
