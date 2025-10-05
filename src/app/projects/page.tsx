import Image from "next/image";
import PageTitle from "../components/PageTitle";

const projects = [
  { title: "JavaScript Weather App", img: "/jsassignment3.png", width: 500, height: 500, desc: "A weather app built with JavaScript." },
  { title: "NHL Atlantic Division Standings", img: "/CSS_Lab4.png", width: 500, height: 500, desc: "A standings page for the NHL's Atlantic Division made with CSS." },
  { title: "Project Three", img: "/projects/p3.jpg", width: 640, height: 400, desc: "What I learned." },
];

export default function Projects() {
  return (
    <section>
      <PageTitle title="Projects" />
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p => (
          <article key={p.title} className="card">
            <Image src={p.img} alt={p.title} width={500} height={500} className="w-full h-48 object-cover rounded-md" />
            <h2 className="font-semibold mt-2">{p.title}</h2>
            <p className="text-sm opacity-80">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

