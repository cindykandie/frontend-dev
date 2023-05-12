import Banner from "@/components/banner";

export default function About() {
    return (
      <section className="flex">
        <h1>About Me</h1>
        <div>
              <div className="bg-white rounded-md shadow-md flex flex-col justify-between">
                <h2 className="text-xl font-bold mb-2">Joke Simulator</h2>
                <div className="relative">
                  <img
                    className="rounded-t-lg h-72 object-cover"
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
    )
  }