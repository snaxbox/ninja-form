
const myForm = document.getElementById("my-form");

myForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("helloworld");
    myForm.reset();
    alert("报名表已发送")
});