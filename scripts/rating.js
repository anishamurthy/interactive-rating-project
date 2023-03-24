function focusState(id1, id2, id3, id4, id5) {
  document.getElementById(id1).style.backgroundColor = "#7C8798";
  document.getElementById(id1).style.color = "#ffffff";
  document.getElementById(id2).style.backgroundColor = "#262E38";
  document.getElementById(id2).style.color = "#7C8798";
  document.getElementById(id3).style.backgroundColor = "#262E38";
  document.getElementById(id3).style.color = "#7C8798";
  document.getElementById(id4).style.backgroundColor = "#262E38";
  document.getElementById(id4).style.color = "#7C8798";
  document.getElementById(id5).style.backgroundColor = "#262E38";
  document.getElementById(id5).style.color = "#7C8798";
}
function hoverState(element) {
  element.style.backgroundColor = "#FC7614";
  element.style.color = "#ffffff";
}
function afterHoverState(element, id) {
  if (document.activeElement == document.getElementById(id)) {
    element.style.backgroundColor = "#7C8798";
  } else {
    element.style.backgroundColor = "#262E38";
    element.style.color = "#7C8798";
  }
}
function hoverSubmit(element) {
  element.style.backgroundColor = "#FFFFFF";
  element.style.color = "#FC7614";
}
function afterHoverSubmit(element) {
  element.style.backgroundColor = "#FC7614";
  element.style.color = "#FFFFFF";
}
function onSubmit() {
  document.getElementById("rating").style.display = "none";
  document.getElementById("selected").style.display = "block";
  var getSelectedValue = document.querySelector('input[name="rating"]:checked');
  var value = "&nbsp" + getSelectedValue.value + "&nbsp";
  document.getElementById("selectedRating").innerHTML = value;
}
