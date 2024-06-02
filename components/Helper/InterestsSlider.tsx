import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import InterestCard from "./InterestCard";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 1, 
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2,
      slidesToSlide: 1, 
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    }
  };

const InterestsSlider = () => {

    return (
    <Carousel 
    responsive={responsive} 
    additionalTransfrom={0} 
    arrows={true} 
    autoPlay={true} 
    autoPlaySpeed={5000} 
    centerMode={false}
    infinite={false}
    itemClass="item"   
    >
     <InterestCard 
     image="/images/interest01.jpg" 
     interest="AI Development and Researches" 
     desc="Explore the cutting-edge field of Artificial Intelligence where I delve into developing innovative solutions and conducting research to push the boundaries of AI technology."
    
     />
     <InterestCard 
     image="/images/interest02.jpg" 
     interest="Mobile Application Development" 
     desc="Dive into the dynamic world of mobile app development, where I craft user-friendly and innovative applications for Android and iOS platforms, leveraging the latest technologies."
     
     />
     <InterestCard 
     image="/images/interest03.jpg" 
     interest="Cybersecurity" 
     desc="Delve into cybersecurity, where I work diligently to safeguard digital assets and protect against evolving cyber threats through proactive measures, ethical hacking, and robust security practices."
    
     />
     <InterestCard 
     image="/images/interest04.jpg" 
     interest="Chess" 
     desc="Embark on the strategic journey of chess, a game that sharpens critical thinking, problem-solving, and decision-making skills, fostering a strategic mindset and a love for intellectual challenges."
    
     />
     <InterestCard 
     image="/images/interest05.jpg" 
     interest="Travelling" 
     desc="Embrace the adventure of travel, exploring diverse cultures, landscapes, and experiences around the globe, fostering curiosity, empathy, and a broader perspective on the world.

     "
    
     />
      <InterestCard 
     image="/images/interest06.jpg" 
     interest="Sports and Fitness" 
     desc="Engage in the pursuit of physical well-being through sports and fitness activities, nurturing a healthy lifestyle, discipline, and resilience while enjoying the thrill of competition and personal growth."
    
     />
    </Carousel>
    );
};
export default InterestsSlider;