import TopMenu from "./components/TopMenu";
import GlobalStyle from "./constants/globalStyles";
import Footer from "./containers/Footer";
import Section1 from "./containers/Section1";
import Section2 from "./containers/Section2";
import Section3 from "./containers/Section3";

function App() {
  return (
    <>
      <GlobalStyle />
      <TopMenu></TopMenu>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer/>
    </>
  );
}

export default App;
