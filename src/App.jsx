
import './App.scss'
import Header from './components/layout/Header';
import IntroSection from './components/section/IntroSection';
import AboutSection from './components/section/AboutSection';
import BlogPostSection from './components/section/BlogPostSection';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <IntroSection />
        <AboutSection />
        <BlogPostSection />
      </main>
    </div>
  )
}

export default App
