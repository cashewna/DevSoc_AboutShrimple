import { Header } from "./components/Header";

const socials = {
  github: "https://github.com/cashewna",
  linkedin: "https://www.linkedin.com/in/barrel-titor-4a807b297/",
  instagram: "https://www.instagram.com/dangoquiche/"
};

function App() {

  return (
    <>
      < Header />
      <main>
        <h1>About Me</h1>
        <p>
          Hello! I love animals, especially my cats 🥲 <br />
          I recently moved from Perth to Sydney and would love
          to make lifelong friends hopefully.
        </p>

        <h1>Interests</h1>
        <p>
          I like surfing the internet, watching YouTube, video games,
          playing with my cats, eating, cooking, cameras, data hoarding, movies,
          reading, listening to a variety of music (such as oldies) etc.
          I like being frugal and saving money and hope I can get a job in the
          tech industry soon.
        </p>
      </main>

      <aside>
        <nav aria-label="Social links">
          <ul>
            <li><a href={socials.github} target="_blank">Github</a></li>
            <li><a href={socials.linkedin} target="_blank">LinkedIn</a></li>
            <li><a href={socials.instagram} target="_blank">Instagram</a></li>
          </ul>
        </nav>
      </aside>

      <footer>
        <p>🖤🖤🧡🧡</p>
        <p>© 2023</p>
      </footer>
    </>
  )
}

export default App
