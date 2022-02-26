const ip = "http://localhost:8001/";


const api = {
  connectFetchController: async (
    path,
    method,
    token,
    body,
    callBack,
    errorCallBack,
    ) => {
      return fetch(`${ip}${path}`, {
      credentials: 'include',
      method: method,
      body: body ? body : null,
      headers: {
      }
    })
      .then(function (res) {
        return res.json();
      }) 
      .then(function (data) {
        if (callBack) callBack(data);
        return data;
      })
      .catch(function (e) {
        if (errorCallBack) errorCallBack(e);
      });
  },
};

export default api;
