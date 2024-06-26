import { ClientHomeView } from "@/components/ClientHomeView";
import { StartFetchButton } from "@/components/StartFetchButton";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientHomeView />
    </main>
  );
}
