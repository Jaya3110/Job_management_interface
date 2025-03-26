import React from "react";
import { BriefcaseIcon, DollarSignIcon, MapPinIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

interface Job {
  id: number | string;
  title: string;
  company?: string;
  locationType: string;
  jobType: string;
  salary: string;
  postedTime: string;
  description: string;
  logoSrc: string;
  logoStyle: string;
}

interface JobListingsSectionProps {
  jobs: Job[];
  filters: {
    location: string;
    jobType: string;
    salaryRange: [number, number];
  };
}

const JobListingsSection: React.FC<JobListingsSectionProps> = ({ jobs, filters }) => {
  // Simple filtering: adjust as needed
  const filteredJobs = jobs.filter((job) => {
    const matchesLocation = filters.location
      ? job.locationType.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesJobType = filters.jobType
      ? job.jobType.toLowerCase() === filters.jobType.toLowerCase()
      : true;
    return matchesLocation && matchesJobType;
  });

  if (filteredJobs.length === 0) {
    return <div className="text-center p-4">No jobs available!</div>;
  }

  return (
    <section className="flex flex-wrap justify-center gap-4 w-full p-4">
      {filteredJobs.map((job) => (
        <Card
          key={job.id}
          className="w-[316px] h-[360px] relative rounded-xl shadow-[0px_0px_14px_#d3d3d326]"
        >
          <CardContent className="p-0">
            {/* Logo container */}
            <div className="absolute w-[83px] h-[82px] top-4 left-4 rounded-[13px] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-300 border border-white shadow-[0px_0px_10px_rgba(148,148,148,0.25)]">
              <div className={`relative w-[66px] h-[66px] top-2 left-[9px] ${job.logoStyle} rounded-full overflow-hidden`}>
                <img className="absolute w-[45px] h-[45px] top-3.5 left-2.5" alt="Company logo" src={job.logoSrc} />
              </div>
            </div>

            {/* Posted time badge */}
            <Badge className="absolute top-4 right-4 bg-[#afd8ff] text-black px-2.5 py-[7px] rounded-[10px]">
              <span className="font-medium text-sm">{job.postedTime}</span>
            </Badge>

            {/* Job title */}
            <h3 className="absolute top-[116px] left-4 font-bold text-black text-xl">{job.title}</h3>

            {/* Job details */}
            <div className="flex items-center gap-4 absolute top-40 left-4">
              <div className="flex items-center gap-1">
                <BriefcaseIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="font-medium text-[#5a5a5a] text-base">{job.jobType}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPinIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="font-medium text-[#5a5a5a] text-base">{job.locationType}</span>
              </div>
              <div className="flex items-end gap-1">
                <DollarSignIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="font-medium text-[#5a5a5a] text-sm">{job.salary}</span>
              </div>
            </div>

            {/* Job description */}
            <p className="absolute w-[300px] top-[201px] left-[9px] font-medium text-[#555555] text-sm whitespace-pre-line">
              {job.description}
            </p>
          </CardContent>

          <CardFooter className="absolute bottom-4 left-4 right-4 p-0">
            <Button className="w-full bg-[#00aaff] hover:bg-[#00aaff]/90 rounded-[10px] py-3 font-bold shadow-[0px_0px_14px_rgba(92,92,92,0.15)]">
              Apply Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default JobListingsSection;
