import Image from "next/image";
import PageTitle from "../components/PageTitle";

const projects = [
  { title: "JavaScript Weather App", img: "/jsassignment3.png", width: 500, height: 500, desc: "A weather app built with JavaScript." },
  { title: "NHL Atlantic Division Standings", img: "/CSS_Lab4.png", width: 500, height: 500, desc: "A standings page for the NHL's Atlantic Division made with CSS." },
  { title: "Style Stage Challenge", img: "/cssfinalproject.png", width: 500, height: 500, desc: "A modern CSS showcase styled by community contributions." },
];

export default function Projects() {
  return (
    <section>
      <PageTitle title="Projects" />
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.title} className="card">
            <div className="overflow-hidden rounded-md">
              <Image src={p.img} alt={p.title} width={500} height={500} className="w-full h-48 object-cover transition-transform duration-200 hover:scale-[1.03]" />
            </div>
            <h2 className="mt-3">{p.title}</h2>
            <p className="text-sm opacity-80">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

