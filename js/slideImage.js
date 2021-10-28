//Sketch
var sketchIndex = 1;
showSketches(sketchIndex);

function plusSketch(n) {
    showSketches(sketchIndex += n);
}

function currentSketch(n) {
    showSketches(sketchIndex = n);
}

function showSketches(n) {
  var i;
  var slides = document.getElementsByClassName("slideSketches");
  
  if (n > slides.length) {sketchIndex = 1}    
  if (n < 1) {sketchIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[sketchIndex-1].style.display = "block";  
}

//wireframe
var wireframeIndex = 1;
showWireframe(wireframeIndex);

function plusWireframe(n) {
    showWireframe(wireframeIndex += n);
}

function currentWireframe(n) {
    showWireframe(wireframeIndex = n);
}

function showWireframe(n) {
  var i;
  var slides = document.getElementsByClassName("slideWireframe");
  
  if (n > slides.length) {wireframeIndex = 1}    
  if (n < 1) {wireframeIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[wireframeIndex-1].style.display = "block";  
}

//prototype for myDoctor
var prototypeIndex = 1;
showPrototype(prototypeIndex);

function plusPrototype(n) {
    showPrototype(prototypeIndex += n);
}

function currentPrototype(n) {
    showPrototype(prototypeIndex = n);
}

function showPrototype(n) {
  var i;
  var slides = document.getElementsByClassName("slidePrototype");
  
  if (n > slides.length) {prototypeIndex = 1}    
  if (n < 1) {prototypeIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[prototypeIndex-1].style.display = "block";  
}

