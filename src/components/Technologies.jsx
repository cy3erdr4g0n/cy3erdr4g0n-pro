import { motion } from "framer-motion";

export default function TechStack() {
  const language = [
    {
      img: "./assets/javscript.svg",
      title: "JavaScript",
    },
    {
      img: "./assets/icon-bootstrap.png",
      title: "Bootstrap",
    },
    {
      img: "./assets/icon-sass.svg",
      title: "Sass",
    },
    {
      img: "./assets/icon-git.svg",
      title: "Git",
    },

    {
      img: "./assets/icon-nodejs.svg",
      title: "Node js",
    },
    {
      img: "./assets/icons8-express-js (1).svg",
      title: "Express js",
    },
    {
      img: "./assets/mongodb_original_logo_icon_146424.svg",
      title: "Mongodb",
    },
    {
      img: "./assets/icon-vscode.svg",
      title: "Vs code",
    },
    {
      img: "./assets/icon-tryhackme.svg",
      title: "tryhackme",
    },
    {
      img: "./assets/aws.svg",
      title: "aws",
    },
    {
      img: "./assets/python.svg",
      title: "python",
    },
    {
      img: "./assets/graphql.svg",
      title: "graphql",
    },
    {
      img: "./assets/django.svg",
      title: "django",
    },
    {
      img: "./assets/akar-icons_github-fill.svg",
      title: "github",
    },
    {
      img: "./assets/firebase.svg",
      title: "firebase",
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 mt-12 gap-8 place-content-center place-items-center">
        {language.map((item) => (
          <Tech key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

function Tech({ item }) {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <div className="flex text-center justify-center items-center">
          <div key={item.title} className="">
            <img src={item.img} className="w-16" alt={item.title} />
            <h3 className="mt-6">{item.title}</h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
