# React With Redux
## This Application about React And Redux CRUD
### 1- Install React , React Redux , Redux Thunk
```
 npm install react react-redux redux thunk
```
### 2- Create React Store in folder Store
``` js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/* The First Paramter recive a reducer and the 2 paramter of add multi middlewares */
export const store = createStore({}, compose(applyMiddleware(thunk)));
```
### 3- Use Provider Component in React-Redux 
``` js
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
function App(){
    return (
     <Provider store={store}>
     </Provider>
    ) 
}
```
### 4- Create Actions and Action Types
```js
export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}
export const fetchAll = () => dispatch => {
    dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: []
    });
}
```
### 5-Create Reducer and Combine Reducers
```js
/*Example of Reducer */
import { ACTION_TYPES } from '../actions/people.actions';

const intialState = {
    list: []
}
export const peopleReducer = (state = intialState, actions) => {
    switch (actions.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...actions.payload]
            }
        default:
            return state;
    }
}
/* Combine Reducers */
/*if you have more than one reducer */
export const reducers = combineReducers({ peopleReducer });
```
### 6- Connection Component with Redux 
``` js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../redux/actions/people.actions';
const ListCompnent = (props) => {
    useEffect(() => {
        props.fetchAll();
    }, []);
    console.log(props)
    return (<div>
        Hello World
    </div>);
}
const mapStateToProps = state => ({
    PeopleList: state
});
const mapActionToProps = {
    fetchAll: fetchAll
}
```

export default connect(mapStateToProps, mapActionToProps)(ListCompnent);

## Make Project 
- you have setup redux and Install any UI Package i just installed 
https://material-ui.com/

##  first Component Which is list 
``` js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../redux/actions/people.actions';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
const ListCompnent = (props) => {
    useEffect(() => {
        props.fetchAll();
    }, []);
    console.log(props.PeopleList)
    return (<TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Blood Type</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                {
                    props.PeopleList.map(a => {
                        return (<TableRow>
                            <TableCell> {a.id}</TableCell>
                            <TableCell> {a.name}</TableCell>
                            <TableCell>{a.phone}</TableCell>
                            <TableCell>{a.address} </TableCell>
                            <TableCell>{a.bloodGroup}</TableCell>
                        </TableRow>)
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
    );
}
const mapStateToProps = state => ({
    PeopleList: state.peopleReducer.list
});
const mapActionToProps = {
    fetchAll: fetchAll
}


export default connect(mapStateToProps, mapActionToProps)(ListCompnent);

```
### 3- Create a form 
```js
import React, { useState } from 'react';
import { postData } from '../redux/actions/people.actions';
import { TextField, MenuItem, Select, InputLabel, Button } from '@material-ui/core';
import { connect } from 'react-redux';

const PersonComponent = (props) => {
    const [open, setOpen] = React.useState(false);
    const [bloodGroup, setbloodGroup] = React.useState('');
    const [values, setValues] = React.useState({
        name: '',
        phone: '',
        address: '',
        bloodGroup: ''
    })
    const handleChange = (event) => {
        setbloodGroup(event.target.value);
        setValues({
            ...values,
            bloodGroup: event.target.value
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submit");
        console.log(e);
        props.postData(values);
    }
    return (
        <div>
            <h2>Personal Info</h2>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField onChange={handleInputChange}
                    label="Name"
                    style={{ margin: "10px" }}
                    variant="outlined"
                    value={values.name}
                    name="name" />

                <TextField label="Phone" onChange={handleInputChange}
                    style={{ margin: "10px" }}
                    variant="outlined"
                    value={values.phone}
                    name="phone" />

                <TextField label="Address" onChange={handleInputChange}
                    style={{ margin: "10px" }}
                    variant="outlined"
                    value={values.address}
                    name="address"
                />

                <div style={{ marginLeft: "10px", width: "90%" }}>
                    <InputLabel id="label">Age</InputLabel>
                    <Select
                        style={{ width: "100%" }}
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={bloodGroup}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'A'}>A</MenuItem>
                        <MenuItem value={'B'}>B</MenuItem>
                        <MenuItem value={'O'}>O</MenuItem>
                    </Select>
                </div>

                <div style={{ marginTop: "25px" }}>
                    <Button type="Submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = state => ({
    PeopleList: state.peopleReducer.list
});
const mapActionToProps = {
    postData: postData
}

export default connect(mapStateToProps, mapActionToProps)(PersonComponent);

```





