'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const reasons = [
  {
    title: 'Expertise You Can Trust',
    description: 'Our experienced team delivers tailored, high-quality solutions.',
  },
  {
    title: 'Affordable & Transparent',
    description: 'Get top-tier service at honest prices with no hidden fees.',
  },
  {
    title: 'Fast & Reliable',
    description: 'We deliver quick turnarounds without sacrificing quality.',
  },
];

const WhyChooseUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on mount and on resize
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // You can adjust breakpoint here
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '2em',
    padding: '4em 1em',
    textAlign: 'center',
  };

  const flexWrapper = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '2em',
    flexDirection: isMobile ? 'column' : 'row', // STACK on mobile, row on desktop
  };

  const itemStyle = {
    flex: isMobile ? '1 1 100%' : '1 1 30%',
    background: 'white',
    padding: '2em', 
  };

  const numberCircleStyle = {
    width: '50px',
    height: '50px',
    margin: '0 auto 1em',
    borderRadius: '50%',
    backgroundColor: '#c5c5c5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    color: '#fffd04',
    fontWeight: 'bolder',
  };

  const titleStyle = {
    fontSize: '1.2em',
    fontWeight: 600,
    marginBottom: '0.5em',
  };

  const descStyle = {
    color: '#666',
    fontSize: '1em',
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section style={containerStyle} ref={ref}>
      <h2 id='titlemymymy'>Why Choose Us</h2>
      <div style={flexWrapper}>
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            style={itemStyle}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            custom={index}
          >
            <div style={numberCircleStyle}>{index + 1}</div>
            <h3 style={titleStyle} id='titlemymymy1'>{item.title}</h3>
            <p style={descStyle} id='colorp'>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
