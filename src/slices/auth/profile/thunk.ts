//Include Both Helper File with needed methods
// action
import { resetProfileFlagChange } from "./reducer";



export const resetProfileFlag = () => {
    try {
        const response = resetProfileFlagChange();
        return response;
    } catch (error) {
        return error;
    }
};