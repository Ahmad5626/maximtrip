import { baseUrl } from "@/utils/constant";
export const getPage = async () => {
    try {
        const data = await fetch(`${baseUrl}/v1/api/get-page`);
        const res = await data.json();
        return res;
    } catch (error) {
        return error;
    }
}