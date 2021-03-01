import axios from "axios";
export const getExercises = async () => {
  let res = await axios.get("http://localhost:5000/exercises");
  return res.data;
};

export const postExercise = async (exercise) => {
  let res = await axios.post("http://localhost:5000/exercises/add", exercise);
  console.log("created Exercise Success.");
  console.log(res.data);
};

export const getUsers = async () => {
  let res = await axios.get("http://localhost:5000/users");
  return res.data;
};

export const createUser = async (user) => {
  let res = await axios.post("http://localhost:5000/users/add", user);
  console.log("created User Success.");
  console.log(res.data);
};
