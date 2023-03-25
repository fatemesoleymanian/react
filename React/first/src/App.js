import Pages from "./pages/Pages";
import Category from "./components/Ctegory";
import { BrowserRouter, Link} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Nav } from "./style/styles";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav >
        <GiKnifeFork />
        <Logo to={"/"}>Deliciousss</Logo>
      </Nav>
      <Search />
    <Category />
      <Pages />
      </BrowserRouter>
      </div>
  );
}
const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`;
export default App;
