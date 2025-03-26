import React from "react";
import { Button } from "../../../../components/ui/button";

export const JobFiltersSection = (): JSX.Element => {
  const filters = [
    "All Jobs",
    "Full Time",
    "Part Time",
    "Remote",
    "Contract",
    "Internship",
  ];

  return (
    <div className="flex flex-wrap gap-4 px-16 py-8">
      {filters.map((filter, index) => (
        <Button
          key={index}
          variant={index === 0 ? "default" : "outline"}
          className={`rounded-full ${
            index === 0 ? "bg-[#00aaff] text-white" : "text-[#686868]"
          }`}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};
