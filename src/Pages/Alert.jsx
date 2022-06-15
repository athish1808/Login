import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import React from 'react'
import { UserState } from '../Context/Context'

const Alert = () => {

    const {alert,setAlert}=UserState();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setAlert({open:false})
    }
  return (
        <Snackbar open={alert.open} autoHideDuration={4000} onClose={handleClose}>
            <MuiAlert onClose={handleClose} elevation={10} severity={alert.type} variant='filled'>{alert.message}</MuiAlert>
      </Snackbar>
  )
}

export default Alert