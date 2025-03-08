import Link from "next/link";

interface ArchitectureTileProps {
  id: string;
  title: string;
}

export default function ArchitectureTile({ id, title }: ArchitectureTileProps) {
  return (
    <Link href={`/architecture/${id}`}>
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
    </Link>
  );
}