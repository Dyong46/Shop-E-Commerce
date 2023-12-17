import axios, { HttpStatusCode } from "axios";
import config from "constrants/config";

export function isAxiosError(error) {
  return axios.isAxiosError(error);
}

export function isAxiosUnprocessableEntityError(error) {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity;
}

export function isAxiosUnauthorizedError(error) {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized;
}

export function isAxiosExpiredTokenError(error) {
  return isAxiosUnauthorizedError(error) && error.response?.data?.data?.name === "EXPIRED_TOKEN";
}

export function formatCurrency(currency) {
  return new Intl.NumberFormat("de-DE").format(currency);
}

export function formatNumberToSocialStyle(value) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  })
    .format(value)
    .replace(".", ",")
    .toLowerCase();
}

const removeSpecialCharacter = (str) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ""
  );

export const generateNameId = ({ name, id }) => {
  return removeSpecialCharacter(name).replace(/\s/g, "-") + `-i-${id}`;
};

export const getIdFromNameId = (nameId) => {
  const arr = nameId.split("-i-");
  return arr[arr.length - 1];
};

export const getAvatarUrl = (avatarName) => {
  if (avatarName && avatarName.includes("http")) {
    return avatarName;
  }
  return avatarName ? `${config.baseUrl}images/${avatarName}` : "#";
};

export const getNameFromNameId = (nameId) => {
  if (!nameId) return "";
  const name = nameId.split("-i-")[0];
  return name.replace(/-/g, " ");
};
//
// export const getAddress = (ward, district, city) => {
//   return (
//     ward?.split("-i-")[0].replaceAll("-", " ") +
//     ", " +
//     district?.split("-i-")[0].replaceAll("-", " ") +
//     ", " +
//     city?.split("-i-")[0].replaceAll("-", " ")
//   );
// };
