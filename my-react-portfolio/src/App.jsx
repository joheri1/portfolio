import { Header } from "./sections/Header"
import { Bio } from "./sections/Bio"
import { Gallery } from "./sections/Gallery"
import { Projects } from "./sections/Projects"
import { Tech } from "./sections/Tech"
import { Skills } from "./sections/Skills"
import { MyWords } from "./sections/MyWords"
import { Contact } from "./sections/Contact"
import "./App.css"


export const App = () => {

  return (
    <>
      <Header />
      <Bio />
      <Gallery />
      <Projects />
      <Tech />
      <Skills />
      <MyWords />
      <Contact />
    </>
  )
}

