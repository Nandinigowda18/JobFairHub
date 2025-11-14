import { useEffect } from "react";
import JobCard from "../components/Jobcard";
import { jobs } from "../data/JobsData";

const AllJobs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Latest Job Openings</h1>
        <p className="text-muted fs-5">
          Explore verified off-campus drives, internships, and fresher job listings.
        </p>
      </div>

      <div className="row g-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={job.id}>
              <JobCard job={job} />
            </div>
          ))
        ) : (
          <p className="text-center text-muted fs-5">
            No job openings available right now.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllJobs;

