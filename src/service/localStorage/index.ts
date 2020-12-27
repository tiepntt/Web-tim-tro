const save = (input: { key: string; data?: string }) => {
  try {
    if (input.data) {
      localStorage.setItem(input.key, input.data);
    }
  } catch (e) {
    console.log(e);
  }
};
const remove = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};
const clear = () => {
  try {
    localStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
export const LocalStorageService = { save, remove, clear };
