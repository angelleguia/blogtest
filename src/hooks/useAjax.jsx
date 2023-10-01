import { useEffect, useState } from "react";

export const useAjax = (url, method, savedData) => {
  const [state, setState] = useState({
    //properties
    info: null,
    loading: true,
  });

  const getData = async () => {
    setState({
      ...state,
      loading: true,
    });

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
    console.log(data);

    setState({
      info: data,
      loading: false,
    });
  };

  useEffect(() => {
    getData();
    console.log(url);
  }, [url]);

  return {
    info: state.info,
    loading: state.loading,
  };
};
