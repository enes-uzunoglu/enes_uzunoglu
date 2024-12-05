import { CV_DATA_GET, API_CALL_SUCCESS, API_CALL_FAILURE, SAVE_DATA } from "./actionTypes";

const initialState = {
    data: [],      // API'den gelen veriyi tutacak dizi
    loading: false, // Yükleme durumu
    error: null,   // Hata durumu

    cvData:[]
  };

export const dataApiReducer = (state = initialState,action) => {
  switch (action.type) {

    case CV_DATA_GET:
        return { ...state, loading: true, error: null }; // Yükleme başlat
    case API_CALL_SUCCESS:
        return { ...state, loading: false, data: action.payload }; // Yükleme tamamlandı
    case API_CALL_FAILURE:
        return { ...state, loading: false, error: action.payload }; // Hata oluştu
    default:
        return state;
  }
}

export const appReducer = (state=initialState,action) => {
    switch (action.type) {
        case SAVE_DATA:
            return {...state,cvData:action.payload}
        default:
            return state;
    }
}

