"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function StudentPortfolio() {
  const [currentProject, setCurrentProject] = useState(0)
  const [skillProgress, setSkillProgress] = useState<{ [key: string]: number }>({})

  const projects = [
    {
      title: ".",
      description: ".",
      tech: [".", ".", ".", "."],
      status: ".",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: ".",
      description: ".",
      tech: [".", ".", "."],
      status: ".",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: ".",
      description: ".",
      tech: [".", ".", "."],
      status: ".,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const skills = [
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "Java", level: 70 },
    { name: "Bases de Datos", level: 80 },
    { name: "Redes", level: 70 },
  ]

  useEffect(() => {
    // Animate skill bars on load
    const timer = setTimeout(() => {
      const newProgress: { [key: string]: number } = {}
      skills.forEach((skill) => {
        newProgress[skill.name] = skill.level
      })
      setSkillProgress(newProgress)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Auto-rotate projects every 4 seconds
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">María González</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#proyectos" className="text-foreground hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#habilidades" className="text-foreground hover:text-primary transition-colors">
              Habilidades
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-float mb-8">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="María González"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary animate-pulse-glow"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Estudiante de <span className="text-primary">Ingeniería Informática</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Apasionada por la tecnología, el desarrollo de software y la innovación. Creando soluciones digitales que
            impactan positivamente en la sociedad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="animate-pulse-glow">
              Ver mis proyectos
            </Button>
            <Button variant="outline" size="lg">
              Descargar CV
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  index === currentProject ? "ring-2 ring-primary" : ""
                }`}
              >
                <CardHeader>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Badge variant={project.status === "Completado" ? "default" : "outline"} className="mb-4">
                    {project.status}
                  </Badge>
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h3>
          <div className="max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skillProgress[skill.name] || 0} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Sobre mí</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Soy una estudiante de 4º año de Ingeniería Informática con una gran pasión por el desarrollo de software
                y las nuevas tecnologías. Me especializo en desarrollo web full-stack y tengo un creciente interés en
                inteligencia artificial.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Durante mis estudios, he participado en varios proyectos académicos y personales que me han permitido
                desarrollar habilidades tanto técnicas como de trabajo en equipo. Mi objetivo es contribuir a proyectos
                innovadores que generen un impacto positivo.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Trabajo en equipo</Badge>
                <Badge variant="outline">Resolución de problemas</Badge>
                <Badge variant="outline">Aprendizaje continuo</Badge>
                <Badge variant="outline">Comunicación efectiva</Badge>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/placeholder.svg?height=400&width=350"
                alt="Espacio de trabajo"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">¡Conectemos!</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estoy siempre abierta a nuevas oportunidades, colaboraciones y conversaciones sobre tecnología. No dudes en
            contactarme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Enviar mensaje</Button>
            <Button variant="outline" size="lg">
              LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Nerea Sánchez López</p>
        </div>
      </footer>
    </div>
  )
}
