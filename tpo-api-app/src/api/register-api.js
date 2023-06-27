import React from "react";

const registerApi = async (formState) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: formState.inputs.email.value,
    password: formState.inputs.password.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let response = await fetch(
    "http://localhost:5000/api/usuario/signup",
    requestOptions
  );

  if (response.status === 201) {
    let jsonData = await response.json();
    console.log("Correcto");
    return jsonData;
  } else {
    alert("Correo ya existente, pruebe otro");
  }
};

export default registerApi;
