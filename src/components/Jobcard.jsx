// src/components/Jobcard.jsx
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <h5 className="fw-bold text-primary">{job.title}</h5>
        <p className="text-secondary mb-1">
          <strong>Company:</strong> {job.company}
        </p>
        <p className="text-secondary mb-1">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="text-secondary mb-3">
          <strong>CTC:</strong> {job.salary}
        </p>

        <div className="d-flex flex-wrap mb-3">
          {job.tags?.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="badge bg-light text-dark border me-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/job/${job.id}`}
          className="btn btn-outline-primary w-100 fw-semibold"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default JobCard;


