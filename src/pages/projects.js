import Banner from "@/components/banner";
import '@/css/Projects.css';

export default function Projects() {
  return (
    <div className="flex items-center justify-center">
    <section className="flex flex-col items-center mx-5 my-5">
      <h1 className="mt-8 text-4xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 mx-auto max-w-7xl">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}