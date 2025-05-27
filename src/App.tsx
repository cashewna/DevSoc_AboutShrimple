import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MagnetGame } from "./components/MagnetGame";
import styles from "./App.module.css";

const socials = {
  github: {
    url: "https://github.com/cashewna",
    img: "/github.png"
  },
  linkedin: {
    url: "https://www.linkedin.com/in/barrel-titor-4a807b297/",
    img: "/linkedin.png"
  },
  instagram: {
    url: "https://www.instagram.com/dangoquiche/",
    img: "/instagram.png"
  }
};

function App() {
  return (
    <>
      <Header />
      <div className={styles.contentRow}>
        <main className={styles.mainContent}>
          <h1>About Me</h1>
          <p>
            Hello! I love animals, especially my cats 🥲 <br />
            I recently moved from Perth to Sydney and would love to make
            lifelong friends hopefully.
            I like being plain and shrimple bimple.
          </p>

          <h1>Interests</h1>
          <p>
            I like surfing the internet, watching YouTube, video games, playing
            with my cats, eating, cooking, cameras, data hoarding, movies,
            reading, listening to a variety of music (such as oldies) etc. I
            like being frugal and saving money and hope I can get a job in the
            tech industry soon.
          </p>

          <MagnetGame />
        </main>
        <aside className={styles.aside}>
          <nav aria-label="Social links">
            <ul>
              <li>
                <a href={socials.github.url} target="_blank"><img src={socials.github.img} alt="Github" width={32}/></a>
              </li>
              <li>
                <a href={socials.linkedin.url} target="_blank"><img src={socials.linkedin.img} alt="LinkedIn" width={32}/></a>
              </li>
              <li>
                <a href={socials.instagram.url} target="_blank"><img src={socials.instagram.img} alt="Instagram" width={32}/></a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>

      <Footer />
    </>
  );
}

export default App;
