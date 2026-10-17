import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import {
  AccessPage,
  AreaPage,
  CertificatePage,
  CoursesPage,
  FaqPage,
  GamePage,
  HomePage,
  KahootPage,
  LegalPage,
  LearningAreasPage,
  NotFoundPage,
  TeacherPage,
} from "./pages/Pages";

export default function PortalApp() {
  const pendingRoute = sessionStorage.getItem("github-pages-route");
  if (pendingRoute) {
    sessionStorage.removeItem("github-pages-route");
    window.history.replaceState(null, "", `${import.meta.env.BASE_URL}${pendingRoute.replace(/^\//, "")}`);
  }

  return <BrowserRouter basename={import.meta.env.BASE_URL}><Routes><Route element={<SiteLayout />}>
    <Route index element={<HomePage />} />
    <Route path="cursos" element={<CoursesPage />} />
    <Route path="areas" element={<LearningAreasPage />} />
    <Route path="areas/:slug" element={<AreaPage />} />
    <Route path="juegos" element={<GamePage />} />
    <Route path="kahoot" element={<KahootPage />} />
    <Route path="constancias" element={<CertificatePage />} />
    <Route path="docente" element={<TeacherPage />} />
    <Route path="preguntas" element={<FaqPage />} />
    <Route path="acceso" element={<AccessPage />} />
    <Route path="privacidad" element={<LegalPage page="privacy" />} />
    <Route path="terminos" element={<LegalPage page="terms" />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route></Routes></BrowserRouter>;
}