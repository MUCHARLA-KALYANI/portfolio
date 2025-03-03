"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link"
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement; // Type assertion
    const formData = new FormData(form);
  
    setLoading(true);
  
    const response = await fetch("https://formspree.io/f/meoeyvqy", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
  
    setLoading(false);
  
    if (response.ok) {
      toast.success("Message sent successfully!");
      form.reset(); // Clear form fields
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Kalyani Mucharla</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/MUCHARLA-KALYANI" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/kalyani-mucharla-11ab10254/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <a 
  href="/resume.pdf" 
  download="Kalyani_Mucharla_Resume.pdf"
  className="hidden md:flex px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
>
  Download CV
</a>

          </div>
        </div>
      </header>

      <main className="container py-6 md:py-8">
        {/* Hero Section */}
        <section className="py-8 md:py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Kalyani Mucharla</span>
            </h1>
            <p className="text-xl text-muted-foreground">
    A passionate IT student and full-stack developer specializing in Next.js and React. 
    I am deeply interested in learning cutting-edge technologies and exploring Large Language Models (LLMs).
  </p>
  <p className="text-lg text-gray-600">
    With a strong enthusiasm for problem-solving and innovation, I am constantly expanding my skills 
    to build scalable and efficient applications. Currently, I am exploring AI-driven solutions and integrating them into modern web development.
  </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Avatar className="h-64 w-64 border-4 border-primary/20">
              <AvatarImage src="/kal_img.jpg?height=256&width=256" alt="Kalyani Mucharla" />
              <AvatarFallback className="text-6xl">KM</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            About Me
            <div className="h-1 flex-1 bg-primary/20 ml-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <Card>
                <CardHeader>
                  <CardTitle>B.Tech in Information Technology</CardTitle>
                  <CardDescription>2022 - 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Shri Vishnu Engineering College for Women, Bhimavaram</p>
                  <p className="text-muted-foreground mt-2">CGPA: 9.2/10.0</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>kalyanimucharla@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+91-9059783179</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <Link href="https://github.com/MUCHARLA-KALYANI" className="hover:underline" target="_blank">
                        github.com/Kalyani-Mucharla
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <Link href="https://www.linkedin.com/in/kalyani-mucharla-11ab10254/" className="hover:underline" target="_blank">
                        linkedin.com/in/kalyani-mucharla
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            Work Experience
            <div className="h-1 flex-1 bg-primary/20 ml-4 rounded-full"></div>
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Intern – Infosys Springboard</CardTitle>
                    <CardDescription>October 2024 - December 2024</CardDescription>
                  </div>
                  
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Contributing to the development of a Learning and Development platform leveraging React for the
                    frontend and Spring Boot for backend services.
                  </li>
                  <li>Collaborating on features to improve functionality, scalability, and user engagement.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Full Stack Development Intern - PILTOVR</CardTitle>
                <CardDescription>June 2024 - July 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Worked extensively with Next.js, Shadcn UI, Tailwind CSS, and MySQL to develop efficient and
                    responsive web applications.
                  </li>
                  <li>
                    Focused on enhancing user experience with advanced interactive features and optimized backend
                    integration.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            Projects
            <div className="h-1 flex-1 bg-primary/20 ml-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>E-Commerce Website</CardTitle>
                <CardDescription>Next.js, Tailwind CSS, TypeScript, MySQL</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Developed a user-friendly interface for product management, allowing users to categorize, add,
                    delete, and edit products seamlessly.
                  </li>
                  <li>
                    Implemented secure authentication enabling users to purchase products and handle billing
                    efficiently.
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://github.com/MUCHARLA-KALYANI/e-commerce-threadauth" className="flex items-center gap-2">
                    View Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Restaurant Management System</CardTitle>
                <CardDescription>Python, SQLite3</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Manages restaurant operations including employee and supplier details, product categorization, sales
                    tracking, and billing.
                  </li>
                  <li>Features employee, supplier, and product management, along with bill tracking and generation.</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://github.com/MUCHARLA-KALYANI/RestaurentManagement" className="flex items-center gap-2">
                    View Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>N Queens Visualizer</CardTitle>
                <CardDescription>React, JavaScript, CSS, HTML</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    The N-Queens puzzle involves placing N queens on an N x N chessboard such that no two queens attack
                    each other.
                  </li>
                  <li>The solution is implemented using recursion and backtracking algorithms.</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://mucharla-kalyani.github.io/n-queen-visualisation/" className="flex items-center gap-2">
                    View Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
            <Card className="flex flex-col">
  <CardHeader>
    <CardTitle>College Chatbot</CardTitle>
    <CardDescription>React, Python, Groq Llama, Qdrant, Tailwind CSS</CardDescription>
  </CardHeader>
  <CardContent className="flex-1">
    <ul className="list-disc pl-5 space-y-2">
      <li>A college-related chatbot designed to assist students with queries.</li>
      <li>Developed using Groq Llama for LLM processing and Qdrant as a vector database.</li>
      <li>Built with a Python backend and a React frontend styled with Tailwind CSS.</li>
    </ul>
  </CardContent>
  <div className="p-6 pt-0 mt-auto">
    <Button variant="outline" className="w-full" asChild>
      <Link href="https://github.com/MUCHARLA-KALYANI/chatbot" className="flex items-center gap-2">
        View Project <ExternalLink className="h-4 w-4" />
      </Link>
    </Button>
  </div>
</Card>
<Card className="flex flex-col">
  <CardHeader>
    <CardTitle>SnapGram</CardTitle>
    <CardDescription>React, Node.js, MongoDB Atlas</CardDescription>
  </CardHeader>
  <CardContent className="flex-1">
    <ul className="list-disc pl-5 space-y-2">
      <li>A social media platform for posting snapshots and posts.</li>
      <li>Users can like, comment, and interact with posts in real-time.</li>
      <li>Built using React for the frontend, Node.js for the backend, and MongoDB Atlas for data storage.</li>
    </ul>
  </CardContent>
  <div className="p-6 pt-0 mt-auto">
    <Button variant="outline" className="w-full" asChild>
      <Link href="https://github.com/MUCHARLA-KALYANI/snapgram" className="flex items-center gap-2">
        View Project <ExternalLink className="h-4 w-4" />
      </Link>
    </Button>
  </div>
</Card>

<Card className="flex flex-col">
  <CardHeader>
    <CardTitle>CHAT WITH MULTIPLE PDFS</CardTitle>
    <CardDescription>Streamlit, Python, Gemini API</CardDescription>
  </CardHeader>
  <CardContent className="flex-1">
    <ul className="list-disc pl-5 space-y-2">
      <li>A document-processing tool that allows multiple PDF uploads.</li>
      <li>Uses the Gemini API to extract, summarize, and analyze PDF content.</li>
      <li>Built with a Streamlit frontend and a Python backend.</li>
    </ul>
  </CardContent>
  <div className="p-6 pt-0 mt-auto">
    <Button variant="outline" className="w-full" asChild>
      <Link href="https://github.com/MUCHARLA-KALYANI/Chatwithmultiplepdfs" className="flex items-center gap-2">
        View Project <ExternalLink className="h-4 w-4" />
      </Link>
    </Button>
  </div>
</Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            Skills
            <div className="h-1 flex-1 bg-primary/20 ml-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Programming Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">C</Badge>
                    <Badge variant="secondary">Java</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Frontend Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">HTML5</Badge>
                    <Badge variant="secondary">CSS3</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Backend Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Databases</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Tools & Others</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">GitHub</Badge>
                    <Badge variant="secondary">DSA</Badge>
                    <Badge variant="secondary">FIGMA</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Communication</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Time Management</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Teamwork</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Adaptability</span>
                      <span>88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Problem-Solving</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Leadership</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Coding Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                      <Link href="https://leetcode.com/u/kalyanimucharla/" target="_blank">
                        <span className="text-lg font-semibold">LeetCode</span>
                        <span className="text-xs text-muted-foreground">View Profile</span>
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                      <Link href="https://www.hackerrank.com/profile/22b01a12a0" target="_blank">
                        <span className="text-lg font-semibold">HackerRank</span>
                        <span className="text-xs text-muted-foreground">View Profile</span>
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                      <Link href="https://www.codechef.com/users/kalyani262005" target="_blank">
                        <span className="text-lg font-semibold">CodeChef</span>
                        <span className="text-xs text-muted-foreground">View Profile</span>
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
                      <Link href="https://www.geeksforgeeks.org/user/kalyaniml26q/" target="_blank">
                        <span className="text-lg font-semibold">GeeksforGeeks</span>
                        <span className="text-xs text-muted-foreground">View Profile</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>



        {/* Certifications & Achievements Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            Certifications & Achievements
            <div className="h-1 flex-1 bg-primary/20 ml-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Infosys Springboard Internship Certification</li>
                  <li>NPTEL PYTHON Certification</li>
                  <li>Fundamentals of AI - Infosys SpringBoard</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
              <ul className="list-disc pl-5 space-y-3">
  <li>Participated in a 24-hour Hackathon conducted by Shri Vishnu Engineering College.</li>
  <li>Secured 3rd position in a drawing event conducted by Hobby Horses on 09/03/2024.</li>
  <li>Participated in a 24-hour Webathon conducted by V R Siddhartha College, Vijayawada on 07/10/2023.</li>
  <li>
    Selected as a Build@Meraceri Trainee, where I worked on real-world projects involving full-stack development,  
    gaining hands-on experience with modern web technologies and industry best practices.
  </li>
</ul>

              </CardContent>
            </Card>
          </div>
        </section>
         {/* Extra Curricular Activities Section */}
        <section id="extracurricular" className="py-12 scroll-mt-20">
  <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
    Extracurricular Activities
    <div className="h-1 flex-1 bg-primary/20 ml-4 rounded-full"></div>
  </h2>
  <div className="space-y-6">
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-semibold">Web Development Co-Lead</h3>
      <p className="text-sm text-muted-foreground">
        <strong>Google Developer Groups (GDG) - SVECW</strong>
      </p>
      <p className="text-gray-700 mt-2">
        As the Web Development Co-Lead, I actively contribute to organizing workshops, hackathons, and hands-on sessions focused on modern web technologies. I collaborate with industry professionals to enhance technical learning and mentor students in building scalable web applications.
      </p>
    </div>
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-semibold">Content Lead</h3>
      <p className="text-sm text-muted-foreground">
        <strong>AlgoZenith Student Chapter - SVECW</strong>
      </p>
      <p className="text-gray-700 mt-2">
        As the Content Lead, I oversee the creation of structured learning materials for data structures, algorithms, and competitive programming. I curate problem sets, write technical blogs, and host coding challenges to foster a strong problem-solving culture among students.
      </p>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        Contact Me
        <div className="h-1 flex-1 bg-primary/20 ml-4 rounded-full"></div>
      </h2>
      <Card>
        <CardContent className="pt-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <input
                id="subject"
                name="subject"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Subject"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Your message"
                required
              />
            </div>
            <Button type="submit" className="w-full md:w-auto" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl">Kalyani Mucharla</h3>
              <p className="text-muted-foreground">Full Stack Developer | IT Student</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/MUCHARLA-KALYANI" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/kalyani-mucharla-11ab10254/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:kalyanimucharla@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kalyani Mucharla. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

