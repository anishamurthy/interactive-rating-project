function focusState(id1) {
  var label = document.getElementsByClassName("label");
  for (let i = 0; i < label.length; i++) {
    let item = label[i];
    item.style.backgroundColor = "#262E38";
    item.style.color = "#7C8798";
  }
  document.getElementById(id1).style.backgroundColor = "#7C8798";
  document.getElementById(id1).style.color = "#ffffff";
}
function hover(element) {
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

function onSubmit() {
  document.getElementById("rating").style.display = "none";
  document.getElementById("selected").style.display = "block";
  var getSelectedValue = document.querySelector('input[name="rating"]:checked');
  var value = "&nbsp" + getSelectedValue.value + "&nbsp";
  document.getElementById("selectedRating").innerHTML = value;
}
