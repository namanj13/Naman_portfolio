"use client"
import { useEffect, useState } from "react"
import type React from "react"

import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false)
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleProjectTech = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:naman@example.com?subject=${subject}&body=${body}`

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  const skills = {
    languages: ["Java", "JavaScript", "CSS"],
    frameworks: ["Spring Boot", "Bootstrap", "React Native"],
    tools: ["VS Code", "Git/GitHub", "Apache Tomcat"],
    databases: ["MySQL", "MongoDB"],
    concepts: ["Object-Oriented Programming (OOP)", "Responsive Web Design"],
    soft: ["Leadership", "Event Management", "Public Speaking", "Team Collaboration"],
  }

  const projects = [
    {
      title: "Stock Portfolio Management System",
      description:
        "A comprehensive real-time stock portfolio tracker that enables users to monitor live stock prices and manage their investments efficiently.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API", "Stock Market API", "JWT Authentication"],
      features: [
        "Real-time stock price tracking with live market data",
        "Secure RESTful APIs built with Spring Boot",
        "User authentication and authorization system",
        "Interactive portfolio visualization dashboard",
      ],
      github: "https://github.com/namanj13/Stock-Portfolio-management-system",
    },
    {
      title: "Expense Tracker",
      description:
        "A modern browser-based application for comprehensive income and expense management with visual analytics.",
      tech: ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage", "Responsive Design"],
      features: [
        "Dynamic pie charts and graphs for data visualization",
        "Offline data persistence through LocalStorage",
        "Responsive design optimized for all devices",
        "Category-based expense tracking and filtering",
      ],
      github: "https://github.com/namanj13/Expense-Tracker",
    },
    {
      title: "Job Portal",
      description:
        "A responsive job portal interface that connects job seekers with opportunities through advanced search and filtering.",
      tech: ["HTML", "CSS", "JavaScript", "REST API", "Flexbox", "Grid Layout"],
      features: [
        "Advanced job search with multiple filter options",
        "Clean and intuitive user interface design",
        "Asynchronous API integration for real-time data",
        "Mobile-first responsive layout implementation",
      ],
      github: "https://github.com/namanj13/Job-portal",
    },
  ]

  const experience = [
    {
      title: "GSSOC Contributor",
      company: "Google Cloud Gen AI",
      period: "July 2024 - Aug 2024",
      location: "Remote",
      description: [
        "Designed and implemented a platform to help developers find remote jobs",
        "Utilized APIs for back-end functionality and ensured smooth performance",
        "Contributed to project documentation and testing phases",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Zidio Development",
      period: "July 2024 - Aug 2024",
      location: "Remote",
      description: [
        "Developed responsive web applications using modern technologies",
        "Collaborated with team members on various development projects",
        "Gained hands-on experience in full-stack development",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "SRM University",
      location: "Sonepat, Haryana",
      period: "Aug 2022 – June 2026",
    },
    {
      degree: "12th Standard",
      field: "Science (PCM)",
      institution: "ANA CONVENT",
      location: "Indore,Madhya Pradesh",
      period: "2020 - 2021",
      percentage: "84.4%",
    },
    {
      degree: "10th Standard",
      institution: "SANMATI H.S SCHOOL",
      location: "Indore,Madhya Pradesh",
      period: "2018 - 2019",
      percentage: "82.8%",
    },
  ]

  const activities = [
    {
      title: "Outreach Member",
      organization: "Webytes",
      period: "March 2024 – Present",
      description: [
        "Led targeted outreach campaigns to increase community engagement",
        "Formed strategic partnerships to support Webytes' initiatives",
        "Managed event logistics and coordination for workshops",
      ],
    },
    {
      title: "Coordinator",
      organization: "The Verge Tech Fest",
      period: "March 2025",
      description: [
        "Led organization of SRM BUILD 6.0, a 36-hour national-level hackathon",
        "Coordinated multiple technical events within the fest",
        "Enhanced participant engagement and learning experience",
      ],
    },
    {
      title: "Volunteer",
      organization: "SRM BUILD 4.0",
      period: "March 2023",
      description: [
        "Contributed to successful execution of 36-hour hackathon",
        "Assisted with event coordination and participant support",
      ],
    },
  ]

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
         <Link
           href="/"
            className={`text-xl sm:text-2xl font-bold transition-colors ${isScrolled ? "text-gray-800" : "text-white"} ml-6`}
              >
             Naman
         </Link>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsMenuOpen(!isMenuOpen)
              }}
              className={`focus:outline-none transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors hover:text-emerald-600 font-medium ${isScrolled ? "text-gray-600" : "text-white/90"}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md py-4 px-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              {["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 relative overflow-hidden flex items-center"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gray-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="lg:w-3/5 text-center lg:text-left lg:ml-10">

              <div className="mb-8">
                <p className="text-emerald-400 font-medium mb-4 text-base sm:text-lg tracking-wide">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Naman{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-gray-400 bg-clip-text text-transparent">
                    Jain
                  </span>
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
                  <p>Computer Science Engineering Student</p>
                </div>
                <p className="text-gray-300 mb-10 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
                  Passionate about building scalable web applications and contributing to open-source projects.
                  Currently pursuing B.Tech in CSE at SRM University with expertise in Java, Spring Boot, and modern web
                  technologies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-center"
                >
                  Get In Touch
                </a>
                <a
                  href="https://drive.google.com/file/d/1b7wdsozgkiTmdtSJJREbEExzL9pzW1PU/view?usp=sharing"
                  target="_blank"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 transform hover:scale-105 font-medium text-center"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-gray-600 rounded-full"></div>
                  <div className="absolute inset-4 bg-white rounded-full overflow-hidden">
                    <Image
                      src="/naman.jpg"
                      alt="Naman Jain"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                I'm a passionate Computer Science Engineering student at SRM University with a strong foundation in web
                development. My journey in tech has been driven by curiosity and a desire to create meaningful
                solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                With experience in Java, Spring Boot, and modern web technologies, I've contributed to various
                open-source projects. I'm particularly interested in backend development and creating scalable systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-600"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                <p className="text-gray-600 text-sm">Sonepat, Haryana</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-600"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">University</h3>
                <p className="text-gray-600 text-sm">SRM University</p>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-600"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Graduation</h3>
                <p className="text-gray-600 text-sm">June 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Skills</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Programming Languages</h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200 hover:bg-emerald-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {skills.frameworks.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:bg-slate-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Databases</h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {skills.databases.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium border border-amber-200 hover:bg-amber-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Core Concepts</h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {skills.concepts.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200 hover:bg-indigo-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Soft Skills</h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {skills.soft.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-medium border border-rose-200 hover:bg-rose-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                      <p className="text-emerald-600 font-semibold text-base sm:text-lg">{exp.company}</p>
                    </div>
                    <div className="text-gray-500 text-sm sm:text-base">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="min-w-[8px] h-2 w-2 bg-emerald-600 rounded-full mt-2"></div>
                        <span className="text-gray-600 leading-relaxed text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="min-w-[6px] h-1.5 w-1.5 bg-emerald-600 rounded-full mt-1.5"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <button
                            onClick={() => toggleProjectTech(index)}
                            className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-300 transition-colors"
                          >
                            {expandedProjects[index] ? "Show Less" : `+${project.tech.length - 3} more`}
                          </button>
                        )}
                      </div>
                      {expandedProjects[index] && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tech.slice(3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 font-medium transform hover:scale-105"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                      <p className="text-emerald-600 font-semibold text-base sm:text-lg mb-1">{edu.field}</p>
                      <p className="text-gray-700 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-gray-500 text-sm sm:text-base">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{edu.location}</span>
                      </div>
                      {edu.percentage && (
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                          </svg>
                          <span className="font-medium">Percentage: {edu.percentage}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Extracurricular Activities
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond academics, I'm actively involved in various tech communities and events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-emerald-50 to-gray-50 border border-emerald-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-emerald-600 font-semibold text-sm sm:text-base">{activity.organization}</p>
                    </div>
                    <span className="text-gray-500 text-xs sm:text-sm font-medium bg-white px-3 py-1 rounded-full">
                      {activity.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {activity.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="min-w-[8px] h-2 w-2 bg-emerald-600 rounded-full mt-2"></div>
                        <span className="text-gray-600 leading-relaxed text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
  <div className="container mx-auto px-4 sm:px-6 text-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
    <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
      Feel free to reach out to me for collaboration opportunities, project inquiries, or just to connect! I’m always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat about technology and development.
    </p>

    {/* Email & Location */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-10">
      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl">
          {/* Correct Email Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">Email</h4>
          <p className="text-gray-300">namanju931@gmail.com</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl">
          {/* Location Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
          </svg>
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">Location</h4>
          <p className="text-gray-300">Sonepat, Haryana, India</p>
        </div>
      </div>
    </div>

    {/* Follow me */}
    <h4 className="font-semibold text-lg mb-4">Follow me on</h4>

    {/* Social Icons */}
    <div className="flex justify-center gap-6 mb-8">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/--naman-jain/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-emerald-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.8c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
        </svg>
      </a>

      {/* GitHub */}
      <a href="https://github.com/namanj13" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-emerald-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.998.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.933 0-1.312.467-2.383 1.235-3.222-.125-.303-.535-1.524.115-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 6.844c1.02.005 2.045.138 3.005.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.243 2.874.12 3.176.77.839 1.233 1.91 1.233 3.222 0 4.61-2.805 5.624-5.475 5.92.43.37.81 1.096.81 2.21v3.28c0 .32.215.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.373-12-12-12z" />
        </svg>
      </a>
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-700 pt-8 mt-12 text-center">
      <p className="text-gray-400">© 2024 Naman Jain. All rights reserved.</p>
    </div>
  </div>
</section>
</div>)}

