import React, { useEffect } from 'react';

import reinoEncantado from './img/reinoEncantado.png';
import carnaval from './img/carnaval.png';
import eleicao from './img/eleicao.png';
import wireframe from './img/wireframe.png';
import figmaLoja from './img/figmaLoja.png';
import figmaPet from './img/figmaPet.png';

const Projects = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    els.forEach(el => el.classList.add('visible'));
  }, []);

  const projectsData = [
    {
      id: 1,
      image: reinoEncantado,
      title: 'Jogo da Forca Disney',
      tags: 'HTML • CSS • JavaScript',
      description: 'Jogo interativo com lógica de programação e design responsivo, desenvolvido como projeto do curso.',
      link: 'https://asoferr.github.io/disney/index.html',
    },
    {
      id: 2,
      image: carnaval,
      title: 'Site "Carnaval Brasileiro"',
      tags: 'HTML • CSS • JavaScript • Acessibilidade',
      description: 'Projeto com design responsivo e foco em acessibilidade digital, apresentando conteúdo sobre o Carnaval Brasileiro.',
      link: 'https://asoferr.github.io/Carnaval/',
    },
    {
      id: 3,
      image: eleicao,
      title: 'Cadastro Eleitoral',
      tags: 'HTML • CSS • JavaScript',
      description: 'Um dos meus primeiros projetos, com formulário interativo para registro de eleitores. Foco em Front-End, validação de campos e envio de dados para plataforma externa.',
      link: 'https://asoferr.github.io/Cadastro-Eleitoral/',
    },
    {
      id: 4,
      image: wireframe,
      title: 'Wireframe - E-comerce Moderno',
      tags: 'Figma • UI Design • Wireframing',
      description: 'Wireframe de baixa fidelidade para sistema de gestão empresarial, focando na estruturação de layout e fluxo de usuário.',
      link: 'https://www.figma.com/design/fAKavqMzu6GIifQZpyM3t6/Wireframes-%22E---StoreFlex%22?t=FnWBjEVikXv5yRUh-1',
    },
    {
      id: 5,
      image: figmaLoja,
      title: 'Prototipagem - E-commerce Moderno',
      tags: 'Figma • UI/UX Design • Protótipo Interativo',
      description: 'Protótipo de alta fidelidade para loja virtual, com design system completo e interações avançadas.',
      link: 'https://www.figma.com/design/bZXvpvhI5Z3TBXPr5yCYmf/Prot%C3%B3tipo-de-alta-fidelidade-%22E---StoreFlex%22?t=FnWBjEVikXv5yRUh-1',
    },
    {
      id: 6,
      image: figmaPet,
      title: 'App Pet Shop - Design Completo',
      tags: 'Figma • Mobile Design • Design System',
      description: 'Design completo para aplicativo mobile de pet shop, incluindo protótipo navegável e componentes para desenvolvimento.',
      link: 'https://www.figma.com/design/eSyNetLKdhxNO1adcPI7kB/Pet-JVLS?t=FnWBjEVikXv5yRUh-1',
    }
  ];

  return (
    <section id="projetos" className="projetos section-padding">
      <div className="container">
        <h3 className="section-title">💻 Projetos de Destaque</h3>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card fade-in">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                />
              </div>
              <h4>{project.title}</h4>
              <p className="project-tags">{project.tags}</p>
              <p>{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="details-link"
              >
                Ver Projeto
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;