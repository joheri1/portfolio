import { Header } from "./sections/Header"
import { Bio } from "./sections/Bio"
import { Gallery } from "./sections/Gallery"
import { Projects } from "./sections/Projects"
import { Tech } from "./sections/Tech"
import { Skills } from "./sections/Skills"
import { MyWords } from "./sections/MyWords"
import { Contact } from "./sections/Contact"
import { ScrollToTop } from "./sections/ScrollToTop"
import "./App.css"


export const App = () => {

  return (
    <>
      <div id="top" />
      <Header />
      <Gallery />
      <Bio />
      <Projects />
      <Tech />
      <Skills />
      <MyWords />
      <Contact />
      <ScrollToTop />
    </>
  )
}

