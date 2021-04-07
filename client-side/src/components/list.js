import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux'
import * as actions from '../actions/User'
const UserList = ({ ...props }) => {
    useEffect(() => {
        props.fetchAllUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <TableContainer component={Paper}>

            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Adress</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.userList.map((record, index) => {
                        return(
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {record.name ?? 'Nothing was found'}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {record.address}
                            </TableCell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state => ({
    userList: state.users.list
})
const mapActionToProps = {
    fetchAllUsers: actions.fetchAll
}
export default connect(mapStateToProps, mapActionToProps)(UserList)