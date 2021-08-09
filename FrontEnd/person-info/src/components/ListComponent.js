import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAll ,selectPerson} from '../redux/actions/people.actions';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import  './PersonList.css';
const ListCompnent = (props) => {
    useEffect(() => {
        props.fetchAll();
    }, []);

   const  rowClicked=(data)=>{
     props.selectPerson(data);
    }
    
    return (
        <>
            <h2>Personal Data</h2>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell >ID</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Phone</TableCell>
                            <TableCell >Address</TableCell>
                            <TableCell >Blood Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            props.PeopleList.map(a => {
                                return (<TableRow onClick={()=>rowClicked(a)} className="hover-element" key={a.id}>
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
        </>
    );
}
const mapStateToProps = state => ({
    PeopleList: state.peopleReducer.list
});
const mapActionToProps = {
    fetchAll: fetchAll,
    selectPerson:selectPerson
}


export default connect(mapStateToProps, mapActionToProps)(ListCompnent);