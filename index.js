let quizBox = document.getElementById('quizBox')
let questions = []
let currentQuestionIndex = 0
let questionCount=1

const getData =()=>{
   fetch('https://opentdb.com/api.php?amount=20&category=15&type=multiple')
   .then(res=>res.json())

    .then(res=>{
        console.log(res)
        questions = res.results
        questions.forEach(data => {
            let question = document.createElement('h3')
            question.innerText = `${questionCount++} -- ${data.question}`
            
            let answersbtn = document.createElement('button')
            answersbtn.innerText = data.correct_answer

            let incorrect1 = document.createElement('button')
            incorrect1.innerText=data.incorrect_answers[0]

            let incorrect2 = document.createElement('button')
            incorrect2.innerText=data.incorrect_answers[1]

            let incorrect3 = document.createElement('button')
            incorrect3.innerText=data.incorrect_answers[2]

            let allAnswers = [data.correct_answer,...data.incorrect_answers]
            
            
            
            quizBox.append(question,answersbtn,incorrect1,incorrect2,incorrect3)
            answersbtn.addEventListener('click',()=>{alert('corect you are good')})
            
            incorrect1.addEventListener('click',()=>{alert('wrong answer')})
            incorrect2.addEventListener('click',()=>{alert('wrong answer')})
            incorrect3.addEventListener('click',()=>{alert('wrong answer')})

        });

      })

}
getData()



