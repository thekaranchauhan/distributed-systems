import { architectures } from "@/app/lib/architectures";
import ArchitectureTile from "@/app/components/ArchitectureTile";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        System Architectures
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {architectures.map((arch) => (
          <ArchitectureTile key={arch.id} id={arch.id} title={arch.title} />
        ))}
      </div>
    </div>
  );
}