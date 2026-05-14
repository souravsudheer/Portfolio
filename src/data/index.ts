import type {
  NavItem,
  BentoItem,
  SkillCategory,
  Project,
  EducationItem,
  SocialLink,
} from "@/types";

export const navItems: NavItem[] = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const bentoItems: BentoItem[] = [
  {
    id: 1,
    title: "Data Science & Machine Learning",
    description:
      "Building models that extract meaningful insight from complex, real-world datasets.",
    className: "md:col-span-3 md:row-span-2",
    type: "text",
  },
  {
    id: 2,
    title: "Python · SQL · Analytics",
    description:
      "From raw data wrangling to statistical modelling — fluent across the full analytics stack.",
    className: "md:col-span-2 md:row-span-1",
    type: "text",
  },
  {
    id: 3,
    title: "Global Curiosity",
    description: "Always exploring what's next — wherever the data leads.",
    className: "md:col-span-2 md:row-span-2",
    type: "globe",
  },
  {
    id: 4,
    title: "Problem Solver at Heart",
    description:
      "I enjoy breaking hard problems into elegant, testable solutions — one hypothesis at a time.",
    className: "md:col-span-2 md:row-span-1",
    type: "text",
  },
  {
    id: 5,
    title: "Currently Exploring",
    description: "AI Engineering · LLM Fine-tuning · MLOps · dbt · Spark",
    className: "md:col-span-3 md:row-span-1",
    type: "code",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "R" },
      { name: "SQL" },
      { name: "Bash" },
    ],
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Scikit-learn" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "LightGBM" },
      { name: "XGBoost" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "SHAP" },
      { name: "Optuna" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Jupyter" },
      { name: "Linux" },
      { name: "VS Code" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "COVIDX — COVID-19 Detection from Chest X-rays",
    description:
      "Deep learning framework that classifies COVID-19 from chest radiographs using transfer learning. Evaluated 14 pre-trained CNN architectures (DenseNet, ResNet, VGG, MobileNet, Inception-v3 and more) on 6,669 images. Best models (DenseNet-121, DenseNet-161, ResNet18) achieved >90% sensitivity and >94% specificity.",
    techStack: ["Python", "PyTorch", "CNN", "Transfer Learning", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/reyvnth/COVIDX",
    featured: true,
  },
  {
    id: 2,
    title: "ICU Mortality Prediction — ANZICS APD",
    description:
      "LightGBM model trained on 1.2M ICU admissions (177 variables) from the ANZICS Adult Patient Database, benchmarked against the published ANZROD20 score (AUROC 0.918). Used patient-grouped StratifiedGroupKFold cross-validation to prevent leakage, Optuna for hyperparameter tuning, and SHAP for interpretability. Evaluation spans discrimination, calibration, decision curve analysis, and demographic fairness audits.",
    techStack: ["Python", "LightGBM", "SHAP", "Optuna", "Pandas", "Parquet"],
    githubUrl: "https://github.com/souravsudheer",
    featured: true,
  },
  // ─── Add more projects below ────────────────────────────────────────────────
  // {
  //   id: 3,
  //   title: "Your Next Project",
  //   description: "Description here.",
  //   techStack: ["Python", "..."],
  //   githubUrl: "https://github.com/souravsudheer/...",
  // },
];

export const education: EducationItem[] = [
  {
    id: 1,
    type: "education",
    title: "Master of Data Analytics",
    institution: "Queensland University of Technology (QUT), Brisbane, Australia",
    period: "2023 – 2025",
    description:
      "Postgraduate studies covering advanced data analytics, machine learning, statistical modelling, and data-driven decision making.",
  },
  // ─── Add certifications below ────────────────────────────────────────────────
  // {
  //   id: 2,
  //   type: "certification",
  //   title: "Certification Name",
  //   institution: "Issuing Organisation",
  //   period: "Month Year",
  //   description: "What this certification covers.",
  //   credentialUrl: "https://credential-url",
  // },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/souravsudheer",
  },
  {
    id: 2,
    name: "LinkedIn",
    // Update this with your LinkedIn vanity URL: linkedin.com/in/YOUR-VANITY-URL
    link: "https://www.linkedin.com/in/souravsudheer",
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:souravsudheer@protonmail.me",
  },
];

export const personalInfo = {
  name: "Sourav Sudheer",
  role: "Data Scientist & ML Engineer",
  tagline: "Building ML models that actually work in the real world.",
  bio: "I'm a Master of Data Analytics student at Queensland University of Technology with a passion for building machine learning systems that solve real problems. My work spans predictive modelling, deep learning for medical imaging, and end-to-end data pipelines — from raw data to interpretable, deployable insights. Currently broadening my toolkit into AI engineering and LLM applications.",
  email: "souravsudheer@protonmail.me",
};
