import PageTitle from "../components/PageTitle";
import Image from "next/image";

export default function About() {
  return (
    <section>
      <PageTitle title="About" />
      <div className="grid md:grid-cols-[0.9fr,1.1fr] gap-8 items-start">
        <div className="justify-self-center">
          <Image src="/myphoto.jpg" alt="Photo of Me" width={200} height={200} priority style={{ borderRadius: "50%" }}/>
        </div>
        <div>
          <h1>About Me</h1>
          <p className="opacity-90">My name is Kevin, a web-design student at Georgian College. I'm eager to learn and grow in the field of web development. 
            I've learned and applied a multitude of skills and techniques to web-development that I hope to apply towards future personal and/or professional projects. 
              The journey has just begun, and I'm curious to see where it takes me.</p>
        </div>
      </div>
    </section>
  );
}


