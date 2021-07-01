import { Grid, Paper, makeStyles, Avatar, TextField, FormControlLabel, Checkbox } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
  paper: {
    padding: 20,
    height: '70vh',
    width: 380,
    margin: '20px auto'
  },
  avatar: {
    backgroundColor: '#6200bd'
  }
})

export default function Login() {
  const classes = useStyles()
  return (
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <Grid align="center">
          <Avatar className={classes.avatar}><LockOutlined /></Avatar>
        </Grid>
        <h2>Login</h2>
        <TextField label='Email, CPF ou PIS' placeholder="Digite o usuário" fullWidth required />
        <TextField label='Senha' placeholder="Digite a senha" fullWidth required type="password" />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Lembrar a senha"
          />
      </Paper>
    </Grid>
      )
}

