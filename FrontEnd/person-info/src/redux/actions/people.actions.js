import People from '../api/people';
export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchAll = () => dispatch => {
    People.PepleApi().fetchAll().then(response => {
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: response.data
        });
    }).catch(errors => {
        console.log(errors);
    });

}

export const postData = (data) => dispatch => {
    console.log(data);
    alert("sending request ..");
    People.PepleApi().postData(data).then(response => {
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: response.data
        });
        alert("Successfull Adding");

    }).catch(errors => {
        console.log(errors);
    });

}