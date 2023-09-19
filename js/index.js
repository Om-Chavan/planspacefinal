function facebook() {
    window.open("https://www.facebook.com/profile.php?id=61550932072229&mibextid=ZbWKwL", "_blank");
}

function insta() {
    window.open("https://instagram.com/planspace.in?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D", "_blank");
}

function yt() {
    window.open("https://www.facebook.com/profile.php?id=61550932072229&mibextid=ZbWKwL", "_blank");
}

function twitter() {
    window.open("https://www.facebook.com/profile.php?id=61550932072229&mibextid=ZbWKwL", "_blank");
}


// function next(){
// document.getElementById("img_slide").src="./img/photo (10).jpeg"
// }

// function pre(){

// }


var images = ['photo (1).jpeg', 'photo (2).jpeg', 'photo (3).jpeg', 'photo (4).jpeg', 'photo (5).jpeg'];
    var i = 0;

    function pre() {
      if (i <= 0) i = images.length;
      i--;
      return setImg();
    }

    function next() {
      if (i >= images.length - 1) i = -1;
      i++;
      return setImg();
    }

    function setImg() {
        // document.getElementById("img_slide").style.height = "500px";
      return img_slide.setAttribute('src', "img/" + images[i]);
    }