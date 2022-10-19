import React, { useState } from 'react';
import { StarFilled } from '@ant-design/icons';

const Star: React.FC = ({}) => {
  const [filled, setFilled] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setFilled(!filled)}
      className="flex items-center"
    >
      <StarFilled
        style={{
          color: filled || hovered ? '#a34ef5' : 'rgba(48, 48, 48, 0.1)',
        }}
        className="mr-2 cursor-pointer"
      />
    </div>
  );
};

export default Star;
