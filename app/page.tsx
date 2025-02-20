import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">MK Dev.</span>
            </Link>
            <nav className="flex space-x-6 text-sm font-medium items-center">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                Über
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projekte
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Kontakt
              </Link>
            </nav>
          </div>
          {/* <Link className="mx-auto lg:mx-0 lg:ml-auto " target="_blank" href="/Lebenslauf_.pdf">
            <Button variant="outline">
              Portfolio als PDF
            </Button>
          </Link> */}
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Frontend Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Ich entwickle moderne und ansprechende digitale Erlebnisse mit den neuesten Technologien. Mein Fokus liegt auf eleganten Frontend-Lösungen für komplexe Herausforderungen – leistungsstark, benutzerfreundlich und ästhetisch überzeugend.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/muhakodirov" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>

                <Link href="mailto:muhammadkadirov089@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projekte</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                // Photo by Maksim Larin on Unsplash
                title="Sneakers-Store: Online Shop"
                description="Eine moderne E-Commerce-Webanwendung mit benutzerdefinierter Filterung, Warenkorbfunktion und Responsive Design."
                image="/sneakers-store.webp"
                link="https://github.com/muhakodirov/Sneakers-store"
                tags={["Next.js", "TypeScript", "Tailwind", "Context API", "MongoDB"]}
              />
              <ProjectCard
                // Photo by Maxim Hopman on Unsplash
                title="Crypto Tracker/Converter - Only Desktop"
                description="Eine Anwendung zur Verfolgung und Konvertierung von Kryptowährungen. Implementiert Echtzeit-API-Daten und benutzerfreundliche UI."
                image="/crypto.webp"
                link="https://github.com/muhakodirov/cryptomaster"
                tags={["React", "Module CSS", "Binance API", "Redux", "React Router"]}
              />
              <ProjectCard
                // Photo by TRNAVA UNIVERSITY on Unsplash
                title="Book Library"
                description="Eine einfache Webanwendung, die es Nutzern ermöglicht, neue Bücher hinzuzufügen und als Favorite zu speichern."
                image="/book-library.webp"
                link="https://github.com/muhakodirov/Book-Library-App"
                tags={["React", "CSS", "Redux"]}
              />
              <ProjectCard
                // Photo by MARIOLA GROBELSKA on Unsplash
                title="InRecipes - Recipe Blog"
                description="Eine Plattform zum Durchsuchen, Speichern und Hinzufügen von Rezepten (nach Anmeldung), mit schneller Datenabfrage und responsivem Design"
                image="/recipe.webp"
                link="https://github.com/muhakodirov/recipes-app"
                demoLink="https://dev-mk.vercel.app"
                tags={["Next.js", "TypeScript", "Tailwind", "Shadcn", "React Query", "Context API", "MongoDB",]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Kontaktieren Sie mich
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MK Dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

