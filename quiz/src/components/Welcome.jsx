import Quiz from '../img/quiz.svg'

import './Welcome.css'
import { QuizContext } from '../context/quiz'
import { useContext } from 'react'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
        <h2>Seja bem vindo</h2>
        <p>Cliquie no botão abaixo para começar:</p>
        <button onClick={()=> dispatch({type: "CHANGE_STATE" })}>Iniciar</button>
        <img src={Quiz} alt="Inicio do quiz"></img>
    </div>
  )
}

export default Welcome