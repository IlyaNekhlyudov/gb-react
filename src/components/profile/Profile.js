import Paper from "@mui/material/Paper";
import {Button, TextField} from "@mui/material";
import * as React from "react";
import Navigation from "../navigation/Navigation";

const Profile = ({textFieldRef, rename, userName}) => {
    return (
        <div className='template'>
            <div style={{width: '30%', marginBottom: '20vh'}}>
                <Paper
                    elevation={3}
                    sx={{
                        backgroundColor: 'cornflowerblue',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '40px',
                        borderRadius: '0',
                    }}
                >
                    <span className='template-heading-p'>Настройки профиля</span>
                </Paper>
                <Paper
                    elevation={3}
                    sx={{
                        padding: '20px',
                        flexDirection: 'row',
                        display: 'flex',
                        borderRadius: '0',
                        height: '20vh',
                        justifyContent: 'center'
                    }}
                >
                    <TextField
                        id="input-with-sx"
                        label="Введите имя"
                        variant="standard"
                        defaultValue={userName}
                        inputRef={textFieldRef}
                        sx={{
                            width: '200px',
                            marginTop: '20px'
                        }}
                    />

                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {rename(textFieldRef.current.value)}}
                        sx={{
                            height: '40px',
                            marginLeft: '10px',
                            marginTop: '20px'
                        }}
                    >
                        Изменить
                    </Button>
                </Paper>
            </div>
            <Navigation />
        </div>
    );
}

export default Profile;