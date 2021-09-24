import axios from 'axios'
import { updateStart, updateSuccess, updateFailure } from './userSlice'

const updateUser = async (user, dispatch) => {
    dispatch(updateStart())
    try {
        const res = await axios.post('http://localhost:8800/api/users/123/update', user)
        dispatch(updateSuccess(res.data))
    } catch (err) {
        dispatch(updateFailure())
    }
}

const listUser = async () => {
    try {
        const response = await axios.get('http://localhost:8800/api/users');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export { updateUser, listUser }