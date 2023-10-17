import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import wellDone from '../img/welldone.svg'

import './GameOver.css'
function GameOver () {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div>
        <div id="gameover">
            <h2>Fim de jogo</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
            <img src={wellDone} alt='gameover'/>
            <button onClick={()=> dispatch({type: "NEW_GAME"})}>
                Reiniciar
            </button>
        </div>

    </div>
  )
}

export default GameOver