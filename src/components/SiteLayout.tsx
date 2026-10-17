import { useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ChevronDown, Stethoscope } from "lucide-react";
import { learningAreas } from "../content/areas";
import { site } from "../content/site";
import SocialLinks from "./SocialLinks";

export default function SiteLayout() {
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    headerRef.current?.querySelectorAll("details[open]").forEach((menu) => menu.removeAttribute("open"));
  }, [location.pathname]);

  return <>
    <div className="preview-bar"><span className="preview-dot" /> FORMACIÓN EN ENFERMERÍA · APRENDIZAJE CON PROPÓSITO <Link to="/docente">Conoce al docente <span aria-hidden="true">↗</span></Link></div>
    <header className="site-header" ref={headerRef}>
      <Link className="brand" to="/" aria-label={`${site.name}, inicio`}><span className="brand-mark"><Stethoscope size={20} aria-hidden="true" /></span><span>El Aula Virtual <strong>del Profe Erik Timal</strong></span></Link>
      <nav className="desktop-nav" aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <details className="nav-dropdown"><summary>Aprender <ChevronDown size={14} aria-hidden="true" /></summary><div className="dropdown-panel"><NavLink to="/cursos">Todos los cursos</NavLink>{learningAreas.map((area) => <NavLink key={area.slug} to={`/areas/${area.slug}`}>{area.title}</NavLink>)}</div></details>
        <details className="nav-dropdown"><summary>Actividades <ChevronDown size={14} aria-hidden="true" /></summary><div className="dropdown-panel"><NavLink to="/juegos">Juegos de aprendizaje</NavLink><NavLink to="/kahoot">Kahoot en el aula</NavLink><NavLink to="/constancias">Constancias</NavLink></div></details>
        <NavLink to="/docente">El docente</NavLink><NavLink to="/preguntas">Ayuda</NavLink>
      </nav>
      <Link className="button button-small button-dark desktop-access" to="/acceso">Acceso estudiantes <span aria-hidden="true">↗</span></Link>
      <details className="mobile-nav"><summary aria-label="Abrir menú de navegación"><span className="mobile-menu-icon"><i /><i /><i /></span></summary><nav aria-label="Navegación móvil"><NavLink to="/" end>Inicio</NavLink><NavLink to="/cursos">Todos los cursos</NavLink><details className="mobile-submenu"><summary>Áreas de aprendizaje <ChevronDown size={14} aria-hidden="true" /></summary>{learningAreas.map((area) => <NavLink key={area.slug} to={`/areas/${area.slug}`}>{area.title}</NavLink>)}</details><NavLink to="/juegos">Juegos de aprendizaje</NavLink><NavLink to="/kahoot">Kahoot en el aula</NavLink><NavLink to="/constancias">Constancias</NavLink><NavLink to="/docente">El docente</NavLink><NavLink to="/preguntas">Ayuda</NavLink><NavLink to="/acceso">Acceso estudiantes</NavLink></nav></details>
    </header>
    <main><Outlet /></main>
    <footer className="site-footer"><div className="footer-main">
      <div className="footer-brand"><Link className="brand" to="/"><span className="brand-mark"><Stethoscope size={20} aria-hidden="true" /></span><span>El Aula Virtual <strong>del Profe Erik Timal</strong></span></Link><p>Formación y recursos académicos para estudiantes de enfermería.</p></div>
      <div className="footer-links"><span>APRENDER</span><Link to="/cursos">Cursos</Link><Link to="/juegos">Juegos</Link><Link to="/kahoot">Kahoot</Link><Link to="/constancias">Constancias</Link></div>
      <div className="footer-links"><span>INFORMACIÓN</span><Link to="/docente">Responsable académico</Link><Link to="/privacidad">Aviso de privacidad</Link><Link to="/terminos">Términos de uso</Link></div>
      <div className="footer-contact"><span>SÍGUEME</span><SocialLinks /><p>Encuentra más contenido en mis redes sociales.</p></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><Link to="/">Volver al inicio ↑</Link></div></footer>
  </>;
}