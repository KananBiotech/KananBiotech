import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';


const teamMembers = [
  {
    id: 1,
    name: 'Arindam Mondal',
    title: 'Head of Operations',
    bio: 'With over 10 years of experience in agricultural biotechnology.',
    photoUrl: '',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'info@kananbiotech.com',
    }
  },
  {
    id: 2,
    name: 'Arpan Patra',
    title: 'Software Devoloper',
    bio: 'I am a third-year B.Tech student at Haldia Institute of Technology, specializing in AI & ML. Passionate about tech and problem-solving, I’ve built strong skills in C, Python, and full-stack web development. I’m eager to apply my knowledge to real-world projects that combine data-driven insights with creative thinking, and I’m actively seeking opportunities to grow in data science and software development.',
    photoUrl: '/ContactArpanPatra.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/arpan-patra-6b0a37291/',
      twitter: 'https://x.com/DONCHAN70047',
      email: 'arpanpatra800188500@gmail.com',
    }
  }
];


export function Contact() {
  return (
    <>
      <Header />
      
      <main className="team-page-container">
  <div className="team-header">
    <h1>Meet Our Team</h1>
    <p>We are a dedicated team of scientists, agronomists, and innovators committed to revolutionizing agriculture through biotechnology.</p>
  </div>

  <div className="team-grid">
    {teamMembers.map(member => (
      <div key={member.id} className="team-member-card">
        <img 
          src={member.photoUrl} 
          alt={member.name} 
          className="member-photo" 
        />
        <h3 className="member-name">{member.name}</h3>
        <p className="member-title">{member.title}</p>
        <p className="member-bio">{member.bio}</p>
        <div className="member-socials">
          <a href={member.socials.linkedin} className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={member.socials.twitter} className="social-link" aria-label="Twitter"><FaTwitter /></a>
          <a href={member.socials.email} className="social-link" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    ))}
  </div>
</main>

      <Footer />
    </>
  );
}

export default Contact;