let rate = document.querySelectorAll('.rate');
let rate_score = document.getElementById('rate_score');
let submitButton = document.getElementById('submit');
let rate_box = document.getElementById('rate_box');
let state = document.getElementById('state');


for(let i = 0; i< rate.length; i++){
    rate[i].addEventListener("click", rating);
    function rating(){
        rate_score.innerHTML = rate[i].value;
    }

    submitButton.addEventListener("click", submit)
    function submit(){
        rate_box.classList.add('hide');
        state.classList.add('show');
    }
}




    
