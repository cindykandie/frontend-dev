import '@/css/Projects.css';
import Layout from "@/app/layout";
import data from "@/data/about.json";
import LinkedinLogo from '@/components/linkedin';

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mb-8 project-wrapper">
        <section className="flex flex-col items-center justify-center w-full">
          <h1 className="flex gap-[5rem] align-center content-center mt-4 text-4xl font-bold">About Me <span><LinkedinLogo /></span></h1>
          {data.sections.map((section) => (
            <div key={section.category} className="w-full max-w-8xl mt-10 px-3">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">{section.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 mr-5">
                {section.items.map((item) => (
                  <div className="bg-white rounded-md shadow-md flex flex-col justify-between mx-3" key={item.name}>
                    <h2 className="p-2 text-2xl font-bold">{item.name}</h2>
                    <div className="relative image-wrapper">
                      <img className="rounded-t-lg h-72 object-contain custom-image p-1" src={item.image} alt={item.name} />
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                      <p className="text-gray-700 text-base">{item.description}</p>
                      <div className="btn-container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href={item.buttonLink} target="_blank" rel="noopener noreferrer"><button className="mt-5">{item.buttonText}</button></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
