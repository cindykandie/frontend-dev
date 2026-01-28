import LetterC from "@/components/letterC";
import LetterK from "@/components/letterK";
import Layout from "@/app/layout";
import Link from "next/link";
import "@/css/Home.css";

export default function MainPage() {
    return (
      <Layout>
        <main className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Frontend Engineer building fast, beautiful web + mobile experiences.
            </h1>
            <p className="hero-subtext">
              I specialize in React, Next.js, React Native, and design-led UI systems.
            </p>
            <div className="hero-cta">
              <Link className="btn-primary" href="/projects">
                View Projects
              </Link>
              <a className="btn-secondary" href="/assets/CindyKandieCV.pdf" download>
                Download Resume
              </a>
              <Link className="btn-secondary" href="#contact">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-logo" aria-hidden="true">
            <LetterC />
            <LetterK />
          </div>
        </main>
      </Layout>
        
    );
  }
