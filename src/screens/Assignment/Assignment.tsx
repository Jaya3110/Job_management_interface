import React, { useState } from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { JobFiltersSection } from "./sections/JobFiltersSection";
import JobListingsSection from "./sections/JobListingsSection/JobListingsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import CreateJobPopup from "./sections/CreateJobPopup/CreateJobPopup";

export const Assignment = (): JSX.Element => {
  // Jobs state is managed here (initially empty)
  const [jobs, setJobs] = useState<any[]>([]);
  const [isCreateJobPopupOpen, setIsCreateJobPopupOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    salaryRange: [50000, 150000],
  });

  // Called when a new job is created (either via API or locally)
  const handleCreateJob = (newJob: any) => {
    // For demonstration we simply add the new job to the top of the list
    setJobs([newJob, ...jobs]);
    setIsCreateJobPopupOpen(false);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="bg-[#fbfbff] min-h-screen w-full">
      <div className="bg-[#fbfbff] w-full max-w-[1440px] mx-auto flex flex-col">
        <header className="w-full pt-8">
          <NavigationBarSection onCreateJobClick={() => setIsCreateJobPopupOpen(true)} />
          <div className="mt-8">
            <HeaderSection filters={filters} onFilterChange={handleFilterChange} />
          </div>
        </header>

        <main className="w-full flex flex-col mt-8">
          <JobFiltersSection />
          <JobListingsSection jobs={jobs} filters={filters} />
        </main>
      </div>

      {isCreateJobPopupOpen && (
        <CreateJobPopup
          onClose={() => setIsCreateJobPopupOpen(false)}
          onCreateJob={handleCreateJob}
        />
      )}
    </div>
  );
};
