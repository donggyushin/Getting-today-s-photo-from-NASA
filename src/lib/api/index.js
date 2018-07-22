import axious from "axios";

export function getAPOD(date = "") {
  return axious.get(
    `https://api.nasa.gov/planetary/apod?api_key=KbiX36OC10dtCL6OtoKTVrtKyIGtEuKkhahkBImm&date=${date}`
  );
}
