import logoImg from '../assets/images/logo.svg';
export function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>Logo</div>
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />
          <div className="form-footer"></div>
        </form>
      </main>
    </div>
  );
}
