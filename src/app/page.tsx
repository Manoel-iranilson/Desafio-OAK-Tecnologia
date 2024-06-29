import { ParticlesCustom } from "./components/particles";
import Products from "./components/products";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-back bg-cover bg-no-repeat">
      <ParticlesCustom  />
      <div className="flex-grow flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-screen-lg">
          <Products />
        </div>
      </div>
    </main>
  );
}
