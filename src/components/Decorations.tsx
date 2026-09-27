import React from 'react';

export const StarDoodle: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#FFB52E',
  size = 24
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path
      d="M12 2L14.4 8.6L21.5 9.1L16 13.7L17.8 20.6L12 16.8L6.2 20.6L8 13.7L2.5 9.1L9.6 8.6L12 2Z"
      fill={color}
    />
  </svg>
);

export const CurvedArcDoodle: React.FC<{ className?: string; stroke?: string }> = ({
  className = '',
  stroke = '#FF7043'
}) => (
  <svg
    viewBox="0 0 100 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path
      d="M5 32C25 8 75 8 95 32"
      stroke={stroke}
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="6 8"
    />
  </svg>
);

export const SquiggleDoodle: React.FC<{ className?: string; stroke?: string }> = ({
  className = '',
  stroke = '#72C83E'
}) => (
  <svg
    viewBox="0 0 80 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path
      d="M4 14C12 6 18 18 26 12C34 6 40 18 48 12C56 6 62 18 76 10"
      stroke={stroke}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PaperPlaneDoodle: React.FC<{ className?: string; stroke?: string }> = ({
  className = '',
  stroke = '#55BFEF'
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path
      d="M4 22L42 6L26 44L20 28L4 22Z"
      stroke={stroke}
      strokeWidth="3"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M20 28L42 6"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const OrganicWaveDivider: React.FC<{
  fillColor?: string;
  flip?: boolean;
  className?: string;
}> = ({ fillColor = '#FFF1F3', flip = false, className = '' }) => (
  <div
    className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
      flip ? 'rotate-180' : ''
    } ${className}`}
  >
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-full h-12 md:h-20"
    >
      <path
        d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
        fill={fillColor}
      />
    </svg>
  </div>
);

export const WavyBottomEdge: React.FC<{ fillColor?: string; className?: string }> = ({
  fillColor = '#FFF1F3',
  className = ''
}) => (
  <div className={`w-full overflow-hidden leading-none ${className}`}>
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-8 md:h-16 block"
    >
      <path
        d="M0,0 C320,60 480,10 720,40 C960,70 1180,20 1440,50 L1440,80 L0,80 Z"
        fill={fillColor}
      />
    </svg>
  </div>
);
