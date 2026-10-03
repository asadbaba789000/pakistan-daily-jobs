import { Job, CategoryInfo, CityInfo } from '../types/job';

export const INITIAL_JOBS: Job[] = [
  // --- User-Specified Jobs ---
  {
    id: 'pk-demo-001',
    title: 'Software Engineer',
    company: 'Systems Technologies Pakistan',
    location: 'Lahore',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'IT & Software',
    salary: 'PKR 180,000 - 250,000 / month',
    postedDate: 'Today',
    deadline: '28 Oct 2026',
    education: 'BS Computer Science / Software Engineering',
    experience: '2-4 Years',
    isFeatured: true,
    isDemo: true,
    logoBgColor: 'bg-blue-600',
    logoTextColor: 'text-white',
    logoInitials: 'ST',
    industry: 'Information Technology',
    description: 'We are seeking an experienced Software Engineer in Lahore to design, build, and optimize high-throughput distributed backend services and responsive web interfaces.',
    requirements: [
      'Strong proficiency in TypeScript, React, Node.js, or Python',
      'Solid understanding of PostgreSQL, Redis, and RESTful APIs',
      'Experience with Docker and CI/CD pipelines',
      'BS in Computer Science or equivalent from an HEC-recognized university'
    ],
    responsibilities: [
      'Architect and implement scalable microservices',
      'Collaborate with product and design teams in Lahore office',
      'Conduct code reviews and mentor junior developers',
      'Optimize database queries and system latency'
    ],
    benefits: [
      'Provident Fund & Gratuity',
      'Comprehensive Health & OPD Insurance for Family',
      'Fuel & Commute Allowance',
      'Annual Performance Bonus'
    ],
    vacanciesCount: 3
  },
  {
    id: 'pk-demo-002',
    title: 'HR Officer',
    company: 'Jazz Telecommunications',
    location: 'Islamabad',
    province: 'Federal',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'HR & Administration',
    salary: 'PKR 95,000 - 130,000 / month',
    postedDate: 'Yesterday',
    deadline: '25 Oct 2026',
    education: 'BBA / MBA in Human Resources',
    experience: '2-3 Years',
    isFeatured: true,
    isDemo: true,
    logoBgColor: 'bg-amber-600',
    logoTextColor: 'text-white',
    logoInitials: 'JZ',
    industry: 'Telecommunications',
    description: 'Jazz is hiring a proactive HR Officer for its Islamabad Corporate Headquarters. The candidate will oversee talent acquisition, employee onboarding, attendance tracking, and HR policy execution.',
    requirements: [
      'Degree in HR Management or Psychology from an accredited Pakistani institution',
      'Familiarity with SAP HR or Workday is preferred',
      'Fluent verbal and written communication in English and Urdu',
      'Knowledge of Pakistani Labour Laws and regulations'
    ],
    responsibilities: [
      'Coordinate end-to-end recruitment cycle for corporate roles',
      'Manage employee documentation, benefits, and inquiries',
      'Organize team engagement sessions and training schedules'
    ],
    benefits: [
      'Medical Coverage (Self + Dependents)',
      'Subsidized Staff Cafeteria',
      'Mobile Phone Allowance & SIM package',
      'Life Insurance Coverage'
    ],
    vacanciesCount: 2
  },
  {
    id: 'pk-demo-003',
    title: 'Data Entry Operator',
    company: 'TCS Express & Logistics',
    location: 'Karachi',
    province: 'Sindh',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Customer Support',
    salary: 'PKR 45,000 - 58,000 / month',
    postedDate: '2 Days ago',
    deadline: '22 Oct 2026',
    education: 'Intermediate / FA / FSc / ICS',
    experience: 'Fresh or 1 Year',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-red-600',
    logoTextColor: 'text-white',
    logoInitials: 'TC',
    industry: 'Logistics & Supply Chain',
    description: 'TCS Logistics Hub in Karachi (Korangi Industrial Area) requires energetic Data Entry Operators for package sorting, tracking verification, and consignment documentation.',
    requirements: [
      'Typing speed of at least 35 words per minute with 98% accuracy',
      'Good working knowledge of MS Excel and web portals',
      'Comfortable working in rotating day/night shifts',
      'Punctual and detail-oriented'
    ],
    responsibilities: [
      'Log consignment airway bills into internal ERP',
      'Cross-check parcel weights and destination branch codes',
      'Generate dispatch sheets for delivery couriers'
    ],
    benefits: [
      'Shift Allowance & Overtime',
      'Pick & Drop Facility for specific routes',
      'Annual Gratuity'
    ],
    vacanciesCount: 8
  },
  {
    id: 'pk-demo-004',
    title: 'Junior Accountant',
    company: 'Fauji Foundation Enterprises',
    location: 'Rawalpindi',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Accounting & Finance',
    salary: 'PKR 65,000 - 85,000 / month',
    postedDate: '3 Days ago',
    deadline: '30 Oct 2026',
    education: 'B.Com / BBA Finance / ACCA Part-Qualified',
    experience: '1-2 Years',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-emerald-700',
    logoTextColor: 'text-white',
    logoInitials: 'FF',
    industry: 'Conglomerate & Manufacturing',
    description: 'Looking for a diligent Junior Accountant based in Rawalpindi Head Office to handle ledger reconciliation, tax deductions, supplier invoices, and petty cash reporting.',
    requirements: [
      'B.Com, BBA or ACCA operational level completed',
      'Proficiency in QuickBooks or Oracle Financials',
      'Understanding of FBR Sales Tax and Income Tax withholding rules',
      'High numerical integrity and attention to detail'
    ],
    responsibilities: [
      'Prepare daily journal vouchers and bank reconciliations',
      'Assist senior finance managers in month-end closings',
      'Verify vendor invoices against purchase orders'
    ],
    benefits: [
      'Provident Fund',
      'Medical Allowance',
      'Leave Fare Assistance (LFA)'
    ],
    vacanciesCount: 2
  },
  {
    id: 'pk-demo-005',
    title: 'Teacher (Mathematics & Physics)',
    company: 'Beaconhouse School System',
    location: 'Multan',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Education',
    salary: 'PKR 55,000 - 75,000 / month',
    postedDate: '4 Days ago',
    deadline: '24 Oct 2026',
    education: 'BS / MSc Mathematics or Physics / B.Ed',
    experience: '2+ Years',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-indigo-600',
    logoTextColor: 'text-white',
    logoInitials: 'BH',
    industry: 'Education & Academics',
    description: 'Beaconhouse Multan Cantt Campus is looking for a qualified and enthusiastic Middle/Matric Level Mathematics & Physics Teacher to deliver interactive, conceptual lessons.',
    requirements: [
      'Master’s or Bachelor’s in relevant science subject from recognized university',
      'Strong command of English medium instruction',
      'Knowledge of modern STEM pedagogies and classroom management',
      'Prior school teaching experience preferred'
    ],
    responsibilities: [
      'Plan lesson modules aligned with Punjab Board and Cambridge syllabus',
      'Conduct regular diagnostic tests and parent-teacher meetings',
      'Supervise science laboratory sessions and extracurricular clubs'
    ],
    benefits: [
      'Child Tuition Fee Concession',
      'Summer & Winter Paid Vacations',
      'Annual Increments & Training Workshops'
    ],
    vacanciesCount: 2
  },

  // --- GOVERNMENT JOBS (FPSC, PPSC, BPS Scales, Official Departments) ---
  {
    id: 'gov-pk-101',
    title: 'Inspector Inland Revenue (BPS-16)',
    company: 'Federal Board of Revenue (FBR)',
    department: 'Federal Public Service Commission (FPSC)',
    location: 'Islamabad',
    province: 'Federal',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'Government Jobs',
    salary: 'Pay Scale BPS-16 + Special Allowances',
    postedDate: '1 Day ago',
    deadline: '26 Oct 2026',
    education: 'Second Class Bachelor’s Degree (Commerce, Economics, Stats, Law, CS)',
    experience: 'Fresh / Open Competitive Exam',
    bpsScale: 'BPS-16',
    testOrganization: 'FPSC',
    isFeatured: true,
    isDemo: true,
    logoBgColor: 'bg-emerald-800',
    logoTextColor: 'text-amber-300',
    logoInitials: 'FBR',
    industry: 'Government & Civil Service',
    description: 'Federal Public Service Commission invites applications for permanent posts of Inspector Inland Revenue (BPS-16) in the Revenue Division, Federal Board of Revenue, Government of Pakistan.',
    requirements: [
      'Second Class or Grade "C" Bachelor\'s degree with Commerce/Economics/Statistics/Mathematics/Computer Science/Law/BBA',
      'Age limit: 20 to 28 years (plus 5 years general relaxation by Govt)',
      'Domicile: Merit (6), Punjab (45), Sindh Urban (7), Sindh Rural (10), KPK (11), Balochistan (6), Ex-FATA (3), AJK (2)',
      'Must appear and pass FPSC General Recruitment Screening MCQs Test'
    ],
    responsibilities: [
      'Survey of taxpayers and assessment of revenue returns',
      'Enforcement of Income Tax and Sales Tax laws across assigned jurisdictions',
      'Assistance to Assistant Commissioners in tax audit proceedings'
    ],
    benefits: [
      'Government BPS-16 Scale with Executive & House Rent Allowances',
      'Pension and Gratuity scheme as per Federal Government rules',
      'Free medical treatment for self and family at federal hospitals',
      'Official residential accommodation entitlement'
    ],
    vacanciesCount: 90
  },
  {
    id: 'gov-pk-102',
    title: 'Assistant Director Audit & Inspection (BPS-17)',
    company: 'Punjab Revenue Authority (PRA)',
    department: 'Punjab Public Service Commission (PPSC)',
    location: 'Lahore',
    province: 'Punjab',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'Government Jobs',
    salary: 'Pay Scale BPS-17 + PRA Executive Allowance',
    postedDate: '3 Days ago',
    deadline: '29 Oct 2026',
    education: 'Master’s in Finance, Commerce, MBA or CA Inter',
    experience: 'Open Examination',
    bpsScale: 'BPS-17',
    testOrganization: 'PPSC',
    isFeatured: true,
    isDemo: true,
    logoBgColor: 'bg-teal-800',
    logoTextColor: 'text-white',
    logoInitials: 'PRA',
    industry: 'Government & Tax Administration',
    description: 'Punjab Public Service Commission announces recruitment for Assistant Directors (Audit & Inspection) under the Finance Department, Punjab Revenue Authority.',
    requirements: [
      'Master’s degree or 16 years education in Accounting, Finance, Commerce or CA Inter',
      'Age limit: 21 to 30 years (with 5 years age relaxation for Punjab domicile holders)',
      'Valid Punjab Domicile is mandatory',
      'PPSC Written Examination (100 Marks MCQs)'
    ],
    responsibilities: [
      'Conduct audits of registered service sector withholding agents',
      'Prepare tax demand notices and legal compliance assessments',
      'Liaison with Punjab Appellate Tribunals on contested tax issues'
    ],
    benefits: [
      'BPS-17 Official Grade with 1.5x PRA Special Allowance',
      'Punjab Govt Health Card & Official perks',
      'Designated vehicle facility for field inspections'
    ],
    vacanciesCount: 15
  },
  {
    id: 'gov-pk-103',
    title: 'Sub-Inspector Police (BPS-14)',
    company: 'Sindh Police Department',
    department: 'Sindh Public Service Commission (SPSC)',
    location: 'Karachi',
    province: 'Sindh',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'Government Jobs',
    salary: 'Pay Scale BPS-14 + Sindh Police Uniform & Risk Allowance',
    postedDate: '4 Days ago',
    deadline: '31 Oct 2026',
    education: 'Graduate (BA / BSc / B.Com / BS) from recognized university',
    experience: 'Fresh / Physical & Written Test',
    bpsScale: 'BPS-14',
    testOrganization: 'SPSC',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-slate-900',
    logoTextColor: 'text-amber-400',
    logoInitials: 'SPD',
    industry: 'Law Enforcement & Security',
    description: 'Sindh Police announces recruitment of Sub-Inspectors across Karachi, Hyderabad, Sukkur, Larkana, and Mirpurkhas ranges. Candidates must pass physical endurance and written screening tests.',
    requirements: [
      'Graduation from an HEC-accredited university',
      'Height: 5 feet 5 inches (Male) / 5 feet 2 inches (Female)',
      'Chest: 33 x 34.5 inches (Male candidates)',
      'Physical endurance: 1.6 km run in 8 minutes',
      'Sindh Urban / Rural Domicile and PRC'
    ],
    responsibilities: [
      'Maintain law and order within designated police station beats',
      'Investigate registered First Information Reports (FIRs)',
      'Prepare challans and submit evidence before trial courts'
    ],
    benefits: [
      'Provincial Police allowance, ration subsidy, and weapon allowance',
      'Subsidized schooling for wards at Sindh Police Welfare Schools',
      'Free medical treatment for immediate family'
    ],
    vacanciesCount: 120
  },
  {
    id: 'gov-pk-104',
    title: 'Secondary School Teacher - SST (BPS-16)',
    company: 'Elementary & Secondary Education Department',
    department: 'Khyber Pakhtunkhwa Public Service Commission (KPPSC)',
    location: 'Peshawar',
    province: 'KPK',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'Education',
    salary: 'Pay Scale BPS-16 + Teaching Allowance',
    postedDate: '5 Days ago',
    deadline: '27 Oct 2026',
    education: 'BS or Master’s in Physics, Chemistry, Biology or Math',
    experience: 'NTS / KPPSC Screening Test',
    bpsScale: 'BPS-16',
    testOrganization: 'KPPSC',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-green-700',
    logoTextColor: 'text-white',
    logoInitials: 'KPE',
    industry: 'Public Education',
    description: 'KPK Elementary & Secondary Education Department announces vacancies for Secondary School Teachers (Science & Bio/Math) in Government High Schools across KP districts.',
    requirements: [
      '16 years of education in relevant science disciplines (Physics/Chemistry/Bio/Maths)',
      'B.Ed or M.Ed qualification preferred (or to be acquired within probation)',
      'Domicile of Khyber Pakhtunkhwa (District quota applicable)',
      'Age limit: 19 to 35 years'
    ],
    responsibilities: [
      'Deliver secondary school curriculum to grades 9 and 10',
      'Manage school science laboratories and experimental demonstrations',
      'Participate in BISE board examination supervision'
    ],
    benefits: [
      'Government teacher tenure track benefits',
      'Summer and winter academic breaks',
      'Sehat Sahulat Card premium medical coverage'
    ],
    vacanciesCount: 85
  },
  {
    id: 'gov-pk-105',
    title: 'Assistant Commissioner / Section Officer (BPS-17)',
    company: 'Services & General Administration Department',
    department: 'Balochistan Public Service Commission (BPSC)',
    location: 'Quetta',
    province: 'Balochistan',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'Government Jobs',
    salary: 'Pay Scale BPS-17 + Special Executive Allowance',
    postedDate: '2 Days ago',
    deadline: '05 Nov 2026',
    education: 'Bachelor’s Degree (At least Second Division)',
    experience: 'Balochistan Civil Service Combined Competitive Exam',
    bpsScale: 'BPS-17',
    testOrganization: 'BPSC',
    isFeatured: true,
    isDemo: true,
    logoBgColor: 'bg-emerald-900',
    logoTextColor: 'text-yellow-400',
    logoInitials: 'BPSC',
    industry: 'Civil Service of Pakistan',
    description: 'Balochistan Public Service Commission invites applications for the Balochistan Civil Service (BCS) Executive Branch and Section Officers in the Civil Secretariat, Quetta.',
    requirements: [
      'Graduation from any recognized Pakistani university with minimum 2nd division',
      'Balochistan Local / Domicile Certificate',
      'Age: 21 to 30 years (Relaxation up to 35 years as per Govt notification)',
      'Must appear in Written Competitive Examination followed by Viva Voce'
    ],
    responsibilities: [
      'District administrative governance, price control, and executive magistracy',
      'Policy formulation and file disposal in Balochistan Civil Secretariat',
      'Coordination of disaster management and civic utility relief operations'
    ],
    benefits: [
      'Official residence and vehicle with driver',
      'Executive allowance and deputation allowances',
      'Full pension and gratuity entitlements'
    ],
    vacanciesCount: 22
  },
  {
    id: 'gov-pk-106',
    title: 'Assistant Director (IT & Cyber Operations) (BPS-17)',
    company: 'National Database and Registration Authority (NADRA)',
    department: 'Ministry of Interior, Federal Government',
    location: 'Rawalpindi',
    province: 'Federal',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'IT & Software',
    salary: 'BPS-17 Equivalent (NADRA Pay Structure: PKR 140k - 190k)',
    postedDate: '3 Days ago',
    deadline: '24 Oct 2026',
    education: 'BS in Computer Science / Information Security / Telecom',
    experience: '2+ Years in Database or Network Administration',
    bpsScale: 'BPS-17',
    testOrganization: 'NTS',
    isFeatured: true,
    isDemo: true,
    logoBgColor: 'bg-blue-900',
    logoTextColor: 'text-white',
    logoInitials: 'NDR',
    industry: 'Government Digital Identity',
    description: 'NADRA Headquarters Islamabad / Rawalpindi requires qualified IT professionals to maintain national biometric identification databases, cloud cybersecurity, and data protection infrastructure.',
    requirements: [
      'BS (4 Years) in CS, SE, Cyber Security or IT from HEC-recognized institution',
      'Hands-on experience with Oracle DB, Linux RedHat, and perimeter firewalls',
      'Knowledge of ISO 27001 data governance framework',
      'Pakistani national with verifiable character certificate'
    ],
    responsibilities: [
      'Monitor nationwide citizen registration nodes and data integrity',
      'Implement incident response protocols and cryptographic backups',
      'Collaborate with federal security agencies for threat prevention'
    ],
    benefits: [
      'NADRA Competitive Pay Structure with Annual Bonuses',
      'Hospitalization insurance at top private hospitals',
      'Subsidized transport facility'
    ],
    vacanciesCount: 10
  },
  {
    id: 'gov-pk-107',
    title: 'Junior Engineer (Electrical) (BPS-17)',
    company: 'Water and Power Development Authority (WAPDA)',
    department: 'Federal Ministry of Water Resources',
    location: 'Lahore',
    province: 'Federal',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'Engineering',
    salary: 'BPS-17 + Generation / Project Allowance',
    postedDate: '5 Days ago',
    deadline: '02 Nov 2026',
    education: 'B.Sc / BE Electrical Engineering (PEC Registered)',
    experience: 'Fresh / PTS Test',
    bpsScale: 'BPS-17',
    testOrganization: 'PTS',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-sky-800',
    logoTextColor: 'text-white',
    logoInitials: 'WPD',
    industry: 'Power & Hydroelectric Engineering',
    description: 'WAPDA invites engineering graduates from all provinces of Pakistan for recruitment as Junior Engineers (Electrical) for Tarbela, Mangla, and Diamer-Bhasha Dam project sites.',
    requirements: [
      'BE / B.Sc Electrical or Electronic Engineering with minimum 60% marks',
      'Valid registration with Pakistan Engineering Council (PEC)',
      'Domicile: All Pakistan Open Quota',
      'Maximum age: 30 years'
    ],
    responsibilities: [
      'Supervise operation and maintenance of hydroelectric power generators and switchyards',
      'Execute preventive maintenance schedules for high voltage transformers',
      'Maintain SCADA monitoring logs and grid synchronization'
    ],
    benefits: [
      'Furnished residential accommodation at WAPDA project colonies',
      'Free electricity units as per WAPDA rules',
      'Project field hardship allowances'
    ],
    vacanciesCount: 30
  },
  {
    id: 'gov-pk-108',
    title: 'Medical Officer (BPS-17)',
    company: 'Punjab Primary & Secondary Healthcare Department',
    department: 'Government of the Punjab',
    location: 'Multan',
    province: 'Punjab',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'Healthcare',
    salary: 'BPS-17 + Special Health Allowance (PKR 130k - 165k)',
    postedDate: '6 Days ago',
    deadline: '28 Oct 2026',
    education: 'MBBS with PMDC / PMC Registration',
    experience: '1 Year Completed House Job',
    bpsScale: 'BPS-17',
    testOrganization: 'PPSC',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-rose-700',
    logoTextColor: 'text-white',
    logoInitials: 'PPH',
    industry: 'Public Healthcare',
    description: 'Primary & Secondary Healthcare Department Punjab invites applications from PMDC-registered doctors for postings at Tehsil Headquarters (THQ) and Rural Health Centers (RHC) in Multan and South Punjab.',
    requirements: [
      'MBBS degree recognized by Pakistan Medical and Dental Council (PMDC)',
      'Valid House Job completion certificate',
      'Punjab domicile certificate',
      'Age: 22 to 35 years'
    ],
    responsibilities: [
      'Provide emergency and outpatient clinical care at designated health facilities',
      'Participate in national immunization and maternal health campaigns',
      'Maintain patient digital health records on Punjab Health portal'
    ],
    benefits: [
      'Non-Practicing Allowance (NPA) or permission for regulated private practice',
      'Punjab Sehat Card benefits and hospital quarters',
      'Deputation eligibility for post-graduate FCPS/MS training'
    ],
    vacanciesCount: 40
  },
  {
    id: 'gov-pk-109',
    title: 'Naib Tehsildar (BPS-14)',
    company: 'Azad Jammu & Kashmir Revenue Department',
    department: 'AJK Public Service Commission',
    location: 'Islamabad',
    province: 'AJK',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'Government Jobs',
    salary: 'BPS-14 + AJK Govt Allowances',
    postedDate: '1 Week ago',
    deadline: '08 Nov 2026',
    education: 'Graduate in Arts / Science / Law',
    experience: 'AJKPSC Competitive Test',
    bpsScale: 'BPS-14',
    testOrganization: 'Direct Interview',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-emerald-700',
    logoTextColor: 'text-white',
    logoInitials: 'AJK',
    industry: 'Land Administration & Revenue',
    description: 'AJK Public Service Commission announces vacant posts of Naib Tehsildar in the Revenue Department for candidates holding State Subject (AJK) certificates.',
    requirements: [
      'Bachelor’s Degree from an HEC-recognized university',
      'Permanent State Subject Certificate of Azad Jammu & Kashmir',
      'Age limit: 18 to 35 years',
      'Knowledge of Urdu revenue terminology (Shajra, Jamabandi, Khasra)'
    ],
    responsibilities: [
      'Inspect rural land records, mutation entries, and demarcations',
      'Collect agricultural income tax and land revenues',
      'Act as assistant sub-divisional magistrate during natural emergencies'
    ],
    benefits: [
      'Permanent government cadre with promotional ladder to Tehsildar (BPS-16)',
      'Official field vehicle and residential quarters',
      'AJK Government Pension scheme'
    ],
    vacanciesCount: 14
  },
  {
    id: 'gov-pk-110',
    title: 'Assistant Wildlife Warden (BPS-16)',
    company: 'Gilgit-Baltistan Forest & Wildlife Department',
    department: 'GB Civil Secretariat',
    location: 'Islamabad',
    province: 'Gilgit-Baltistan',
    sector: 'Government',
    jobType: 'Full Time',
    category: 'Government Jobs',
    salary: 'BPS-16 + High Altitude Allowance',
    postedDate: '4 Days ago',
    deadline: '04 Nov 2026',
    education: 'B.Sc (Hons) in Forestry, Zoology or Environmental Sciences',
    experience: 'Fresh / Written Screening',
    bpsScale: 'BPS-16',
    testOrganization: 'PTS',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-emerald-950',
    logoTextColor: 'text-amber-200',
    logoInitials: 'GBF',
    industry: 'Conservation & Wildlife',
    description: 'Applications are invited from Gilgit-Baltistan domicile holders for Assistant Wildlife Wardens to safeguard protected national parks and community trophy hunting areas.',
    requirements: [
      '16 years education in Forestry, Zoology, Botany or Wildlife Management',
      'Gilgit-Baltistan Domicile certificate',
      'Physical fitness suited for high-altitude trekking',
      'Age: 20 to 30 years'
    ],
    responsibilities: [
      'Patrol Khunjerab and Deosai National Park boundaries against illegal poaching',
      'Coordinate Markhor and Ibex population census with international WWF observers',
      'Distribute trophy hunting royalty shares to local conservation committees'
    ],
    benefits: [
      'High Altitude & Cold Climate Allowances',
      'Field uniform and 4x4 transport support',
      'Provincial medical allowances'
    ],
    vacanciesCount: 8
  },

  // --- ADDITIONAL PRIVATE SECTOR JOBS ---
  {
    id: 'pvt-pk-201',
    title: 'Senior Full Stack React & Node Developer',
    company: 'Arbisoft Software Solutions',
    location: 'Remote',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Remote',
    category: 'Remote Jobs',
    salary: 'PKR 280,000 - 420,000 / month',
    postedDate: 'Today',
    deadline: '29 Oct 2026',
    education: 'BS in Computer Science or Software Engineering',
    experience: '4+ Years',
    isFeatured: true,
    isDemo: true,
    logoBgColor: 'bg-indigo-700',
    logoTextColor: 'text-white',
    logoInitials: 'AS',
    industry: 'Software Export & IT Services',
    description: 'Work from anywhere in Pakistan! Arbisoft is looking for a seasoned Full Stack Engineer with strong expertise in React, TypeScript, Next.js, and Node.js microservices for top-tier international SaaS clients.',
    requirements: [
      'Strong hands-on experience with modern React (hooks, server components, state management)',
      'Backend proficiency in Node.js / Express or Nest.js',
      'Experience with PostgreSQL, DynamoDB, or MongoDB',
      'Fluent conversational English for North American client standups'
    ],
    responsibilities: [
      'Design clean architectures and responsive web apps',
      'Write comprehensive unit and integration tests (Jest / Playwright)',
      'Participate in agile sprint ceremonies'
    ],
    benefits: [
      '100% Work from Home with PKR 60,000 Home Office Setup Grant',
      'Dollar-pegged salary protection against inflation',
      'Comprehensive OPD and IPD health insurance'
    ],
    vacanciesCount: 5
  },
  {
    id: 'pvt-pk-202',
    title: 'Branch Operations Officer / Cashier',
    company: 'Habib Bank Limited (HBL)',
    location: 'Faisalabad',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Banking Jobs',
    salary: 'PKR 60,000 - 85,000 / month',
    postedDate: '2 Days ago',
    deadline: '27 Oct 2026',
    education: 'B.Com / BBA / BS Economics or Accounts',
    experience: 'Fresh Graduates Welcome',
    isFeatured: true,
    isDemo: true,
    logoBgColor: 'bg-emerald-600',
    logoTextColor: 'text-white',
    logoInitials: 'HBL',
    industry: 'Commercial Banking',
    description: 'Habib Bank Limited is hiring energetic graduates for Branch Operations Officer positions across Faisalabad branches. The role covers cash management, account opening, and clearing transactions.',
    requirements: [
      'Graduation degree with at least 2.8 CGPA or 2nd Division',
      'High numerical acumen and integrity',
      'Proficiency in core banking software and MS Office',
      'Age limit: Maximum 27 years'
    ],
    responsibilities: [
      'Process daily branch cash receipts, disbursements, and ATM replenishments',
      'Facilitate customer account openings and biometric verifications',
      'Ensure strict State Bank of Pakistan AML/KYC compliance'
    ],
    benefits: [
      'Fast-track career progression into Branch Management',
      'Annual Performance Bonus & Provident Fund',
      'Hospitalization insurance & subsidized staff financing'
    ],
    vacanciesCount: 6
  },
  {
    id: 'pvt-pk-203',
    title: 'Management Trainee Officer (Supply Chain)',
    company: 'Interloop Limited',
    location: 'Faisalabad',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Engineering',
    salary: 'PKR 70,000 - 90,000 / month',
    postedDate: '1 Day ago',
    deadline: '30 Oct 2026',
    education: 'BSc Textile Engineering / Industrial Engineering / Supply Chain',
    experience: 'Fresh Graduate (Graduated in 2025/2026)',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-blue-800',
    logoTextColor: 'text-white',
    logoInitials: 'IL',
    industry: 'Textile Manufacturing & Exports',
    description: 'Interloop Limited, Pakistan’s leading multi-category textile manufacturer, offers a 1-year structured Management Trainee Program in Supply Chain, Production Planning, and Quality Assurance.',
    requirements: [
      'Graduates with Textile, Industrial Engineering, or Supply Chain degrees',
      'Minimum CGPA 3.0 out of 4.0',
      'Strong leadership skills and analytical mindset',
      'Willing to work at manufacturing facilities in Faisalabad'
    ],
    responsibilities: [
      'Analyze yarn consumption, knitting efficiencies, and export packing flows',
      'Lead lean manufacturing and waste reduction initiatives on shop floors',
      'Present quarterly project findings to executive leadership'
    ],
    benefits: [
      'Permanent absorption into executive cadre upon successful completion',
      'Hostel accommodation and mess facility for outstation trainees',
      'Gym, sports complex, and executive transport'
    ],
    vacanciesCount: 8
  },
  {
    id: 'pvt-pk-204',
    title: 'Customer Experience Specialist (US Campaign)',
    company: 'Mindbridge BPO',
    location: 'Lahore',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Customer Support',
    salary: 'PKR 85,000 - 130,000 / month + Incentives',
    postedDate: 'Yesterday',
    deadline: '31 Oct 2026',
    education: 'A-Levels / Intermediate / Graduation',
    experience: 'Fresh to 1 Year',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-violet-700',
    logoTextColor: 'text-white',
    logoInitials: 'MB',
    industry: 'BPO & Call Centers',
    description: 'Mindbridge is urgently seeking Customer Support Representatives for our US inbound telecommunication and healthcare accounts in Lahore (Gulberg & Johar Town offices).',
    requirements: [
      'Excellent verbal English communication with neutral accent',
      'Comfortable working in North American night shifts (8 PM to 5 AM)',
      'Basic computer literacy and active listening skills',
      'Punctual and customer-friendly attitude'
    ],
    responsibilities: [
      'Answer incoming customer calls and resolve billing or service inquiries',
      'Maintain CRM records and customer satisfaction ratings',
      'Collaborate with team leads to achieve resolution SLAs'
    ],
    benefits: [
      'Doorstep Pick & Drop for female staff and designated routes for males',
      'Attendance bonus and uncapped monthly performance incentives',
      'Meal vouchers and game zone access'
    ],
    vacanciesCount: 15
  },
  {
    id: 'pvt-pk-205',
    title: 'Summer Corporate & Tech Intern',
    company: 'Engro Corporation',
    location: 'Karachi',
    province: 'Sindh',
    sector: 'Private',
    jobType: 'Internship',
    category: 'Internships',
    salary: 'PKR 40,000 / month (Stipend)',
    postedDate: '3 Days ago',
    deadline: '25 Oct 2026',
    education: 'Current 3rd or 4th year University Students (BBA, CS, Engineering)',
    experience: 'No Experience Required',
    isFeatured: true,
    isDemo: true,
    logoBgColor: 'bg-emerald-600',
    logoTextColor: 'text-white',
    logoInitials: 'EC',
    industry: 'Energy & Fertilizers',
    description: 'Engro Corporation invites applications for its prestigious 8-week Summer Internship Program at The Harbor Front, Clifton, Karachi. Gain real-world mentorship in Energy, Agri-products, or Digital Transformation.',
    requirements: [
      'Currently enrolled in an undergraduate or Master’s program at an accredited university',
      'Strong academic record and active participation in extracurricular clubs',
      'Available for full-time 8-week on-site rotation in Karachi',
      'Curious, analytical, and eager to solve national industrial challenges'
    ],
    responsibilities: [
      'Work alongside industry leaders on high-impact business problem statements',
      'Prepare a final project report and presentation for the executive committee',
      'Participate in leadership workshops and plant visit days'
    ],
    benefits: [
      'Competitive monthly stipend of PKR 40,000',
      'Certificate of Completion and recommendation letters',
      'Direct interview priority for future Graduate Trainee intakes'
    ],
    vacanciesCount: 12
  },
  {
    id: 'pvt-pk-206',
    title: 'Senior Civil Site Engineer',
    company: 'Habib Construction Services',
    location: 'Karachi',
    province: 'Sindh',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Construction',
    salary: 'PKR 140,000 - 190,000 / month',
    postedDate: '4 Days ago',
    deadline: '02 Nov 2026',
    education: 'BE / B.Sc Civil Engineering (PEC Registered)',
    experience: '5+ Years in High-Rise / Infrastructure',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-orange-600',
    logoTextColor: 'text-white',
    logoInitials: 'HCS',
    industry: 'Construction & Real Estate',
    description: 'Habib Construction Services needs an experienced Civil Engineer for a mega commercial high-rise tower project in Clifton, Karachi. The engineer will supervise RCC structure, subcontractors, and bar bending schedules.',
    requirements: [
      'PEC Registered Engineer with minimum 5 years practical site execution experience',
      'Proficiency in AutoCAD, MS Project, and BBS reconciliation',
      'Strong safety and quality control discipline on active jobsites'
    ],
    responsibilities: [
      'Inspect formwork, rebar layout, concrete pouring, and cube testing',
      'Liaison with structural consultants and architecture teams',
      'Review monthly contractor contractor IPC bills and progress metrics'
    ],
    benefits: [
      'Site bachelor accommodation and executive mess',
      'Company maintained vehicle with fuel entitlement',
      'Annual project bonus upon milestones'
    ],
    vacanciesCount: 2
  },
  {
    id: 'pvt-pk-207',
    title: 'Senior Brand & Digital Marketing Manager',
    company: 'Packages Limited',
    location: 'Lahore',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Sales & Marketing',
    salary: 'PKR 170,000 - 240,000 / month',
    postedDate: '5 Days ago',
    deadline: '03 Nov 2026',
    education: 'MBA Marketing from LUMS, IBA or equivalent',
    experience: '4-6 Years in FMCG or Consumer Products',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-rose-800',
    logoTextColor: 'text-white',
    logoInitials: 'PKG',
    industry: 'Packaging & Consumer Goods',
    description: 'Lead omnichannel brand awareness and trade promotion strategies for Pakistan’s renowned consumer packaging and tissue brands (Rose Petal).',
    requirements: [
      'Proven track record in brand building, media planning, and digital campaigns',
      'Strong budget management skills and agency coordination',
      'Solid command of analytics tools (Google Analytics, Meta Ads, TikTok Business)'
    ],
    responsibilities: [
      'Develop annual marketing campaigns and consumer activation plans',
      'Manage nationwide ATL/BTL advertising budgets and agency deliverables',
      'Conduct consumer research to identify emerging packaging trends'
    ],
    benefits: [
      'Company car with driver or fuel allowance',
      'Executive medical benefits for entire family',
      'Provident Fund and annual performance incentives'
    ],
    vacanciesCount: 1
  },
  {
    id: 'pvt-pk-208',
    title: 'Network & Fiber Operations Engineer',
    company: 'Nayatel',
    location: 'Rawalpindi',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'IT & Software',
    salary: 'PKR 75,000 - 110,000 / month',
    postedDate: '6 Days ago',
    deadline: '26 Oct 2026',
    education: 'BS Telecommunications / Computer Engineering',
    experience: '1-3 Years',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-cyan-700',
    logoTextColor: 'text-white',
    logoInitials: 'NYT',
    industry: 'Telecommunications & FTTH',
    description: 'Nayatel is seeking a field-oriented Fiber Operations Engineer in Rawalpindi/Islamabad to oversee GPON optical network rollouts, fault restoration, and customer edge connectivity.',
    requirements: [
      'BS in Electrical, Telecom, or Computer Systems Engineering',
      'Hands-on experience with OTDR testing, optical splicing, and Cisco routers',
      'Willingness to handle emergency on-call field maintenance',
      'Valid driving license for motorbike/car'
    ],
    responsibilities: [
      'Troubleshoot optical fiber network outages and minimize mean time to repair',
      'Supervise splicing teams during underground cable installations',
      'Ensure high standards of customer satisfaction during enterprise installations'
    ],
    benefits: [
      'Company motorbike with fuel card and maintenance',
      'Medical insurance and gratuity',
      'Free high-speed home broadband and smart cable TV'
    ],
    vacanciesCount: 4
  },
  {
    id: 'pvt-pk-209',
    title: 'Heavy Fleet Transport Driver',
    company: 'Daewoo Express Pakistan',
    location: 'Karachi',
    province: 'Sindh',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Driving',
    salary: 'PKR 52,000 - 68,000 / month + Trip Allowances',
    postedDate: '1 Week ago',
    deadline: '30 Oct 2026',
    education: 'Matric / Middle with Valid HTV License',
    experience: '3+ Years on Long Routes',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-blue-700',
    logoTextColor: 'text-white',
    logoInitials: 'DW',
    industry: 'Intercity Public Transport',
    description: 'Daewoo Express Karachi terminal invites applications from disciplined and experienced HTV Drivers for intercity luxury buses connecting Karachi to Multan, Lahore, and Rawalpindi.',
    requirements: [
      'Valid HTV (Heavy Transport Vehicle) commercial driving license',
      'Clean driving record with no major traffic violations',
      'Age: 25 to 48 years',
      'Pass medical fitness and vision examinations'
    ],
    responsibilities: [
      'Safely operate passenger luxury buses according to strict schedules',
      'Conduct pre-trip bus safety and tire inspections',
      'Ensure passenger safety and follow national highway speed guidelines'
    ],
    benefits: [
      'Per-trip distance allowance and meal stipends',
      'Free uniform and rest facilities at terminus hotels',
      'Social security and EOBI coverage'
    ],
    vacanciesCount: 10
  },
  {
    id: 'pvt-pk-210',
    title: 'Security Operations Supervisor',
    company: 'Askari Guards Private Limited',
    location: 'Multan',
    province: 'Punjab',
    sector: 'Private',
    jobType: 'Full Time',
    category: 'Security',
    salary: 'PKR 48,000 - 60,000 / month',
    postedDate: '1 Week ago',
    deadline: '02 Nov 2026',
    education: 'Intermediate / Ex-Armed Forces Preferred',
    experience: '2+ Years in Physical Security Management',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-stone-800',
    logoTextColor: 'text-amber-400',
    logoInitials: 'AG',
    industry: 'Commercial Security',
    description: 'Askari Guards requires a Security Supervisor in Multan to oversee guard deployment, visitor access controls, and emergency protocols for premier banking and industrial client facilities.',
    requirements: [
      'Matric or Intermediate pass (Retired NCO from Pakistan Army/Rangers given preference)',
      'Height: 5 feet 7 inches or above, physically fit',
      'Experience in managing security personnel shifts and duty rosters',
      'Good moral conduct certificate'
    ],
    responsibilities: [
      'Inspect guard turnouts, weapons handling, and post vigilance',
      'Coordinate with local police stations during VIP movements',
      'Submit daily shift incident logs to regional security manager'
    ],
    benefits: [
      'EOBI pension registration',
      'Free barracks accommodation and mess subsidy',
      'Uniform and weapon kit provided'
    ],
    vacanciesCount: 5
  },
  {
    id: 'pvt-pk-211',
    title: 'Remote Content Writer & SEO Specialist',
    company: 'TechJuice Media Group',
    location: 'Remote',
    province: 'Federal',
    sector: 'Private',
    jobType: 'Part Time',
    category: 'Remote Jobs',
    salary: 'PKR 45,000 - 65,000 / month',
    postedDate: '3 Days ago',
    deadline: '28 Oct 2026',
    education: 'Bachelors in English, Mass Comm, or Marketing',
    experience: '1-2 Years',
    isFeatured: false,
    isDemo: true,
    logoBgColor: 'bg-pink-700',
    logoTextColor: 'text-white',
    logoInitials: 'TJ',
    industry: 'Digital Media & Publishing',
    description: 'TechJuice is hiring a part-time remote tech writer to research and publish engaging articles covering Pakistan’s startup ecosystem, fintech, mobile apps, and government IT initiatives.',
    requirements: [
      'Flawless English writing with zero plagiarism and strong storytelling',
      'Basic SEO knowledge (keyword placement, meta descriptions, image alt tags)',
      'Ability to produce 4 to 5 well-researched 800-word articles weekly',
      'Access to a reliable laptop and high-speed internet connection'
    ],
    responsibilities: [
      'Draft insightful analysis on Pakistani technology news and funding rounds',
      'Conduct remote interviews with local startup founders',
      'Format articles in WordPress CMS with royalty-free images'
    ],
    benefits: [
      'Flexible working hours (manage your own daytime or evening schedule)',
      'Byline credit on Pakistan’s leading tech publication',
      'Prompt monthly bank transfer payment'
    ],
    vacanciesCount: 3
  }
];

export const JOB_CATEGORIES: CategoryInfo[] = [
  {
    id: 'gov-jobs',
    name: 'Government Jobs',
    iconName: 'Landmark',
    jobCount: 1420,
    popularTitle: 'FPSC, PPSC & BPS Roles',
    bgColor: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-400',
    textColor: 'text-emerald-700'
  },
  {
    id: 'banking',
    name: 'Banking Jobs',
    iconName: 'CreditCard',
    jobCount: 680,
    popularTitle: 'HBL, SBP, Meezan Bank',
    bgColor: 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400',
    textColor: 'text-blue-700'
  },
  {
    id: 'it-software',
    name: 'IT & Software',
    iconName: 'Code',
    jobCount: 1850,
    popularTitle: 'Dev, Cloud, Data, AI',
    bgColor: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-400',
    textColor: 'text-indigo-700'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    iconName: 'Wrench',
    jobCount: 940,
    popularTitle: 'PEC, Civil, Electrical',
    bgColor: 'bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400',
    textColor: 'text-amber-700'
  },
  {
    id: 'education',
    name: 'Education',
    iconName: 'GraduationCap',
    jobCount: 1250,
    popularTitle: 'Schools, Colleges, Lecturers',
    bgColor: 'bg-sky-50 text-sky-700 border-sky-200 hover:border-sky-400',
    textColor: 'text-sky-700'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    iconName: 'HeartPulse',
    jobCount: 820,
    popularTitle: 'Doctors, Nurses, Pharmacists',
    bgColor: 'bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400',
    textColor: 'text-rose-700'
  },
  {
    id: 'accounting-finance',
    name: 'Accounting & Finance',
    iconName: 'DollarSign',
    jobCount: 710,
    popularTitle: 'ACCA, CA, Tax Experts',
    bgColor: 'bg-teal-50 text-teal-700 border-teal-200 hover:border-teal-400',
    textColor: 'text-teal-700'
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    iconName: 'TrendingUp',
    jobCount: 1100,
    popularTitle: 'Digital, FMCG, B2B Sales',
    bgColor: 'bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400',
    textColor: 'text-purple-700'
  },
  {
    id: 'hr-admin',
    name: 'HR & Administration',
    iconName: 'Users',
    jobCount: 530,
    popularTitle: 'Talent Acquisition, Admin',
    bgColor: 'bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400',
    textColor: 'text-orange-700'
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    iconName: 'Headphones',
    jobCount: 890,
    popularTitle: 'BPO, Call Centers, Helpdesk',
    bgColor: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:border-cyan-400',
    textColor: 'text-cyan-700'
  },
  {
    id: 'construction',
    name: 'Construction',
    iconName: 'Building',
    jobCount: 420,
    popularTitle: 'Site Eng, Foremen, Arch',
    bgColor: 'bg-yellow-50 text-yellow-800 border-yellow-200 hover:border-yellow-400',
    textColor: 'text-yellow-800'
  },
  {
    id: 'security',
    name: 'Security',
    iconName: 'ShieldCheck',
    jobCount: 380,
    popularTitle: 'Guards, Ex-Army, Supervisors',
    bgColor: 'bg-slate-100 text-slate-700 border-slate-300 hover:border-slate-500',
    textColor: 'text-slate-700'
  },
  {
    id: 'driving',
    name: 'Driving',
    iconName: 'Truck',
    jobCount: 310,
    popularTitle: 'HTV, LTV, Couriers',
    bgColor: 'bg-lime-50 text-lime-800 border-lime-200 hover:border-lime-400',
    textColor: 'text-lime-800'
  },
  {
    id: 'internships',
    name: 'Internships',
    iconName: 'Award',
    jobCount: 640,
    popularTitle: 'Fresh Grads, Paid Summer',
    bgColor: 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400',
    textColor: 'text-emerald-800'
  },
  {
    id: 'remote-jobs',
    name: 'Remote Jobs',
    iconName: 'Globe',
    jobCount: 970,
    popularTitle: 'Work from Anywhere PK',
    bgColor: 'bg-blue-50 text-blue-800 border-blue-200 hover:border-blue-400',
    textColor: 'text-blue-800'
  }
];

export const PAKISTANI_CITIES: CityInfo[] = [
  {
    name: 'Lahore',
    province: 'Punjab',
    jobCount: 3450,
    featuredIndustries: ['IT & Tech Hub', 'Textiles', 'Education', 'FMCG'],
    imageDesc: 'Cultural heart and prime IT cluster with Arfa Karim Park & Gulberg tech hubs',
    badgeColor: 'border-blue-500 text-blue-700 bg-blue-50'
  },
  {
    name: 'Karachi',
    province: 'Sindh',
    jobCount: 4890,
    featuredIndustries: ['Finance & Ports', 'Logistics', 'Corporate HQs', 'Industrial'],
    imageDesc: 'Economic backbone of Pakistan, port logistics, banking, and multinational centers',
    badgeColor: 'border-emerald-500 text-emerald-700 bg-emerald-50'
  },
  {
    name: 'Islamabad',
    province: 'Federal',
    jobCount: 2620,
    featuredIndustries: ['Government / FPSC', 'Telecom HQs', 'Diplomacy', 'Software Exports'],
    imageDesc: 'Federal capital hosting ministries, autonomous commissions, and premier software firms',
    badgeColor: 'border-indigo-500 text-indigo-700 bg-indigo-50'
  },
  {
    name: 'Rawalpindi',
    province: 'Punjab',
    jobCount: 1480,
    featuredIndustries: ['Defense & Public Sector', 'Healthcare', 'Aviation', 'Commerce'],
    imageDesc: 'Historic twin city with massive defense institutions, NADRA, and commercial enterprises',
    badgeColor: 'border-teal-500 text-teal-700 bg-teal-50'
  },
  {
    name: 'Faisalabad',
    province: 'Punjab',
    jobCount: 1730,
    featuredIndustries: ['Textile Giant', 'Export Mills', 'Banking', 'Agri-Tech'],
    imageDesc: 'Manchester of Pakistan with world-class textile conglomerates and export powerhouses',
    badgeColor: 'border-amber-500 text-amber-700 bg-amber-50'
  },
  {
    name: 'Multan',
    province: 'Punjab',
    jobCount: 1120,
    featuredIndustries: ['Healthcare & Medical', 'Cotton & Agri', 'Education', 'Public Sector'],
    imageDesc: 'Commercial gateway to South Punjab with major public universities and regional hospitals',
    badgeColor: 'border-rose-500 text-rose-700 bg-rose-50'
  }
];

export const PROVINCES = [
  'All',
  'Federal',
  'Punjab',
  'Sindh',
  'KPK',
  'Balochistan',
  'AJK',
  'Gilgit-Baltistan'
] as const;

export const POPULAR_SEARCH_KEYWORDS = [
  'Government Jobs',
  'Bank Jobs',
  'Teaching Jobs',
  'IT Jobs',
  'Engineering Jobs',
  'Healthcare Jobs',
  'Remote Jobs'
];
