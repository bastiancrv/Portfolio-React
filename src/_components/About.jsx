import TailwindSvg from "./_icons/TailwindSvg";
import ReactSvg from "./_icons/ReactSvg";
import HtmlSvg from "./_icons/HtmlSvg";
import CssSvg from "./_icons/CssSvg";
import JsSvg from "./_icons/JsSvg";
import JavaSvg from "./_icons/JavaSvg";
import PhpSvg from "./_icons/PhpSvg";
import MySqlSvg from "./_icons/MySqlSvg";
import MongoSvg from "./_icons/MongoSvg";
import CodeText from "./CodeText";
import Me from "../assets/me.png";
import Cv from "../assets/cv.pdf";
import DockerSvg from "./_icons/DockerSvg";
import NodeSvg from "./_icons/NodeSvg";
import PythonSvg from "./_icons/PythonSvg";

const techList = [
  {
    name: "React",
    url: "https://fr.react.dev/",
    icon: (
      <ReactSvg width="18px" style={{ animation: "spin 5s linear infinite" }} />
    ),
  },
  {
    name: "Tailwind",
    url: "https://tailwindcss.com/",
    icon: <TailwindSvg className="animate-pulse" width="20px" />,
  },
  {
    name: "Html",
    url: "https://developer.mozilla.org/fr/docs/Web/HTML",
    icon: <HtmlSvg className="animate-pulse" width="18px" />,
  },
  {
    name: "Css",
    url: "https://developer.mozilla.org/fr/docs/Web/CSS",
    icon: <CssSvg className="animate-pulse" width="18px" />,
  },
  {
    name: "Javascript",
    url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    icon: <JsSvg className="animate-pulse" width="18px" />,
  },
  {
    name: "Node.Js",
    url: "https://nodejs.org/en",
    icon: <NodeSvg className="animate-pulse" width="18px" />,
  },
  {
    name: "Java",
    url: "https://fr.wikipedia.org/wiki/Java_(langage)",
    icon: <JavaSvg className="animate-pulse" width="18px" />,
  },
  {
    name: "Php",
    url: "https://www.php.net/",
    icon: <PhpSvg className="animate-pulse" width="18px" />,
  },
  {
    name: "Python",
    url: "https://www.php.net/",
    icon: <PythonSvg className="animate-pulse" width="18px" />,
  },
  {
    name: "Mysql",
    url: "https://www.mysql.com/fr/",
    icon: <MySqlSvg className="animate-pulse" width="18px" />,
  },
  {
    name: "MongoDb",
    url: "https://www.mongodb.com/fr-fr",
    icon: <MongoSvg className="animate-pulse" width="20px" />,
  },
  {
    name: "Docker",
    url: "https://www.docker.com/",
    icon: <DockerSvg className="animate-pulse" width="14px" />,
  },
];

function About() {
  return (
    <div className="flex flex-col jusitfy-center items-center gap-8 text-center w-fit mb-10 ">
      <h1 className="text-5xl font-semibold hover:bg-neutral-700 p-2 rounded-xl transtion-all duration-500 hover:scale-105 hover:px-4 select-none">
        Bastian <span className="text-blue-300">Cruvellier</span>
      </h1>
      <p className="flex-wrap">
        Étudiant en Master à Epitech Marseille, je recherche une{" "}
        <span className="font-bold italic underline">alternance</span> de 24
        mois <br />{" "}
        <span className="font-bold">Développement Web et/ou Cybersécurité</span>{" "}
        <br />
        <div className="inline-flex gap-4 justify-center mt-2 flex-wrap max-w-4xl w-full mx-auto ">
          {techList.map(({ name, url, icon }) => (
            <CodeText key={name} url={url}>
              {icon}
              {name}
            </CodeText>
          ))}
        </div>
      </p>
      <div>
        <img
          className="mt-14 shadow-xl rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-300 shadow-blue-300 transition-all duration-500 max-md:w-80 "
          width="600px"
          src={Me}
          alt=""
        />
      </div>
      <div className="mt-10">
        <button
          className="border rounded-xl p-2 px-4 text-sm font-extralight shadow-md shadow-transparent hover:-translate-y-1 hover:shadow-neutral-500 transition-all duration-300 border-neutral-500"
          onClick={() => {
            window.open(Cv);
          }}
        >
          Voir mon CV
        </button>
      </div>
    </div>
  );
}

export default About;
