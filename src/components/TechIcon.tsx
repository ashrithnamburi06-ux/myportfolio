import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (iconKey) {
    case "react":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="10" fill="#61DAFB" />
          <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#61DAFB" strokeWidth="6" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 50 50)" />
        </svg>
      );

    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="60" fill="#000000" stroke="#333333" strokeWidth="4" />
          <path d="M42 40V88M86 40L50 88H42" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M86 40V72" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );

    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 8L112 36V92L64 120L16 92V36L64 8Z" fill="#5FA04E" />
          <path d="M64 40V88M44 52L64 40L84 52V76L64 88L44 76V52Z" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "expressjs":
    case "express":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="65%" textAnchor="middle" fill="#FFFFFF" fontSize="42" fontWeight="bold" fontFamily="sans-serif">
            ex
          </text>
        </svg>
      );

    case "python":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M63 12C37 12 38 23 38 23V35H64V38H26C26 38 14 36 14 62C14 88 24 86 24 86H34V74C34 60 46 60 46 60H74C87 60 87 47 87 47V23C87 23 89 12 63 12Z" fill="#3776AB" />
          <path d="M65 116C91 116 90 105 90 105V93H64V90H102C102 90 114 92 114 66C114 40 104 42 104 42H94V54C94 68 82 68 82 68H54C41 68 41 81 41 81V105C41 105 39 116 65 116Z" fill="#FFD43B" />
          <circle cx="50" cy="24" r="4" fill="#FFFFFF" />
          <circle cx="78" cy="104" r="4" fill="#306998" />
        </svg>
      );

    case "sql":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 30C20 22 33 16 50 16C67 16 80 22 80 30V70C80 78 67 84 50 84C33 84 20 78 20 70V30Z" stroke="#00C853" strokeWidth="6" />
          <path d="M20 30C20 38 33 44 50 44C67 44 80 38 80 30" stroke="#00C853" strokeWidth="6" />
          <path d="M20 50C20 58 33 64 50 64C67 64 80 58 80 50" stroke="#00C853" strokeWidth="6" />
        </svg>
      );

    case "supabase":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 8L16 56H48L44 92L84 44H52L56 8Z" fill="#3ECF8E" />
        </svg>
      );

    case "aws":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="55%" textAnchor="middle" fill="#FF9900" fontSize="38" fontWeight="900" fontFamily="sans-serif">
            aws
          </text>
          <path d="M30 80C50 95 78 95 98 80" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" />
          <path d="M92 74L98 80L92 86" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    default:
      return null;
  }
};
