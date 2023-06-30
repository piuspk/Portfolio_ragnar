import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  return (
    <section id="project" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project">
            <h3>Sorting Visualizer </h3>
            <p>The website provided an interactive and
educational experience for users to understand sorting algorithms such as Quick Sort, Bubble Sort, Merge Sort, and more.</p>
            <div className="buttons-container">
              <a href="https://github.com/piuspk/sorting_visualiszer" className="btn-github">
                <FaGithub /> GitHub
              </a>
              <a href="https://piuspk.github.io/sorting_visualiszer/" className="btn-website">
                <FaExternalLinkAlt /> Website
              </a>
            </div>
          </div>
          <div className="project">
            <h3> RISC-V Simulator Architecture Project</h3>
            <p>The RISC-V Simulator Architecture Project focused on creating a simulator for running programs based on the RISC-V-32I Instruction Set Architecture (ISA).</p>
            <div className="buttons-container">
              <a href="https://github.com/Anshul091/RISCV-5-architecture" className="btn-github">
                <FaGithub /> GitHub
              </a>
              {/* <a href="#" className="btn-website">
                <FaExternalLinkAlt /> Website
              </a> */}
            </div>
          </div>
          <div className="project">
            <h3>RMQ Implementstion Using Sparse Table</h3>
            <p>The project implements RMQ (Range Minimum/Maximum Query) using the Sparse Table, a data structure with efficient O(1) runtime for solving static range query problems like minimum and maximum queries.</p>
            <div className="buttons-container">
              <a href="https://github.com/piuspk/cs201_project" className="btn-github">
                <FaGithub /> GitHub
              </a>
              {/* <a href="#" className="btn-website">
                <FaExternalLinkAlt /> Website
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
