import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, TechSkills, Projects, FeaturedProjects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <TechSkills />
    <FeaturedProjects/>
   
   <Projects />
 
  </Layout>
);
