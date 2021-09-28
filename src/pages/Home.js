import Header from '../components/Header';
import TextSection from "../components/TextSection";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import PostList from "../components/PostList";
import Comments from "../components/Comments";
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
function Home() {
    return (
        <div>
            <TextSection text={TEXTS.TEXT_SECTION1.TEXT}/>
            <TextSection text={TEXTS.TEXT_SECTION2.TEXT}>
                {TEXTS.TEXT_SECTION2.ADDITIONAL_TEXT}
            </TextSection>
            <Counter />
            <PostList />
            <Comments />
        </div>
    );
}

export default Home;
