
import { baseUrl } from "@/utils/constant";
export const getBlog = async () => {
    try {
        const data = await fetch(`${baseUrl}/v1/api/get-blog`);
        const res = await data.json();
        return res;
    } catch (error) {
        return error;
    }
}