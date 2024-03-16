import React from "react";
import "./index.css";

const JobCard = () => {
  return (
    <div className="jobContainer">
      <div>
        <h3>Job Title</h3>
        <div className="jobDescriptionItems">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 1 5 5c0 3.182-3.546 6.377-4.432 7.182a.5.5 0 0 1-.736 0C6.546 12.377 3 9.182 3 6a5 5 0 0 1 5-5zm0 1a4 4 0 0 1 4 4c0 2.182-2.546 5.377-3.236 6.545a.5.5 0 0 1-.728 0C6.546 11.377 4 8.182 4 6a4 4 0 0 1 4-4z" />
              <path d="M8 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
            </svg>
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              Location
            </span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 1 5 5c0 3.182-3.546 6.377-4.432 7.182a.5.5 0 0 1-.736 0C6.546 12.377 3 9.182 3 6a5 5 0 0 1 5-5zm0 1a4 4 0 0 1 4 4c0 2.182-2.546 5.377-3.236 6.545a.5.5 0 0 1-.728 0C6.546 11.377 4 8.182 4 6a4 4 0 0 1 4-4z" />
              <path d="M8 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
            </svg>
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              Location
            </span>
          </div>
        </div>
      </div>
      <div className="arrowBlue">
        <img src="/bluearrow.svg" alt="arrow" height={24} width={24}  />
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M5.646 4.646a.5.5 0 0 1 0 .708L9.293 8 5.646 11.646a.5.5 0 0 1-.708-.708L8.293 8 5.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg> */}
    </div>
  );
};

export default JobCard;
