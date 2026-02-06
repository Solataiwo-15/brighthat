export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tutoring", href: "/tutoring" },
  { label: "Languages", href: "/languages" },
  { label: "For Schools", href: "/schools" },
  { label: "About", href: "/about" },
];

export const CONTACT_INFO = {
  phone: "+234 915 885 8888",
  phoneLink: "tel:+2349158858888",
};

export const FEATURES = [
  {
    title: "Personalized Learning",
    description: "Tell us what you're looking for, complete our adaptive assessment, and we'll create an adaptable plan just for you.",
    icon: "/icons/feature-1.svg"
  },
  {
    title: "Innovative Online Learning",
    description: "Our innovative online learning platform revolutionizes the learning experience with video chat, collaborative workspaces, and session recording.",
    icon: "/icons/feature-2.svg"
  },
  {
    title: "Guaranteed Outcomes",
    description: "Enjoy peace of mind knowing we stand behind our promises. We guarantee you will be 100% satisfied with your experience and the results achieved.",
    icon: "/icons/feature-3.svg"
  },
];

export const PRODUCTS = [
  {
    title: "SchoolConnect",
    description: "Through our SchoolConnect program, BrightHAT partners with public schools to deliver curriculum-based contents to equitably improve outcomes for students.",
    image: "/products/school-connect.png",
  },
  {
    title: "Languages",
    description: "Join the growing list of individuals who are learning to communicate in at least one other language. Learn to hold a conversation in that second language!",
    image: "/products/languages.png",
  },
  {
    title: "Test Prep",
    description: "Our platform provides access to a wide range of study resources, including practice exams, study guides, and video lessons. We are your trusted test partner!",
    image: "/products/test-prep.png",
  },
];

export const TESTIMONIALS = [
  {
    id: 0,
    name: "Alfred Adebanjo",
    location: "Greater Manchester, United Kingdom",
    image: "/testimonials/person-1.png",
    title: "It was a great learning experience",
    rating: 5,
    review: "Lorem ipsum dolor sit amet consectetur. Pellentesque sem in placerat egestas mauris tortor. Sit fermentum non pulvinar in lectus eget tellus sit. Vitae mattis nisi posuere nullam convallis. Nisi in tortor sed turpis morbi sit in. Amet ultricies malesuada nibh suspendisse ultrices id ultrices massa."
  },
  {
    id: 1,
    name: "Yetunde Adeniyi-Vivour",
    location: "Pennsylvania, United States",
    image: "/testimonials/person-2.png",
    title: "The tutors were incredibly patient",
    rating: 3,
    review: "Semper pulvinar duis nisi dis facilisi cras nunc ultricies. Adipiscing faucibus tristique tincidunt facilisi. Vitae porta risus vitae sit sit mollis dictum. Adipiscing in in elit tristique nec cursus facilisis urna lacus. Interdum tortor metus bibendum consequat in cras."
  },
  {
    id: 2,
    name: "Ndukka Esther",
    location: "FCT, Abuja, Nigeria",
    image: "/testimonials/person-3.png",
    title: "I learned faster than I expected",
    rating: 4,
    review: "Nulla in erat et condimentum duis urna. Tristique pretium faucibus neque egestas. Tellus vel facilisis nullam sagittis egestas. Feugiat tellus malesuada tempor quis nec orci neque. Highly recommended for anyone looking to upskill quickly."
  },
];

export const TUTORS = [
  {
    name: "TIMOTHY",
    role: "French Tutor",
    image: "/tutors/tutor-1.png",
  },
  {
    name: "OPEYEMI",
    role: "Yoruba Tutor",
    image: "/tutors/tutor-2.png",
  },
  {
    name: "COURAGE",
    role: "Physics Mathematics Tutor",
    image: "/tutors/tutor-3.png",
  },
  {
    name: "SHADIAT",
    role: "Mathematics Tutor",
    image: "/tutors/tutor-4.png",
  },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: ["Tutoring Jobs", "Our Team", "Careers", "Scholarship", "FAQs"],
  },
  {
    title: "Products",
    links: ["SchoolConnect", "Homework Support", "1-on-1 Tutoring", "Exam Prep", "Summer school"],
  },
  {
    title: "Subjects",
    links: ["Maths", "Chemistry", "Biology", "Physics"],
  },
  {
    title: "Languages",
    links: ["French", "Yoruba"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms of Use", "Employee"],
  },
];

export const PRICING_PLANS = [
  {
    name: "BASIC",
    price: "$99",
    frequency: "per month",
    features: [
      "One contact hour per week",
      "One subject included"
    ],
    headerColor: "bg-[#6B85A6]", 
    isPopular: false,
  },
  {
    name: "STANDARD",
    price: "$169",
    frequency: "per month",
    features: [
      "Two contact hours per week",
      "One subject",
      "School's homework support"
    ],
    headerColor: "bg-gradient-to-r from-brand-blue to-[#C65D1A]", 
    isPopular: true,
  },
  {
    name: "PREMIUM",
    price: "$249",
    frequency: "per month",
    features: [
      "Three contact hours per week",
      "Two subjects",
      "1 hr. of Yoruba or French per week",
      "School's homework support"
    ],
    headerColor: "bg-brand-blue", 
    isPopular: false,
  },
];