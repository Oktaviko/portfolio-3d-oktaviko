import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import {
  Camera,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  User,
  Briefcase,
  ChevronDown,
} from "lucide-react";

const Portfolio3D = () => {
  const mountRef = useRef(null);
  //   const [currentSection, setCurrentSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);

  // Dummy data untuk projects (nanti akan diganti dengan API)
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "Full-stack e-commerce platform dengan React dan Node.js, fitur payment gateway, admin dashboard, dan real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      image:
        "https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplikasi manajemen tugas dengan fitur real-time collaboration, drag & drop interface, dan notification system.",
      technologies: ["React", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      image:
        "https://via.placeholder.com/400x250/059669/ffffff?text=Task+Manager",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Dashboard cuaca interaktif dengan data visualization, forecast prediction, dan multiple location support.",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      image:
        "https://via.placeholder.com/400x250/dc2626/ffffff?text=Weather+App",
      github: "#",
      demo: "#",
    },
  ];

  useEffect(() => {
    console.log("useEffect called");
    console.log("mountRef:", mountRef.current); // tambahkan ini
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    if (!renderer) {
      console.error("Renderer failed to initialize");
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.6, 1.2, 8),
      new THREE.TetrahedronGeometry(0.8, 0),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x4f46e5, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x059669, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xdc2626, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true }),
    ];

    const shapes = [];
    for (let i = 0; i < 15; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      scene.add(mesh);
      shapes.push(mesh);
    }

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.005 + index * 0.001;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        shape.position.x += Math.cos(Date.now() * 0.001 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();
    setIsLoading(false);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionId);
    }
  };

  //   if (isLoading) {
  //     return (
  //       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
  //         <div className="text-white text-2xl">Loading 3D Portfolio...</div>
  //       </div>
  //     );
  //   }

  return (
    <div className="relative">
      {/* WAJIB: Selalu render mountRef */}
      <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />
      {isLoading ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-white text-2xl">Loading 3D Portfolio...</div>
        </div>
      ) : (
        <>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="text-white font-bold text-xl">Oktaviko RP</div>
                <div className="hidden md:flex space-x-8">
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </button>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative"
          >
            <div className="text-center text-white z-10 px-6">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                  <User size={60} className="text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Oktaviko Rizki Pratama
              </h1>
              <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
                Fresh Graduate | Full Stack Developer
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-400 leading-relaxed">
                Passionate about creating innovative web solutions with modern
                technologies. Specializing in React, Node.js, and creating
                immersive digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-white/70" />
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="min-h-screen py-20 bg-black/50 backdrop-blur-sm"
          >
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                  About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                      Fresh Graduate in Information Technology
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Saya adalah lulusan baru dari jurusan Teknologi Informasi
                      yang memiliki passion tinggi dalam web development. Selama
                      masa perkuliahan, saya telah mengembangkan berbagai
                      project yang menggabungkan kreativitas dengan teknologi
                      terdepan.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      Keahlian saya meliputi frontend development dengan React,
                      backend development dengan Node.js dan Express.js, serta
                      database management. Saya selalu antusias untuk
                      mempelajari teknologi baru dan menerapkannya dalam
                      project-project inovatif.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 rounded-lg border border-white/10">
                        <Code className="text-blue-400 mb-2" size={24} />
                        <h4 className="text-white font-semibold">Frontend</h4>
                        <p className="text-gray-400 text-sm">
                          React, JavaScript, HTML, CSS
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 p-4 rounded-lg border border-white/10">
                        <Briefcase className="text-green-400 mb-2" size={24} />
                        <h4 className="text-white font-semibold">Backend</h4>
                        <p className="text-gray-400 text-sm">
                          Node.js, Express.js, MongoDB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white mb-6">
                        Skills & Technologies
                      </h3>
                      <div className="space-y-4">
                        {[
                          { skill: "React.js", level: 90 },
                          { skill: "JavaScript", level: 85 },
                          { skill: "Node.js", level: 80 },
                          { skill: "Express.js", level: 80 },
                          { skill: "MongoDB", level: 75 },
                          { skill: "Three.js", level: 70 },
                        ].map((item, index) => (
                          <div key={index} className="relative">
                            <div className="flex justify-between text-white mb-2">
                              <span>{item.skill}</span>
                              <span>{item.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${item.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  My Projects
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Berikut adalah beberapa project yang telah saya kerjakan
                  selama masa perkuliahan. Setiap project menunjukkan kemampuan
                  teknis dan kreativitas dalam menyelesaikan masalah.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                        >
                          <Github size={18} />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="min-h-screen py-20 bg-black/50 backdrop-blur-sm"
          >
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                  Let's Connect
                </h2>
                <p className="text-xl text-gray-400 mb-12">
                  Tertarik untuk berkolaborasi atau ingin mengetahui lebih
                  lanjut tentang project saya? Jangan ragu untuk menghubungi
                  saya!
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                    <Mail className="text-blue-400 mx-auto mb-4" size={32} />
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-gray-400">oktaviko.rp@email.com</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                    <Github className="text-green-400 mx-auto mb-4" size={32} />
                    <h3 className="text-white font-semibold mb-2">GitHub</h3>
                    <p className="text-gray-400">github.com/oktaviko</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                    <Linkedin
                      className="text-purple-400 mx-auto mb-4"
                      size={32}
                    />
                    <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                    <p className="text-gray-400">linkedin.com/in/oktaviko</p>
                  </div>
                </div>

                <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                  Download CV
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 bg-black/70 backdrop-blur-sm border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
              <p className="text-gray-400">
                © 2024 Oktaviko Rizki Pratama. Built with React & Three.js
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Portfolio3D;
