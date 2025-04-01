const Button = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <button className="btn">Default</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
        <button className="btn btn-outline">Outline</button>
        <button className="btn btn-disabled" disabled>
          Disabled
        </button>
        <button className="btn btn-lg">Large</button>
        <button className="btn btn-sm">Small</button>
        <button className="btn btn-xs">Extra Small</button>
        <button className="btn btn-circle">Circle</button>
        <button className="btn loading">Loading</button>
      </div>

      {/* Email */}
      <button className="btn bg-white text-black border-[#e5e5e5]">
        <svg
          aria-label="Email icon"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="black"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        Login with Email
      </button>
    </>
  );
};

export default Button;
