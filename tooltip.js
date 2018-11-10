var label = document.getElementsByClassName("wk_highlight");


for (var i = 0; i < label.length; i++) {
    label[i].addEventListener('mouseover', showLabel, false);
    label[i].addEventListener('mouseout', removeLabel, false)
}

function showLabel(){
  console.log(this);
  var x = event.clientX;
  var y = event.clientY;
  this.innerHTML += '<div class="tooltip">'+ this.getAttribute("data-detail") +'</div>';
  let tooltip = this.getElementsByClassName("tooltip")[0]
  tooltip.style.position = "absolute";
  tooltip.style.top = y+ 10 +'px';
  tooltip.style.left =  x - 50+'px';

}

function removeLabel(event){
  console.log("hi");
  let body = document.getElementsByTagName("BODY")[0];
  let tooltip = this.getElementsByClassName("tooltip")[0]
  console.log(tooltip);
  this.removeChild(tooltip)
}
