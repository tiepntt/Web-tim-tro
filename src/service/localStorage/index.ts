const save = (input: { key: string; data?: string }) => {
  try {
    if (input.data) {
      localStorage.setItem(input.key, input.data);
    }
  } catch (e) {
    console.log(e);
  }
};
const remove = (key: string) => {};
export const LocalStorageService = { save, remove };
