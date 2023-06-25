const getContactos = async (setContactos, token) => {
  var myHeaders = new Headers();
  myHeaders.append("jwt", token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let response = await fetch("localhost:5000/api/contacto/", requestOptions);
  let jsonData = await response.json();
  setContactos(jsonData);
  console.log(jsonData);
};

export default getContactos;
