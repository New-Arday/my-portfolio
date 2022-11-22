import React from "react";
import "./Projects.css";
import { Data } from "../../data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Projects = () => {
  const [projectsData, setProjectsData] = useState(Data);

  return (
    <div className="project" id="projects">
      <h2 className="projects-page-heading"> Projects</h2>
      <Paper
        className="project-slide-container"
        sx={{
          bgcolor: "#11232c",
          textAlign: "center",
          marginTop: "15rem",
          marginBottom: "15rem",
        }}
        style={{ border: " solid 1px #BCA210" }}
        elevation={12}
      >
        <Carousel
          className="project__slide"
          fullHeightHover={false}
          indicatorIconButtonProps={{
            style: {
              padding: ".5rem",
              color: "#19364D",
              borderRadius: ".2rem",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: "#1E405C",
              color: "#BCA210",
            },
          }}
        >
          {projectsData.map((project) => {
            return (
              <Box key={project.id}>
                <Link
                  to={project.pathTo}
                  href={project.href}
                  key={project.id}
                  className="project__link"
                >
                  <CardMedia
                    component="img"
                    height="420vh"
                    image={project.img}
                    className="project__img"
                  />

                  <CardContent key={project.id}>
                    <Typography
                      gutterBottom
                      variant="h2"
                      component="div"
                      sx={{ color: "#BCA210" }}
                    >
                      {project.name}
                    </Typography>

                    {project.stack.map((stack, index) => {
                      return (
                        <ButtonGroup
                          size="large"
                          aria-label="large button group"
                          key={stack.id}
                        >
                          <Button
                            sx={{
                              marginRight: "1rem",
                              marginTop: "2rem",
                              color: "#999",

                              border: "solid 1px #BCA210",
                              fontSize: "1.5rem",
                            }}
                            size="large"
                            aria-label="medium button group"
                            key={index}
                          >
                            {stack}
                          </Button>
                        </ButtonGroup>
                      );
                    })}
                  </CardContent>
                </Link>
              </Box>
            );
          })}
        </Carousel>
      </Paper>
    </div>
  );
};

export default Projects;
