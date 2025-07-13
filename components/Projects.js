'use client';

import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';


const CATEGORY_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fffd04"
    viewBox="0 0 24 24"
    width="28"   // 3x of 16 would be 48
    height="28"
  >
    <path d="M12 2L2 7h20L12 2zm0 2.18L18.39 7H5.61L12 4.18zM4 9v10h16V9H4zm2 2h12v6H6v-6z" />
  </svg>
);

export default function ProjectsTwoColumns() {
  const [projects, setProjects] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


useEffect(() => {
  async function fetchProjects() {
    const res = await fetch('/api/products');
    const data = await res.json();
    // Take last 2 items from data array
    const lastTwo = data.slice(-2);
    setProjects(lastTwo);
  }
  fetchProjects();
}, []);


  if (projects.length < 2) {
    return <p>Loading...</p>;
  }

  const randomQuotes = [
    'Innovation drives us forward. Every detail matters.',
    'Designed with passion. Built to last.',
    'Smart solutions for smart living. Experience the future.',
    'Crafted for performance. Styled for impact.',
    'Reliable. Sustainable. Ready for tomorrow.',
  ];

  return (
    <div
      className="projects-container"
      style={{ maxWidth: 1300, margin: '0 auto', gap: 40 }}
    >
      {[0, 1].map((idx) => {
        const project = projects[idx];
        const isEvenRow = idx % 2 === 0;

        const textColStyle = {
          flex: 1,
          color: '#222',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '20px',
          minHeight: 280,
          borderRadius: 8,
        };

        const categoryIconStyle = {
          backgroundColor: '#c5c5c5',
          borderRadius: '50%',
          width: 42,    // 3x 24 = 72
          height: 42,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 8,
          flexShrink: 0,
        };

        const imageContainerStyle = {
          position: 'relative',
          width: 500,
          height: 600,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          borderRadius: 8,
          flexShrink: 0,
        };

        // ➤ Dynamic bottom box: left for 1st row, right for 2nd row
const bottomBoxStyle = {
  position: 'absolute',
  bottom: 10,
  left: isMobile ? 0 : isEvenRow ? 0 : 'auto',
  right: isMobile ? 'auto' : isEvenRow ? 'auto' : 0,
  transform: isMobile ? 'translateX(0)' : isEvenRow ? 'translateX(-15%)' : 'translateX(15%)',
  backgroundColor: '#022e49',
  color: 'white',
  padding: '46px 52px',
  borderRadius: '8px',
  fontSize: 14,
  width: '70%',
  textAlign: 'center',
  userSelect: 'none',
  pointerEvents: 'none',
};


        const rowStyle = {
          display: 'flex',
          flexDirection: isMobile
            ? 'column'
            : isEvenRow
              ? 'row'
              : 'row-reverse',
          gap: isMobile ? 0 : 100,
          marginBottom: 40,
          alignItems: 'center',
          backgroundImage: isEvenRow
            ? 'url(https://res.cloudinary.com/dvsbgovdg/image/upload/v1752342367/bg-blob-gradient_rh92us.webp)'
            : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 0em',
          borderRadius: 12,
          padding: 40,
        };

        function stripHtml(html) {
          return html.replace(/<\/?[^>]+(>|$)/g, "");
        }

        function getFirstTwoSentences(text) {
          const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];
          if (sentences.length <= 2) return text;
          return sentences.slice(0, 2).join(' ') + '...';
        }


        return (
          <div key={project.id} style={rowStyle}>
            {/* Text Column */}
            <div style={textColStyle}>
              <h2 style={{ marginBottom: 8 }} id="titlemymymy">
                {project.title}
              </h2>

              <p style={{ marginBottom: 16 }} id='colorp'  >
                {getFirstTwoSentences(stripHtml(project.description))}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', maxWidth: 220 }}>
                <div style={categoryIconStyle}>{CATEGORY_ICON}</div>
                <span id='titlemymymy1' >{project.category}</span>
              </div>

              <a
                href="/projects"
                style={{ padding: "1em" }}
                className="mt-10 w-40 font-semibold transition-all duration-300 transform hover:scale-105 myGray33 rounded-[5px] inline-flex items-center gap-2"
              >
                View More <span>→</span>
              </a>
            </div>

            {/* Image Column */}
            <div style={imageContainerStyle}>
              <img
                src={project.img?.[0] || ''}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 8,
                }}
              />
              <div style={bottomBoxStyle}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    textAlign: 'left',
                  }}
                >
                  <div
                    style={{
                      minWidth: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: '#ffffff33',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#fffd04',
                      fontSize: 28,
                      flexShrink: 0,
                    }}
                  >
                    <FaQuoteLeft />
                  </div>
                  <p style={{ margin: 0, lineHeight: 1.4 }}>
                    {randomQuotes[Math.floor(Math.random() * randomQuotes.length)]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
