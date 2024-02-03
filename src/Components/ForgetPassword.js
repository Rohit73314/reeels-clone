import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';



function ForgetPassword() {
    const [email, setEmail] = useState('');
    const { forgetpassword } = useContext(AuthContext);

    const handleClick = async () => {
        try {

            let res = await forgetpassword(email);
            console.log(res);

        } catch (err) {
            console.log(err);

        }
    }
    return (
        <div className='forgetpasscard' style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
            <Card variant='outlined' style={{ width: '30vw', backgroundColor: "skyblue" }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', fontFamily: 'cursive' }}><i>Password Recovery</i></h1>
                <CardContent>
                    {/* {error!='' && <Alert severity="error">{error}</Alert>} */}
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small' value={email} onChange={(e) => setEmail(e.target.value)} />
                </CardContent>

                <CardActions>
                    <Button color="primary" fullWidth={true} variant='contained' onClick={handleClick}  >
                        Reset Password
                    </Button>
                </CardActions>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/login" > <Button>back</Button></Link>

                </div>

            </Card>



        </div>


    )
}

export default ForgetPassword