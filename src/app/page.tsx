"use client";

import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { FaReact, FaNodeJs, FaCheckCircle } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const CVPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [portfolioModalData, setPortfolioModalData] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Currículum Vitae - Emir Zepeda", 10, 10);
    doc.text("Desarrollador de Software", 10, 20);
    doc.text("Sobre mí:", 10, 30);
    doc.text(
      "Soy un apasionado por la tecnología y la innovación. Estudié en la Universidad Tecnológica de Puebla (UTPuebla) y he trabajado en SoftTech, desarrollando soluciones tecnológicas para clientes diversos.",
      10,
      40
    );
    doc.text("Educación:", 10, 70);
    doc.text(
      "Universidad Tecnológica de Puebla - Ingeniería en Desarrollo de Software",
      10,
      80
    );
    doc.text("Experiencia:", 10, 100);
    doc.text("SoftTech - Desarrollador de Software", 10, 110);
    doc.text(
      "Participé en el desarrollo de soluciones tecnológicas utilizando metodologías ágiles, colaborando con equipos multidisciplinarios y aplicando tecnologías modernas para resolver problemas complejos.",
      10,
      120
    );
    doc.text("Habilidades:", 10, 150);
    doc.text("- JavaScript / TypeScript", 10, 160);
    doc.text("- React y Next.js", 10, 170);
    doc.text("- Node.js", 10, 180);
    doc.text("- Tailwind CSS", 10, 190);
    doc.text("Contacto:", 10, 210);
    doc.text("Correo: emir.zepeda@example.com", 10, 220);
    doc.text("Teléfono: +52 123 456 7890", 10, 230);
    doc.text("LinkedIn: linkedin.com/in/emir-zepeda", 10, 240);

    const pdfData = doc.output("bloburl");
    window.open(pdfData, "_blank");
  };

  const openPortfolioModal = (data: { title: string; description: string; image: string }) => {
    setPortfolioModalData(data);
  };

  const closePortfolioModal = () => setPortfolioModalData(null);

  const puntosDestacados = [
    "Desarrollador con experiencia en React y Node.js,,",
    "Participación en soluciones de software de alto impacto para clientes corporativos.",
    "Especialista en tecnologías modernas como Tailwind CSS y TypeScript.",
    "En mi proceso de estadia en SoftTech hice un administrador de usuarios para TELCEL.",
    "Actualmente sigo en la empresa que me ofrecieron 1 año mas de trabajo para capacitarme mucho mejor",
    "Me adapto muy bien en trabajo en equipo , al igual si no lo se lo aprendo",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navegación */}
      <nav className="bg-gray-800 py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Emir Zepeda</h1>
          <div className="flex space-x-4">
            <button
              className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
              onClick={() => setModalOpen(!isModalOpen)}
            >
              Puntos Destacados
            </button>
            <button
              className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
              onClick={generatePDF}
            >
              Ver PDF
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Foto e Información Personal */}
        <section className="flex flex-col lg:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <div className="lg:w-1/4 flex justify-center mb-6 lg:mb-0">
            <img
              src="/emir.jpg"
              alt="Foto de Emir Zepeda"
              className="rounded-full border-4 border-blue-500 shadow-md w-36 h-36"
            />
          </div>
          <div className="lg:w-3/4 text-center lg:text-left">
            <h2 className="text-3xl font-semibold mb-4">Emir Zepeda</h2>
            <p className="text-gray-400 mb-2">
              Desarrollador de Software con experiencia en tecnologías modernas
              y metodologías ágiles.
            </p>
            <p className="text-gray-400 mb-2">Ubicación: Puebla, México</p>
            <p className="text-gray-400">
              Correo: emir.zepeda@example.com | Teléfono: +52 123 456 7890
            </p>
          </div>
        </section>

        {/* Sobre mí */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Sobre mí
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Soy un apasionado por la tecnología y la innovación. Estudié en la
            Universidad Tecnológica de Puebla (UTPuebla) y he tenido la
            oportunidad de trabajar en SoftTech, desarrollando soluciones
            tecnológicas para clientes diversos. Me encanta aprender cosas
            nuevas y afrontar retos que me permitan crecer profesional y
            personalmente, me se desembolver de gran manera estando en equipos 
            lo que no se lo aprendo con rapides para poder ser mejor Desarrollador.
          </p>
        </section>

        {/* Portafolio */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Portafolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Administración de usuarios",
                description:
                  "Sistema para gestionar cuentas, roles y permisos de manera eficiente.",
                image: "/admin.png",
              },
              {
                title: "Formulario para administrar clientes",
                description:
                  "Implementación de una tienda en línea con carrito de compras, pago y manejo de inventario.",
                image: "/formulario.png",
              },
              {
                title: "Eliminación de clientes formulario",
                description:
                  "Aplicación para administrar citas y disponibilidad en tiempo real.",
                image: "/eliminar.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="relative group bg-gray-700 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openPortfolioModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute bottom-0 bg-gray-800 bg-opacity-70 w-full p-2 text-center">
                  <h3 className="text-white font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal de Puntos Destacados */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg w-4/5 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Puntos Destacados</h2>
            <ul className="pl-5 text-gray-400">
              {puntosDestacados.map((punto, index) => (
                <li key={index} className="mb-6">
                  <div className="text-lg mb-2">{punto}</div>
                  <FaCheckCircle className="text-blue-500 mx-auto text-2xl" />
                </li>
              ))}
            </ul>
            <div className="flex justify-center space-x-4 mt-4">
              <FaReact className="text-blue-400 text-3xl" />
              <SiNextdotjs className="text-gray-200 text-3xl" />
              <SiTailwindcss className="text-blue-500 text-3xl" />
              <SiTypescript className="text-blue-700 text-3xl" />
              <FaNodeJs className="text-green-500 text-3xl" />
            </div>
            <button
              className="bg-red-500 px-4 py-2 mt-4 rounded text-white hover:bg-red-600"
              onClick={() => setModalOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal del Portafolio */}
      {portfolioModalData && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg w-4/5 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">{portfolioModalData.title}</h2>
            <img
              src={portfolioModalData.image}
              alt={portfolioModalData.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-400">{portfolioModalData.description}</p>
            <button
              className="bg-red-500 px-4 py-2 mt-4 rounded text-white hover:bg-red-600"
              onClick={closePortfolioModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-gray-400 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Emir Zepeda. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default CVPage;
