import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rezlyzer" },
    { name: "description", content: "Smart CV analyzer!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
  <section className="main-section">
    <div className="page-heading">
      <h1>Track you applications & Resume ratings</h1>
      <h2>Review your submissions and check AI-powered feedback.</h2>
    </div> 
  </section>

  {[
   
  ]}
  </main>
}
