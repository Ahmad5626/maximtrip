const baseAPI = "http://localhost:7000";
export const getPage = async () => {
    try {
        const data = await fetch(`${baseAPI}/v1/api/get-page`);
        const res = await data.json();
        return res;
    } catch (error) {
        return error;
    }
}