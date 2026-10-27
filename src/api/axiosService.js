import axiosInstance from "./axiosinstance";

const axiosService = async (httpMethod, url, reqbody) => {
    try {
        const response = await axiosInstance({
            method: httpMethod,
            url,
            data: reqbody
        })
        return response
    } catch (error) {
        throw error
    }
}
export default axiosService