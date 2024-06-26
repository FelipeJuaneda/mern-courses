import Title from "../../components/Landing/Title";
import OurCourses from "../../components/Landing/OurCourses";
import WhyPromptTheFuture from "../../components/Landing/WhyPromptTheFuture";
import Hackathons from "../../components/Landing/Hackathons";
import FrequentQuestions from "../../components/Landing/FrequentQuestions";
import { Box } from "@mui/material";
import SEO from "../../utils/Seo";

const Landing = () => {
  return (
    <>
      <SEO
        title="Inicio | Prompt The Future"
        description="Bienvenidos a Prompt The Future, la plataforma líder en educación y eventos de Inteligencia Artificial. Descubre nuestros cursos de IA, participa en hackathons, y resuelve tus dudas con nuestras preguntas frecuentes."
        keywords="Prompt The Future, cursos de IA, Inteligencia Artificial, hackathons, preguntas frecuentes, educación en IA, eventos tecnológicos, plataforma de IA, cursos de inteligencia artificial"
        canonical="https://prompt-the-future.com/"
      />
      <Box component={"main"}>
        <Title />
        <OurCourses />
        <WhyPromptTheFuture />
        <Hackathons />
        <FrequentQuestions />
      </Box>
    </>
  );
};

export default Landing;
