var generated_password_btn = document.querySelector('.generated_password_btn');
var copy_password_btn = document.querySelector('.copy_password_btn');
var generated_password = document.querySelector('.generated_password');
var text_copied = document.querySelector('.text_copied');

// genrate pasword
function genrate_pasword(){
    var possible_charecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    var password_length = 8;
    var random_password = "";

    for (let i = 0; i < password_length; i++) {
        random_password = random_password + possible_charecters.charAt(Math.floor(Math.random() * possible_charecters.length));
    }
    return random_password;
}

// Display pasword
function display_password(){
    var password = genrate_pasword();
    generated_password.innerHTML = password;
}

//copy generated password
function copy_password(){
    var copy_generated_password = generated_password.innerHTML;
}

//when button is clicked - random password will generate
generated_password_btn.addEventListener('click', display_password);