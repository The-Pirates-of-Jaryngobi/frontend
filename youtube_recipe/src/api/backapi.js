import axios from 'axios';

export async function checkDataInDB(menu_name) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/app/search', {
            menu_name: menu_name
        });
        console.log('서버 응답:', response.data);
        return response.data;
    } catch (error) {
        console.error('오류 발생:', error);
        return false;
    }
}
