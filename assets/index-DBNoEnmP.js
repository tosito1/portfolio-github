(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const d=document.querySelector("#app"),o={name:"Antonio José Muriel Gálvez",title:"Ingeniero Informático",bio:"Especializado en diseño de redes, administración de sistemas y seguridad informática. Apasionado por aprender, compartir conocimientos y afrontar nuevos retos tecnológicos.",contact:{email:"antoniojse2001@gmail.com",linkedin:"https://www.linkedin.com/in/antonio-josé-muriel-gálvez-438199229",github:"https://github.com/tosito1",whatsapp:"https://wa.me/34693045322",location:"Granada / Herrera, España"}},p=[{role:"Administrador de Sistemas (Prácticas)",company:"Nanobytes",location:"Granada, España",period:"Junio 2025 - Septiembre 2025",description:"Implementación y mantenimiento de servidores, virtualización y seguridad informática.",current:!1}],v=[{title:"Segundo Factor de Autenticación",subtitle:"Sistema WebAuth & FIDO",description:"Sistema seguro de autenticación de dos factores utilizando estándares WebAuth y FIDO para prevenir phishing y suplantación de identidad en entornos corporativos.",tags:["WebAuth","FIDO2","Ciberseguridad","Node.js"],icon:"shield"},{title:"Hexápodo de Vigilancia con IA",subtitle:"Robot Autónomo Inteligente",description:"Robot hexápodo con Raspberry Pi 4 equipado con visión artificial, movimiento autónomo y reconocimiento de voz para tareas de vigilancia.",tags:["Python","OpenCV","Raspberry Pi","ML"],icon:"robot"},{title:"Chat & Ubicación en Tiempo Real",subtitle:"Aplicación Android",description:"Aplicación móvil para Android con mensajería instantánea y compartición de geolocalización en tiempo real usando Firebase.",tags:["Kotlin","Firebase","Android","Maps API"],icon:"chat"},{title:"Gestión de Socios & Notificaciones",subtitle:"Sistema de Gestión Integral",description:"Aplicación con roles diferenciados, sistema de autenticación robusto y notificaciones push dinámicas para gestión de organizaciones.",tags:["Kotlin","Firebase","Push Notifications"],icon:"users"}],h=[{title:"Cisco® CCNA v7: ENSA",issuer:"Cisco Networking Academy",date:"2024",icon:"award"},{title:"Cisco® CCNA v7: SRWE",issuer:"Cisco Networking Academy",date:"2023",icon:"award"},{title:"Curso Avanzado FIWARE",issuer:"Fiware iHubs",date:"2023",icon:"award"}],u=[{degree:"Máster en Ingeniería Informática",institution:"Universidad de Granada",period:"2024 - Actualidad",status:"En curso"},{degree:"Grado en Ingeniería Informática",institution:"Universidad de Huelva",period:"2020 - 2024",status:"Completado"}],g=[{category:"Lenguajes de Programación",skills:["Python","C++","Java","Kotlin","JavaScript","SQL","Bash"]},{category:"Redes & Ciberseguridad",skills:["Cisco CCNA","OSPF","BGP","VLANs","Kali Linux","Metasploit","Wireshark"]},{category:"Infraestructura & Cloud",skills:["Docker","Kubernetes","Virtualización","Linux","Windows Server","AWS","Azure","GCP"]},{category:"Inteligencia Artificial & IoT",skills:["TensorFlow","PyTorch","OpenCV","Raspberry Pi","Arduino"]}],t={shield:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',robot:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/><path d="M9 21v-5h6v5"/><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/></svg>',chat:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M20 9v11a2 2 0 0 1-2 2H6l4-4h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/></svg>',users:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',award:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',building:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',location:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',linkedin:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>',github:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>',whatsapp:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',server:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',cloud:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',cpu:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',phone:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',arrowUp:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>'},m={"Lenguajes de Programación":t.code,"Redes & Ciberseguridad":t.shield,"Infraestructura & Cloud":t.cloud,"Inteligencia Artificial & IoT":t.cpu},l=()=>`
  <ul class="example-2">
    <li class="icon-content">
      <a href="${o.contact.linkedin}" aria-label="LinkedIn" data-social="linkedin" target="_blank">
        <div class="filled"></div>
        ${t.linkedin}
      </a>
      <div class="tooltip">LinkedIn</div>
    </li>
    <li class="icon-content">
      <a href="${o.contact.github}" aria-label="GitHub" data-social="github" target="_blank">
        <div class="filled"></div>
        ${t.github}
      </a>
      <div class="tooltip">GitHub</div>
    </li>
    <li class="icon-content">
      <a href="${o.contact.whatsapp}" aria-label="WhatsApp" data-social="whatsapp" target="_blank">
        <div class="filled"></div>
        ${t.whatsapp}
      </a>
      <div class="tooltip">WhatsApp</div>
    </li>
    <li class="icon-content">
      <a href="mailto:${o.contact.email}" aria-label="Email" data-social="email">
        <div class="filled"></div>
        ${t.mail}
      </a>
      <div class="tooltip">Email</div>
    </li>
  </ul>
`,w=()=>`
  <div class="bg-animation">
    <div class="grid-pattern"></div>
    <div class="particles">
      ${Array(20).fill(0).map((e,i)=>`
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
          <img src="foto-cv.jpg" alt="${o.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 35%; border-radius: 50%;">
        </div>
        <div class="status-indicator" title="Disponible para proyectos"></div>
      </div>
      <h1 class="gradient-text">${o.name}</h1>
      <p class="hero-subtitle">
        <span class="typing-text">${o.title}</span>
      </p>
      <p class="hero-description">${o.bio}</p>
      <div class="cta-group">
        <a href="#projects" class="btn btn-primary">
          ${t.code}
          Ver Proyectos
        </a>
        <a href="#contact" class="btn btn-secondary">
          ${t.mail}
          Contactar
        </a>
      </div>
      ${l()}
    </div>
  </section>
`,y=()=>`
  <section id="experience" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Experiencia Profesional</h2>
      <p>Mi trayectoria en el mundo de la tecnología</p>
    </div>
    ${p.map(e=>`
      <div class="experience-card">
        <div class="experience-header">
          <div>
            <h3 class="experience-title">${e.role}</h3>
            <p class="experience-company">
              ${t.building}
              ${e.company} · ${e.location}
            </p>
          </div>
          <span class="experience-badge">${e.current?"Actual":e.period}</span>
        </div>
        <p class="experience-description">${e.description}</p>
      </div>
    `).join("")}
  </section>
`,k=()=>`
  <section id="projects" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Proyectos Destacados</h2>
      <p>Algunos de los proyectos en los que he trabajado</p>
    </div>
    <div class="projects-grid">
      ${v.map((e,i)=>`
        <div class="card reveal reveal-delay-${i%4+1}">
          <div class="card-icon">
            ${t[e.icon]}
          </div>
          <h3>${e.title}</h3>
          <p class="project-subtitle" style="color: var(--accent-tertiary); font-size: 0.85rem; margin-bottom: 0.5rem;">${e.subtitle}</p>
          <p>${e.description}</p>
          <div class="tags">
            ${e.tags.map(s=>`<span class="tag">${s}</span>`).join("")}
          </div>
          <a href="#" class="card-link">
            Ver detalles
            ${t.arrow}
          </a>
        </div>
      `).join("")}
    </div>
  </section>
`,x=()=>`
  <section id="certificates" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Certificaciones</h2>
      <p>Formación y certificaciones obtenidas</p>
    </div>
    <div class="certificates-grid">
      ${h.map((e,i)=>`
        <div class="certificate-card reveal reveal-delay-${i%3+1}">
          <div class="certificate-icon">
            ${t[e.icon]}
          </div>
          <div class="certificate-content">
            <h3>${e.title}</h3>
            <p>${e.issuer}</p>
            <span class="certificate-date">
              ${t.calendar}
              ${e.date}
            </span>
          </div>
        </div>
      `).join("")}
    </div>
  </section>
`,b=()=>`
  <section id="education" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Formación Académica</h2>
      <p>Mi recorrido educativo</p>
    </div>
    <div class="timeline">
      ${u.map((e,i)=>`
        <div class="timeline-item reveal reveal-delay-${i%2+1}">
          <div class="timeline-content">
            <span class="timeline-period">${e.period}</span>
            <h3>${e.degree}</h3>
            <p>
              ${t.building}
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
`,$=()=>`
  <section id="skills" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Habilidades Técnicas</h2>
      <p>Tecnologías y herramientas que domino</p>
    </div>
    <div class="skills-container">
      ${g.map((e,i)=>`
        <div class="skill-category reveal reveal-delay-${i%4+1}">
          <h3 class="skill-category-title">
            ${m[e.category]||t.code}
            ${e.category}
          </h3>
          <div class="skills-grid">
            ${e.skills.map(s=>`
              <span class="skill-tag">${s}</span>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  </section>
`,C=()=>`
  <section id="contact" class="container reveal">
    <div class="section-header">
      <h2 class="gradient-text">Contacto</h2>
      <p>¿Tienes un proyecto en mente? Hablemos</p>
    </div>
    <div class="contact-grid">
      <a href="mailto:${o.contact.email}" class="contact-card">
        <div class="contact-icon">
          ${t.mail}
        </div>
        <div class="contact-info">
          <h3>Email</h3>
          <p>${o.contact.email}</p>
        </div>
      </a>
      <a href="${o.contact.linkedin}" target="_blank" class="contact-card">
        <div class="contact-icon">
          ${t.linkedin}
        </div>
        <div class="contact-info">
          <h3>LinkedIn</h3>
          <p>Conecta conmigo</p>
        </div>
      </a>
      <a href="${o.contact.github}" target="_blank" class="contact-card">
        <div class="contact-icon">
          ${t.github}
        </div>
        <div class="contact-info">
          <h3>GitHub</h3>
          <p>Ver mi código</p>
        </div>
      </a>
      <a href="${o.contact.whatsapp}" target="_blank" class="contact-card">
        <div class="contact-icon">
          ${t.phone}
        </div>
        <div class="contact-info">
          <h3>WhatsApp</h3>
          <p>Envía un mensaje</p>
        </div>
      </a>
    </div>
  </section>
`,M=()=>`
  <footer>
    <div class="footer-content">
      <div class="footer-logo">${o.name}</div>
      <p style="color: var(--text-secondary); margin-bottom: 1rem;">${o.title}</p>
      <div class="footer-social">
        ${l()}
      </div>
      <p class="footer-text">
        &copy; ${new Date().getFullYear()} Portfolio. Diseñado con pasión.
        <br>
        <span style="margin-top: 0.5rem; display: inline-block; color: var(--text-muted);">
          ${t.location} ${o.contact.location}
        </span>
      </p>
    </div>
  </footer>
`,A=()=>`
  <button class="scroll-top" id="scrollTop" aria-label="Volver arriba">
    ${t.arrowUp}
  </button>
`;d.innerHTML=`
  ${f()}
  ${y()}
  ${k()}
  ${x()}
  ${b()}
  ${$()}
  ${C()}
  ${M()}
  ${A()}
`;const j=()=>{const e=document.querySelector(".menu-toggle"),i=document.querySelector(".nav-links");e&&i&&(e.addEventListener("click",()=>{e.classList.toggle("active"),i.classList.toggle("active")}),i.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{e.classList.remove("active"),i.classList.remove("active")})}))},L=()=>{const e=document.querySelector("header"),i=document.getElementById("scrollTop");window.addEventListener("scroll",()=>{window.scrollY>100?(e?.classList.add("scrolled"),i?.classList.add("visible")):(e?.classList.remove("scrolled"),i?.classList.remove("visible"))}),i?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})},I=()=>{const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},i=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&r.target.classList.add("active")})},e);document.querySelectorAll(".reveal").forEach(s=>i.observe(s))};document.addEventListener("DOMContentLoaded",()=>{j(),L(),I()});
