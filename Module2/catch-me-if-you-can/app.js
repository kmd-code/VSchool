function sum(x, y){
    //check data types first and throw error
    try {
        if (typeof x != "number" || typeof y != "number") {
            throw "One of these is not a number!"
        }
        return x + y;
    }
    catch(err) {
        console.log(err);
    }
  }

var user = {username: "sam", password: "123abc"};
function login(username, password){
  try {
      if (user.username === username && user.password === password){
          console.log("Login Successful!")
      } else {
          throw "Invalid username or password"
      }
  }
  catch(err){
      console.log(err);
  }
}