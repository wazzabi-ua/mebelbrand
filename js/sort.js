function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("container")[0].getElementsByClassName("divan");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x = document.getElementsByClassName("container")[0].getElementsByClassName("lizhko");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x = document.getElementsByClassName("container")[0].getElementsByClassName("dlya-tvaryn");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    if (c == "all") {
      x = document.getElementsByClassName("container")[0].getElementsByClassName("divan");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
      x = document.getElementsByClassName("container")[0].getElementsByClassName("lizhko");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
      x = document.getElementsByClassName("container")[0].getElementsByClassName("dlya-tvaryn");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
    } else {
      x = document.getElementsByClassName("container")[0].getElementsByClassName(c);
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
    }
  }