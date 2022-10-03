import React, { useState, FocusEvent } from 'react';

export const useTextArea = (initial: string, required: boolean) => {
  const [value, setValue] = useState<string>(initial);
  const [error, setError] = useState<string | null>(null);

  return {
    value,
    onBlur: (e: FocusEvent<HTMLTextAreaElement>) => {
      if (!e.target.value && required) setError('Required field');
      else setError(null);
    },
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setValue(e.target.value),
    error,
  };
};
