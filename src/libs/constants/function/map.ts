export const mapObject = (object1: any, object2: any) => {
  Object.keys(object1).forEach((key) => {
    object1[key] = object2[key] || object1[key];
  });
  return object1;
};
