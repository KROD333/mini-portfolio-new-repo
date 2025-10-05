import PageTitle from "../components/PageTitle";

const skills = [
  "JavaScript (ES6+)", "React & Next.js", "HTML5 & CSS3",
  "Tailwind CSS", "Git & GitHub", "Basic SEO / Analytics",
];

export default function Skills() {
  return (
    <section>
      <PageTitle title="Skills" />
      <h1 className="text-2xl font-bold mb-4">Technical Skills</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 list-disc pl-6">
        {skills.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}

