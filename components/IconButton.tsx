export default function IconButton({
    icon,
    text,
    bgColor = "bg-orange-300",
    textColor = "text-white",
    className = "", // Allow additional styles
  }: {
    icon?: React.ReactNode;
    text?: string;
    bgColor?: string;
    textColor?: string;
    className?: string;
  }) {
    return (
      <button
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md shadow-sm text-sm font-medium transition-all 
          ${bgColor} ${textColor} hover:brightness-90 hover:bg-opacity-90 ${className}`}
      >
        {icon && <span className="text-base">{icon}</span>}
        {text && <span>{text}</span>}
      </button>
    );
  }
  