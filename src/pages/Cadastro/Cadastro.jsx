import { Container, ContainerCadastro } from "./style";
import logo from "../../assets/logo_header.png";

export function Cadastro() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <ContainerCadastro>
        <h4>Cadastro</h4>

          <input type="text" id="name" name="name" placeholder="Nome"></input>
          <input type="text" id="user" name="user" placeholder="Usuário"></input>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            required
          ></input>
          <input type="text" id="email" name="email" placeholder="Email" required></input>
          <input type="text" id="cpf" name="cpf" placeholder="CPF" required></input>
          <input type="tel" id="tel" name="tel" placeholder="Telefone" required></input>
          <input type="date" id="date" name="date" placeholder="Data de Nascimento"></input>


        <button>Continuar</button>

        <a href="/login">Fazer login</a>
      </ContainerCadastro>
    </Container>
  );
}
