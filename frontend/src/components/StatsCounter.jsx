import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 1000000,
    suffix: "+",
    display: "1M+",
    label: "Happy Customers",
    color: "text-brand-magenta",
  },
  {
    value: 30,
    suffix: "+",
    display: "30+",
    label: "Stores",
    color: "text-brand-orange",
  },
  {
    value: 20,
    suffix: "+",
    display: "20+",
    label: "Cities",
    color: "text-brand-teal",
  },
  {
    value: 50,
    suffix: "+",
    display: "50+",
    label: "Years of Service",
    color: "text-brand-magenta",
  },
];

function Counter({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  const formattedCount =
    value >= 1000000
      ? `${(count / 1000000).toFixed(count < value ? 1 : 0)}M`
      : count.toLocaleString();

  return (
    <span>
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-pink-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-4 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className={`
                  font-display text-4xl font-bold
                  sm:text-5xl lg:text-6xl
                  ${stat.color}
                `}
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  start={isVisible}
                />
              </div>

              <p className="mt-2 font-body text-sm font-bold text-brand-gray sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
