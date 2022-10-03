import React, { useState, FocusEvent } from 'react';

export const useInput = (initial: string, required: boolean) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState<string | null>(null);

  return {
    value,
    onBlur: (e: FocusEvent<HTMLInputElement>) => {
      if (!e.target.value && required) setError('Required field');
      else setError(null);
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
    error,
  };
};
