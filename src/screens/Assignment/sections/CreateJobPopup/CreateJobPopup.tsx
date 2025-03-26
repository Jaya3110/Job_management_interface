import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

const locations = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur"];
const jobTypes = ["FULLTIME", "PARTTIME", "INTERNSHIP", "CONTRACT"];

interface CreateJobPopupProps {
  onClose: () => void;
  onCreateJob: (job: any) => void;
}

const CreateJobPopup: React.FC<CreateJobPopupProps> = ({ onClose, onCreateJob }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryMin, setSalaryMin] = useState("0");
  const [salaryMax, setSalaryMax] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(), // In a real app, use the _id from the backend
      title: jobTitle,
      company: companyName,
      jobType: jobType,
      locationType: location,
      salary: `${salaryMin}LPA - ${salaryMax}LPA`,
      postedTime: "Just now",
      description: jobDescription,
      logoSrc: "https://c.animaapp.com/m8phsltaGH6iYA/img/image-79-1.png",
      logoStyle: "bg-white",
    };
    console.log("New Job:", newJob);
    onCreateJob(newJob);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-[600px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Create Job Opening</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Job Title</label>
              <Input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Full Stack Developer"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Company Name</label>
              <Input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Acme Inc."
                required
              />
            </div>
            <div>
              <label className="block mb-1">Location</label>
              <Select onValueChange={setLocation} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block mb-1">Job Type</label>
              <Select onValueChange={setJobType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block mb-1">Salary Range</label>
              <div className="flex gap-4">
                <Input
                  type="number"
                  value={salaryMin}
                  onChange={(e) => setSalaryMin(e.target.value)}
                  placeholder="Min"
                  required
                />
                <Input
                  type="number"
                  value={salaryMax}
                  onChange={(e) => setSalaryMax(e.target.value)}
                  placeholder="Max"
                  max="1200000"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1">Application Deadline</label>
              <Input
                type="date"
                value={applicationDeadline}
                onChange={(e) => setApplicationDeadline(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Job Description</label>
              <Textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Describe the job role and responsibilities"
                className="h-32"
                required
              />
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <Button type="button" variant="outline" onClick={onClose}>
              Save Draft
            </Button>
            <Button type="submit">Publish</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobPopup;
