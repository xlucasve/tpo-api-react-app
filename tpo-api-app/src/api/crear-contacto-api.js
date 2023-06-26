const crearContacto = async (formState, token) => {
  var myHeaders = new Headers();
  myHeaders.append("jwt", token);
  myHeaders.append("Content-Type", "application/json");

  console.log(formState.inputs.nombreEmpresa.value);
  console.log(formState.inputs);

  var raw = JSON.stringify({
    nombreEmpresa: formState.inputs.nombreEmpresa.value,
    nombreReclutador: formState.inputs.nombreReclutador.value,
    correoReclutador: formState.inputs.correoContacto.value,
    telefonoReclutador: formState.inputs.telefonoContacto.value,
    tituloPuesto: formState.inputs.tituloPuesto.value,
    descripcionPuesto: formState.inputs.descripcionPuesto.value,
    montoOfrecido: formState.inputs.montoOfrecido.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let response = await fetch(
    "http://localhost:5000/api/contacto/post",
    requestOptions
  );
  if (response.status === 201) {
    console.log("Se creo el contacto exitosamente");
  } else {
    console.log(response.message);
  }
};

export default crearContacto;
