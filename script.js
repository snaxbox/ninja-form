
const myForm = document.getElementById("my-form");
const crossBtn = document.querySelector(".cross");
const overlay = document.querySelector(".modal-overlay");
const modalContent= document.querySelector(".modal-content");


myForm.addEventListener("submit", function(e){
    
    e.preventDefault();
    // overlay.classList.add(".modal-active");
    overlay.style.display ="block";
    // console.log("helloworld");
    // myForm.reset();
    // alert("报名表已发送")
});

crossBtn.addEventListener("click", function(){
    
    // myForm.reset();

    modalContent.classList.add("close-animation");

    setTimeout(closeAnimation, 400);
});

overlay.addEventListener("click", function(){
    
    modalContent.classList.add("close-animation");

    setTimeout(closeAnimation, 400);
});


function closeAnimation(){
    myForm.reset();
    overlay.style.display ="none";
    location.reload();
}
