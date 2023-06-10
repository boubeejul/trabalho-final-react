import { Container, ContainerCadastro } from "./style";
import logo from "../../assets/logo_header.png";

export function Cadastro() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <ContainerCadastro>
        <h4>Cadastro</h4>

        <form>
          <input type="text" id="user" name="user" placeholder="Usuário"></input>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            required
          ></input>
          <input type="text" id="email" name="email" placeholder="Email" required></input>
        </form>

        <button>Continuar</button>

        <a href="/login">Fazer login</a>
      </ContainerCadastro>
    </Container>
  );
}
