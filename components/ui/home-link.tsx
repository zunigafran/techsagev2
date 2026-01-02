'use client'

export default function HomeLink() {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <button 
      onClick={handleClick}
      className="text-teal-400 hover:text-teal-600 hover:underline underline-center"
    >
      Go to Home Page  →
    </button>
  );
}

