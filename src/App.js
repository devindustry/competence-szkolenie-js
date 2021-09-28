import Header from './components/Header';
import TextSection from "./components/TextSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Header title="Nagłówek 1" subtitle="Nagłówe 2"/>
        Testowa aplikacja react JS
        <TextSection />
        <TextSection>
            Dodatkowa treść strony
        </TextSection>
        <Footer text="Copyright"/>
    </div>
  );
}

export default App;
