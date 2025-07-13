'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { title: 'Experience Years', end: 20 },
  { title: 'Projects Completed', end: 200 },
  { title: 'Years Guaranteed', end: 10 },
];

const CounterStats = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-center items-center gap-48 py-12 px-4"
    >
      {stats.map((item, index) => (
        <div key={index} className="text-center">
          <h2 id='titlemymymy2'>
            +<CountUp end={startCount ? item.end : 0} duration={2} />
          </h2>
          <p id='colorp' style={{ fontSize: '17px', marginTop: '1em' }}>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CounterStats;
