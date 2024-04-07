const nav = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Products", url: "/products" },
  { name: "Join Us", url: "/career" },
  { name: "Contact", url: "/contact" },
  { name: "Create with Us", url: "/cocreate", type: "CTA" },
];

const products = [
  {
    name: "School and Colleges",
    icon: "/assets/products/school.svg",
    description: {
      image:
        "https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg",
      description:
        "We provide school management software that helps schools and colleges manage their day-to-day operations. Our software includes features such as attendance tracking, grade management, and student information management.",
    },
  },
  {
    name: "Co-operative Software",
    icon: "/assets/products/cooperative.svg",
    description: {
      image:
        "https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg",
      description:
        "Our cooperative software helps cooperatives manage their day-to-day operations. Our software includes features such as member management, loan management, and accounting.",
    },
  },
  {
    name: "Hospital Management",
    icon: "/assets/products/hospital.svg",
    description: {
      image:
        "https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg",
      description:
        "Our hospital management software helps hospitals manage their day-to-day operations. Our software includes features such as patient management, appointment scheduling, and billing.",
    },
  },
  {
    name: "Lab Management",
    icon: "/assets/products/lab.svg",
    description: {
      image:
        "https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg",
      description:
        "Our lab management software helps labs manage their day-to-day operations. Our software includes features such as test management, sample management, and billing.",
    },
  },
  {
    name: "Business Software",
    icon: "/assets/products/business.svg",
    description: {
      image:
        "https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg",
      description:
        "Our business software helps businesses manage their day-to-day operations. Our software includes features such as inventory management, sales management, and accounting.",
    },
  },
];

const footer = {
  newsletter: {
    title: "Stay in the Loop",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
  line: true,
  logo: "/kalika.svg",
  navLinks: [
    {
      header: "We are Systematic",
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Products", url: "/products" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      header: "Work with Us",
      links: [
        { name: "Create with Us", url: "/cocreate" },
        { name: "Join Us", url: "/career" },
      ],
    },
  ],
  socialLinks: [
    { name: "Call", url: "tel:9857024291", logo: "/call.svg" },
    {
      name: "Email",
      url: "mailto:systematic_software@yahoo.com",
      logo: "/mail.svg",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      logo: "/facebook.svg",
    },
    { name: "Twitter", url: "https://www.twitter.com", logo: "/twitter.svg" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      logo: "/linkedin.png",
    },
  ],
  cards: [
    {
      image:
        "https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg",
      text: "Card 1 Text",
      subtext: "Card 1 Subtext",
      buttonText: "Card 1 Button",
    },
    {
      image:
        "https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg",
      text: "Card 2 Text",
      subtext: "Card 2 Subtext",
      buttonText: "Card 2 Button",
    },
  ],
};

export { nav, products, footer };
