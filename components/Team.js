'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
    {
        name: 'Anthony Zeidan',
        title: 'CEO - Electrotechnical Engineer',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        description:
            'Anthony Girgi, Site Civil Engineer. Over 7 years of experience in structural shop drawing design and site supervision for successful project execution.',
    },
    {
        name: 'Elias Ziade',
        title: 'Solar PV Engineer',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        description:
            'More than 5 years experience in equipment installation, site supervision and execution of electrical work as per project technical specifications and drawings.',
    },
{
  name: 'Anthony Girgi',
  title: 'Site Civil Engineer',
  image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  description: 'Over 7 years of experience in structural shop drawing design and site supervision for successful project execution.',
}

];

const OurTeam = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 id="titlemymymy" className="text-4xl font-bold mb-6 text-center">
                    Our Team
                </h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mx-auto text-center mb-12 text-gray-700 leading-relaxed mb-[7em]"
                    id='colorp'
                >
                    the team consists of 12 skilled
                    electrical technicians & assistant
                    technicians .They are responsible for
                    installing all the wiring ,circuits and
                    outlets needed for power ,lights
                    ,appliances and equipments.They are
                    responsible for trouble shooting
                    wiring systems to make sure they
                    operate proprely
                </motion.p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative bg-white   rounded-xl shadow-lg pt-20 pb-8 px-6 flex flex-col items-center text-center h-[500px]"
   id='yellowborder'
   >
      {/* Image */}
      <div
        className="absolute -top-16"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid white',
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <h3 className="text-xl font-semibold mt-4" id="titlemymymy1">{member.name}</h3>
      <p className="text-gray-800 font-medium mt-1 mb-4" id="colorp">
        {member.title}
      </p>
      <p className="text-gray-900 leading-relaxed" id="colorp">{member.description}</p>
    </motion.div>
  ))}
</div>

            </div>
        </section>
    );
};

export default OurTeam;
