import '@/css/Projects.css';
import Layout from "@/app/layout";
import data from "@/data/about.json";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mb-8 project-wrapper">
        <section className="flex flex-col items-center justify-center">
          <h1 className="mt-4 text-4xl font-bold">About Me</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mr-5 max-w-8xl">
            {data.sections.map((section) => (
              <div className="bg-white rounded-md shadow-md flex flex-col justify-between mx-3" key={section.name}>
                <h2 className="p-2 text-2xl font-bold">{section.name}</h2>
                <div className="relative image-wrapper">
                  <img className="rounded-t-lg h-72 object-cover custom-image p-1" src={section.image} alt={section.name} />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                  <p className="text-gray-700 text-base">{section.description}</p>
                  <div className="btn-container" style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href={section.buttonLink}><button className="mt-5"> {section.buttonText}</button></a> 
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
