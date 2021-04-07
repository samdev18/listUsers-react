import { TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/User'
import UseForm from './useForm'
const initialState = {
    username: ''
}

const Form = ({...props})=>{

    const {values,setValues, error, setErrors,handleInputChange} = UseForm(initialState)
    const handleKeyUp = (e) =>{
        if(!values.username){

            props.fetchAllUsers()
        }else{

            props.fetchByName(values.username)
        }
    }
    return (
        <form>
            <TextField name="username" variant="outlined" label="user name" onChange={handleInputChange} onKeyUp={handleKeyUp} fullWidth value={values.username}></TextField>
      </form>
    )
}

const mapStateToProps = state => ({
    postMessageList: state.users.list
})
const mapActionToProps = {
    fetchByName: actions.fetchByName,
    fetchAllUsers: actions.fetchAll
}
export default connect(mapStateToProps, mapActionToProps)(Form);