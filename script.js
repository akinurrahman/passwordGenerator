// selecters for slider
const total_char = document.querySelector("#total-char")
const sliderValue = document.querySelector('#sliderValue')

// slider value
total_char.addEventListener('input',()=>{
    sliderValue.innerHTML = total_char.value
})

// password sets
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = 'abcdefghijklmnopqrstuvwxyz'
const numberSet = '1234567890'
const symbolSet = '@#$%&*?'

// getting rendom data
const getRendomData = (data) =>{
   return data[Math.floor(Math.random()*data.length)]
}


// input selectors 
const upperCase = document.querySelector('#upper-case')
const lowerCase = document.querySelector('#lower-case')
const numbers = document.querySelector('#numbers')
const symbol = document.querySelector('#symbols')
const displayResult = document.querySelector('#pass-box')

// generate password
const generatePassword = (password="") =>{
    if(upperCase.checked){
    password += getRendomData(upperSet)
    }
    
    if(lowerCase.checked){
    password += getRendomData(lowerSet)
    }

    if(numbers.checked){
    password += getRendomData(numberSet)
    }

    // triming the extra part and 
    if(symbol.checked){
    password += getRendomData(symbolSet)
    }
    displayResult.innerHTML = password
    if(password.length === total_char.value){
        displayResult.innerHTML = password

    } else if(password.length < total_char.value) {
        generatePassword(password)
    } else {
      password =  password.slice(0,total_char.value)
      displayResult.innerHTML = password

    }
}

// btn selector 
const btn = document.querySelector('#btn')

// generate button click
btn.addEventListener('click',()=>{
generatePassword()
})


// dark mode 
// selectors
const mode_btn = document.querySelector(".mode-btn");
const main = document.querySelector(".main")
const copyright = document.querySelector(".copyright")

// dark to light
const dark_to_light = () => {
        main.style = "background:black";
      mode_btn.innerHTML = "Light Mode";

    };

//   light to Dark Mode
const light_to_dark = () => {
    main.style = "background:white";
  mode_btn.innerHTML = "Dark Mode";

};

// adding event listner to btn
mode_btn.addEventListener("click", () => {
  if (mode_btn.innerHTML == "Dark Mode") {
    dark_to_light();
    copyright.style="color:white"
  } else {
    light_to_dark();
    copyright.style="color:black"

  }
});
