export default function Heropage() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
              <div className="flex justify-center">
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer hover:grayscale-0">
              <a href="#">
                <div className="flex flex-col space-y-0">
                <img className="rounded-lg w-16 md:w-32 lg:w-48" src="./bulb.png" alt="image description"/>
                <img className="rounded-lg w-16 md:w-32 lg:w-48" src="./hand.png" alt="image description"/>
                </div>
              </a>
            </figure>
            <figcaption className="absolute px-0 text-lg text-white top-40">
              <div className="flex flex-col space-x-0">
              <div className="text-center">
                <h1 className="drop-shadow-lg font-bold pt-4 text-white sm:text-7xl">
                  Creativity 
                </h1>
                <h1 className="drop-shadow-lg font-bold pt-4  text-white sm:text-6xl">
                  From
                </h1>
                <h1 className="drop-shadow-lg font-bold pt-4 text-white sm:text-6xl">
                    Policy
                </h1>
                </div>
              </div>
              </figcaption>
            </div>
            </div>
  );
}