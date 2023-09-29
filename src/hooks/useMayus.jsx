export const useMayus = (text) => {
  const mayus = () => {
    return text.toUpperCase();
  };

  const concatenar = (added) => {
    return text + added;
  };
  return { mayus, concatenar };
};
