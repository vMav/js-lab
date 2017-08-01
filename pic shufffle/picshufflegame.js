function setimg(){
    //set a default "cover" image to hide underlying image
    var coverimage = 'cover.jpg'
    var img = document.getElementsByClassName("varimg")
    for(n = 0; n < img.length; n++){
    img[n].src = coverimage
    }

}

setimg()