import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 8, suffix: "+", label: "Años de I+D en ICAT-UNAM" },
  { value: 13, suffix: "+", label: "Publicaciones indexadas" },
  { value: 4, suffix: "", label: "Líneas de servicio" },
  { value: 2, suffix: "", label: "Instituciones aliadas" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-jetbrains text-4xl md:text-5xl font-medium text-foreground">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="bg-elevated py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center ${i < stats.length - 1 ? "md:border-r md:border-cyan-primary/15" : ""}`}
            >
              <AnimatedNumber target={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-text-muted font-dm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}