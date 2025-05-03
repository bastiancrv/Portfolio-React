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
import ExpoSvg from "./_components/_icons/ExpoSvg";
import ExpressSvg from "./_components/_icons/ExpressSvg";
import MongoSvg from "./_components/_icons/MongoSvg";
import SocketSvg from "./_components/_icons/SocketSvg";
import About from "./_components/About";
import NavBar from "./_components/NavBar";
import Card from "./_components/Cards/Card";
import SectionCard from "./_components/Cards/SectionCard";
import ContactMe from "./_components/ContactMe";
import PortfolioPng from "./assets/portfolio.png";
import Habbo1 from "./assets/habbo1.png";
import Habbo2 from "./assets/habbo2.png";
import irc1 from "./assets/irc1.png";
import irc2 from "./assets/irc2.png";
import trello1 from "./assets/trello1.jpg";
import trello2 from "./assets/trello2.jpg";
import trello3 from "./assets/trello3.2.jpg";
import Jobboard from "./assets/jobboard.png";
import OrtecImg from "./assets/ortec.jpg";
import eloi from "./assets/eloi.jpg";
import epitech from "./assets/epitechmrs.jpg";
import MajoliImg from "./assets/majoli.png";
import MajoliPng from "./_components/_icons/MajoliPng";
import TsSvg from "./_components/_icons/TsSvg";
import CodeText from "./_components/CodeText";

function App() {
  return (
    <>
      <main className="bg-neutral-800 h-full p-6 font-poppins text-neutral-300">
        <div className="mx-auto flex flex-col gap-40 max-sm:gap-20">
          <nav>
            <NavBar />
          </nav>
          <div className="w-fit mx-auto">
            <About />
          </div>
          <div className="flex flex-row gap-4 justify-center max-md:flex-col">
            <div>
              <Card title={"Projets"}>
                <SectionCard
                  title={"Portfolio"}
                  image={PortfolioPng}
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
                  cours d&apos;un projet à Epitech, je le maintiens
                  régulièrement à jour afin d&apos;y ajouter mes nouveaux
                  projets.
                </SectionCard>
                <SectionCard
                  title={"HabboFx"}
                  SecondImage={true}
                  image={Habbo1}
                  image2={Habbo2}
                  ShowProject={true}
                  linkgithub={
                    "https://github.com/bastiancrv/Projects/tree/main/HabboFx"
                  }
                  technologies={[
                    {
                      name: "Java",
                      icon: <JavaSvg className="animate-pulse" />,
                    },
                  ]}
                >
                  Projet de création d&apos;un jeu vidéo,{" "}
                  <span className="underline italic">HabboFx</span>, inspiré du
                  célèbre jeu <span className="font-bold">Habbo Hotel,</span>{" "}
                  développé avec le framework JavaFx, est un jeu vidéo
                  d&apos;aménagement d&apos;espaces avec Coin Cliqueur.
                  <br /> <br />
                  <ul className="list-disc list-inside text-left">
                    <h1 className="text-center font-extralight italic underline">
                      Fonctionnalités présentes :
                    </h1>
                    <li>Placement d&apos;objets dans une salle ✅</li>
                    <li>Navigation entre les salles ✅</li>
                    <li>Drag&Drop de la salle ✅</li>
                    <li>Bouton pour recentrer la salle ✅</li>
                    <li>Curseur pour changer l&apos;opacité du font ✅</li>
                    <li>Redimensionnement de la fenêtre de jeu ✅</li>
                    <li>Zoom dans la pièce ✅</li>
                    <li>Système de crédits ✅</li>
                    <li>Coin Cliqueur ✅</li>
                    <li>Boutique d&apos;objets ✅</li>
                    <li>Inventaire ✅</li>
                    <li>Musique d&apos;ambiance ✅</li>
                  </ul>{" "}
                  <br />
                  <ul className="list-disc list-inside text-left">
                    <h1 className="text-center font-extralight italic underline">
                      Fonctionnalités à venir :
                    </h1>
                    <li>Pathfining du personnage ❌</li>
                    <li>PNJ avec système de quêtes ❌</li>
                    <li>Sauvegarde des objets dans les pièces ❌</li>
                    <li>Collision avec les objets ❌</li>
                    <li>Système de portes pour changer de salle ❌</li>
                  </ul>
                </SectionCard>
                <SectionCard
                  title={"Tigerrr"}
                  image={Jobboard}
                  ShowProject={true}
                  linkgithub={
                    "https://github.com/bastiancrv/Projects/tree/main/JobBoard"
                  }
                  technologies={[
                    {
                      name: "Html",
                      icon: <HtmlSvg className="animate-pulse" />,
                    },
                    { name: "Css", icon: <CssSvg className="animate-pulse" /> },
                    {
                      name: "Javascript",
                      icon: <JsSvg className="animate-pulse" />,
                    },
                    { name: "Php", icon: <PhpSvg className="animate-pulse" /> },
                    {
                      name: "Mysql",
                      icon: <MySqlSvg className="animate-pulse" />,
                    },
                  ]}
                >
                  Projet de création d&apos;un site web{" "}
                  <span className="font-bold">
                    d&apos;annonce d&apos;emploi.
                  </span>{" "}
                  <br /> Je me suis occupé essentiellement de la partie <span className="font-bold">backend</span> que je n&apos;avais que très peu pratiqué auparavant, ce qui à été un excellent challenge  <br/><br />
                  <ul className="list-disc list-inside text-left">
                    <h1 className="text-center font-extralight italic underline">
                      Fonctionnalités présentes :
                    </h1>
                    <li>
                      Connexion{" "}
                      <span className="font-semibold">
                        avec hachage du mot de passe
                      </span>{" "}
                      ✅
                    </li>
                    <li>Création d&apos;identité entreprise ✅</li>
                    <li>Création d&apos;offres d&apos;emploi ✅</li>
                    <li>Barre de recherche ✅</li>
                    <li>
                      <span className="font-semibold">
                        Dashboard Administrateur
                      </span>{" "}
                      ✅
                    </li>
                    <li>
                      Possibilité de{" "}
                      <span className="font-semibold">
                        postuler à une offre
                      </span>
                    </li>
                  </ul>{" "}
                  <br />
                  <ul className="list-disc list-inside text-left">
                    <h1 className="text-center font-extralight italic underline">
                      Fonctionnalités à venir :
                    </h1>
                    <li>Cvthèque ❌</li>
                    <li>Partager des fichiers pour candidater ❌</li>
                    <li>Modification de compte ❌</li>
                  </ul>{" "}
                </SectionCard>
                <SectionCard
                  title={"Bavardage"}
                  SecondImage={true}
                  image={irc1}
                  image2={irc2}
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
                    {
                      name: "Node.Js",
                      icon: <NodeSvg className="animate-pulse" />,
                    },
                    {
                      name: "Express.Js",
                      icon: <ExpressSvg className="animate-pulse" />,
                    },
                    {
                      name: "Socket.io",
                      icon: <SocketSvg className="animate-pulse" />,
                    },
                    {
                      name: "MongoDb",
                      icon: <MongoSvg className="animate-pulse" />,
                    },
                  ]}
                >
                  Projet de création d&apos;un site de{" "}
                  <span className="font-bold">messagerie instantanée</span>.{" "}
                  <br /> <br />
                  <ul className="list-disc list-inside text-left">
                    <h1 className="text-center font-extralight italic underline">
                      Fonctionnalités présentes :
                    </h1>
                    <li>
                      Connexion{" "}
                      <span className="font-semibold">
                        avec hachage du mot de passe
                      </span>{" "}
                      ✅
                    </li>
                    <li>Création de chats privés ✅</li>
                    <li>Envoi de message en temps réel ✅</li>
                    <li>Affichage des utilisateurs connectés ✅</li>
                  </ul>{" "}
                  <br />
                  <ul className="list-disc list-inside text-left">
                    <h1 className="text-center font-extralight italic underline">
                      Fonctionnalités à venir :
                    </h1>
                    <li>Création de channels publiques ❌</li>
                    <li>Envoi de fichiers ❌</li>
                    <li>Notifications ❌</li>
                  </ul>{" "}
                  <br />
                  Système de commandes pour toutes les fonctionnalités{" "}
                  <span className="font-semibold">
                    (/list, /create, /join, /leave, /delete, /msg, /nick)
                  </span>
                </SectionCard>
                <SectionCard
                  title={"Trellosaurus"}
                  SecondImage={true}
                  ThirdImage={true}
                  image={trello1}
                  image2={trello2}
                  image3={trello3}
                  ShowProject={true}
                  inlineImages={true}
                  linkgithub={
                    "https://github.com/bastiancrv/Projects/tree/main/Trellosaurus"
                  }
                  technologies={[
                    {
                      name: "React Native",
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
                    {
                      name: "Expo",
                      icon: <ExpoSvg className="animate-pulse" />,
                    },
                    {
                      name: "Typescript",
                      icon: <TsSvg className="animate-pulse" />,
                    },
                  ]}
                >
                  Projet de création d&apos;une application de{" "}
                  <span className="font-bold">gestion de projet</span> utilisant
                  l&apos;api Trello. <br /> <br />
                  <ul className="list-disc list-inside text-left">
                    <h1 className="text-center font-extralight italic underline">
                      Fonctionnalités présentes :
                    </h1>
                    <li>
                      <span className="font-semibold">CRUD</span> complet des
                      boards / lists / cards ✅
                    </li>
                    <li>Système de templates prédéfinis ✅</li>
                    <li>
                      Affecter un d&apos;utilisateur aux listes et tâches ✅
                    </li>
                    <li>
                      <span className="font-semibold">Oauth2</span> via Trello
                      ✅
                    </li>
                  </ul>{" "}
                  <br />
                  <ul className="list-disc list-inside text-left">
                    <h1 className="text-center font-extralight italic underline">
                      Fonctionnalités à venir :
                    </h1>
                    <li>CRUD des workspaces ❌</li>
                    <li>Tags / dates dans les cards ❌</li>
                    <li>Pièces jointes dans la description des cards ❌</li>
                  </ul>
                </SectionCard>
              </Card>
            </div>
            <div className="flex flex-col gap-4">
              <Card title={"Formations"}>
                <SectionCard
                  title={"Master of Science"}
                  subtitle={"2024-aujourd'hui"}
                  image={epitech}
                  technologies={[
                    { name: "Epitech Marseille", icon: <EpitechPng /> },
                  ]}
                >
                  Actuellement en{" "}
                  <span className="italic font-semibold">
                    Master of Science
                  </span>{" "}
                  (Architecte Systèmes d&apos;Information) à{" "}
                  <span className="italic font-semibold">
                    Épitech Marseille
                  </span>
                  . <br />
                  Je développe de grandes compétences dans différents domaines{" "}
                  <span className="italic font-semibold">
                    informatique
                  </span>. <br /> <br />
                  <div className="flex justify-evenly">
                    <div className="text-center">
                      <span className="italic underline">Tronc commun</span>{" "}
                      <br /> <br />
                      <ul className="list-disc list-inside flex flex-col gap-2">
                        <CodeText>Web / Mobile</CodeText>
                        <CodeText>Réseaux</CodeText>
                        <CodeText>Devops</CodeText>
                        <CodeText>Algorithmie</CodeText>
                        <CodeText>Docker</CodeText>
                        <CodeText>Jeux vidéos</CodeText>
                        <CodeText>MERN</CodeText>
                        <CodeText>Php Symfony</CodeText>
                      </ul>{" "}
                    </div>
                    <span className="border-[0.5px] rounded-full"></span>
                    <div className="text-center">
                      <span className="italic underline">Spécialités</span>{" "}
                      <br /> <br />
                      <ul className="list-disc list-inside flex flex-col gap-2">
                        <CodeText>Cybersécurité</CodeText>
                        <CodeText>Cloud</CodeText>
                        <CodeText>IA</CodeText>
                        <CodeText>Data</CodeText>
                        <CodeText>IOT</CodeText>
                        <CodeText>VR</CodeText>
                      </ul>
                    </div>
                  </div>
                </SectionCard>
                <SectionCard
                  title={"BTS SN IR"}
                  subtitle={"2022-2024"}
                  image={eloi}
                  technologies={[
                    { name: "Lycée Saint Éloi", icon: <LyceePng /> },
                  ]}
                >
                  Après avoir obtenu mon Baccalauréat Général en spécialité{" "}
                  <span className="italic font-semibold">NSI</span> et{" "}
                  <span className="italic font-semibold">SI</span> j&apos;ai
                  décidé de m&apos;orienter vers un{" "}
                  <span className="italic font-semibold">
                    BTS Systèmes Numérique option Informatique et Réseaux
                  </span>{" "}
                  , ce qui m&apos;a permis de développer grandement mes
                  compétences en{" "}
                  <span className="italic font-semibold">
                    développement informatique
                  </span>{" "}
                  et d&apos;apprendre de nouveaux languages.
                  <div className="w-full flex flex-col justify-center items-center">
                    <br />
                    <ul className="list-disc list-inside flex flex-row gap-2 flex-wrap items-center justify-center ">
                      <CodeText>Web</CodeText>
                      <CodeText>Mobile</CodeText>
                      <CodeText>Réseaux</CodeText>
                      <CodeText>Base de données</CodeText>
                      <CodeText>Algorithmie</CodeText>
                      <CodeText>Gestion de projets</CodeText>
                    </ul>{" "}
                  </div>
                </SectionCard>
              </Card>
              <Card title={"Expériences Professionelles"}>
                <SectionCard
                  title={"Développeur Web"}
                  image={MajoliImg}
                  subtitle={"2025 - aujourd'hui"}
                  technologies={[{ name: "Majoli.io", icon: <MajoliPng /> }]}
                >
                  Alternant{" "}
                  <span className="font-semibold">Développeur Web</span> <br />{" "}
                  <br />
                  Création, amélioration et maintenance de sites web pour des
                  clients. <br /> <br />
                  Allant de simples sites vitrines à des sites biens plus
                  complexes avec des systèmes de réservations, de paiements en
                  ligne, de gestion de stocks... <br /> <br />
                  <div className="w-full flex flex-col justify-center items-center">
                    <br />
                    <ul className="list-disc list-inside flex flex-row gap-2 flex-wrap items-center justify-center ">
                      <CodeText>React</CodeText>
                      <CodeText>Node.Js</CodeText>
                      <CodeText>MongoDb</CodeText>
                      <CodeText>Tailwind</CodeText>
                      <CodeText>Bubble.io</CodeText>
                    </ul>{" "}
                  </div>
                </SectionCard>
                <SectionCard
                  title={"Admin Systèmes et Réseaux"}
                  image={OrtecImg}
                  subtitle={"2022"}
                  technologies={[{ name: "Ortec Group", icon: <OrtecPng /> }]}
                >
                  Stage de fin d&apos;année de BTS en{" "}
                  <span className="font-semibold">
                    Administration Systèmes et Réseaux
                  </span>{" "}
                  <br /> <br />
                  Déploiement d&apos;ordinateurs portables | Configuration BIOS
                  UEFI, Boot Windows 10/11, Enrôlement Ortec, Installation
                  Logiciel <br /> <br />
                  Administration Système avec Active Directory | Attribution de
                  licences et permissions <br /> <br />
                  Assistance et dépannage de pannes | Support niveau 1 <br />{" "}
                  <br />
                  Configuration d&apos;un serveur de données : bios, contrôleur
                  de stockage, réseau, dossiers partagés...
                  <div className="w-full flex flex-col justify-center items-center">
                    <br />
                    <ul className="list-disc list-inside flex flex-row gap-2 flex-wrap items-center justify-center ">
                      <CodeText>Active Directory</CodeText>
                      <CodeText>Jira</CodeText>
                      <CodeText>Exchange</CodeText>
                      <CodeText>Bios</CodeText>
                    </ul>{" "}
                  </div>
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
