export const Request = async (url, metode, savedData = " ") => {
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
    options = {
      method: metode,
      body: JSON.stringify(savedData),
      headers: { "Content-Type": "application/json" },
    };
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
