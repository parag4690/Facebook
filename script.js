const profilePic = document.getElementById("upload-picture");
const newProfile = document.querySelectorAll(".newProfile");
const post = document.querySelector(".mind");
const createPost = document.querySelector(".create-post");
const cross = document.querySelector(".cro");
const container = document.querySelector(".container");
const posted = document.querySelector(".posted");
const textArea = document.getElementById("txt");
const postPic = document.querySelector(".post-pic");
const uploadPhoto =document.getElementById("post-picture");

if(post){
post.addEventListener("click" , ()=>{
   createPost.classList.remove("activePost");
   container.classList.add("activeCon");
});
}
if(cross){
cross.addEventListener("click" , ()=>{
   createPost.classList.add("activePost");
   container.classList.remove("activeCon");
   document.querySelector(".noPic").classList.remove("disableNopic");
   document.querySelector(".post-pic").classList.add("disableImg");
   posted.classList.add("disable");
   textArea.value="";
   check=true;
});
}
// outside the div

if(profilePic){

profilePic.addEventListener("change" , ()=>{
    console.log("enterd");
   let len = newProfile.length;
   for(let i=0; i<len; i++){
      newProfile[i].src = URL.createObjectURL(profilePic.files[0]);
   }
});
}
let check = true;
if(uploadPhoto){
   uploadPhoto.addEventListener("change" , ()=>{
      console.log("ha bhai k dikt s tere ")
       postPic.src = URL.createObjectURL(uploadPhoto.files[0]);
       document.querySelector(".noPic").classList.add("disableNopic");
       document.querySelector(".post-pic").classList.remove("disableImg");
       posted.classList.remove("disable");
       check = false;
   });
}

if(textArea){
  textArea.addEventListener("input" , ()=>{
     console.log(" oho ki haal chall ");
     let val = textArea.value;
     console.log(val , val.length);
     if(parseInt(val.length)==0 && check){
      posted.classList.add("disable");
     }
     else{
      posted.classList.remove("disable");
     }
  });

}


