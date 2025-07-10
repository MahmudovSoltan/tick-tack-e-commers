"use client"

import { useState } from "react";


export const useMyFormState = <T extends Record<string,string>>(initialData: T) => {
  const [data, setData] = useState<T>(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return { data, setData, handleChange };
};


