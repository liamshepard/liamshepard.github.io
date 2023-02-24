function toggleDropdownMenu() {
    var x = document.getElementById("rightSideNav");
    if (x.className === "rightSideNav") {
      x.className = "rightSideNavDisplay";
    } else {
      x.className = "rightSideNav";
    }
  } 