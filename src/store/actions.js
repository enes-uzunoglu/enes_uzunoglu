import { CV_DATA_GET, API_CALL_SUCCESS, API_CALL_FAILURE,SAVE_DATA} from "./actionTypes";
import axios from "axios";

export const getData = () => {  // iç içe 2 fonksıyon oldu
    return async (dispatch) => {
        dispatch({ type: CV_DATA_GET }); // Yükleme başladı
        
        try {
            const response = await axios.get('https://6737a73c4eb22e24fca5d5a2.mockapi.io/dev/enes_uzunoglu');
            dispatch({ type: API_CALL_SUCCESS, payload: response.data }); // Veri geldi
        } catch (error) {
            dispatch({ type: API_CALL_FAILURE, payload: error.message }); // Hata oldu
        }
    };
};

export const saveData = (parameter) => {
    return{
        type:SAVE_DATA,
        payload:parameter
    }
}
