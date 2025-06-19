const baseAPI = "http://localhost:7000";
export const getDestination = async () => {
    try {
        const data = await fetch(`${baseAPI}/v1/api/get-destination`);
        const res = await data.json();
        return res;
    } catch (error) {
        return error;
    }
}