import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from '@iconify/react';
import { backendImg, frontendImg, mobileImg } from "../assets";



const skillsData = [
  {
    icon:<Icon icon="uil:react" />,
    image: frontendImg,
    title: "Frontend Development",
    description:
      "My expertise lies in expertly crafting seamless and intuitive user experiences for web and mobile, ensuring that every aspect is tailored to your unique needs.",
  },
  {
    icon:<Icon icon="fa6-brands:node" />,
    image: backendImg,
    title: "Backend Development",
    description:
      "I specialize in developing robust and scalable server-side applications for web and mobile, leveraging cutting-edge technologies to deliver reliable and high-performance solutions that meet your business needs.",
  },
  {
   icon: <Icon icon="clarity:mobile-solid"  />, 
    image: mobileImg,
    title: "Mobile Apps Development",
    description:
      "I am dedicated to developing functional, engaging, and user-friendly mobile applications, flawlessly executing every aspect of the development process to ensure that your app stands out in today's crowded app market.",
  },
];


const Skills = () => {
  return (
    <section className="skills_section">
      <h2 className="skills_title">My <span>Approach</span>  to Delivering <span>Outstanding Results</span></h2>
      <p>
        I am committed to delivering projects that exceed expectations and
        address unique client needs. Let's work together to create something
        great that{" "}
        <span>
          enhances your business and leaves a lasting impact on your audience.
        </span>{" "}
      </p>
    <VerticalTimeline lineColor="#f1f1f1">
  {skillsData.map((data, index)=>(    <VerticalTimelineElement
        className="skills_container_card"
        contentStyle={{ background: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        icon={data.icon}
        iconStyle={{ background:"#002bff", color: "#fff" ,fontSize:"20px"}}
        key={index}
        
      >
         <img src={data.image} alt={data.title} className="skills_container_card_image"/>
        <h3 className="vertical-timeline-element-title">{data.title}</h3>
      
        <p className="skills_container_desc">
        {data.description}
        </p>
      </VerticalTimelineElement>))}
      <VerticalTimelineElement
    iconStyle={{ background: '#002bff', color: '#fff' }}
    icon={<Icon icon="clarity:star-line" />}
  />
   
    </VerticalTimeline>
    </section>
  );
};

export default Skills;
