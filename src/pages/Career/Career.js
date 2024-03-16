import React from "react";
import NavBar from "../../components/global/nav";
import Footer from "../../components/global/footer";
import JobCard from "../../components/JobCard/JobCard";
import "./career.css";
import FileInput from "../../components/FileInput";

export default function Career() {
  const jobs = [
    {
      title: "Job Title",
      location: "Location",
      description: "Job Description",
    },
    {
      title: "Job Title",
      location: "Location",
      description: "Job Description",
    },
    {
      title: "Job Title",
      location: "Location",
      description: "Job Description",
    },
  ];
  return (
    <>
      <NavBar />
      <section id="contact" className="career">
        <div className="headingsContainer">
          <h1 className="headingTitle">
            Current <span className="headingTextBlue">Openings</span>
          </h1>
          <p>
            Feel like you'd be a great match? Apply today. We're eager to get to
            know you.
          </p>
        </div>
        <div className="jobsContainer">
          {jobs.map((job, index) => (
            <>
              <JobCard
                key={index}
                title={job.title}
                location={job.location}
                description={job.description}
              />
              {index !== jobs.length - 1 && <div className="divider" />}
            </>
          ))}
        </div>
        <div className="headingsContainer">
          <h1 className="headingTitle">Internships</h1>
          <p>
            No internships available, but you can leave your CV here. We will
            let you know if your fit is open.
          </p>

          <div
            className="uploadCvContainer"
           
          >
            <FileInput placeholder="Upload your CV" />
            <a href="/contact" className="btn btn-primary">
              Apply
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
