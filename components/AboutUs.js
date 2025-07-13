'use client';

import { motion } from 'framer-motion';

const AboutUs = () => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <>
      <style>{`
        .aboutus-container {
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important; 
        }

        @media (min-width: 1024px) {
          .aboutus-container {
            flex-direction: row !important; 
            max-width: 100% !important;
            gap: 3rem !important;
          }

          .aboutus-image {
            width: 35% !important;
          }

          .aboutus-content {
            width: 65% !important;
            padding: 8rem !important;
          }

          .aboutus-content h2 {
            font-size: 2.5rem !important;
            font-weight: 900 !important;
            margin-bottom: 1rem !important;
          }

          .aboutus-content p {
            font-size: 1.125rem !important;
            line-height: 1.6 !important;
            margin-bottom: 1.5rem !important;
          }

          .aboutus-content a {
            font-size: 1.25rem !important;
            padding: 1rem 2rem !important;
          }
        }
      `}</style>

      <section className="aboutus-container ">
        {/* Left: Image */}
        <div className="aboutus-image">
          <img
            src="https://res.cloudinary.com/dvsbgovdg/image/upload/v1752326016/npr.brightspotcdn_rmsp7h.jpg"
            alt="About us image"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: 0,
              border: 'none',
              display: 'block',
            }}
          />
        </div>

        {/* Right: Content Box */}
        <div className="aboutus-content bg-[#022e49] text-white rounded-l-[0] md:rounded-l-[15px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible, only once
            variants={variants}
            id='aboutPhone'
          >
            <h2 id='titlemymymyw'>About Us</h2>
            <p id='colorpw'>
              AZEEC is an electrical solution and contracting company established in 2017. Over
              the years, AZEEC earned a reputation for excellence and professionalism as it
              continuously strives to meet and even exceed standards which sets climate for
              sustainable business relationships with clients.
            </p>
            <a
              href="/about"
              style={{ padding: "1em" }}
              className="mt-10 px-12 py-6 font-semibold transition-all duration-300 transform hover:scale-105 myGray33 rounded-[5px] inline-flex items-center gap-2"
            >
              Learn More! <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
