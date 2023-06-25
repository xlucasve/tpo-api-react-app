const getContactos = async (setContactos, token) => {
  var myHeaders = new Headers();
  myHeaders.append("jwt", token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let response = await fetch(
    "http://localhost:5000/api/contacto/",
    requestOptions
  );
  let responseData = await response.json();
  setContactos(responseData.contactos);
  console.log(responseData);
};

export default getContactos;
