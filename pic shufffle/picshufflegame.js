var mapping = {}
var turn = 0
var last = ""

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

function mapobj(){

var set1 = shuffle()
var set2 = shuffle()

for(x = 0; x <12; x++){
var w1 = "i" + x;
var w2 = "i" + (x + 12)
mapping[w1] = set1[x]+'.jpg'
mapping[w2] = set2[x]+'.jpg'
}
}

function getclick(obj){
    turn++
    obj.src = mapping[obj.id]
    
    last = mapping[obj.id]
}



// TEST AREA 
mapobj()
var maptest = []
for (var [key, value] of Object.entries(mapping)) {
    maptest.push(key + ' : ' + value);
}
console.log(maptest)

function testy(){ //temp only
document.getElementsByTagName('p')[0].innerHTML = " mapobj = " + maptest
}
//EOF