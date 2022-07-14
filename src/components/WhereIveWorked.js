import React, { useState } from "react";
import { jobs } from "../data/jobhistory";

export default function WhereIveWorked() {
  const [currentJob, setCurrentJob] = useState(jobs[0].company);

  const clickHandler = (event) => {
    setCurrentJob(event.target.value);
  };

  const listJobs = () => {
    return jobs.map((job) => {
      const active =
        job.company === currentJob
          ? "list-group-item list-group-item-action bg-info d-flex justify-content-between"
          : "list-group-item list-group-item-action";

      return (
        <button
          className={active}
          key={job.company}
          value={job.company}
          onClick={clickHandler}
        >
          {job.company}
          {job.company === currentJob && (
            <h5 className="bi bi-arrow-right-square my-auto" />
          )}
        </button>
      );
    });
  };

  const readJob = () => {
    const jobStuff = jobs.find((job) => job.company === currentJob);

    return (
      <>
        <h4>{jobStuff.title}</h4>
        <h6>
          at {jobStuff.company} | from {jobStuff.dates}
        </h6>
        <ul>
          {jobStuff.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="container my-5">
      <h2>
        Where I've worked <i class="bi bi-bookmark-star"></i>
      </h2>
      <div className="row">
        <div className="row mx-auto mb-1 col-md-3">
          <div className="list-group">{listJobs()}</div>
        </div>
        <div className="col mx-auto">{readJob()}</div>
      </div>
    </div>
  );
}
