const removeSpecialCharacter = (str) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '');

export const generateNameId = ({ name, id }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`;
};

export const getIdFromNameId = (nameId) => {
  const arr = nameId.split('-i-');
  return arr[arr.length - 1];
};
