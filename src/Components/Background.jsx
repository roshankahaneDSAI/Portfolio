export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full animate-ping opacity-20 ${
            i % 4 === 0 ? 'bg-indigo-400' :
            i % 4 === 1 ? 'bg-purple-400' :
            i % 4 === 2 ? 'bg-pink-400' :
            'bg-cyan-400'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3000}ms`,
            animationDuration: `${3000 + Math.random() * 2000}ms`
          }}
        />
      ))}
    </div>
  );
}
