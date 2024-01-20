  // icons
  import {
    HiHome,
    HiUser,
    HiSquare2Stack,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from "react-icons/hi2";
  
import {
    RxDesktop,
  } from "react-icons/rx";
  
import {
    BiBug,
  } from "react-icons/bi";
  
import {
    FaBug,
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
  } from "react-icons/fa";
  
  import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
  } from "react-icons/si";
  

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiSquare2Stack /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

  //  About data
  export const aboutData = [
    {
      title: 'expertise',
      info: [
        {
          title: 'Web Development',
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <FaReact />,
            <SiNextdotjs />,
            <SiFramer />,
          ],
        },
        {
          title: 'UI/UX Design',
          icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
        },
      ],
    },
    {
      title: 'experience',
      info: [
        {
          title: 'UX/UI Designer - XYZ Company',
          year: '2012 - 2023',
        },
        {
          title: 'Web Developer - XYZ Company',
          year: '2010 - 2012',
        },
        {
          title: 'Freelancer - Fiver',
          year: '2008 - 2010',
        },
      ],
    },
    {
      title: 'education',
      info: [
        {
          title: 'Full Stack Development - ABC University, USA',
          year: '2011',
        },
        {
          title: 'FontEnd Development - ABC University, Ldondon',
          year: '2009',
        },
        {
          title: 'Graphic Designing - ABC University, Turkey',
          year: '2006',
        },
      ],
    },
  ];
  
  // Services data
  export const servicesData = [
    {
        icon: <FaFigma />,
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxDesktop />,
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FaReact />,
      title: 'App Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <BiBug />,
      title: 'Bug Fixing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FaNodeJs />,
      title: 'BackEnd Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  // Work data
export const workData = {
  slides: [
    {
      images: [
        {
          title: 'title',
          url: '/img1.png',
        },
        {
          title: 'title',
          url: '/img2.png',
        }
      ],
    },
    {
      images: [
        {
          title: 'title',
          url: '/img3.png',
        },
        {
          title: 'title',
          url: '/img4.png',
        }
      ],
    },
    {
      images: [
        {
          title: 'title',
          url: '/img5.png',
        },
        {
          title: 'title',
          url: '/img6.png',
        }
      ],
    },
    {
      images: [
        {
          title: 'title',
          url: '/img4.png',
        },
        {
          title: 'title',
          url: '/img3.png',
        }
      ],
    },
  ],
};

//  Testimonial data
export const testimonialData = [
  {
    url: '/person-1.jpg',
    name: 'Olivia Anderson',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    url: '/person-2.jpg',
    name: 'Lucas Taylor',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    url: '/person-3.jpg',
    name: 'Emma Brown',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    url: '/person-4.jpg',
    name: 'Sophia Martinez',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];
