 const signUpButton = document.getElementById('signUpButton');
 const sigInButton = document.getElementById('signInButton'); 
 const signInForm = document.getElementById('signIn'); 
 const signupForm = document.getElementById('signUp');
   
 signUpButton.addEventListener('click', function(){
   signInForm .style.display="none";
   signUpForm.style.display="block";
 });
 signInButton.addEventListener('click',function(){
  signInForm.style.display="none";
  signUpForm.style.display="block";
})  ;              