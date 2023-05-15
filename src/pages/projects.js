import Layout from "@/app/layout";
import '@/css/Projects.css';
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <section className="flex flex-col items-center mx-5 my-5">
          <h1 className="mt-8 text-4xl font-bold">My Projects</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 mx-auto max-w-7xl">
            {projects.projects.map((project) => (
              <div className="bg-white rounded-md shadow-md flex flex-col justify-between">
                <div className="relative image-wrapper">
                  <img
                    className="rounded-t-lg h-72 object-cover p-3"
                    src={project.image}
                    alt={project.title}
                  />
                  </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-700 text-base mb-4">{project.description}</p>
                  <div className="flex btn-container">
                    <a href={project.liveSiteLink} target='blank' ><button>Live Site</button></a>
                    <a href={project.sourceCodeLink} target='blank'><button>Source Code</button></a>
                </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 mx-auto max-w-7xl">
        <div className="bg-white rounded-md shadow-md flex flex-col justify-between">
          <div className="relative image-wrapper">
            <img
              className="rounded-t-lg h-72 object-cover custom-image"
              src="/assets/images/jokesapp.png"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Joke Simulator</h2>
            <p className="text-gray-700 text-base">
            In this React App, I use an API to throw random jokes to users. It is intended to makee users laugh at their mistakes and keep going even when things get tough. Also I figured why not show off my React skills.
            </p>
            <div className="flex btn-container">
              <a href="https://github.com/cindykandie/jokes-simulator"><button>Source Code</button></a>
              <a href="https://jokes-simulator.netlify.app/"><button>Live Site</button></a>
            </div>
          </div>
        </div> */}

       