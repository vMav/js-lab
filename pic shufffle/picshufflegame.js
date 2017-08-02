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

while(output.length < 12){

var r = Math.round(Math.random() * 11);
var select = range[r]

if(select != 'xx'){
    output.push(select)
    range[r] = 'xx'
    }
}
return output
}

//function mapobj(){
var set1 = shuffle()
var set2 = shuffle()
//}

function testy(){ //temp only
document.getElementsByTagName('p')[0].innerHTML = "SET 1: " + set1+ " SET 2: " + set2
}