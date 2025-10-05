import PageTitle from "./components/PageTitle";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <PageTitle title="Home" />
      <h1>Welcome to my Mini Portfolio</h1>
      <p>I’m a web design student in Georgian College striving to turn my interest for web development into a career.</p>
      <p><strong>My Goals:</strong> I aim to construct clean, efficient, and user-friendly websites and applications all the while learning in the process.</p>
      <Link href="/about">About Me</Link>
      <Link href="/projects">Projects</Link>
    </section>
  );
}


