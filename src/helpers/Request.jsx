export const Request = async (url, metode, savedData = " ", files = false) => {
  let loading = true;

  let options = {
    method: "GET",
  };

  if (metode === "GET" || metode === "DELETE") {
    options = {
      method: metode,
    };
  }

  if (metode === "POST" || metode === "PUT") {
    let body = "";

    if (files) {
      options = {
        method: metode,
        body: savedData,
      };
    } else {
      body = JSON.stringify(savedData);
      options = {
        method: metode,
        body,
        headers: { "Content-Type": "application/json" },
      };
    }
  }

  const request = await fetch(url, options);
  const data = await request.json(); //only destructure if you know the exact data.

  loading = false;

  console.log(data);

  return {
    data,
    loading,
  };
};
