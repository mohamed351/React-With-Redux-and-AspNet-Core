import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../redux/actions/people.actions';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
const ListCompnent = (props) => {
    useEffect(() => {
        props.fetchAll();
    }, []);
    console.log(props.PeopleList)
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
                                return (<TableRow key={a.id}>
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
    fetchAll: fetchAll
}


export default connect(mapStateToProps, mapActionToProps)(ListCompnent);