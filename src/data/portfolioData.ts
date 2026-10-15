import { EducationItem, ExperienceItem, PublicationItem, ResearchInProgressItem, ProjectItem } from '../types';

export const personalInfo = {
  name: "Maheen Yaqoob",
  initials: "MY",
  tagline: "Psychology · Research · Human wellbeing",
  headlineFirst: "Growing through knowledge.",
  headlineSecond: "Creating impact.",
  bio: "I'm Maheen Yaqoob — a Psychology graduate, Behaviour Therapist, researcher, and international Master's student at Universitas Islam Internasional Indonesia (UIII).",
  focusPills: [
    "Behaviour Therapy",
    "Psychological Wellbeing",
    "Research & Practice"
  ],
  email: "Maheenyaqoob2000@gmail.com",
  location: "Indonesia · Pakistan",
  stats: [
    { label: "Listed publications", value: "3" },
    { label: "Research topics in progress", value: "2" },
    { label: "BS CGPA / 4.00", value: "3.26" }
  ],
  aboutStamp: {
    eyebrow: "A little about me",
    bigText: "People.\nPurpose.\nProgress.",
    subtext: "Psychology-informed, people-focused."
  },
  aboutParagraphs: [
    "I am a Psychology graduate with an interest in empirical research, quantitative analysis, human behaviour, and mental health. My academic and professional experiences have strengthened my commitment to understanding psychological wellbeing and supporting people with empathy, care, and evidence-informed practice.",
    "I have experience across counselling support, child-focused practice, rehabilitation settings, research, and community initiatives. I am currently pursuing a Master's degree at Universitas Islam Internasional Indonesia. My exact programme title and study dates will be added once confirmed.",
    "My research interests include clinical and counselling psychology, adolescent wellbeing, stress, resilience, and the cultural contexts that shape people's lives."
  ]
};

export const educationData: EducationItem[] = [
  {
    id: "uiii-masters",
    icon: "🎓",
    period: "Current study",
    degree: "Master's Programme",
    institution: "Universitas Islam Internasional Indonesia (UIII), Indonesia",
    description: "Official programme title and study dates to be confirmed. International graduate study exploring advanced psychological and behavioural disciplines."
  },
  {
    id: "ggcw-bs",
    icon: "📚",
    period: "2019–2023",
    degree: "BS Applied Psychology",
    institution: "Govt. Graduate College for Women, Satellite Town, Gujranwala, Pakistan",
    description: "Comprehensive foundational study in psychological assessment, research methodology, social psychology, and clinical interventions.",
    cgpa: "3.26 / 4.00"
  },
  {
    id: "thesis-undergrad",
    icon: "📝",
    period: "Undergraduate thesis",
    degree: "Perseverative Thinking, Perceived Stress and Meaning in Life among Thesis Students",
    institution: "Department of Applied Psychology",
    description: "Research exploring perceived stress and recurrent negative thoughts among students working on research projects or theses, with implications for academic resilience.",
    thesisLink: "https://drive.google.com/file/d/1nVy-p8kK0HedKYOvjba86DZIoHgX5txk/view?usp=drivesdk",
    thesisTitle: "Perseverative Thinking, Perceived Stress and Meaning in Life among Thesis Students"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "child-practitioner",
    period: "July 2025 – Current",
    role: "Child Practitioner",
    organization: "Children Health Care Center (SAC), Special Needs and Autism Community",
    location: "Gujranwala, Pakistan",
    highlights: [
      "Support for children with ADHD, including attention and impulsivity-related goals.",
      "Communication interventions for children with autism, supporting communication and quality of life."
    ]
  },
  {
    id: "counseling-psychologist",
    period: "March – December 2025",
    role: "Counseling Psychologist",
    organization: "Social Security Hospital",
    location: "Gujranwala, Pakistan",
    highlights: [
      "Supported mental health evaluation and treatment planning.",
      "Emphasized confidentiality, cultural sensitivity, trust, empathy, and rapport."
    ]
  },
  {
    id: "remote-intern",
    period: "October 2024 – January 2025",
    role: "Remote Intern Psychologist",
    organization: "Young Psychologist Society",
    highlights: [
      "Contributed to mental health support planning.",
      "Received supervision in case formulation, reporting, psychological evaluation, and evidence-informed practice."
    ]
  },
  {
    id: "rehab-intern",
    period: "May – August 2024",
    role: "Intern Psychologist",
    organization: "Mian Afzal Trust Hospital, Drug Rehabilitation Center",
    highlights: [
      "Exposure to CBT-based relapse prevention and coping skills.",
      "Exposure to motivational interviewing and group therapy for stress management and support."
    ]
  }
];

export const publicationsData: PublicationItem[] = [
  {
    id: "pub-1",
    year: "2025",
    role: "Corresponding author",
    title: "Emotional Expressivity, Social Adjustment and Mental Health in Adults (Males and Females): Implication for Psychological Wellbeing and Emotional Distress",
    journal: "Advance Social Science Archive Journal",
    citationDetails: "4(02), 3156–3169.",
    tag: "Emotional wellbeing",
    isPublished: true
  },
  {
    id: "pub-2",
    year: "2025",
    role: "Co-author",
    title: "The Dynamics of Parental Influence: Exploring Career Decisions with Academic Achievement as a Moderator",
    journal: "Policy Journal of Social Science Review",
    citationDetails: "3(10), 187–205.",
    tag: "Career decisions",
    isPublished: true
  },
  {
    id: "pub-3",
    year: "2025",
    role: "Co-author",
    title: "Friendship Quality and Subjective Vitality among Adolescents: Socioeconomic Status as Moderator",
    journal: "Journal for Current Sign",
    citationDetails: "3(2), 942–957.",
    tag: "Adolescent wellbeing",
    isPublished: true
  }
];

export const researchInProgressData: ResearchInProgressItem[] = [
  {
    id: "rip-1",
    title: "Perceived Stress, Self-Efficacy and Burnout in Public vs. Private School Teachers",
    description: "Exploring the role of self-efficacy in reducing burnout across secondary school educators."
  },
  {
    id: "rip-2",
    title: "Metacognition and Career Indecisiveness in Adolescents from Single-Parent Households",
    description: "Investigating links between metacognitive processes and career decision-making patterns."
  },
  {
    id: "rip-3",
    title: "Core Research Interests",
    description: "Clinical and counselling psychology, adolescent wellbeing, cultural contexts, stress, and civic engagement."
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-climate",
    icon: "🌱",
    period: "Dec 2024 – Jun 2025",
    title: "Climate Change Awareness",
    description: "Contributed to raising awareness of climate change among young adults and conducted seminars in social settings.",
    tag: "Environmental Advocacy"
  },
  {
    id: "proj-kare-kamal",
    icon: "🤝",
    period: "Feb 2024 – Current",
    title: "Kare Kamal · Youth-Based Social Work",
    description: "Volunteering includes collecting donations for people in need, supporting child welfare programmes, and assisting older people living in shelter homes.",
    tag: "Community Welfare"
  },
  {
    id: "proj-rescue-1122",
    icon: "🫶",
    period: "Feb – Mar 2025",
    title: "Rescue 1122 · Flood Relief",
    description: "Participated in flood-relief operations in Pakistan, including rehabilitation-related support and counselling for affected people.",
    tag: "Disaster Relief"
  },
  {
    id: "proj-ecommerce",
    icon: "💻",
    period: "2026 · Current",
    title: "E-Commerce E-Training Programme",
    description: "CV-listed achievement: selected as a laptop winner and appointed to a six-month e-commerce e-training programme associated with the Chief Minister of Punjab initiative.",
    tag: "Govt. Merit Award"
  }
];

export const skillsList = [
  "Behaviour Observation",
  "Case Management",
  "Therapeutic Techniques",
  "Research Practices",
  "SPSS",
  "Microsoft Word",
  "Microsoft PowerPoint",
  "Microsoft Excel",
  "Canva",
  "Psychological Support",
  "Professional Communication"
];

export const certificatesAndSeminars = {
  certificates: [
    "Phrenology in Psychology",
    "Mental Illness and Treatment Types",
    "Using Reference Management Tools (Mendeley and EndNote)",
    "Psychology Research in Psychology",
    "The Problem with Crime",
    "Myths in Law"
  ],
  conferences: [
    {
      title: "Positive Psychological Interventions in Decision-Making and Goal Setting",
      date: "April 2025"
    },
    {
      title: "Prevention Strategies for Mental Health Disorders Specific to Youth Generation",
      date: "January 2026"
    }
  ],
  languages: ["Urdu (mother tongue)", "English"],
  personalPassions: [
    "Art",
    "Calligraphy",
    "Painting",
    "Research reading",
    "Cooking",
    "Gardening",
    "Badminton",
    "Volleyball",
    "Henna art",
    "Fashion design"
  ]
};
