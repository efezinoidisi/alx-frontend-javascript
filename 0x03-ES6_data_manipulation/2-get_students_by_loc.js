// return an array of objects who are locaated in a specific city/location

export default function getStudentsByLocation(arr, city) {
  return arr.filter((obj) => city === obj.location);
}
