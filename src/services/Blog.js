
const baseAPI = "http://localhost:7000";
export const getBlog = async () => {
    try {
        const data = await fetch(`${baseAPI}/v1/api/get-blog`);
        const res = await data.json();
        return res;
    } catch (error) {
        return error;
    }
}