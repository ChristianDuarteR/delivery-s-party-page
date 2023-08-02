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
        if (x.type == "password") {
            x.type = "text";
        }
    }