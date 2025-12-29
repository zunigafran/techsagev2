'use client';

export default function TealDot() {
  return (
    <>
      <div className="relative w-2 h-2">
        {/* First ripple - ring */}
        <div className="absolute w-2 h-2 rounded-full border-[1.5px] border-teal-400 bg-transparent top-1/2 left-1/2 -translate-x-0 -translate-y-2 opacity-0 animate-ripple" />
        
        {/* Second ripple - filled */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-teal-400 top-1/2 left-1/2 -translate-x-0 -translate-y-2 opacity-0 animate-ripple-delayed" />
        
        {/* Center dot */}
        <div className="absolute w-2 h-2 rounded-full bg-teal-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3" />
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(4.5);
            opacity: 0;
          }
        }

        .animate-ripple {
          animation: ripple 2s ease-out infinite;
        }

        .animate-ripple-delayed {
          animation: ripple 2s ease-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </>
  );
}