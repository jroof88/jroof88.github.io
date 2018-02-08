function generateModal(id){
  var modal = document.getElementById('travelPictureModal');

  var img = document.getElementById(id);
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;

  var span = document.getElementsByClassName("close")[0];

  modal.onclick = function() { 
    modal.style.display = "none";
  }
}