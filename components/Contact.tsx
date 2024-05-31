import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing required environment variables for EmailJS!');
      alert('Please configure your EmailJS credentials in environment variables.');
      return;
    }

    emailjs.send(
      serviceId,
      templateId,
      formData,
      publicKey
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send email. Please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
      <div className="pt-[5rem] pb-[3rem] bg-gray-900 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
              <div>
                  <p className="heading_mini">Get in Touch</p>
                  <h1 className="heading_primary">Let's make your <span className="text-yellow-300">Brand</span> brilliant</h1>
                  <p className="text-[15px] text-white mt-[1rem] opacity-75 text-justify">I’m a passionate software engineer with a keen eye for creating innovative
                      solutions that drive business success. With extensive experience in full-stack development, I am committed to delivering
                      top-quality software that meets your needs. Whether you need a robust web application, a seamless mobile app,
                      or efficient backend services, I am here to help bring your vision to life. Let's collaborate to transform your
                      ideas into reality and take your brand to new heights. Feel free to reach out to me via phone or email for
                      any inquiries, collaborations, or project discussions. I look forward to connecting with you!</p>
                  <h1 className="mt-[2rem] mb-[2rem] text-[17px] text-yellow-300 underline font-bold flex items-center">
                      <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +94 71 919 0880
                  </h1>
                  <h1 className="mt-[2rem] mb-[2rem] text-[17px] text-yellow-300 underline font-bold flex items-center cursor-pointer">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> dilanthaweerakoon@gmail.com
                  </h1>
              </div>
              <div>
                  <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
                          <input
                              type="text"
                              placeholder="Name"
                              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                              value={formData.name}
                              onChange={handleChange}
                              required
                          />
                          <input
                              type="email"
                              placeholder="E-mail"
                              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                              value={formData.email}
                              onChange={handleChange}
                              required
                          />
                      </div>
                      <input
                          type="text"
                          placeholder="Subject"
                          className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                      />
                      <textarea
                          placeholder="Message"
                          className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 px-4 rounded-md"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required>
                      </textarea>
                      <button type="submit" className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-600 hover:bg-blue-800 rounded-md
                      px-4" >Submit</button>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default Contact;
