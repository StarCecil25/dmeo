"use client";

import { useRouter } from "next/navigation";
import { use } from "react";

export default function User({ params }) {
    const router = useRouter();
  const { id } = use(params);

  return (
    <div>
      <h1>{id}</h1>
      <button onClick={router.back}>Go Back</button>
    </div>
  );
}
