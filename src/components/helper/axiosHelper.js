import axios from "axios";

const apiUrl = "http://localhost:8000/api/v1/user";

const transUrl = "http://localhost:8000/api/v1/transaction";

export const registerUser = async (userObj) => {
  try {
    const { data } = await axios.post(apiUrl, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (userObj) => {
  try {
    const { data } = await axios.post(apiUrl + "/login", userObj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// transaction

//check if user exist

const getUserId = () => {
  const userStr = sessionStorage.getItem("user")
  const userObj = userStr? JSON.parse(userStr) : null
  console.log(userObj)
  return userObj?._id || null
}

export const addTrans = async (obj) => {
  try {
    const userId = getUserId()
    console.log(userId)
    if (! userId) {
      return{
        status:"error",
        message:"you need to login first"
      }
    }
     
  
   
    const { data } = await axios.post(transUrl, obj, {headers:{Authorization: userId}});
    console.log(data);
    return data; 
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getTrans = async () => {
  try {

    const userId = getUserId()
    if (! userId ) {
      return{
        status:"error",
        message:"you need to login first"
      }
    }
   
    const { data } = await axios.get(transUrl, {headers:{
      Authorization: userId
    }});
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
