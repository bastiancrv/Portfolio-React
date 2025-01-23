import ReactSvg from "./_components/_icons/ReactSvg";
import TailwindSvg from "./_components/_icons/TailwindSvg";
import JsSvg from "./_components/_icons/JsSvg";
import JavaSvg from "./_components/_icons/JavaSvg";
import HtmlSvg from "./_components/_icons/HtmlSvg";
import CssSvg from "./_components/_icons/CssSvg";
import PhpSvg from "./_components/_icons/PhpSvg";
import EpitechPng from "./_components/_icons/EpitechPng";
import LyceePng from "./_components/_icons/LyceePng";
import OrtecPng from "./_components/_icons/OrtecPng";
import MySqlSvg from "./_components/_icons/MySqlSvg";
import NodeSvg from "./_components/_icons/NodeSvg";
import ExpressSvg from "./_components/_icons/ExpressSvg";
import MongoSvg from "./_components/_icons/MongoSvg";
import SocketSvg from "./_components/_icons/SocketSvg";
import About from "./_components/About";
import NavBar from "./_components/NavBar";
import Card from "./_components/Cards/Card";
import SectionCard from "./_components/Cards/SectionCard";
import ContactMe from "./_components/ContactMe";

function App() {
  return (
    <>
      <main className="bg-neutral-800 h-full p-6 font-poppins text-neutral-300">
        <div className="w-fit mx-auto flex flex-col gap-40 max-sm:gap-20">
          <nav>
            <NavBar />
          </nav>
          <header className="w-fit">
            <About />
          </header>
          <div className="flex flex-row gap-4 justify-center max-md:flex-col">
            <div>
              <Card title={"Projets"}>
                <SectionCard
                  title={"Portfolio"}
                  image={"/portfolio.png"}
                  ShowProject={true}
                  linkgithub={
                    "https://github.com/bastiancrv/Projects/tree/main/Portfolio"
                  }
                  technologies={[
                    {
                      name: "React",
                      icon: (
                        <ReactSvg
                          style={{ animation: "spin 5s linear infinite" }}
                        />
                      ),
                    },
                    {
                      name: "Tailwind",
                      icon: <TailwindSvg className="animate-pulse" />,
                    },
                  ]}
                >
                  Le portfolio sur lequel vous vous trouvez à été réalisé au
                  cours d&apos;un projet à Epitech, je le maintient
                  régulièrement à jour afin d&apos;y ajouter mes nouveaux
                  projets.
                </SectionCard>
                <SectionCard
                  title={"HabboFx"}
                  SecondImage={true}
                  image={"/habbo1.png"}
                  image2={"/habbo2.png"}
                  ShowProject={true}
                  linkgithub={
                    "https://github.com/bastiancrv/Projects/tree/main/HabboFx"
                  }
                  technologies={[{ name: "Java", icon: <JavaSvg /> }]}
                >
                  Jeux vidéo, inspiré de Habbo Hotel, développé avec le framwork
                  JavaFx, est un jeu vidéo d&apos;aménagement d&apos;espaces. Un
                  système de crédits avec un coin cliqueur à été ajouté afin de
                  pouvoir acheter les items dans la boutique et agencer comme on
                  le souhaite une des différentes salles.
                </SectionCard>
                <SectionCard
                  title={"JobBoard"}
                  image={"/jobboard.png"}
                  ShowProject={true}
                  linkgithub={
                    "https://github.com/bastiancrv/Projects/tree/main/JobBoard"
                  }
                  technologies={[
                    { name: "Html", icon: <HtmlSvg /> },
                    { name: "Css", icon: <CssSvg /> },
                    { name: "Javascript", icon: <JsSvg /> },
                    { name: "Php", icon: <PhpSvg /> },
                    { name: "Mysql", icon: <MySqlSvg /> },
                  ]}
                >
                  Projet de création d&apos;un site d&apos;annonce
                  d&apos;emploi. Gestion de base de données -{">"} création de
                  compte / connexion, création d&apos;entreprise / offre
                  d&apos;emploi. Barre de recherche avec filtre.
                </SectionCard>
                <SectionCard
                  title={"IRC"}
                  technologies={[
                    { name: "React", icon: <ReactSvg /> },
                    { name: "Tailwind", icon: <TailwindSvg /> },
                    { name: "Node.Js", icon: <NodeSvg /> },
                    { name: "Express.Js", icon: <ExpressSvg /> },
                    { name: "Socket.io", icon: <SocketSvg /> },
                    { name: "MongoDb", icon: <MongoSvg /> },
                  ]}
                >Projet toujours en cours...</SectionCard>
              </Card>
            </div>
            <div className="flex flex-col gap-4">
              <Card title={"Formations"}>
                <SectionCard
                  title={"BTS SN IR"}
                  subtitle={"2022-2024"}
                  technologies={[
                    { name: "Lycée Saint Éloi", icon: <LyceePng /> },
                  ]}
                >
                  Après avoir obtenu mon Baccalauréat Général en spécialité NSI
                  et SI j&apos;ai décidé de m&apos;orienter vers un BTS Systèmes
                  Numérique option Informatique et Réseaux, ce qui m&apos;a
                  permis de développer mes compétences en développement et
                  d&apos;apprendre de nouveaux languages.
                </SectionCard>
                <SectionCard
                  title={"Master of Science"}
                  subtitle={"2024-aujourd'hui"}
                  technologies={[
                    { name: "Epitech Marseille", icon: <EpitechPng /> },
                  ]}
                >
                  Actuellement en Master of Science (Architecte Systèmes
                  d&apos;Information) à Épitech Marseille. <br />
                  Je développe de grandes compétences dans différents languages
                  de programation. <br /> <br />
                  <div className="flex justify-between">
                    <div>
                      <u>Technologies :</u> <br />
                      <ul className="list-disc list-inside">
                        <li>Algorithmie</li>
                        <li>Web</li>
                        <li>Java</li>
                        <li>Réseaux</li>
                        <li>Docker</li>
                        <li>MERN</li>
                        <li>Php Symfony</li>
                        <li>Devops</li>
                      </ul>{" "}
                    </div>
                    <div>
                      <u>Spécialités :</u> <br />
                      <ul className="list-disc list-inside">
                        <li>IA</li>
                        <li>Cybersécurité</li>
                        <li>Cloud</li>
                        <li>Data</li>
                        <li>IOT</li>
                        <li>VR</li>
                      </ul>
                    </div>
                  </div>
                </SectionCard>
              </Card>
              <Card title={"Expériences Pro"}>
                <SectionCard
                  title={"Admin Systèmes et Réseaux"}
                  subtitle={"2022"}
                  technologies={[{ name: "Ortec Group", icon: <OrtecPng /> }]}
                >
                  Stage de fin d&apos;année de BTS en Administration Systèmes et
                  Réseaux <br /> <br />
                  Déploiement d&apos;ordinateurs portables | Configuration BIOS
                  UEFI, Boot Windows 10/11, Enrôlement Ortec, Installation
                  Logiciel <br /> <br />
                  Administration Système avec Active Directory | Attribution de
                  licences et permissions <br /> <br />
                  Assistance et dépannage de pannes | Support niveau 1
                </SectionCard>
              </Card>
            </div>
          </div>
          <div id="contact">
            <ContactMe />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
