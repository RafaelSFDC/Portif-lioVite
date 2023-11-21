import { SiExpo, SiMongodb, SiAppwrite, SiExpress, SiFirebase, SiVite, SiJavascript, SiTypescript, SiReactquery, SiFramer, SiRedux, SiTailwindcss, SiOpenai } from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export const projectsData = [
    {
        title: "Hoobank",
        description:
            "Um projeto simples que visa criar uma landingpage de um site de banco.",
        image: "/src/assets/images/1.png",
        tags: [SiVite, SiTailwindcss, FaReact],
        source: "https://rafaelsfdc.github.io/BankWebsite/",
        visit: "https://github.com/RafaelSFDC/BankWebsite",
        id: 0,
    },
    {
        title: "OpenAI",
        description:
            "Projeto que utiliza de uma inteligencia artificial para gerar imagens. Utilizando Back-End para armazenar os dados.",
        image: "/src/assets/images/2.png",
        tags: [SiMongodb, FaReact, SiOpenai, SiExpress],
        source: "https://openai-front-end.onrender.com",
        visit: "https://github.com/RafaelSFDC/OpenAI",
        id: 1,
    },
];
