
function setup() {
  ;


  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);

}

function gotFile(file) {
  createP(file.name + " " + file.size);
  var img = createImg(file.data);
  img.size (100, 100);

}
function highlight() {
  dropzone.style('background-color','#ccc');

}

function unhighlight() {
  dropzone.style('background-color','#fff');

}

// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}