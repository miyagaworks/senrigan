import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Section from '../Section';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

const Projects: React.FC = () => {
  return (
    <Section 
      id="projects" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      rootMargin="100px"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-10">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span className="text-blue-600 font-medium">Our Projects</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="block mb-3">お客様の課題を解決した</span>
            <span className="text-gradient">開発実績</span>
          </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            実績一覧を見る
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Projects;