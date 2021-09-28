import Header from './components/Header';
import TextSection from "./components/TextSection";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

const TEXTS = {
    HEADER: {
        TITLE: 'Blog napisany w React JS',
    },
    TEXT_SECTION1: {
        TEXT: 'Treść strony przykładowa',
    },
    TEXT_SECTION2: {
        TEXT: 'Treść strony przykładowa 2',
        ADDITIONAL_TEXT: 'Dodatkowa treść strony',
    },
    FOOTER: {
        COPY: 'Copyright'
    }
}
function App() {
  return (
    <div>
        <Header title={TEXTS.HEADER.TITLE} />
        <TextSection text={TEXTS.TEXT_SECTION1.TEXT}/>
        <TextSection text={TEXTS.TEXT_SECTION2.TEXT}>
            {TEXTS.TEXT_SECTION2.ADDITIONAL_TEXT}
        </TextSection>
        <Counter />
        <Footer text={TEXTS.FOOTER.COPY}/>
    </div>
  );
}

export default App;
