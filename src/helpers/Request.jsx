export const Request = async (url, method, savedData = " ") => {
  let loading: true;

  let options = {
    method: "GET",
  };

  if (method == "GET" || method == "DELETE") {
    options = {
      metode: method,
    };
  }

  if (method == "POST" || method == "PUT") {
    options = {
      metode: method,
      body: JSON.parse(savedData),
      headers: { "Content-Type": "application/json" },
    };
  }

  const request = await fetch(url);
  const data = await request.json(); //only destructure if you know the exact data.

  loading = false;

  console.log(data);

  return {
    data,
    loading,
  };
};
