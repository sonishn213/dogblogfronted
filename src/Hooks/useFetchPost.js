import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
const useFetchPost = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const insertTo = useCallback((DataTOInsert) => {
    setLoading(true);
    axios
      .post(url, DataTOInsert)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    return [data, loading, error, insertTo];
  });

  return [data, loading, error, insertTo];
};

export default useFetchPost;
