import PageTitle from "./components/PageTitle";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <PageTitle title="Home" />
      <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
        <div className="justify-self-center">
          <img src="/KR.png" alt="logo" width={250} height={250} style={{ borderRadius: "9999px" }} />
        </div>
        <div>
          <h1 className="mb-3">Kevin Rodriguez - Welcome to My Mini Portfolio</h1>
          <p className="opacity-90">I’m a web design student in Georgian College striving to turn my interest for web development into a career.</p>
          <p className="mt-2 opacity-90"><strong>My Goals:</strong> I aim to construct clean, efficient, and user-friendly websites and applications all the while learning in the process.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/about" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition-colors">About Me</Link>
            <Link href="/projects" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition-colors">Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


