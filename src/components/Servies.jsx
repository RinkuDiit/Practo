import React from 'react';

const services = [
    {
      title: 'Consultation',
      description: 'Get expert advice and treatment plans from our experienced doctors.',
      image: 'https://www.annamedical.co.uk/wp-content/uploads/2020/07/CONTRAINDICATIONS-1024x576.jpg'
    },
    {
      title: 'Diagnostics',
      description: 'State-of-the-art diagnostic services to accurately assess your health.',
      image: 'https://www.biomerieux.com/content/biomerieux/corp/en/blog/news-trends-diagnostics/what-are-in-vitro-diagnostics-and-why-are-they-important-.thumb.800.480.png?ck='
    },
    {
      title: 'Wellness Checkups',
      description: 'Regular health checkups to ensure your wellbeing.',
      image: 'https://www.starmedicalassociates.com/wp-content/uploads/sites/539/2020/08/iStock-1157591981.jpg'
    },
  
    {
      title: 'Physical Therapy',
      description: 'Rehabilitation services to help recover from injuries or surgeries.',
      image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/11/960x0.jpg'
    }
  ];

const Service = () => {
  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <p>We offer a wide range of medical services to meet your healthcare needs.</p>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
