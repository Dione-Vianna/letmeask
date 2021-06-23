import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'



export function NewRoom() {

  const {user} = useAuth()


  return (
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="ilustração perguntas e respostas" />
        <strong>Crie salas de O&amp;A ao-vivo</strong>
        <p>Tire as dúdidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Cirar uma nova sala</h2>          
          <form action="">
            <input type="text"
              placeholder="Nome da sala" />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
              Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}