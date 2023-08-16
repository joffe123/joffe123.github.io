
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Grosser_Panda.JPG") {
    myImage.setAttribute("src", "images/panda2.jpg"); 
  } else{
    myImage.setAttribute("src", "images/panda3.jpg");
   }
};
