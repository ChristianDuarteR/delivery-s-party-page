function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function hoverEmail() {
    var x = document.getElementById("myEmail");
    var y = document.getElementById("myName");
        if (x.type == "password") {
          x.type = "text";
        } if (y.type == "password") {
          y.type = "text";
        }
    }