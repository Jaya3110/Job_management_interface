import {
    BriefcaseIcon,
    ChevronDownIcon,
    MapPinIcon,
    SearchIcon,
  } from "lucide-react";
  import React, { useState } from "react";
  import { Input } from "../../../../components/ui/input";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../../components/ui/select";
  import { Separator } from "../../../../components/ui/separator";
  import { Slider } from "../../../../components/ui/slider";
  
  const locations = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur"];
  const jobTypes = ["Full Time", "Part Time", "Contract", "Internship"];
  
  export const HeaderSection = ({ filters, onFilterChange }): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleLocationChange = (value) => {
      onFilterChange({ location: value });
    };
  
    const handleJobTypeChange = (value) => {
      onFilterChange({ jobType: value });
    };
  
    const handleSalaryRangeChange = (value) => {
      onFilterChange({ salaryRange: value });
    };
  
    return (
      <header className="w-full bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Search input */}
            <div className="relative flex items-center w-[350px]">
              <SearchIcon className="absolute left-3 h-5 w-5 text-gray-500" />
              <Input
                className="pl-10 h-12 text-[#686868] font-medium placeholder:text-[#686868]"
                placeholder="Search By Job Title, Role"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
  
            <Separator orientation="vertical" className="h-12" />
  
            {/* Location dropdown */}
            <div className="relative flex items-center w-[300px]">
              <MapPinIcon className="absolute left-3 h-5 w-5 text-gray-500" />
              <Select onValueChange={handleLocationChange} value={filters.location}>
                <SelectTrigger className="pl-10 h-12 border-none text-[#686868] font-medium">
                  <SelectValue placeholder="Preferred Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ChevronDownIcon className="absolute right-3 h-6 w-6 text-gray-500" />
            </div>
  
            <Separator orientation="vertical" className="h-12" />
  
            {/* Job type dropdown */}
            <div className="relative flex items-center w-[300px]">
              <BriefcaseIcon className="absolute left-3 h-5 w-5 text-gray-500" />
              <Select onValueChange={handleJobTypeChange} value={filters.jobType}>
                <SelectTrigger className="pl-10 h-12 border-none text-[#686868] font-medium">
                  <SelectValue placeholder="Job type" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ChevronDownIcon className="absolute right-3 h-6 w-6 text-gray-500" />
            </div>
  
            <Separator orientation="vertical" className="h-12" />
  
            {/* Salary slider */}
            <div className="w-[300px]">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-[#222222] text-base">
                  Salary Per Month
                </span>
                <span className="font-bold text-[#222222] text-base">
                  ₹{filters.salaryRange[0] / 1000}k - ₹{filters.salaryRange[1] / 1000}k
                </span>
              </div>
              <Slider
                min={50000}
                max={150000}
                step={1000}
                value={filters.salaryRange}
                onValueChange={handleSalaryRangeChange}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </header>
    );
  };
  