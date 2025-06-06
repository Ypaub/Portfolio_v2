"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  Database,
  BarChart3,
  Brain,
  Menu,
  X,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Lang = 'fr' | 'en' | 'es';

type TranslationKeys = {
  accueil: string;
  apropos: string;
  projets: string;
  cv: string;
  contact: string;
  telecharger: string;
  envoyer: string;
  decouvrir: string;
  decouvrirDesc: string;
  decouvrirProjets: string;
  decouvrirProjetsDesc: string;
  decouvrirProjetsDesc2: string;
  decouvrirProjetsDesc3: string;
  decouvrirProjetsDesc4: string;
  decouvrirProjetsDesc5: string;
  decouvrirProjetsDesc6: string;
  decouvrirProjetsDesc7: string;
  decouvrirProjetsDesc8: string;
  decouvrirProjetsDesc9: string;
  decouvrirProjetsDesc10: string;
  decouvrirProjetsDesc11: string;
  decouvrirProjetsDesc12: string;
  decouvrirProjetsDesc13: string;
  decouvrirProjetsDesc14: string;
  decouvrirProjetsDesc15: string;
  projet1Titre: string;
  projet1Description: string;
  projet1Details: string;
  projet2Titre: string;
  projet2Description: string;
  projet2Details: string;
  projet3Titre: string;
  projet3Description: string;
  projet3Details: string;
  projet4Titre: string;
  projet4Description: string;
  projet4Details: string;
  projet5Titre: string;
  projet5Description: string;
  projet5Details: string;
  projet6Titre: string;
  projet6Description: string;
  projet6Details: string;
  competencesTitre: string;
  competencesDescription: string;
  competencesTechniques: string;
  competencesBusiness: string;
  competencesSoftSkills: string;
  contactTitre: string;
  contactDescription: string;
  contactNom: string;
  contactEmail: string;
  contactMessage: string;
  contactEnvoyer: string;
  contactRestonsEnContact: string;
  footerCopyright: string;
};

const traductions: Record<Lang, TranslationKeys> = {
  fr: {
    accueil: "Accueil",
    apropos: "À propos",
    projets: "Projets",
    cv: "CV",
    contact: "Contact",
    telecharger: "Télécharger mon CV",
    envoyer: "Envoyer le message",
    decouvrir: "Découvrir mes projets",
    decouvrirDesc: "Découvrez mon parcours complet, mes expériences et mes compétences détaillées.",
    decouvrirProjets: "Découvrir mes projets",
    decouvrirProjetsDesc: "Passionné par l'intelligence artificielle et son application dans le monde des affaires, je développe des solutions data-driven pour résoudre des problèmes complexes.",
    decouvrirProjetsDesc2: "Actuellement en Master of Science spécialisé en Intelligence Artificielle appliquée au Business, je combine formation académique rigoureuse et expérience pratique en alternance.",
    decouvrirProjetsDesc3: "Mon parcours m'a mené à travailler dans des secteurs variés : data analytics, santé connectée, et visualisation de données. Cette diversité d'expériences me permet d'appréhender les défis business avec une approche technique solide et une vision stratégique.",
    decouvrirProjetsDesc4: "Je suis particulièrement intéressé par l'application de l'IA pour optimiser les processus métier et créer de la valeur ajoutée pour les entreprises.",
    decouvrirProjetsDesc5: "Compétences techniques",
    decouvrirProjetsDesc6: "Mes Projets",
    decouvrirProjetsDesc7: "Mon CV",
    decouvrirProjetsDesc8: "Restons en contact",
    decouvrirProjetsDesc9: "N'hésitez pas à me contacter pour discuter d'opportunités, de projets ou simplement pour échanger sur l'IA et ses applications business.",
    decouvrirProjetsDesc10: "Envoyez-moi un message",
    decouvrirProjetsDesc11: "Votre nom",
    decouvrirProjetsDesc12: "Votre email",
    decouvrirProjetsDesc13: "Votre message",
    decouvrirProjetsDesc14: "Envoyer le message",
    decouvrirProjetsDesc15: "© 2024 Yoann Paubert. Tous droits réservés.",
    projet1Titre: "Rebranding Go Fusion",
    projet1Description: "Refonte de l'identité visuelle pour une entreprise gaming et écologie",
    projet1Details: "Projet de rebranding complet incluant une landing page, une mascotte et une nouvelle identité visuelle pour l'entreprise Go Fusion, combinant gaming et écologie.",
    projet2Titre: "Insuffisance Rénale Chronique",
    projet2Description: "Étude de santé pour améliorer la santé européenne et mondiale",
    projet2Details: "Analyse de données médicales pour identifier les facteurs de risque et améliorer la prévention de l'insuffisance rénale chronique, une pathologie meurtrière.",
    projet3Titre: "Scrapping Python",
    projet3Description: "Extraction de données du site IdealWine",
    projet3Details: "Projet de web scraping sur le site de vente en ligne de vins et spiritueux IdealWine, utilisant Python et ses bibliothèques pour extraire des données malgré les limitations techniques.",
    projet4Titre: "Optimisation des Processus",
    projet4Description: "Automatisation et optimisation des processus métier",
    projet4Details: "Mise en place d'un système d'automatisation des processus métier utilisant l'IA pour identifier et optimiser les goulots d'étranglement. Réduction de 30% du temps de traitement des tâches répétitives.",
    projet5Titre: "Prédiction des Tendances",
    projet5Description: "Modèle de prédiction des tendances du marché",
    projet5Details: "Développement d'un modèle de machine learning pour prédire les tendances du marché basé sur l'analyse de données historiques et en temps réel. Intégration avec des API de données financières et mise en place d'un système d'alertes.",
    projet6Titre: "Chatbot IA",
    projet6Description: "Assistant virtuel intelligent pour le service client",
    projet6Details: "Création d'un chatbot alimenté par l'IA pour améliorer le service client. Utilisation du NLP pour la compréhension du langage naturel et intégration avec le système CRM existant.",
    competencesTitre: "Mes Compétences",
    competencesDescription: "Un aperçu de mes compétences techniques et professionnelles",
    competencesTechniques: "Compétences Techniques",
    competencesBusiness: "Compétences Business",
    competencesSoftSkills: "Soft Skills",
    contactTitre: "Contact",
    contactDescription: "N'hésitez pas à me contacter pour discuter de vos projets",
    contactNom: "Votre nom",
    contactEmail: "Votre email",
    contactMessage: "Votre message",
    contactEnvoyer: "Envoyer le message",
    contactRestonsEnContact: "Restons en contact",
    footerCopyright: "© 2024 Yoann Paubert. Tous droits réservés."
  },
  en: {
    accueil: "Home",
    apropos: "About",
    projets: "Projects",
    cv: "Resume",
    contact: "Contact",
    telecharger: "Download my CV",
    envoyer: "Send message",
    decouvrir: "Discover my projects",
    decouvrirDesc: "Discover my complete journey, my experiences and my detailed skills.",
    decouvrirProjets: "Discover my projects",
    decouvrirProjetsDesc: "Passionate about artificial intelligence and its application in the business world, I develop data-driven solutions to solve complex problems.",
    decouvrirProjetsDesc2: "Currently in a Master of Science specialized in Artificial Intelligence applied to Business, I combine rigorous academic training and practical experience in apprenticeship.",
    decouvrirProjetsDesc3: "My journey has led me to work in various sectors: data analytics, connected health, and data visualization. This diversity of experiences allows me to approach business challenges with a solid technical approach and a strategic vision.",
    decouvrirProjetsDesc4: "I am particularly interested in the application of AI to optimize business processes and create added value for companies.",
    decouvrirProjetsDesc5: "Technical skills",
    decouvrirProjetsDesc6: "My Projects",
    decouvrirProjetsDesc7: "My CV",
    decouvrirProjetsDesc8: "Let's stay in touch",
    decouvrirProjetsDesc9: "Feel free to contact me to discuss opportunities, projects or simply to exchange on AI and its business applications.",
    decouvrirProjetsDesc10: "Send me a message",
    decouvrirProjetsDesc11: "Your name",
    decouvrirProjetsDesc12: "Your email",
    decouvrirProjetsDesc13: "Your message",
    decouvrirProjetsDesc14: "Send message",
    decouvrirProjetsDesc15: "© 2024 Yoann Paubert. All rights reserved.",
    projet1Titre: "Go Fusion Rebranding",
    projet1Description: "Visual identity redesign for a gaming and eco-friendly company",
    projet1Details: "Complete rebranding project including a landing page, mascot, and new visual identity for Go Fusion, combining gaming and eco-friendly values.",
    projet2Titre: "Chronic Kidney Failure",
    projet2Description: "Health study to improve European and global health",
    projet2Details: "Medical data analysis to identify risk factors and improve prevention of chronic kidney failure, a deadly pathology.",
    projet3Titre: "Python Scraping",
    projet3Description: "Data extraction from IdealWine website",
    projet3Details: "Web scraping project on the online wine and spirits sales website IdealWine, using Python and its libraries to extract data despite technical limitations.",
    projet4Titre: "Process Optimization",
    projet4Description: "Business process automation and optimization",
    projet4Details: "Implementation of a business process automation system using AI to identify and optimize bottlenecks. 30% reduction in repetitive task processing time.",
    projet5Titre: "Trend Prediction",
    projet5Description: "Market trend prediction model",
    projet5Details: "Development of a machine learning model to predict market trends based on historical and real-time data analysis. Integration with financial data APIs and implementation of an alert system.",
    projet6Titre: "AI Chatbot",
    projet6Description: "Intelligent virtual assistant for customer service",
    projet6Details: "Creation of an AI-powered chatbot to improve customer service. Using NLP for natural language understanding and integration with existing CRM system.",
    competencesTitre: "My Skills",
    competencesDescription: "An overview of my technical and professional skills",
    competencesTechniques: "Technical Skills",
    competencesBusiness: "Business Skills",
    competencesSoftSkills: "Soft Skills",
    contactTitre: "Contact",
    contactDescription: "Feel free to contact me to discuss your projects",
    contactNom: "Your name",
    contactEmail: "Your email",
    contactMessage: "Your message",
    contactEnvoyer: "Send message",
    contactRestonsEnContact: "Let's stay in touch",
    footerCopyright: "© 2024 Yoann Paubert. All rights reserved."
  },
  es: {
    accueil: "Inicio",
    apropos: "Acerca de",
    projets: "Proyectos",
    cv: "CV",
    contact: "Contacto",
    telecharger: "Descargar mi CV",
    envoyer: "Enviar mensaje",
    decouvrir: "Descubrir mis proyectos",
    decouvrirDesc: "Descubre mi trayectoria completa, mis experiencias y mis habilidades detalladas.",
    decouvrirProjets: "Descubrir mis proyectos",
    decouvrirProjetsDesc: "Apasionado por la inteligencia artificial y su aplicación en el mundo de los negocios, desarrollo soluciones basadas en datos para resolver problemas complejos.",
    decouvrirProjetsDesc2: "Actualmente en un Master of Science especializado en Inteligencia Artificial aplicada a los Negocios, combino formación académica rigurosa y experiencia práctica en alternancia.",
    decouvrirProjetsDesc3: "Mi trayectoria me ha llevado a trabajar en diversos sectores: análisis de datos, salud conectada y visualización de datos. Esta diversidad de experiencias me permite abordar los desafíos empresariales con un enfoque técnico sólido y una visión estratégica.",
    decouvrirProjetsDesc4: "Me interesa especialmente la aplicación de la IA para optimizar los procesos empresariales y crear valor añadido para las empresas.",
    decouvrirProjetsDesc5: "Habilidades técnicas",
    decouvrirProjetsDesc6: "Mis Proyectos",
    decouvrirProjetsDesc7: "Mi CV",
    decouvrirProjetsDesc8: "Mantengámonos en contacto",
    decouvrirProjetsDesc9: "No dude en contactarme para discutir oportunidades, proyectos o simplemente para intercambiar sobre la IA y sus aplicaciones empresariales.",
    decouvrirProjetsDesc10: "Envíame un mensaje",
    decouvrirProjetsDesc11: "Tu nombre",
    decouvrirProjetsDesc12: "Tu email",
    decouvrirProjetsDesc13: "Tu mensaje",
    decouvrirProjetsDesc14: "Enviar mensaje",
    decouvrirProjetsDesc15: "© 2024 Yoann Paubert. Todos los derechos reservados.",
    projet1Titre: "Rebranding de Go Fusion",
    projet1Description: "Rediseño de identidad visual para una empresa de gaming y ecología",
    projet1Details: "Proyecto de rebranding completo que incluye una landing page, una mascota y una nueva identidad visual para Go Fusion, combinando gaming y valores ecológicos.",
    projet2Titre: "Insuficiencia Renal Crónica",
    projet2Description: "Estudio de salud para mejorar la salud europea y mundial",
    projet2Details: "Análisis de datos médicos para identificar factores de riesgo y mejorar la prevención de la insuficiencia renal crónica, una patología mortal.",
    projet3Titre: "Scraping con Python",
    projet3Description: "Extracción de datos del sitio web IdealWine",
    projet3Details: "Proyecto de web scraping en el sitio web de venta de vinos y licores IdealWine, utilizando Python y sus bibliotecas para extraer datos a pesar de las limitaciones técnicas.",
    projet4Titre: "Optimización de Procesos",
    projet4Description: "Automatización y optimización de procesos empresariales",
    projet4Details: "Implementación de un sistema de automatización de procesos empresariales utilizando IA para identificar y optimizar cuellos de botella. Reducción del 30% en el tiempo de procesamiento de tareas repetitivas.",
    projet5Titre: "Predicción de Tendencias",
    projet5Description: "Modelo de predicción de tendencias del mercado",
    projet5Details: "Desarrollo de un modelo de machine learning para predecir tendencias del mercado basado en el análisis de datos históricos y en tiempo real. Integración con APIs de datos financieros e implementación de un sistema de alertas.",
    projet6Titre: "Chatbot IA",
    projet6Description: "Asistente virtual inteligente para el servicio al cliente",
    projet6Details: "Creación de un chatbot impulsado por IA para mejorar el servicio al cliente. Uso de NLP para la comprensión del lenguaje natural e integración con el sistema CRM existente.",
    competencesTitre: "Mis Habilidades",
    competencesDescription: "Una visión general de mis habilidades técnicas y profesionales",
    competencesTechniques: "Habilidades Técnicas",
    competencesBusiness: "Habilidades Empresariales",
    competencesSoftSkills: "Habilidades Blandas",
    contactTitre: "Contacto",
    contactDescription: "No dude en contactarme para discutir sus proyectos",
    contactNom: "Tu nombre",
    contactEmail: "Tu email",
    contactMessage: "Tu mensaje",
    contactEnvoyer: "Enviar mensaje",
    contactRestonsEnContact: "Mantengámonos en contacto",
    footerCopyright: "© 2024 Yoann Paubert. Todos los derechos reservados."
  }
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [lang, setLang] = useState<Lang>("fr")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log("Form submitted:", formData)
    alert("Message envoyé ! Je vous répondrai bientôt.")
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "Go Fusion Rebranding",
      shortDescription: "Visual identity redesign for a gaming and eco-friendly company",
      context: "Nous avons eu un projet en groupe pour l'entreprise Go Fusion. Elle est venue vers nous pour qu'on lui fasse un rebranding de la marque.",
      objective: "Créer une landing page, une mascotte et retravailler l'identité de la marque pour qu'elle soit plus en lien avec le milieu du gaming et de l'écologie.",
      tools: ["Python", "Sora", "Photoshop", "Éditeurs de logiciel"],
      results: "Notre cliente a été satisfaite du résultat et nous avons réalisé la meilleure mascotte des équipes.",
      link: "https://v0-greenxp-website-design.vercel.app/",
      image: "/go_fusion.jpg",
    },
    {
      title: "Chronic Kidney Failure",
      shortDescription: "Health study to improve European and global health",
      context: "Une étude de santé pour améliorer la santé européenne, mondiale. C'est une pathologie qui est meurtrière.",
      objective: "Chercher à prévenir et identifier la maladie le plus tôt possible pour diminuer le risque de mortabilité.",
      tools: ["R", "Markdown", "RandomForest", "Dataiku"],
      results: "Le projet a été présenté à l'ISPOR, congrès européen lié au monde de la santé où nous avons présenté, moi et mon tuteur, les résultats de l'étude.",
      link: "/projet_cegedim.jpg",
      image: "/cegedim.jpg",
    },
    {
      title: "Python Scraping",
      shortDescription: "Data extraction from IdealWine website",
      context: "Nous devions scrapper un site internet de notre choix. Nous avons choisi de scrapper le site IdealWine, un site de vente en ligne de vin et de spiritueux.",
      objective: "Obtenir les données du site internet à l'aide du scrapping. Il n'est pas toujours possible de le faire car des sites internet bloquent cette méthode car il est généralement payant d'utiliser leur donnée.",
      tools: ["Python", "BeautifulSoup", "Pandas", "VSCode"],
      results: "Extraction réussie des données du site IdealWine malgré les limitations techniques.",
      link: "https://github.com/Ypaub/iDealwine_Scrap",
      image: "/idealwine.jpg",
    },
  ]

  const skills = [
    { name: "Python", icon: Code },
    { name: "SQL", icon: Database },
    { name: "R", icon: BarChart3 },
    { name: "Power BI", icon: BarChart3 },
    { name: "Machine Learning", icon: Brain },
    { name: "Dataiku", icon: Database },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Yoann Paubert</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                { traductions[lang].accueil }
              </button>
              <button
                onClick={() => scrollToSection("apropos")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                { traductions[lang].apropos }
              </button>
              <button
                onClick={() => scrollToSection("projets")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                { traductions[lang].projets }
              </button>
              <button
                onClick={() => scrollToSection("cv")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                { traductions[lang].cv }
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                { traductions[lang].contact }
              </button>
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  { (() => { switch (lang) { case "fr": return "🇫🇷 Français"; case "en": return "🇬🇧 Anglais"; case "es": return "🇪🇸 Espagnol"; default: return "🇫🇷 Français"; } })() }
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => setLang("fr")} className="flex items-center">
                  <span className="mr-2">🇫🇷</span> Français
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setLang("en")} className="flex items-center">
                  <span className="mr-2">🇬🇧</span> Anglais
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setLang("es")} className="flex items-center">
                  <span className="mr-2">🇪🇸</span> Espagnol
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("accueil")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  { traductions[lang].accueil }
                </button>
                <button
                  onClick={() => scrollToSection("apropos")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  { traductions[lang].apropos }
                </button>
                <button
                  onClick={() => scrollToSection("projets")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  { traductions[lang].projets }
                </button>
                <button
                  onClick={() => scrollToSection("cv")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  { traductions[lang].cv }
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  { traductions[lang].contact }
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Yoann Paubert</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {traductions[lang].decouvrirProjetsDesc2}
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              { traductions[lang].decouvrirProjetsDesc }
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("projets")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              { traductions[lang].decouvrir }
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{ traductions[lang].apropos }</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  { traductions[lang].decouvrirProjetsDesc2 }
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  { traductions[lang].decouvrirProjetsDesc3 }
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  { traductions[lang].decouvrirProjetsDesc4 }
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{traductions[lang].competencesTitre}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <skill.icon className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{ traductions[lang].decouvrirProjetsDesc6 }</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow" 
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <img
                      src={project.image}
                      alt={traductions[lang][`projet${index + 1}Titre` as keyof TranslationKeys]}
                      className="w-full h-full object-contain bg-gray-50"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {traductions[lang][`projet${index + 1}Titre` as keyof TranslationKeys]}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Boîte de dialogue pour les détails du projet */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            {selectedProject !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {traductions[lang][`projet${selectedProject + 1}Titre` as keyof TranslationKeys]}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <div className="relative aspect-[16/9] w-full mb-6 bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={projects[selectedProject].image}
                      alt={traductions[lang][`projet${selectedProject + 1}Titre` as keyof TranslationKeys]}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Contexte</h4>
                      <p className="text-gray-600 leading-relaxed">{projects[selectedProject].context}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Objectif</h4>
                      <p className="text-gray-600 leading-relaxed">{projects[selectedProject].objective}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Outils utilisés</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tools.map((tool, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Résultats</h4>
                      <p className="text-gray-600 leading-relaxed">{projects[selectedProject].results}</p>
                    </div>
                    {projects[selectedProject].link && (
                      <div className="pt-4">
                        <a
                          href={projects[selectedProject].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Voir le projet
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{ traductions[lang].decouvrirProjetsDesc7 }</h2>
            <p className="text-lg text-gray-600 mb-12">
              { traductions[lang].decouvrirDesc }
            </p>
            <a
              href="/CV_Yoann_Paubert.pdf"
              download
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              { traductions[lang].telecharger }
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{ traductions[lang].contact }</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Restons en contact</h3>
                <p className="text-gray-600 mb-8">
                  { traductions[lang].decouvrirProjetsDesc9 }
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">yoannpaubert.pro@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://www.linkedin.com/in/yoann-paubert-352116248/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      mon LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-moi un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        {traductions[lang].contactNom}
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        {traductions[lang].contactEmail}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        {traductions[lang].contactMessage}
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {traductions[lang].contactEnvoyer}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{traductions[lang].footerCopyright}</p>
        </div>
      </footer>
    </div>
  )
}
