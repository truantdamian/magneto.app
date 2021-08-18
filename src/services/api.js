const apiURL = "https://midas-mutantdna.herokuapp.com/";
const initialResponse = {
  body: { isMutant: false },
  hasError: false,
  messageError: "",
};

const messageErrorException =
  "Ha ocurrido un problema, comunicate con nosotros.";

const sendPost = async (url, dataRequest) => {
  try {
    const response = await fetch(`${apiURL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dna: dataRequest,
      }),
    });

    console.log(dataRequest);
    return { ...initialResponse, body: { isMutant: response.ok } };
  } catch (error) {
    console.log(error);
    return {
      ...initialResponse,
      hasError: true,
      messageError: messageErrorException,
    };
  }
};

export const detectMutantDNA = async (dna) => {
  return await sendPost("mutant/", dna);
};
