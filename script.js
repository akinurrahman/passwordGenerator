
// selectors 
const upperCase = document.querySelector('#upper-case')
const lowerCase = document.querySelector('#lower-case')
const numbers = document.querySelector('#numbers')
const symbols = document.querySelector('#symbols')
const passwordLength = document.querySelector('#total-char')
const displayPassword = document.querySelector('#pass-box')
const btn = document.querySelector('#btn')
const sliderValue = document.querySelector('#sliderValue')

// slider value
passwordLength.addEventListener('input',()=>{
    sliderValue.innerHTML = passwordLength.value
})
// random passwords
const upperSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numSet = "0123456789"
const symbolSet = "!@#$%^&*(){}[]"
// getting a random key
const getRendomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]

}
// generate the password
const generatePassword = (password = "") =>{
    if (upperCase.checked){
       password += getRendomData(upperSet)
    }
    if (numbers.checked){
        password += getRendomData(numSet)
    }
    if (lowerCase.checked){
        password +=  getRendomData(lowerSet)
    }
    if (symbols.checked){
        password += getRendomData(symbolSet)
    }
    // triming the extra length and display it
    if (password.length === passwordLength.value) { 
        displayPassword.innerHTML = password;
      } else if (password.length < passwordLength.value) { 
        return generatePassword(password);
      } else {
        password = password.slice(0, passwordLength.value);
        displayPassword.innerHTML = password;
      }
}


btn.addEventListener('click', ()=>{
    generatePassword()
})

// dark mode 

const mode_btn = document.querySelector(".mode-btn");
const main = document.querySelector(".main")
const copyright = document.querySelector(".copyright")
const dark_to_light = () => {
        main.style = "background:black";
      mode_btn.innerHTML = "Light Mode";

    };
    //   light to Dark Mode
const light_to_dark = () => {
    main.style = "background:white";
  mode_btn.innerHTML = "Dark Mode";

};

mode_btn.addEventListener("click", () => {
  if (mode_btn.innerHTML == "Dark Mode") {
    dark_to_light();
    copyright.style="color:white"
  } else {
    light_to_dark();
    copyright.style="color:black"

  }
});
