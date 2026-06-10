import "./ParticlesBackground.css";

function ParticlesBackground() {
  const particles = Array.from({ length: 25 });

  return (
    <div className="particles-bg">
      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 15}s`,
          }}
        />
      ))}
    </div>
  );
}

export default ParticlesBackground;