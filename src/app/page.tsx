import { Header } from "@/components/Header/Header";
import { MarkdownGenerator } from "@/components/MarkdownGenerator/MarkdownGenerator";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-background">
      <Header />
      <main className="flex-1 min-h-0 w-full mx-auto max-w-6xl px-6 py-4">
        <MarkdownGenerator />
      </main>
    </div>
  );
}
