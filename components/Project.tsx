import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading_mini">Recent Works</p>
        <h1 className="heading_primary">My <span className="text-yellow-500">Projects</span></h1>
      </div>
      <ProjectCard 
        title="AI-Powered Chess Position Analysis and Move Prediction System" 
        dec="Developed a chess position analysis and move prediction system utilizing a CNN model with TensorFlow. Trained the model on Google Colab and designed a user-friendly interface using Bootstrap and Flask for seamless interaction." 
        tech1="CNN" 
        tech2="Deep Learning" 
        tech3="TensorFlow" 
        tech4="Flask"
        image="/images/p1.png" 
      />
      <ProjectCard 
        title="AI Powered Speech Emotion Detection System" 
        dec="Developed a system capable of detecting human emotions from voice inputs, employing a custom LSTM model trained using TensorFlow. Utilized Google Colab for model training and integration with user interfaces designed using Bootstrap and Flask technologies." 
        tech1="LSTM" 
        tech2="Deep Learning" 
        tech3="TensorFlow" 
        tech4="Flask"
        image="/images/p2.jpg" 
      />
      <ProjectCard 
        title="Modern Portfolio Website" 
        dec="A responsive portfolio website has been developed based on a client's requirements to showcase their skills and experiences effectively." 
        tech1="React" 
        tech2="Next.js" 
        tech3="Tailwind CSS" 
        tech4="TypeScript"
        image="/images/p3.jpg" 
      />
      <ProjectCard 
        title="Gas Level Indicator Application" 
        dec="Developed an Android application to monitor domestic gas cylinder levels and detect gas leaks in real-time, utilizing IoT devices for live data transfer. Built with React Native and integrated with Google Firebase Realtime Database." 
        tech1="React Native" 
        tech2="Firebase"
        image="/images/p4.jpg" 
      />
    </div>
  );
};

export default Project;
