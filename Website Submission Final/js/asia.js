//javascript for modals

var modalBtns = document.querySelectorAll(".modal-open"); // Select all modal-open class

// Javascript for Click events

modalBtns.forEach(function (btn) {   // Function for each button for all the buttons
  btn.onclick = function () { //when user click button
    var modal = btn.getAttribute("data-modal"); // select data-modal attribute from HTML
    document.getElementById(modal).style.display = "block"; // Display the modal as a block on the page
  };
});

var closeBtns = document.querySelectorAll(".modal-close"); // select all modal-close class
closeBtns.forEach(function (btn) {   // Function for each close button for all the close buttons
  btn.onclick = function () {     // When user click close button
    var modal = (btn.closest(".modal").style.display = "none"); // Remove modal display / display nothing
  };
});

// Extra javascript when user clicks anywhere outside of the modal it also closes it
window.onclick = function (e) {
  if (e.target.className == "modal") {
    e.target.style.display = "none"; // Display set to none
  }
};

