const login = async (email, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    mode: "cors",
  };

  let response = await fetch(
    "http://localhost:5000/api/usuario/login",
    requestOptions
  );
  let jsonData = await response.json();

  return jsonData;
};

export default login;
