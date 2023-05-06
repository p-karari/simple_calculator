let number_buttons = document.querySelectorAll(".number_btns")
let operator_buttons = document.querySelectorAll(".operator_btns")
let display_box = document.querySelector(".answer_display")
 let space = (" ")
let displayValue = (" ")
let value
let value_left
let operand
let equals_sign = " = "

let number_buttons_values = [ '7' , '8' , '9' , '4' , '5' , '6' , '1' , '2' , '3' , '0' , '.']
let operator_buttons_values = ['C' , '#' , '%' , '/' , 'x' , '-' , '+' , '#' , '=']

number_buttons[0].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[0]
    display_box.textContent = displayValue
    value = 7
    // display_box.textContent = number_buttons_values[0]
})

number_buttons[1].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[1]
    display_box.textContent = displayValue
    value = 8
    // display_box.textContent = number_buttons_values[1]
})
number_buttons[2].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[2]
    display_box.textContent = displayValue
    value = 9
    // display_box.textContent = number_buttons_values[2]
})
number_buttons[3].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[3]
    display_box.textContent = displayValue
    value = 4
})
number_buttons[4].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[4]
    display_box.textContent = displayValue
    value = 5
})
number_buttons[5].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[5]
    display_box.textContent = displayValue
    value = 6
})
number_buttons[6].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[6]
    display_box.textContent = displayValue
    value = 1
})
number_buttons[7].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[7]
    display_box.textContent = displayValue
    value = 2
})
number_buttons[8].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[8]
    display_box.textContent = displayValue
    value = 3
})
number_buttons[9].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[9]
    display_box.textContent = displayValue
    value = 0
})

number_buttons[10].addEventListener('click' , function(){
    displayValue = displayValue + number_buttons_values[10]
    display_box.textContent = displayValue
    value = 0.0
})

operator_buttons[0].addEventListener('click' , function(){
    displayValue = (" ")
    display_box.textContent = displayValue
    value_left = value
    value = 0
})

operator_buttons[1].addEventListener('click' , function(){
    displayValue = displayValue + space +operator_buttons_values[1] + space
    display_box.textContent = displayValue
    value_left = value
    value = 0
})

operator_buttons[2].addEventListener('click' , function(){
    displayValue = displayValue + space +operator_buttons_values[2] + space
    display_box.textContent = displayValue
    value_left = value
    value = 0
})

operator_buttons[3].addEventListener('click' , function(){
    displayValue = displayValue + space +operator_buttons_values[3] + space
    display_box.textContent = displayValue
    value_left = value
    value = 0
    operand = '/'
})

operator_buttons[4].addEventListener('click' , function(){
    displayValue = displayValue + space +operator_buttons_values[4] + space
    display_box.textContent = displayValue
    value_left = value
    value = 0
    operand = 'x'
})

operator_buttons[5].addEventListener('click' , function(){
    displayValue = displayValue + space +operator_buttons_values[5] + space
    display_box.textContent = displayValue
    value_left = value
    value = 0
    operand = '-'
})

operator_buttons[6].addEventListener('click' , function(){
    displayValue = displayValue + space +operator_buttons_values[6] + space
    display_box.textContent = displayValue
    value_left = value
    value = 0
    operand = '+'
})

operator_buttons[7].addEventListener('click' , function(){
    displayValue = displayValue + space +operator_buttons_values[7] + space
    display_box.textContent = displayValue
    value_left = value
    value = 0
    operand = '='
})

function sum(){
    if(operand === '+') {
        // let ans = parseInt(displayValue) + parseInt(displayValue)
        ans = value_left + value
        displayValue += equals_sign + ans
        display_box.textContent = displayValue
    }
    if(operand === '-') {
        // let ans = parseInt(displayValue) + parseInt(displayValue)
        ans = value_left - value
        displayValue += equals_sign + ans
        display_box.textContent = displayValue
    }
    if(operand === 'x') {
        // let ans = parseInt(displayValue) + parseInt(displayValue)
        ans = value_left * value
        // display_box.textContent = ans
        displayValue += equals_sign + ans
        display_box.textContent = displayValue
    }
    if(operand === '/') {
        // let ans = parseInt(displayValue) + parseInt(displayValue)
        ans = value_left / value
        displayValue += equals_sign + ans
        display_box.textContent = displayValue
    }if(operand === '%') {
        // let ans = parseInt(displayValue) + parseInt(displayValue)
        ans = value_left % value
        displayValue += equals_sign + ans
        display_box.textContent = ans
    }

}

operator_buttons[8].addEventListener('click' , function(){
    // displayValue = displayValue + space +operator_buttons_values[8] + space
    // display_box.textContent = displayValue
    sum()
})



display_box.textContent = displayValue
// console.log(number_buttons[0])
// console.log(operator_buttons[3])
// console.log(display_box)
