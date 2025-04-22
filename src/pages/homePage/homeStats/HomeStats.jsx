import { useState, useEffect, useRef } from "react";
import {
  StyledHomeStats,
  StatsContainer,
  StatsGrid,
  StatCard,
  StatTitle,
  StatNumberWrapper,
  StatPrefix,
  StatNumber,
  StatSuffix,
} from "./StyledHomeStats";

const Counter = ({
  from = 0,
  to,
  duration = 2000,
  prefix = "",
  suffix = "",
  delay = 0,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const startCounterAfterDelay = () => {
      const startTimeoutId = setTimeout(() => {
        startTimeRef.current = Date.now();
        countRef.current = requestAnimationFrame(updateCount);
      }, delay);

      return () => clearTimeout(startTimeoutId);
    };

    const updateCount = () => {
      const now = Date.now();
      const elapsedTime = now - startTimeRef.current;
      const progress = Math.min(elapsedTime / duration, 1);

      // Easing function for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentCount = Math.floor(from + (to - from) * easedProgress);
      setCount(currentCount);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(updateCount);
      }
    };

    startCounterAfterDelay();

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [from, to, duration, delay]);

  return (
    <StatNumberWrapper>
      {prefix && <StatPrefix>{prefix}</StatPrefix>}
      <StatNumber>{count}</StatNumber>
      {suffix && <StatSuffix>{suffix}</StatSuffix>}
    </StatNumberWrapper>
  );
};

const HomeStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <StyledHomeStats ref={statsRef}>
      <StatsContainer>
        <StatsGrid>
          <StatCard delay="0s">
            <StatTitle>ZAOSZCZĘDZONEGO CZASU</StatTitle>
            {isVisible && <Counter to={40} suffix=" H" delay={100} />}
          </StatCard>

          <StatCard delay="0.2s">
            <StatTitle>WZROSTU SPRZEDAŻY</StatTitle>
            {isVisible && (
              <Counter to={30} prefix="DO " suffix="%" delay={300} />
            )}
          </StatCard>

          <StatCard delay="0.4s">
            <StatTitle>MNIEJ POPEŁNIONYCH BŁĘDÓW</StatTitle>
            {isVisible && <Counter to={50} suffix="%" delay={500} />}
          </StatCard>

          <StatCard delay="0.6s">
            <StatTitle>SZYBSZY CZAS REAKCJI NA LEAD</StatTitle>
            {isVisible && <Counter to={10} suffix="x" delay={700} />}
          </StatCard>
        </StatsGrid>
      </StatsContainer>
    </StyledHomeStats>
  );
};

export default HomeStats;
