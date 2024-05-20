import Axios, { Method } from 'axios';

function useRequests() {
  async function request<Response, Data = undefined>(url: string, method: Method = "GET", data?: Data): Promise<any> {
    const response = await Axios({
      method,
      url: `${process.env.VALCOSY_DOMAIN}${url}`,
      data
    });
    return response;
  }
  return request
}

export default useRequests;
