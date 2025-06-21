import { baseUrl } from "@/utils/constant";
export const getDestination = async () => {
    try {
        const data = await fetch(`${baseUrl}/v1/api/get-destination`);
        const res = await data.json();
        return res;
    } catch (error) {
        return error;
    }
}