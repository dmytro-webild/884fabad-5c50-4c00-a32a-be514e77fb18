import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  letterSpacing?: number;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 32,
  letterSpacing = 2,
}) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * (fontSize + letterSpacing)} ${fontSize + 20}`}
      className={className}
      width="100%"
      height="auto"
    >
      <text
        x="10"
        y={fontSize}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        fontWeight="bold"
        fill="currentColor"
        dominantBaseline="auto"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;