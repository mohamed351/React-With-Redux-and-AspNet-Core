import React, { useState } from 'react';
import { postData, clearPerson } from '../redux/actions/people.actions';
import { TextField, MenuItem, Select, InputLabel, Button , FormControl} from '@material-ui/core';
import { connect } from 'react-redux';


const PersonComponent = (props) => {
    const [open, setOpen] = React.useState(false);
    const [bloodGroup, setbloodGroup] = React.useState('');
    const [id, setID] = useState(-1);
    const [values, setValues] = React.useState({
        name: '',
        phone: '',
        address: '',
        bloodGroup: '',
        
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
    const clearText =()=>{
        setValues({
            name: '',
            phone: '',
            address: '',
            bloodGroup: '',
        })
        setID(-1);
        setbloodGroup('');
        props.clearPersonEdit();
    }
    return (
        <div>
            <h2>Personal Info</h2>
            {props.SelectedPerson != null ? props.SelectedPerson.id : 'not Exist'}
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <input type="hidden" value={values.id} name="id" onChange={handleChange} />
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

<FormControl style={{width:"222px"}} variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">Blood Group</InputLabel>
                    <Select
                       style={{ margin: "10px" }}
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
      </FormControl>
                    
               

                <div style={{ marginTop: "25px" }}>
                    <Button type="Submit" variant="contained" color="primary">
                        Submit
                    </Button>
                        |
                    <Button type="Button" onClick={clearText} variant="contained" color="default">
                         Clear
                    </Button>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = state => ({
    PeopleList: state.peopleReducer.list,
    SelectedPerson:state.peopleReducer.selectedPerson
   
});
const mapActionToProps = {
    postData: postData,
    clearPersonEdit:clearPerson
}

export default connect(mapStateToProps, mapActionToProps)(PersonComponent);