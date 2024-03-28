import Example from "@/components/shared/Example";
import Hero from "@/components/shared/Home";

export default function Home() {
  return (
    <main className="w-full">
      <div className="wrapper">
        <Hero />
        <div className="w-[350px]">
          <Example />
        </div>
      </div>
    </main>
  );
}
