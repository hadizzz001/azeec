'use client';

import { motion } from 'framer-motion';
import {
  FiZap,
  FiShield,
  FiCpu,
  FiActivity,
  FiTool,
  FiFileText,
  FiCloudLightning,
  FiHome,
} from 'react-icons/fi';

const data = [
  {
    title: 'Solar System installation',
    description: `Reliable solar panel systems for your needs. 
We install durable, efficient solar panels tailored to your energy requirements. 
Our expert team ensures seamless setup and long-term support. 
Experience sustainable energy solutions with us.`,
    icon: FiZap,
  },
  {
    title: 'Fire alarms & Access control',
    description: `Advanced safety and security solutions. 
We provide cutting-edge fire alarm systems and access control. 
Protect your property with our integrated safety technologies. 
Stay secure with 24/7 monitoring and support.`,
    icon: FiShield,
  },
  {
    title: 'Electrical Installations',
    description: `Safe and efficient electrical setups. 
Our certified electricians handle installations with precision. 
Compliant with latest regulations and standards. 
Ensuring safety and functionality in every project.`,
    icon: FiCpu,
  },
  {
    title: 'Data Cabling',
    description: `High-quality data infrastructure. 
Structured cabling for homes and businesses. 
Reliable and scalable network solutions. 
Optimized for speed and stability.`,
    icon: FiActivity,
  },
  {
    title: 'Repairs & Maintenance',
    description: `Keeping your systems in top shape. 
Routine inspections and timely repairs. 
Maximizing system uptime and longevity. 
Responsive service tailored to your needs.`,
    icon: FiTool,
  },
  {
    title: 'Electrical Conditions Reports & Data Center',
    description: `Detailed reporting and data management. 
Comprehensive condition assessments. 
Expert analysis for data center reliability. 
Supporting informed maintenance decisions.`,
    icon: FiFileText,
  },
  {
    title: 'Earthing & Lightning Protection systems',
    description: `Protect your property from electrical hazards. 
Installation of reliable earthing systems. 
Advanced lightning protection solutions. 
Safeguarding assets and personnel effectively.`,
    icon: FiCloudLightning,
  },
  {
    title: 'Home & Industrial Automation',
    description: `Smart automation for home and industry. 
Customizable control systems for convenience. 
Enhance energy efficiency and security. 
Cutting-edge technology for modern living.`,
    icon: FiHome,
  },
];

export default function WhatWeDo() {
  return (
    <section className="max-w-[1300px] mx-auto px-6 py-16">
      <h2 id="titlemymymy" className="text-4xl font-bold mb-6 text-center">
        What We Do
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-12 text-gray-700 leading-relaxed"
        id='colorp'
      >
        We offer practical and best value solutions, carried out with an exceptional level of
        professionalism, commitment and delivery.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <a
          href="/contact"
          style={{ padding: "1em" }}
          className=" font-semibold transition-all duration-300 transform hover:scale-105 myGray33 rounded-[5px] inline-flex items-center gap-2"
        >
          Contact Us! <span>→</span>
        </a>
      </motion.div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map(({ title, description, icon: Icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col text-left min-h-[300px]"
          >
            <div
              className="bg-[#c5c5c5] text-[#fffd04] rounded-full w-16 h-16 flex items-center justify-center mb-4 text-3xl"
              aria-hidden="true"
            >
              <Icon />
            </div>

            <h3 className="font-bold text-xl mb-2" id="titlemymymy1">
              {title}
            </h3>

            <p
              className="text-gray-600 leading-relaxed overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis',
              }}
              id='colorp'
            >
              {description}
            </p>
          </motion.div>
        ))}
      </div>


    </section>
  );

}
