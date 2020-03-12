// CHANGE IMAGE EVERY X SECONDS

// Images
var images = {
    imgList:[
        {img_1:"img_1", src:"img/mammoth.jpg", title:"wholly mammoth"},
        {img_2:"img_2", src:"img/cosmonaut.jpg", title: "Cosmonaut in space"},
        {img_3:"img_3", src:"img/people.jpg", title:"Scince/Research guy"}
    ]//end imgList

    
}
var myImg = images.imgList;

// DOM img tag
var image = document.getElementById("img");

// SHOW IMAGES
var imageShow = 0;

function displayImg(){
    if(imageShow < myImg.length){
    imageShow++;
    console.log(imageShow);
    image.setAttribute("src", myImg[imageShow - 1].src);
    setTimeout(displayImg, 4000);
    }
    else if(imageShow = 3){
        imageShow = 0;
        displayImg();
    }
}

displayImg();