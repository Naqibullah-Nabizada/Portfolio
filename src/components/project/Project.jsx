import { FOREGROUND, GREEN, PURPLE } from "../../helpers/colors";

import projects from './data';

import './project.css';
import Button from '@mui/material/Button'


const Project = () => {
    return (
        <section className="container" id="projects">
            <h3 className="text-center my-3 my-md-5" style={{ color: PURPLE }}>My Projects</h3>
            <div className="projects d-md-flex justify-content-md-around">

              {
                projects.map((project) => (
                    <div className="col-12 col-md-3 card shadow-lg" key={project.id}>
                    <img src={project.image} alt={project.title} className="card-img p-1" />
                    <div className="card-body">
                        <h6 className="text-light">{project.title}</h6>
                        <hr className="text-white fw-bold"/>
                        <div className="d-flex justify-content-around">
                            <Button variant="outlined" color="secondary"><a href={project.github_link} style={{ color: FOREGROUND }} target={"_blank"}>Github</a></Button>
                            <Button variant="outlined" color="primary"><a href={project.demo_link} style={{ color: GREEN }} target={"_blank"}>Live Demo</a></Button>
                        </div>
                    </div>
                </div>
                ))
              }

            </div>
        </section>
    )
}

export default Project;