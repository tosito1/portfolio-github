(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const r=document.querySelector("#app"),s={name:"Antonio José Muriel Gálvez",title:"Ingeniero Informático",bio:"Especializado en diseño de redes, administración de sistemas y seguridad informática. Apasionado por aprender, compartir conocimientos y afrontar nuevos retos tecnológicos.",contact:{email:"antoniojse2001@gmail.com",linkedin:"https://www.linkedin.com/in/antonio-josé-muriel-gálvez-438199229",github:"https://github.com/tosito1",whatsapp:"https://wa.me/34693045322",location:"Granada / Herrera, España"}},u=[{role:"Administrador de Sistemas (Prácticas)",company:"Nanobytes",location:"Granada, España",period:"Junio 2025 - Septiembre 2025",description:"Implementación y mantenimiento de servidores, virtualización y seguridad informática.",current:!1}],g=[{title:"Segundo Factor de Autenticación",subtitle:"Sistema WebAuth & FIDO",description:"Sistema seguro de autenticación de dos factores utilizando estándares WebAuth y FIDO para prevenir phishing y suplantación de identidad.",tags:["WebAuth","FIDO2","Ciberseguridad","Node.js"],icon:"shield",details:{features:["Implementación de estándares FIDO2/WebAuthn","Prevención activa de ataques por suplantación","Integración con llaves de seguridad físicas","Dashboard administrativo para gestión de tokens"],github:"https://github.com/tosito1"}},{title:"Hexápodo de Vigilancia con IA",subtitle:"Robot Autónomo Inteligente",description:"Robot hexápodo con Raspberry Pi 4 equipado con visión artificial, movimiento autónomo y reconocimiento de voz.",tags:["Python","OpenCV","Raspberry Pi","ML"],icon:"robot",details:{features:["Visión artificial mediante OpenCV","Algoritmos de movimiento autónomo en terrenos complejos","Control por reconocimiento de voz","Streaming de vídeo en tiempo real"],github:"https://github.com/tosito1"}},{title:"Chat & Ubicación en Tiempo Real",subtitle:"Aplicación Android",description:"Aplicación móvil para Android con mensajería instantánea y compartición de geolocalización en tiempo real.",tags:["Kotlin","Firebase","Android","Maps API"],icon:"chat",details:{features:["Mensajería instantánea con Firebase Realtime Database","Integración de Google Maps API para geolocalización","Notificaciones en tiempo real","Gestión de canales y perfiles de usuario"],github:"https://github.com/tosito1"}},{title:"Gestión de Socios & Notificaciones",subtitle:"Sistema de Gestión Integral",description:"Aplicación con roles diferenciados, sistema de autenticación robusto y notificaciones push dinámicas.",tags:["Kotlin","Firebase","Push Notifications"],icon:"users",details:{features:["Sistema de roles (Admin/Usuario/Socio)","Notificaciones push segmentadas vía Firebase Cloud Messaging","Generación de reportes automáticos","Seguridad avanzada en el acceso a datos"],github:"https://github.com/tosito1"}},{title:"Paniculas - Gestión Cinematográfica",subtitle:"Sistema Web Enterprise (Java EE)",description:"Plataforma robusta para la administración de catálogos de películas, perfiles de usuario y reseñas profesionales.",tags:["Java EE","GlassFish","JSP","MVC","DAO"],icon:"video",details:{features:["Arquitectura MVC completa con patrón DAO","Despliegue en servidor empresarial GlassFish","Sistema interactivo de reseñas y calificaciones","Panel administrativo con CRUD completo de contenidos"],github:"https://github.com/tosito1/Paniculas-GlassFish"}},{title:"Cloud Computing Enterprise",subtitle:"Arquitectura & Despliegue Cloud",description:"Desarrollo y despliegue de una infraestructura en la nube escalable utilizando contenedores, automatización con Ansible y principios DevOps.",tags:["Docker","Ansible","Cloud","Linux","Node.js"],icon:"cloud",details:{features:["Infraestructura como Código (IaC) con Ansible","Contenedorización completa mediante Docker","Arquitectura de microservicios distribuida","Administración avanzada de servidores Linux"],github:"https://github.com/tosito1/Cloud-Computing"}},{title:"DSS - Sistemas Distribuidos & Servicios",subtitle:"Arquitecturas Software & Middleware",description:"Laboratorio avanzado que abarca desde microservicios con Spring Boot y SOA empresarial hasta aplicaciones móviles y Web Semántica.",tags:["Spring Boot","SOA","Android","Semantic Web","BPEL"],icon:"layers",details:{features:["Arquitectura SOA con Oracle SOA Suite & BPEL","Microservicios con Spring Boot & Security","App Android distribuida con Kotlin","Modelado de conocimiento con OWL & SPARQL"],github:"https://github.com/tosito1/DSS"}},{title:"Tratamiento Inteligente de Datos (TID)",subtitle:"Data Science & Machine Learning",description:"Pipeline completo de Ciencia de Datos: desde el análisis exploratorio y minería de reglas de asociación hasta modelos predictivos avanzados y NLP.",tags:["Data Science","Python","KNIME","Machine Learning","NLP"],icon:"chart",details:{features:["Minería de reglas de asociación (Apriori/Market Basket)","Clasificación y Regresión (Random Forest, XGBoost)","Procesamiento de Lenguaje Natural (IMDb sentiment)","Análisis de Series Temporales financieras (Tesla stock)"],github:"https://github.com/tosito1/TID"}},{title:"Inteligencia Computacional",subtitle:"Deep Learning & Optimización",description:"Desarrollo de redes neuronales desde cero, arquitecturas CNN avanzadas para OCR y resolución de problemas NP-difíciles (QAP) mediante Algoritmos Genéticos.",tags:["TensorFlow","Deep Learning","Genetic Algorithms","NumPy","Python"],icon:"cpu",details:{features:["OCR con CNN (99.72% accuracy en MNIST)","Redes Neuronales implementadas desde cero","Algoritmos Genéticos para Optimizacion Combinatoria (QAP)","Estrategias evolutivas Baldwinianas y Lamarckianas"],github:"https://github.com/tosito1/Inteligencia-Computacional"}},{title:"Paquito Flores - Android APP",subtitle:"Gestión de Caseta de Socios (GIDM)",description:"Aplicación móvil integral para la gestión de peñas y casetas, con finanzas en tiempo real, votaciones dinámicas y sincronización offline-first.",tags:["Kotlin","Jetpack Compose","Firebase","Firestore","MVVM"],icon:"phone",details:{features:["Arquitectura MVVM con Repository Pattern","Sincronización en tiempo real (Firestore) y local (Room)","Sistema de roles (Socio, Tesorero, Presidente, Admin)","Notificaciones push segmentadas con FCM y WorkManager"],github:"https://github.com/tosito1/Paquito-Flores"}}],h=[{title:"Cisco® CCNA v7: ENSA",issuer:"Cisco Networking Academy",date:"2024",icon:"award"},{title:"Cisco® CCNA v7: SRWE",issuer:"Cisco Networking Academy",date:"2023",icon:"award"},{title:"Curso Avanzado FIWARE",issuer:"Fiware iHubs",date:"2023",icon:"award"}],m=[{degree:"Máster en Ingeniería Informática",institution:"Universidad de Granada",period:"2024 - Actualidad",status:"En curso"},{degree:"Grado en Ingeniería Informática",institution:"Universidad de Huelva",period:"2020 - 2024",status:"Completado"}],b=[{category:"Lenguajes de Programación",skills:["Python","C++","Java","Kotlin","JavaScript","SQL","Bash"]},{category:"Redes & Ciberseguridad",skills:["Cisco CCNA","OSPF","BGP","VLANs","Kali Linux","Metasploit","Wireshark"]},{category:"Infraestructura & Cloud",skills:["Docker","Kubernetes","Virtualización","Linux","Windows Server","AWS","Azure","GCP"]},{category:"Inteligencia Artificial & IoT",skills:["TensorFlow","PyTorch","OpenCV","Raspberry Pi","Arduino"]}],i={shield:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',robot:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/><path d="M9 21v-5h6v5"/><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/></svg>',chat:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M20 9v11a2 2 0 0 1-2 2H6l4-4h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/></svg>',users:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',award:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',building:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',location:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',linkedin:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>',github:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>',whatsapp:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',arrowLeft:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17-5-5 5-5"/><path d="M18 12H6"/></svg>',code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',server:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',cloud:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',cpu:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',phone:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',arrowUp:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>',video:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',database:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',layers:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/></polygon><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>'},y={"Lenguajes de Programación":i.code,"Redes & Ciberseguridad":i.shield,"Infraestructura & Cloud":i.cloud,"Inteligencia Artificial & IoT":i.cpu},p=()=>`
  <ul class="example-2">
    <li class="icon-content">
      <a href="${s.contact.linkedin}" aria-label="LinkedIn" data-social="linkedin" target="_blank">
        <div class="filled"></div>
        ${i.linkedin}
      </a>
      <div class="tooltip">LinkedIn</div>
    </li>
    <li class="icon-content">
      <a href="${s.contact.github}" aria-label="GitHub" data-social="github" target="_blank">
        <div class="filled"></div>
        ${i.github}
      </a>
      <div class="tooltip">GitHub</div>
    </li>
    <li class="icon-content">
      <a href="${s.contact.whatsapp}" aria-label="WhatsApp" data-social="whatsapp" target="_blank">
        <div class="filled"></div>
        ${i.whatsapp}
      </a>
      <div class="tooltip">WhatsApp</div>
    </li>
    <li class="icon-content">
      <a href="mailto:${s.contact.email}" aria-label="Email" data-social="email">
        <div class="filled"></div>
        ${i.mail}
      </a>
      <div class="tooltip">Email</div>
    </li>
  </ul>
`,w=()=>`
  <div class="bg-animation">
    <div class="grid-pattern"></div>
    <div class="particles">
      ${Array(20).fill(0).map((e,a)=>`
        <div class="particle" style="
          left: ${Math.random()*100}%;
          top: ${Math.random()*100}%;
          animation-delay: ${Math.random()*20}s;
          animation-duration: ${15+Math.random()*10}s;
        "></div>
      `).join("")}
    </div>
  </div>
`,f=()=>`
  <section id="hero" class="hero">
    ${w()}
    <div class="hero-content">
      <div class="avatar-wrapper">
        <div class="avatar">
          <img src="foto-cv.jpg" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 35%; border-radius: 50%;">
        </div>
        <div class="status-indicator" title="Disponible para proyectos"></div>
      </div>
      <h1 class="gradient-text">${s.name}</h1>
      <p class="hero-subtitle">
        <span class="typing-text">${s.title}</span>
      </p>
      <p class="hero-description">${s.bio}</p>
      <div class="cta-group">
        <a href="#projects" class="btn btn-primary">
          ${i.code}
          Ver Proyectos
        </a>
        <a href="#contact" class="btn btn-secondary">
          ${i.mail}
          Contactar
        </a>
      </div>
      ${p()}
    </div>
  </section>
`,k=()=>`
  <section id="experience" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Experiencia Profesional</h2>
      <p>Mi trayectoria en el mundo de la tecnología</p>
    </div>
    ${u.map(e=>`
      <div class="experience-card">
        <div class="experience-header">
          <div>
            <h3 class="experience-title">${e.role}</h3>
            <p class="experience-company">
              ${i.building}
              ${e.company} · ${e.location}
            </p>
          </div>
          <span class="experience-badge">${e.current?"Actual":e.period}</span>
        </div>
        <p class="experience-description">${e.description}</p>
      </div>
    `).join("")}
  </section>
`,C=()=>`
  <section id="projects" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Proyectos Destacados</h2>
      <p>Algunos de los proyectos en los que he trabajado</p>
    </div>
    <div class="projects-grid">
      ${g.map((e,a)=>`
        <div class="card reveal reveal-delay-${a%4+1}">
          <div class="card-icon">
            ${i[e.icon]}
          </div>
          <h3>${e.title}</h3>
          <p class="project-subtitle" style="color: var(--accent-tertiary); font-size: 0.85rem; margin-bottom: 0.5rem;">${e.subtitle}</p>
          <p>${e.description}</p>
          <div class="tags">
            ${e.tags.map(o=>`<span class="tag">${o}</span>`).join("")}
          </div>
          <a href="${e.title.includes("Paniculas")?"#proyecto/paniculas":e.title.includes("Cloud")?"#proyecto/cloud":e.title.includes("DSS")?"#proyecto/dss":e.title.includes("TID")?"#proyecto/tid":e.title.includes("Computacional")?"#proyecto/ic":e.title.includes("Paquito")?"#proyecto/paquito":"#"}" class="card-link">
            Ver detalles
            ${i.arrow}
          </a>
        </div>
      `).join("")}
    </div>
  </section>
`,A=()=>`
  <section id="certificates" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Certificaciones</h2>
      <p>Formación y certificaciones obtenidas</p>
    </div>
    <div class="certificates-grid">
      ${h.map((e,a)=>`
        <div class="certificate-card reveal reveal-delay-${a%3+1}">
          <div class="certificate-icon">
            ${i[e.icon]}
          </div>
          <div class="certificate-content">
            <h3>${e.title}</h3>
            <p>${e.issuer}</p>
            <span class="certificate-date">
              ${i.calendar}
              ${e.date}
            </span>
          </div>
        </div>
      `).join("")}
    </div>
  </section>
`,S=()=>`
  <section id="education" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Formación Académica</h2>
      <p>Mi recorrido educativo</p>
    </div>
    <div class="timeline">
      ${m.map((e,a)=>`
        <div class="timeline-item reveal reveal-delay-${a%2+1}">
          <div class="timeline-content">
            <span class="timeline-period">${e.period}</span>
            <h3>${e.degree}</h3>
            <p>
              ${i.building}
              ${e.institution}
            </p>
            <span style="display: inline-block; margin-top: 0.5rem; font-size: 0.8rem; color: ${e.status==="En curso"?"var(--accent-tertiary)":"var(--success)"};">
              ${e.status==="En curso"?"📚 En curso":"✓ Completado"}
            </span>
          </div>
        </div>
      `).join("")}
    </div>
  </section>
`,x=()=>`
  <section id="skills" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Habilidades Técnicas</h2>
      <p>Tecnologías y herramientas que domino</p>
    </div>
    <div class="skills-container">
      ${b.map((e,a)=>`
        <div class="skill-category reveal reveal-delay-${a%4+1}">
          <h3 class="skill-category-title">
            ${y[e.category]||i.code}
            ${e.category}
          </h3>
          <div class="skills-grid">
            ${e.skills.map(o=>`
              <span class="skill-tag">${o}</span>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  </section>
`,P=()=>`
  <section id="contact" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Contacto</h2>
      <p>¿Tienes un proyecto en mente? Hablemos</p>
    </div>
    <div class="contact-grid">
      <a href="mailto:${s.contact.email}" class="contact-card">
        <div class="contact-icon">
          ${i.mail}
        </div>
        <div class="contact-info">
          <h3>Email</h3>
          <p>${s.contact.email}</p>
        </div>
      </a>
      <a href="${s.contact.linkedin}" target="_blank" class="contact-card">
        <div class="contact-icon">
          ${i.linkedin}
        </div>
        <div class="contact-info">
          <h3>LinkedIn</h3>
          <p>Conecta conmigo</p>
        </div>
      </a>
      <a href="${s.contact.github}" target="_blank" class="contact-card">
        <div class="contact-icon">
          ${i.github}
        </div>
        <div class="contact-info">
          <h3>GitHub</h3>
          <p>Ver mi código</p>
        </div>
      </a>
      <a href="${s.contact.whatsapp}" target="_blank" class="contact-card">
        <div class="contact-icon">
          ${i.phone}
        </div>
        <div class="contact-info">
          <h3>WhatsApp</h3>
          <p>Envía un mensaje</p>
        </div>
      </a>
    </div>
  </section>
`,c=()=>`
  <footer>
    <div class="footer-content">
      <div class="footer-logo">${s.name}</div>
      <p style="color: var(--text-secondary); margin-bottom: 1rem;">${s.title}</p>
      <div class="footer-social">
        ${p()}
      </div>
      <p class="footer-text">
        &copy; ${new Date().getFullYear()} Portfolio. Diseñado con pasión.
        <br>
        <span style="margin-top: 0.5rem; display: inline-block; color: var(--text-muted);">
          ${i.location} ${s.contact.location}
        </span>
      </p>
    </div>
  </footer>
`,M=()=>`
  <div class="project-page">
    <div class="container reveal">
      <a href="#home" class="project-back-btn">
        ${i.arrowLeft} Volver al Portfolio
      </a>
      
      <header class="project-hero">
        <h1 class="gradient-text">Paniculas</h1>
        <p class="modal-subtitle">Gestión Cinematográfica | Java Enterprise Edition</p>
      </header>

      <div class="project-grid">
        <div class="project-main-content">
          <section>
            <h2>1. Descripción del proyecto</h2>
            <p>Panículas es una aplicación web desarrollada en <strong>Java Enterprise Edition</strong> desplegada sobre un servidor de aplicaciones <strong>GlassFish</strong>.</p>
            <p>El objetivo del proyecto es implementar una aplicación web completa utilizando el stack clásico de Java EE, integrando backend, lógica de negocio y despliegue en servidor empresarial.</p>
            <p>Los servidores de aplicaciones como GlassFish permiten ejecutar aplicaciones empresariales Java proporcionando servicios como contenedores de servlets, gestión de seguridad, persistencia y despliegue de aplicaciones web.</p>
            <p>Este tipo de arquitectura es habitual en entornos corporativos donde se requieren aplicaciones escalables y estructuradas en capas.</p>
          </section>

          <section>
            <h2>2. Arquitectura del proyecto</h2>
            <p>El proyecto sigue una arquitectura típica de aplicaciones Java EE, donde la aplicación se ejecuta dentro de un servidor de aplicaciones.</p>
            
            <div class="architecture-container">
              <div class="arch-node">Cliente (Navegador)</div>
              <div class="arch-arrow">▼ HTTP</div>
              <div class="arch-node">Servidor GlassFish</div>
              <div class="arch-arrow">▼</div>
              <div class="arch-node">Controladores (Servlets)</div>
              <div class="arch-arrow">▼</div>
              <div class="arch-node">Lógica de Negocio</div>
              <div class="arch-arrow">▼</div>
              <div class="arch-node">Base de Datos (MySQL)</div>
            </div>

            <p>El servidor de aplicaciones implementa el estándar Java EE, proporcionando soporte para tecnologías como Servlets, JSP, JSF, JPA, EJB y Web Services.</p>
          </section>

          <section>
            <h2>4. ¿Qué aprendí en este proyecto?</h2>
            <ul class="learning-list">
              <li class="learning-item"><strong>Desarrollo Java EE:</strong> Estructuración de aplicaciones web, lógica de servidor y organización en capas.</li>
              <li class="learning-item"><strong>Despliegue Empresarial:</strong> Trabajo con GlassFish, gestión de archivos .war y configuración de dominios.</li>
              <li class="learning-item"><strong>Arquitectura Cliente-Servidor:</strong> Comprensión profunda del flujo HTTP y generación dinámica de contenido.</li>
              <li class="learning-item"><strong>Entornos Corporativos:</strong> Enfoque en escalabilidad, modularidad y mantenimiento a largo plazo.</li>
            </ul>
          </section>

          <section>
            <h2>5. Retos técnicos encontrados</h2>
            <p>Durante el desarrollo, me enfrenté a retos como la configuración inicial del servidor GlassFish, el manejo del ciclo de vida de la aplicación web y la resolución de errores de dependencias en un entorno de servidor real.</p>
          </section>

            <p>El resultado es una aplicación web funcional que demuestra habilidades en desarrollo backend robusto, uso de servidores empresariales y arquitectura de sistemas complejos.</p>
          </section>

          <div style="margin-top: 5rem; text-align: center;">
            <a href="#home" class="btn btn-secondary">
              ${i.arrowLeft} Volver al Inicio
            </a>
          </div>
        </div>

        <aside class="project-sidebar">
          <div class="sidebar-card">
            <h3>Tecnologías utilizadas</h3>
            <div class="tech-list-detailed">
              <div class="tech-item-detailed">
                <strong>Backend</strong>
                <span>Java EE, Servlets, JSP, MVC</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Servidor</strong>
                <span>GlassFish 5.1 (Implementación de referencia)</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Base de Datos</strong>
                <span>MySQL con conexión JDBC</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Herramientas</strong>
                <span>NetBeans / IntelliJ, Git, GitHub</span>
              </div>
            </div>
          </div>
          
          <div class="sidebar-card">
            <h3>Repositorio</h3>
            <a href="https://github.com/tosito1/Paniculas-GlassFish" target="_blank" class="btn btn-primary" style="width: 100%;">
              ${i.github} Ver código fuente
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
`,L=()=>`
  <button class="scroll-top" id="scrollTop" aria-label="Volver arriba">
    ${i.arrowUp}
  </button>
`,$=()=>{const e=document.querySelector(".menu-toggle"),a=document.querySelector(".nav-links");e&&a&&(e.addEventListener("click",()=>{e.classList.toggle("active"),a.classList.toggle("active")}),a.querySelectorAll("a").forEach(o=>{o.addEventListener("click",()=>{e.classList.remove("active"),a.classList.remove("active")})}))},E=()=>{const e=document.querySelector("header"),a=document.getElementById("scrollTop");window.addEventListener("scroll",()=>{window.scrollY>100?(e?.classList.add("scrolled"),a?.classList.add("visible")):(e?.classList.remove("scrolled"),a?.classList.remove("visible"))}),a?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})},I=()=>{const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},a=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&l.target.classList.add("active")})},e);document.querySelectorAll(".reveal").forEach(o=>a.observe(o))},j=()=>`
  <div class="project-page">
    <div class="container reveal">
      <a href="#home" class="project-back-btn">
        ${i.arrowLeft} Volver al Portfolio
      </a>
      
      <header class="project-hero">
        <h1 class="gradient-text">Cloud Computing</h1>
        <p class="modal-subtitle">Proyecto Académico | Máster en Ingeniería Informática</p>
      </header>

      <div class="project-grid">
        <div class="project-main-content">
          <section>
            <h2>1. Descripción del proyecto</h2>
            <p>Este proyecto consiste en el desarrollo y despliegue de una aplicación en un entorno de computación en la nube, aplicando los principios de arquitectura cloud moderna.</p>
            <p>El objetivo fue diseñar una infraestructura capaz de ejecutar aplicaciones de forma escalable, distribuida y reproducible, utilizando herramientas de virtualización, contenedores y automatización del despliegue.</p>
            <p>La computación en la nube permite desplegar aplicaciones en infraestructuras remotas bajo demanda, utilizando modelos de servicio como IaaS, PaaS o SaaS, que abstraen la gestión del hardware y permiten escalar recursos dinámicamente.</p>
          </section>

          <section>
            <h2>2. Arquitectura del sistema</h2>
            <p>El proyecto implementa una arquitectura distribuida basada en microservicios, optimizada para entornos cloud escalables.</p>
            
            <div class="architecture-container">
              <div class="arch-node">Usuario</div>
              <div class="arch-arrow">▼ HTTP</div>
              <div class="arch-node">Load Balancer / Reverse Proxy</div>
              <div class="arch-arrow">▼</div>
              <div class="arch-node">Aplicación en Contenedores (Docker)</div>
              <div class="arch-arrow">▼</div>
              <div class="arch-node">Base de Datos / Backend Services</div>
            </div>

            <p>Esta estructura permite que cada componente se escale de forma independiente según la carga del sistema, un principio fundamental del Cloud Computing moderno.</p>
          </section>

          <section>
            <h2>3. Tecnologías clave</h2>
            <p><strong>Docker:</strong> Utilizado para la contenedorización, garantizando la reproducibilidad y aislamiento de dependencias.</p>
            <p><strong>Ansible:</strong> Implementación de Infrastructure as Code (IaC) para la automatización total de la configuración y despliegue de servidores.</p>
            <p><strong>Virtualización:</strong> Uso de máquinas virtuales (VM) para simular entornos cloud reales mediante hipervisores.</p>
          </section>

          <section>
            <h2>4. Conceptos y Aprendizajes</h2>
            <ul class="learning-list">
              <li class="learning-item"><strong>Contenedorización:</strong> Empaquetado de aplicaciones consistentes con Docker.</li>
              <li class="learning-item"><strong>Infraestructura como Código:</strong> Automatización reproducible del despliegue con Ansible.</li>
              <li class="learning-item"><strong>Arquitecturas Escalables:</strong> Diseño de sistemas preparados para escalado horizontal.</li>
              <li class="learning-item"><strong>Administración Linux:</strong> Gestión avanzada de servidores y networking en entornos cloud.</li>
            </ul>
          </section>

          <section>
            <h2>5. Retos técnicos</h2>
            <p>Los principales retos incluyeron la resolución de dependencias en entornos distribuidos, la configuración precisa de redes entre contenedores y la automatización de procesos de despliegue complejos para asegurar una infraestructura robusta.</p>
          </section>

          <section>
            <h2>6. Resultado</h2>
            <p>Un entorno cloud realista que demuestra la capacidad de diseñar, automatizar y gestionar infraestructuras modernas basadas en microservicios y contenedores.</p>
          </section>

          <div style="margin-top: 5rem; text-align: center;">
            <a href="#home" class="btn btn-secondary">
              ${i.arrowLeft} Volver al Inicio
            </a>
          </div>
        </div>

        <aside class="project-sidebar">
          <div class="sidebar-card">
            <h3>Stack Tecnológico</h3>
            <div class="tech-list-detailed">
              <div class="tech-item-detailed">
                <strong>Infraestructura</strong>
                <span>Docker, Ansible, Linux, VM</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Backend</strong>
                <span>Node.js, Express, MongoDB</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Arquitectura</strong>
                <span>REST API, Microservicios, IaaS</span>
              </div>
              <div class="tech-item-detailed">
                <strong>DevOps</strong>
                <span>Git, GitHub, Automatización</span>
              </div>
            </div>
          </div>
          
          <div class="sidebar-card">
            <h3>Repositorio</h3>
            <a href="https://github.com/tosito1/Cloud-Computing" target="_blank" class="btn btn-primary" style="width: 100%;">
              ${i.github} Ver código fuente
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
`,z=()=>`
  <div class="project-page">
    <div class="container reveal">
      <a href="#home" class="project-back-btn">
        ${i.arrowLeft} Volver al Portfolio
      </a>
      
      <header class="project-hero">
        <h1 class="gradient-text">Desarrollo de Sistemas de Software</h1>
        <p class="modal-subtitle">Componentes y Servicios | Sistemas Distribuidos</p>
      </header>

      <div class="project-grid">
        <div class="project-main-content">
          <section>
            <h2>Laboratorio de Arquitecturas Software</h2>
            <p>Este proyecto es un compendio de 5 prácticas avanzadas que exploran diferentes paradigmas de construcción de software moderno y distribuido.</p>
          </section>

          <section>
            <h2>1. Aplicación Web & API (Spring Boot)</h2>
            <p>Desarrollo de un backend robusto para la gestión de productos con seguridad avanzada.</p>
            <ul class="learning-list">
              <li class="learning-item"><strong>Seguridad:</strong> RBAC (Role-Based Access Control) con Spring Security.</li>
              <li class="learning-item"><strong>Backend:</strong> REST API consumible, exportación SQL y base de datos H2.</li>
            </ul>
          </section>

          <section>
            <h2>2. Arquitectura SOA Empresarial</h2>
            <p>Implementación de servicios distribuidos mediante el paradigma SOA utilizando el stack de Oracle.</p>
            <div class="architecture-container">
              <div class="arch-node">Cliente (SOAP)</div>
              <div class="arch-arrow">▼</div>
              <div class="arch-node">Oracle SOA Suite</div>
              <div class="arch-arrow">▼ Orquestación</div>
              <div class="arch-node">Procesos BPEL</div>
              <div class="arch-arrow">▼</div>
              <div class="arch-node">Servicios WSDL/XML</div>
            </div>
          </section>

          <section>
            <h2>3. Cliente Móvil Android (Kotlin)</h2>
            <p>App nativa sincronizada en tiempo real con el backend de Spring Boot.</p>
            <ul class="learning-list">
              <li class="learning-item"><strong>Integración:</strong> Consumo de APIs REST y sincronización de carrito.</li>
              <li class="learning-item"><strong>Funciones:</strong> Geoposicionamiento de tiendas en mapas.</li>
            </ul>
          </section>

          <section>
            <h2>4 & 5. Web Semántica e Inferencia</h2>
            <p>Modelado de conocimiento complejo y consultas de grafos.</p>
            <ul class="learning-list">
              <li class="learning-item"><strong>Ontologías:</strong> Diseño OWL con Protégé y razonadores semánticos.</li>
              <li class="learning-item"><strong>Explotación:</strong> Consultas avanzadas SPARQL para deducción de datos.</li>
            </ul>
          </section>

          <div style="margin-top: 5rem; text-align: center;">
            <a href="#home" class="btn btn-secondary">
              ${i.arrowLeft} Volver al Inicio
            </a>
          </div>
        </div>

        <aside class="project-sidebar">
          <div class="sidebar-card">
            <h3>Stack Multitecnológico</h3>
            <div class="tech-list-detailed">
              <div class="tech-item-detailed">
                <strong>Backend & Web</strong>
                <span>Spring Boot, Security, Java, JSP</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Móvil</strong>
                <span>Android, Kotlin, REST Client</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Middleware SOA</strong>
                <span>Oracle SOA Suite, BPEL, SOAP, WSDL</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Web Semántica</strong>
                <span>Protégé, OWL, SPARQL, RDF</span>
              </div>
            </div>
          </div>
          
          <div class="sidebar-card">
            <h3>Repositorio</h3>
            <a href="https://github.com/tosito1/DSS" target="_blank" class="btn btn-primary" style="width: 100%;">
              ${i.github} Ver repositorio
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
`,D=()=>`
  <div class="project-page">
    <div class="container reveal">
      <a href="#home" class="project-back-btn">
        ${i.arrowLeft} Volver al Portfolio
      </a>
      
      <header class="project-hero">
        <h1 class="gradient-text">Tratamiento Inteligente de Datos</h1>
        <p class="modal-subtitle">Data Science | Machine Learning | Minería de Datos</p>
      </header>

      <div class="project-grid">
        <div class="project-main-content">
          <section>
            <h2>Ciencia de Datos Aplicada</h2>
            <p>Este proyecto es un laboratorio intensivo de Data Science que cubre desde la visualización exploratoria hasta el despliegue de modelos complejos de Deep Learning y NLP sobre datasets reales de diversos dominios.</p>
          </section>

          <div class="practice-grid">
            <div class="practice-card reveal">
              <span class="practice-tag">PRÁCTICA 1</span>
              <h3>Análisis Exploratorio (EDA)</h3>
              <p>Estadística descriptiva y visualización avanzada (NBA/Finanzas) con KNIME. Análisis de outliers, correlaciones de Pearson y diagramas multinivel.</p>
            </div>
            
            <div class="practice-card reveal">
              <span class="practice-tag">PRÁCTICA 2</span>
              <h3>Preparación & Limpieza</h3>
              <p>Pipelines de datos críticos: Imputación de nulos, reducción de dimensionalidad con PCA, balanceo de clases con SMOTE y discretización CAIM.</p>
            </div>

            <div class="practice-card reveal">
              <span class="practice-tag">PRÁCTICA 3</span>
              <h3>Association Rules (Apriori)</h3>
              <p>Market Basket Analysis aplicado a retail. Generación de itemsets frecuentes y reglas de asociación basadas en Support, Confidence y Lift.</p>
            </div>

            <div class="practice-card reveal">
              <span class="practice-tag">PRÁCTICA 4</span>
              <h3>Clustering No Supervisado</h3>
              <p>Segmentación de perfiles mediante K-Means, DBSCAN y clustering jerárquico. Reconstrucción de categorías químicas de vinos y roles deportivos.</p>
            </div>

            <div class="practice-card reveal">
              <span class="practice-tag">PRÁCTICA 5</span>
              <h3>Predictor de Rendimiento</h3>
              <p>Feature Engineering avanzado para crear métricas ofensivas/defensivas personalizadas y clasificación con Random Forest de alto rendimiento.</p>
            </div>

            <div class="practice-card reveal">
              <span class="practice-tag">PRÁCTICA 6</span>
              <h3>Predicción de Siniestralidad</h3>
              <p>Modelado de machine learning sobre 28,000 registros para predecir fatalidad en accidentes con Decision Trees, SVM y Naive Bayes.</p>
            </div>

            <div class="practice-card reveal">
              <span class="practice-tag">PRÁCTICA 8</span>
              <h3>NLP & Sentiment Analysis</h3>
              <p>Clasificación automática de reseñas IMDb mediante procesamiento de texto (TF-IDF, Bag of Words) y árboles de decisión distribuidos.</p>
            </div>

            <div class="practice-card reveal">
              <span class="practice-tag">PRÁCTICA 9</span>
              <h3>Series Temporales Financieras</h3>
              <p>Predicción de valores bursátiles (Tesla) con Python. Uso de Medias Móviles, Transformada de Fourier para ruido y regressores XGBoost.</p>
            </div>
          </div>

          <section>
            <h2>Principales Conclusiones</h2>
            <p>A lo largo de este proyecto, he consolidado el ciclo de vida completo de un proyecto TID: desde la recolección y limpieza hasta la inferencia y visualización de resultados en entornos profesionales de computación distribuida.</p>
          </section>

          <div style="margin-top: 5rem; text-align: center;">
            <a href="#home" class="btn btn-secondary">
              ${i.arrowLeft} Volver al Inicio
            </a>
          </div>
        </div>

        <aside class="project-sidebar">
          <div class="sidebar-card">
            <h3>Stack Tecnológico</h3>
            <div class="tech-list-detailed">
              <div class="tech-item-detailed">
                <strong>Análisis & Workflow</strong>
                <span>KNIME Analytics Platform, Google Colab</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Ciencia de Datos</strong>
                <span>Python (Pandas, Scikit-learn, Scipy)</span>
              </div>
              <div class="tech-item-detailed">
                <strong>ML Avanzado</strong>
                <span>XGBoost, Statsmodels, SMOTE</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Visualización</strong>
                <span>Seaborn, Matplotlib, Plotly</span>
              </div>
            </div>
          </div>
          
          <div class="sidebar-card">
            <h3>Repositorio</h3>
            <a href="https://github.com/tosito1/TID" target="_blank" class="btn btn-primary" style="width: 100%;">
              ${i.github} Ver repositorio
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
`,R=()=>`
  <div class="project-page">
    <div class="container reveal">
      <a href="#home" class="project-back-btn">
        ${i.arrowLeft} Volver al Portfolio
      </a>
      
      <header class="project-hero">
        <h1 class="gradient-text">Inteligencia Computacional</h1>
        <p class="modal-subtitle">Deep Learning & Optimización Evolutiva en Problemas Complejos</p>
      </header>

      <div class="project-grid">
        <div class="project-main-content">
          <section>
            <h2>Visión Artificial & Metaheurísticas</h2>
            <p>Este proyecto recopila investigaciones prácticas sobre el diseño de modelos de aprendizaje profundo y algoritmos metaheurísticos aplicados a problemas NP-difíciles y reconocimiento de patrones.</p>
          </section>

          <section>
            <h2>1. Reconocimiento Óptico (OCR) con Deep Learning</h2>
            <p>Evolución desde implementaciones manuales con NumPy hasta arquitecturas SOTA (State of the Art) para el dataset MNIST.</p>
            
            <div class="practice-grid">
              <div class="practice-card">
                <span class="practice-tag">ALGO DESDE CERO</span>
                <h3>Matemática de Redes</h3>
                <p>Implementación manual de <strong>Forward/Backpropagation</strong>. Uso de inicializaciones avanzadas como <strong>He Initialization</strong> y <strong>Xavier/Glorot</strong> para estabilidad de gradientes.</p>
              </div>
              <div class="practice-card">
                <span class="practice-tag">MODELOS DEEP</span>
                <h3>MLP & CNN</h3>
                <p>Comparativa entre Perceptrones Multicapa con activaciones <strong>Leaky ReLU</strong> y Redes Convolucionales con <strong>Global Average Pooling</strong>.</p>
              </div>
            </div>

            <div class="sidebar-card" style="margin: 2rem 0; width: 100%;">
              <h3>Resultados Experimentales</h3>
              <ul class="learning-list" style="columns: 2;">
                <li>Red Manual: <strong>91.22%</strong></li>
                <li>MLP: <strong>98.08%</strong></li>
                <li style="color: var(--accent-primary);">CNN Optimizada: <strong>99.72%</strong></li>
                <li>Optimización im2col con NumPy</li>
              </ul>
            </div>

            <h3>Regularización y Robustez</h3>
            <p>Para alcanzar el 99.72%, se aplicó un pipeline de entrenamiento avanzado:</p>
            <ul class="learning-list">
              <li class="learning-item"><strong>Optimización:</strong> AdamW con ReduceLROnPlateau y Early Stopping.</li>
              <li class="learning-item"><strong>Regularización:</strong> Batch Normalization y Dropout selectivo (30-50%).</li>
              <li class="learning-item"><strong>Data Augmentation:</strong> Rotaciones, zoom y desplazamientos dinámicos.</li>
            </ul>
          </section>

          <section>
            <h2>2. Optimización Combinatoria (QAP)</h2>
            <p>Resolución del Problema de Asignación Cuadrática (instancia <strong>tai256c</strong>) utilizando Algoritmos Genéticos y evolución híbrida.</p>
            
            <div class="practice-grid">
              <div class="practice-card">
                <span class="practice-tag">TEORÍA EVOLUTIVA</span>
                <h3>Lamarck vs Baldwin</h3>
                <p>Implementación de estrategias <strong>Lamarckianas</strong> (mejora de genotipo) y <strong>Baldwinianas</strong> (solo fitness), demostrando convergencia superior en la primera.</p>
              </div>
              <div class="practice-card">
                <span class="practice-tag">METAHEURÍSTICAS</span>
                <h3>Búsqueda Local</h3>
                <p>Hibridación con <strong>Simulated Annealing</strong> y operadores <strong>2-opt/3-opt</strong> para escapar de óptimos locales en espacios de 256! combinaciones.</p>
              </div>
            </div>

            <h3>Ingeniería Genética para Permutaciones</h3>
            <ul class="learning-list">
              <li class="learning-item"><strong>Cruce Especializado:</strong> Order Crossover (OX) y Cycle Crossover (CX) para garantizar validez.</li>
              <li class="learning-item"><strong>Mutación Adaptativa:</strong> Swap y Scramble mutation con probabilidad dinámica.</li>
              <li class="learning-item"><strong>Estructura Poblacional:</strong> Niching para preservar diversidad y Elitismo del 10%.</li>
            </ul>
          </section>

          <div style="margin-top: 5rem; text-align: center;">
            <a href="#home" class="btn btn-secondary">
              ${i.arrowLeft} Volver al Inicio
            </a>
          </div>
        </div>

        <aside class="project-sidebar">
          <div class="sidebar-card">
            <h3>Capacidades IA</h3>
            <div class="tech-list-detailed">
              <div class="tech-item-detailed">
                <strong>Frameworks</strong>
                <span>TensorFlow, Keras, NumPy, SciPy</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Modelado</strong>
                <span>CNN, MLP, OCR, Redes Neuronales</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Optimización</strong>
                <span>Algoritmos Genéticos, QAP, Búsqueda Local</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Performance</strong>
                <span>Joblib, Paralelización, im2col</span>
              </div>
            </div>
          </div>
          
          <div class="sidebar-card">
            <h3>Repositorio</h3>
            <a href="https://github.com/tosito1/Inteligencia-Computacional" target="_blank" class="btn btn-primary" style="width: 100%;">
              ${i.github} Ver repositorio
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
`,T=()=>`
  <div class="project-page">
    <div class="container reveal">
      <a href="#home" class="project-back-btn">
        ${i.arrowLeft} Volver al Portfolio
      </a>
      
      <header class="project-hero">
        <h1 class="gradient-text">Paquito Flores: Caseta App</h1>
        <p class="modal-subtitle">Gestión de Información en Dispositivos Móviles (GIDM)</p>
      </header>

      <div class="project-grid">
        <div class="project-main-content">
          <section>
            <h2>Gestión Integral de Asociaciones</h2>
            <p><strong>Paquito Flores</strong> es una aplicación Android nativa diseñada para modernizar la administración de una caseta de socios, cubriendo desde la economía interna hasta la participación democrática.</p>
          </section>

          <div class="practice-grid">
            <div class="practice-card reveal">
              <span class="practice-tag">UI/UX MODERNA</span>
              <h3>Jetpack Compose</h3>
              <p>Interfaz 100% declarativa con Material Design 3. Componentes reactivos basados en estados para una experiencia de usuario fluida y adaptable.</p>
            </div>
            
            <div class="practice-card reveal">
              <span class="practice-tag">ARQUITECTURA</span>
              <h3>MVVM + Repository</h3>
              <p>Estructura escalable con separación clara de responsabilidades. Flujo de datos: Compose -> ViewModel -> Repository -> Firestore/Room.</p>
            </div>

            <div class="practice-card reveal">
              <span class="practice-tag">DATA SYNC</span>
              <h3>Offline-First</h3>
              <p>Sistema híbrido: Persistencia local con <strong>Room</strong> y sincronización en tiempo real mediante <strong>Firestore</strong> para trabajo sin conexión.</p>
            </div>

            <div class="practice-card reveal">
              <span class="practice-tag">GESTIÓN</span>
              <h3>Roles y Seguridad</h3>
              <p>Control de acceso diferenciado para Socios, Tesoreros y Administradores mediante Firebase Auth y reglas de Firestore.</p>
            </div>
          </div>

          <section>
            <h2>Funcionalidades Core</h2>
            <ul class="learning-list">
              <li><strong>Gestión Financiera:</strong> Control de cuotas, ingresos, gastos y multas de socios en tiempo real.</li>
              <li><strong>Votaciones:</strong> Sistema de encuestas colaborativas con resultados instantáneos.</li>
              <li><strong>Comunicación:</strong> Notificaciones push segmentadas con <strong>FCM</strong> y <strong>WorkManager</strong> para tareas en background.</li>
              <li><strong>Eventos:</strong> Organización y calendario de actividades propias de la asociación.</li>
            </ul>
          </section>

          <div style="margin-top: 5rem; text-align: center;">
            <a href="#home" class="btn btn-secondary">
              ${i.arrowLeft} Volver al Inicio
            </a>
          </div>
        </div>

        <aside class="project-sidebar">
          <div class="sidebar-card">
            <h3>Stack Tecnológico</h3>
            <div class="tech-list-detailed">
              <div class="tech-item-detailed">
                <strong>Lenguaje</strong>
                <span>Kotlin</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Diseño</strong>
                <span>Jetpack Compose, MD3</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Cloud Services</strong>
                <span>Firebase Firestore, Auth, Messaging</span>
              </div>
              <div class="tech-item-detailed">
                <strong>Persistencia</strong>
                <span>Room Database, Repository Pattern</span>
              </div>
            </div>
          </div>
          
          <div class="sidebar-card">
            <h3>Repositorio</h3>
            <a href="https://github.com/tosito1/Paquito-Flores" target="_blank" class="btn btn-primary" style="width: 100%;">
              ${i.github} Ver repositorio
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
`,v=()=>{const e=window.location.hash,a=document.querySelector("header");e==="#proyecto/paniculas"?(r.innerHTML=`
      ${M()}
      ${c()}
    `,a.style.display="none"):e==="#proyecto/cloud"?(r.innerHTML=`
      ${j()}
      ${c()}
    `,a.style.display="none"):e==="#proyecto/dss"?(r.innerHTML=`
      ${z()}
      ${c()}
    `,a.style.display="none"):e==="#proyecto/tid"?(r.innerHTML=`
      ${D()}
      ${c()}
    `,a.style.display="none"):e==="#proyecto/ic"?(r.innerHTML=`
      ${R()}
      ${c()}
    `,a.style.display="none"):e==="#proyecto/paquito"?(r.innerHTML=`
      ${T()}
      ${c()}
    `,a.style.display="none"):(r.innerHTML=`
      ${f()}
      ${k()}
      ${C()}
      ${A()}
      ${S()}
      ${x()}
      ${P()}
      ${c()}
      ${L()}
    `,a.style.display="block",$(),E()),I(),window.scrollTo({top:0,behavior:"smooth"})};window.addEventListener("hashchange",v);document.addEventListener("DOMContentLoaded",()=>{v()});
