import type { ReactNode } from "react";

const heroStack = [
  "Java Backend",
  "Spring Boot",
  "REST APIs",
  "Microservices",
  "Docker",
  "AWS",
];

const profileParagraphs = [
  "Soy Java Backend Developer, enfocado en construir APIs REST y servicios escalables con Spring Boot, microservicios, Docker y AWS. Me interesa desarrollar soluciones backend robustas, mantenibles y orientadas a entornos corporativos, con foco en integración entre servicios, seguridad, persistencia de datos y calidad técnica.",
  "Aporto además más de 8 años de experiencia en análisis y gestión de datos técnicos y geoespaciales en sectores como minería, infraestructura y meteorología. Esa trayectoria me permitió desarrollar visión analítica, criterio técnico y capacidad para resolver problemas complejos en entornos reales de operación.",
  "Mi transición hacia el desarrollo backend no fue un cambio aislado, sino una evolución natural: pasar de analizar datos, procesos y necesidades de negocio a construir soluciones tecnológicas que generen impacto real. Hoy busco seguir creciendo como Backend Java Developer en proyectos de consultoría y tecnología empresarial.",
];

const experience = [
  {
    role: "Backend Developer - RetainAI",
    company: "Finalista Hackathon ChurnInsight / Oracle + Alura",
    period: "2026",
    summary:
      "Participé en el desarrollo de RetainAI, una solución orientada a la predicción proactiva de churn con arquitectura basada en servicios dentro de un monorepo.",
    contributions: [
      "Desarrollé APIs REST con Java 21, Spring Boot y Spring Security para integrar frontend, backend y servicio ML.",
      "Participé en una arquitectura orientada a microservicios conectando backend Java, servicio FastAPI y persistencia en MySQL.",
      "Integré el flujo de predicción: recepción de datos, consulta al servicio ML, almacenamiento de resultados y respuesta al dashboard.",
      "Contribuí a funcionalidades diferenciales como visualización geográfica con Mapbox y asistente conversacional con Google Gemini.",
      "Trabajé con equipo multidisciplinario bajo dinámica ágil.",
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "FastAPI",
      "Python",
      "Docker",
      "OCI",
      "Mapbox",
      "Gemini API",
    ],
    value:
      "RetainAI no solo predecía churn: también integraba explicación del riesgo, visualización geográfica, dashboard empresarial y capacidades conversacionales.",
  },
  {
    role: "Transición profesional hacia Backend Development",
    company: "Proceso de reconversión profesional",
    period: "2023 - Actualidad",
    summary:
      "Consolidé una transición profesional enfocada en desarrollo backend, reforzando formación técnica con programas de software, proyectos prácticos y especialización en datos.",
    contributions: [
      "Formación práctica en Java, Spring Boot, APIs REST, bases de datos relacionales, Docker y AWS.",
      "Desarrollo de proyectos orientados a backend y automatización.",
      "Fortalecimiento de base en Python y análisis de datos como complemento técnico.",
      "Consolidación de foco principal en backend Java.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "Docker", "AWS", "Python", "SQL"],
    value:
      "Esta etapa me permitió combinar experiencia previa en datos y operaciones complejas con una base concreta en desarrollo de software.",
  },
  {
    role: "Analista de Datos Geológicos",
    company: "Compañía Minera Lincuna S.A.",
    period: "2018 - 2021",
    summary:
      "Rol orientado a gestión, validación y análisis de información crítica de exploración geológica, con foco en trazabilidad y calidad de datos.",
    contributions: [
      "Automaticé procesos de validación y tratamiento de datos con Python.",
      "Mejoré calidad, trazabilidad y eficiencia operativa en el manejo de información técnica.",
      "Gestioné datos críticos para soporte a decisiones en campo y operación.",
      "Elaboré reportes y análisis orientados a control operativo.",
    ],
    stack: ["Python", "SQL", "Power BI", "Excel", "Gestión de datos técnicos"],
    value: "",
  },
  {
    role: "Analista de Datos GIS",
    company: "SENAMHI",
    period: "2015 - 2017",
    summary:
      "Procesamiento, análisis y organización de información geoespacial y técnica para soporte de procesos operativos y reportería especializada.",
    contributions: [
      "Automaticé procesos de análisis y tratamiento de datos con Python.",
      "Mejoré tiempos de procesamiento y generación de reportes técnicos.",
      "Gestioné y analicé información geoespacial en contextos operativos.",
      "Apoyé en elaboración de productos cartográficos.",
    ],
    stack: ["Python", "SQL Server", "Análisis geoespacial", "Cartografía temática"],
    value: "",
  },
  {
    role: "Analista de Procesamiento de Datos",
    company: "Fugro Perú",
    period: "2013 - 2014",
    summary:
      "Procesamiento y validación de datos técnicos de alta precisión para control de calidad y entregables de proyecto.",
    contributions: [
      "Procesé y validé datos técnicos para asegurar consistencia en entregables.",
      "Desarrollé scripts en Python para automatizar tareas repetitivas.",
      "Optimicé procesos de control y revisión de información técnica.",
      "Contribuí a mejorar la eficiencia de flujos basados en datos.",
    ],
    stack: ["Python", "Validación de datos", "Control de calidad", "Procesamiento técnico"],
    value: "",
  },
];

const stackGroups = {
  "Backend Java": ["Java", "Spring Boot", "Spring Security", "REST APIs", "Microservices", "Maven"],
  "Bases de datos": ["MySQL", "PostgreSQL", "SQL Server", "SQL"],
  "Python y datos": ["Python", "FastAPI", "Pandas", "ETL", "Análisis de datos"],
  "DevOps y cloud": ["Docker", "Git", "GitHub Actions", "Linux/Bash", "AWS", "OCI", "Azure (aprendiendo)"],
  "Integración e IA aplicada": ["Gemini API", "OpenAI API", "Integración de servicios"],
  Metodologías: ["Scrum", "Trabajo colaborativo en equipos ágiles"],
};

const education = [
  {
    title: "Ingeniería de Sistemas",
    institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
    period: "2023 - Actualidad",
    detail: "Formación universitaria orientada a desarrollo de software y fundamentos de ingeniería de sistemas.",
  },
  {
    title: "Certified Tech Developer - Professional Developer",
    institution: "Digital House",
    period: "2025",
    detail: "Programa intensivo co-creado con Mercado Libre y Globant con foco en Java, Spring Boot, MySQL, testing, AWS y metodologías ágiles.",
  },
  {
    title: "Oracle Next Education (ONE) - Especialización en Data Science",
    institution: "Alura",
    period: "2025",
    detail: "Especialización intensiva en Python, análisis de datos, machine learning, ETL y evaluación de modelos.",
  },
  {
    title: "Programador Web Full Stack (Bootcamp)",
    institution: "TECSUP",
    period: "2020",
    detail: "Formación intensiva en desarrollo web full stack, APIs, Docker y despliegue.",
  },
  {
    title: "Profesional Técnico en Operaciones Mineras",
    institution: "TECSUP",
    period: "2018",
    detail: "Formación técnica profesional.",
  },
  {
    title: "Profesional Técnico en Geomática",
    institution: "SENCICO",
    period: "2014",
    detail: "Formación técnica profesional.",
  },
];

const certifications = [
  {
    title: "OCI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    focus: "Base en cloud computing y servicios de Oracle Cloud Infrastructure.",
    link: "",
  },
  {
    title: "Desarrollador Java FullStack",
    issuer: "JOEDAYZ",
    year: "2024",
    focus: "Formación complementaria en desarrollo Java con enfoque práctico.",
    link: "",
  },
  {
    title: "Spring Boot y Spring Cloud",
    issuer: "JOEDAYZ",
    year: "2024",
    focus: "Construcción de aplicaciones backend y fundamentos de microservicios con Spring.",
    link: "",
  },
  {
    title: "Programación Java 17+",
    issuer: "JOEDAYZ",
    year: "2024",
    focus: "Refuerzo técnico en Java moderno y fundamentos del ecosistema backend.",
    link: "",
  },
  {
    title: "Bootcamp - Java Backend Developer",
    issuer: "ATL Academy",
    year: "2023",
    focus: "Programa orientado a backend Java y Spring Boot.",
    link: "",
  },
  {
    title: "Sistemas Operativos y Linux",
    issuer: "Coursera",
    year: "2023",
    focus: "Formación base en sistemas operativos, Linux y entorno técnico de trabajo.",
    link: "",
  },
];

export default function CvPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 940, margin: "0 auto" }}>
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            padding: "28px 24px",
            marginBottom: 44,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 460px" }}>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                Java Backend Developer
              </span>

              <h1
                style={{
                  fontSize: "clamp(26px,4vw,34px)",
                  fontWeight: 900,
                  color: "var(--text-primary)",
                  letterSpacing: -0.7,
                  marginBottom: 8,
                }}
              >
                Gian Carlos Paucar Cortez
              </h1>

              <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 14 }}>
                <a href="mailto:gpaucarcortez@gmail.com" style={linkInlineStyle}>
                  gpaucarcortez@gmail.com
                </a>
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                {heroStack.map((tech) => (
                  <span
                    key={tech}
                    className="mono"
                    style={{
                      fontSize: 11,
                      padding: "4px 12px",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(246,38,77,0.08)",
                      border: "1px solid rgba(246,38,77,0.2)",
                      color: "var(--accent)",
                      fontWeight: 700,
                      letterSpacing: 0.5,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                <a href="/cv/CV_GianPaucar_JavaBackend.pdf" download style={primaryButtonStyle}>
                  Descarga
                </a>
                <a
                  href="https://github.com/gian-pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={iconButtonStyle}
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://linkedin.com/in/gian-pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={iconButtonStyle}
                >
                  <LinkedInIcon />
                </a>
                <a href="mailto:gpaucarcortez@gmail.com" aria-label="Email" style={iconButtonStyle}>
                  <MailIcon />
                </a>
              </div>
            </div>

            <div
              style={{
                flex: "0 1 250px",
                minWidth: 220,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <img
                src="/avatar.png"
                alt="Gian Carlos Paucar Cortez"
                style={{
                  width: 132,
                  height: 132,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid var(--border)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.16)",
                }}
              />
              <span className="mono" style={{ fontSize: 11, color: "var(--text-secondary)", letterSpacing: 0.4 }}>
                gianpc
              </span>
            </div>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <SectionTitle>Perfil profesional</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {profileParagraphs.map((paragraph) => (
              <p key={paragraph} style={{ fontSize: 14, lineHeight: 1.85, color: "var(--text-secondary)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <SectionTitle>Experiencia</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {experience.map((exp) => (
              <article
                key={`${exp.role}-${exp.period}`}
                style={{
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)" }}>{exp.role}</h3>
                  <span className="mono" style={{ fontSize: 11, color: "var(--text-secondary)" }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", marginBottom: 12 }}>
                  {exp.company}
                </p>

                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 10 }}>
                  {exp.summary}
                </p>

                <ul style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                  {exp.contributions.map((item) => (
                    <li key={item} style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: exp.value ? 10 : 0 }}>
                  {exp.stack.map((item) => (
                    <span
                      key={item}
                      className="mono"
                      style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
                        background: "transparent",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {exp.value ? (
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>Valor del proyecto:</strong> {exp.value}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <SectionTitle>Stack y herramientas</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {Object.entries(stackGroups).map(([category, items]) => (
              <div key={category} style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "baseline" }}>
                <span
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--accent)",
                    fontWeight: 700,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    minWidth: 170,
                  }}
                >
                  {category}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((item) => (
                    <span
                      key={item}
                      className="mono"
                      style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
                        background: "var(--surface)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <SectionTitle>Formación</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {education.map((item) => (
              <article
                key={`${item.title}-${item.period}`}
                style={{
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: 12,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>{item.title}</h3>
                  <span className="mono" style={{ fontSize: 11, color: "var(--text-secondary)" }}>
                    {item.period}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600, marginTop: 4 }}>{item.institution}</p>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)", marginTop: 6 }}>
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <SectionTitle>Certificaciones</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {certifications.map((item) => (
              <article
                key={`${item.title}-${item.year}`}
                style={{
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  padding: "14px 14px 12px",
                }}
              >
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>
                  {item.title}
                </h3>
                <p className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 8 }}>
                  {item.issuer} - {item.year}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)" }}>{item.focus}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                    style={{ display: "inline-block", marginTop: 10, fontSize: 11, color: "var(--accent)" }}
                  >
                    Ver credencial
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

const primaryButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "10px 18px",
  borderRadius: "var(--radius-full)",
  background: "var(--accent)",
  color: "#fff",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 700,
  boxShadow: "0 8px 20px rgba(246,38,77,0.25)",
} as const;

const iconButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 38,
  height: 38,
  borderRadius: "50%",
  border: "1px solid var(--border)",
  color: "var(--text-primary)",
  background: "var(--surface)",
  textDecoration: "none" as const,
} as const;

const linkInlineStyle = {
  color: "var(--text-secondary)",
  textDecoration: "none",
} as const;

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: -0.3,
        }}
      >
        {children}
      </h2>
      <div
        style={{
          width: 24,
          height: 3,
          background: "var(--accent)",
          borderRadius: 99,
          marginTop: 6,
        }}
      />
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.162 19.49c.5.092.682-.216.682-.48 0-.236-.009-.862-.014-1.692-2.776.603-3.363-1.338-3.363-1.338-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.34 1.087 2.91.832.091-.646.35-1.087.636-1.337-2.217-.252-4.55-1.109-4.55-4.938 0-1.091.39-1.983 1.029-2.681-.103-.253-.446-1.27.097-2.647 0 0 .84-.269 2.75 1.024A9.587 9.587 0 0 1 12 6.844c.85.004 1.706.115 2.505.337 1.909-1.293 2.748-1.024 2.748-1.024.545 1.377.202 2.394.1 2.647.64.698 1.027 1.59 1.027 2.681 0 3.838-2.337 4.683-4.562 4.93.359.31.679.922.679 1.859 0 1.341-.012 2.423-.012 2.753 0 .267.18.577.688.479A10.001 10.001 0 0 0 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12zM5.6 19.5h2.68v-9H5.6v9zM10.38 10.5h2.56v1.23h.04c.36-.68 1.22-1.4 2.51-1.4 2.69 0 3.18 1.77 3.18 4.07v5.1H16v-4.52c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.6h-2.39v-9z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}
