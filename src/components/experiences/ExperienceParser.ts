import { ExperienceDTO } from "./ExperienceDTO";

export interface ParsedExperience extends Omit<ExperienceDTO, "title"> {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  duration: string;
  type: "fulltime" | "freelance" | "internship";
}

export function parseExperienceTitle(title: string): {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  duration: string;
  type: "fulltime" | "freelance" | "internship";
} {
  // Extract position and company
  const parts = title.split(" - ");
  const position = parts[0].trim();

  // Extract company and dates
  const companyAndDate = parts.slice(1).join(" - ");
  const dateMatch = companyAndDate.match(/(.+?)\s*\((.+?)\)/);

  if (!dateMatch) {
    return {
      company: companyAndDate,
      position,
      startDate: "",
      endDate: "",
      duration: "",
      type: "fulltime",
    };
  }

  const company = dateMatch[1].trim();
  const dateRange = dateMatch[2].trim();

  // Parse dates
  const dateComponents = dateRange.split(" - ");
  const startDate = dateComponents[0].trim();
  const endDate = dateComponents[1] ? dateComponents[1].trim() : "Présent";

  // Calculate duration
  const duration = calculateDuration(startDate, endDate);

  // Determine type
  const type: "fulltime" | "freelance" | "internship" = company
    .toLowerCase()
    .includes("indépendant")
    ? "freelance"
    : "fulltime";

  return {
    company: company.replace("Indépendant", "Freelance").trim(),
    position,
    startDate,
    endDate,
    duration,
    type,
  };
}

function calculateDuration(start: string, end: string): string {
  // Simple duration calculation - could be enhanced
  if (end === "Présent") {
    return "En cours";
  }

  const startYear = extractYear(start);
  const endYear = extractYear(end);
  const startMonth = extractMonth(start);
  const endMonth = extractMonth(end);

  if (!startYear || !endYear) return "";

  let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
  if (totalMonths <= 0) totalMonths = 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} an${years > 1 ? "s" : ""} ${months} mois`;
  } else if (years > 0) {
    return `${years} an${years > 1 ? "s" : ""}`;
  } else {
    return `${months} mois`;
  }
}

function extractYear(dateStr: string): number {
  const yearMatch = dateStr.match(/(\d{4})/);
  return yearMatch ? parseInt(yearMatch[1]) : 0;
}

function extractMonth(dateStr: string): number {
  const months: Record<string, number> = {
    janvier: 1,
    février: 2,
    mars: 3,
    avril: 4,
    mai: 5,
    juin: 6,
    juillet: 7,
    août: 8,
    septembre: 9,
    octobre: 10,
    novembre: 11,
    décembre: 12,
  };

  const lowerDate = dateStr.toLowerCase();
  for (const [monthName, monthNum] of Object.entries(months)) {
    if (lowerDate.includes(monthName)) {
      return monthNum;
    }
  }
  return 1; // Default to January
}

export function parseExperiences(
  experiences: ExperienceDTO[]
): ParsedExperience[] {
  return experiences.map((exp) => {
    const parsed = parseExperienceTitle(exp.title as string);
    return {
      ...exp,
      ...parsed,
    };
  });
}
