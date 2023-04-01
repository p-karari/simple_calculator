let number_buttons = document.querySelectorAll(".number_btns")
let operator_buttons = document.querySelectorAll(".operator_btns")
let display_box = document.querySelector(".answer_display")
 let space = (" ")
let displayValue = (" ")


let number_buttons_values = [ '7' , '8' , '9' , '4' , '5' , '6' , '1' , '2' , '3' , '0' , '.']
let operator_buttons_values = ['C' , '#' , '%' , '/' , 'X' , '-' , '+' , '#' , '=']

number_buttons[0].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[0]
    display_box.textContent = displayValue

    // display_box.textContent = number_buttons_values[0]
})

number_buttons[1].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[1]
    display_box.textContent = displayValue
    // display_box.textContent = number_buttons_values[1]
})
number_buttons[2].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[2]
    display_box.textContent = displayValue
    // display_box.textContent = number_buttons_values[2]
})
number_buttons[3].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[3]
    display_box.textContent = displayValue
})
number_buttons[4].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[4]
    display_box.textContent = displayValue
})
number_buttons[5].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[5]
    display_box.textContent = displayValue
})
number_buttons[6].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[6]
    display_box.textContent = displayValue
})
number_buttons[7].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[7]
    display_box.textContent = displayValue
})
number_buttons[8].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[8]
    display_box.textContent = displayValue
})
number_buttons[9].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[9]
    display_box.textContent = displayValue
})

number_buttons[10].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[10]
    display_box.textContent = displayValue
})

operator_buttons[0].addEventListener('click' , function(){
    displayValue = (" ")
    display_box.textContent = displayValue
})

operator_buttons[1].addEventListener('click' , function(){
    displayValue = displayValue + space +operator_buttons_values[1] + space
    display_box.textContent = displayValue
})


display_box.textContent = displayValue
// console.log(number_buttons[0])
// console.log(operator_buttons[3])
// console.log(display_box)
