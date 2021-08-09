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