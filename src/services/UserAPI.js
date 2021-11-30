export const getUserByEmail = (email) => {
    return fetch(
      `https://esumerce.herokuapp.com/v1/user/email?value=${email}`
    ).then((res) => {
      if (!res.ok) throw new Error("Response is NOT FOUND");
      return res.json();
    });
  };
  
  export const getUserIdByEmail = (email) => {
    return fetch(
      `hhttps://esumerce.herokuapp.com/v1/user/id?email=${email}`
    ).then((res) => {
      return res.json();
    });
  };
  
  
  