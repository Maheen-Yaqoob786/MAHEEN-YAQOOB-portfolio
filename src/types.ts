export interface EducationItem {
  id: string;
  icon: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
  cgpa?: string;
  thesisLink?: string;
  thesisTitle?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location?: string;
  highlights: string[];
}

export interface PublicationItem {
  id: string;
  year: string;
  role: string;
  title: string;
  journal: string;
  citationDetails: string;
  tag: string;
  isPublished: boolean;
}

export interface ResearchInProgressItem {
  id: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  icon: string;
  period: string;
  title: string;
  description: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
