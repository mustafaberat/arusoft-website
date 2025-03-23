import React from 'react';
import styles from '../styles/Services.module.css';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: '🌐',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored software solutions to meet your specific business needs.',
    icon: '⚡',
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 