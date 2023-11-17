import { Navbar, HomeAbout, SearchAnime, Footer } from "./components/imports";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a1625]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HomeAbout />
        <SearchAnime />
      </div>
      <Footer />
    </main>
  );
}
