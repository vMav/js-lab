function setimg(){
    //set a default "cover" image to hide underlying image
    var coverimage = 'cover.jpg';
    var img = document.getElementsByClassName("varimg");

    for(n = 0; n < img.length; n++){
        img[n].src = coverimage;
    }

}

function shuffle(){
var range = [1,2,3,4,5,6,7,8,9,10,11,12];
var output = [];

while(output.length <= 12){
var r = Math.random() * 11;
var r = Math.round(r)
var select = range[r]

if(select != 'xx'){
    output.push(select)
    select = 'xx'
    }
}
return output
}

function testy(){ //temp only
document.getElementsByTagName('p')[0].innerHTML = shuffle()
}