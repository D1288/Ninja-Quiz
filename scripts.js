const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const scoreDisplay = document.querySelector('.displayScore')
const result = document.querySelector('.result')

form.addEventListener('submit', e =>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //check answers
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    //show result
    scrollTo(0,0);
    result.classList.remove("d-none")
    scoreDisplay.textContent = `${score}%`;

    let output = 0;
    const timer = setInterval(() =>{
        scoreDisplay.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    }, 10);

    console.log(score)
})