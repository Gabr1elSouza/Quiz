import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import wellDone from '../img/welldone.svg'

import './GameOver.css'
function GameOver () {
  return (
    <div>
        <div id="gameover">
            <h2>Fim de jogo</h2>
            <p>Pontuação: x</p>
            <p>Você acertou y de z perguntas.</p>
            <img src={wellDone} alt='gameover'/>
            <button>
                Reiniciar
            </button>
        </div>

    </div>
  )
}

export default GameOver