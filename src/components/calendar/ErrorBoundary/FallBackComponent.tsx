import React from 'react';

type FallBackComponentProps = {
  message: string;
};

export const FallBackComponent: React.FC<FallBackComponentProps> = ({
  message,
}) => {
  return <h2 className="text-red-600">{message}</h2>;
};
