const profilePic = document.getElementById("upload-picture");
const newProfile = document.querySelectorAll(".newProfile");

profilePic.addEventListener("change" , ()=>{
    console.log("enterd");
   let len = newProfile.length;
   for(let i=0; i<len; i++){
      newProfile[i].src = URL.createObjectURL(profilePic.files[0]);
   }
});
