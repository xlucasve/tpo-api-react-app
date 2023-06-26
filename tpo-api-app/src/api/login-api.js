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
  if (response.status === 200) {
    let jsonData = await response.json();
    console.log("Se obtuvo el jsonData correctamente: " + jsonData.token);
    return jsonData;
  } else {
    console.log(response.message);
  }
  return response;
};

export default login;
