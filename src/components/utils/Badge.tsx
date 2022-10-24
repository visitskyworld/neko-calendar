import React from 'react';

type Props = {
  label: string;
  color: string;
};

const textColors: Record<string, { textColor: string }> = {
  '#e3e6ff': {
    textColor: '#7b85df',
  },
  '#ffeae3': {
    textColor: '#de8e73',
  },
  '#e7f6fc': {
    textColor: '#69c5ea',
  },
  '#f8e3ff': {
    textColor: '#c87de1',
  },
};

const Badge: React.FC<Props> = ({ label, color }) => {
  return (
    <div
      className="px-[12px] py-[4px] font-semibold rounded-lg flex items-center justify-center uppercase"
      style={{ color: textColors[color].textColor, backgroundColor: color }}
    >
      {label}
    </div>
  );
};

export default Badge;
