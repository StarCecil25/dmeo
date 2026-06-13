import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-10 bg-gray-800 rounded">
        <div className="p-10 bg-gray-800 rounded-x1 shadow-x1"></div>
        <h1 className="text-5xl font-bold text-green-500">Tailwind Works!</h1>
      </div>
    </div>
  );
}
