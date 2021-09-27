// import '../pages/Blog/Blog';

// const form = document.querySelector('#form')
// const inputquestionName = document.querySelector('#text')

// const localStoragequestions = JSON.parse(localStorage.getItem('questions'))
// let questions = localStorage.getItem('questions') !== null ? localStoragequestions : [] 

// const generateID = () => Math.round(Math.random() * 1000)

// form.addEventListener('submit', event => {
//   event.preventDefault()
//    const questionName = inputquestionName.value.trim()
   
//    const question = {
//      id: generateID(),
//      name: questionName
//    }

//    if (questionName === "") {
//      alert('Burro')
//    }
//    else {
//      questions.push(question)
//      updateLocalStorage()
//      inputquestionName.value = ''
//    }
//  })


// // questions.map((questions) => {
// //   return(
// //     <>
// //       <div> {questions.id} </div>
// //       <div> {questions.name} </div>
// //     </>
// //   ) 
// // });

// // <button type="button" class="delete-btn" onClick="removequestions(${questions.id})"> x </button>

// //   const div = document.createElement("div");
// //   div.innerHTML = item;
// //   document.getElementById("team_list").appendChild(div);
// // })

// const removequestions = ID => {
//   questions = questions.filter(question => question.id !== ID)
//   updateLocalStorage()
// }

// const updateLocalStorage = () => {
//   localStorage.setItem('questions', JSON.stringify(questions))
//   window.location.reload()
// }