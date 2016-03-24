function rebel() {
  var joinup = confirm("you little rebel, i like you! join the rebels?");
  var resistance= document.getElementById("resistance");
  if (joinup == true) {
    resistance.innerHTML = "<h2> you joined the rebels</h2><img src= http://i.ebayimg.com/images/g/1YMAAOSw3ydV4Hz4/s-l64.jpg>"; 
  } else {
    resistance.innerHTML = "<h2>you goodie two shoes</h2> <img src=https://store-images.s-microsoft.com/image/apps.21195.13510798882808754.64226fe0-5350-469b-95e1-e1165e3fdc4e.793867e1-75bb-4536-a038-11db40ff7215?w=96&h=96&q=60>";
  }
}