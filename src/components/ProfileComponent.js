import {Button, TextField} from "@mui/material";
import store from "../store/actions";
import Paper from "@mui/material/Paper";
import * as React from "react";
import {Link} from "react-router-dom";
import {useRef} from "react";

const renameUser = (name) => {
    if (!/\S/g.test(name)) return false;
    store.dispatch({type: 'rename', text: name});
    return true;
};

const ProfileComponent = () => {
    const textFieldRef = useRef(null);

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
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TextField
                        id="input-with-sx"
                        label="Введите имя"
                        variant="standard"
                        defaultValue={store.getState().name}
                        inputRef={textFieldRef}
                        sx={{
                            width: '200px'
                        }}
                    />

                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {renameUser(textFieldRef.current.value)}}
                        sx={{
                            height: '40px',
                            marginLeft: '10px'
                        }}
                    >
                        Изменить
                    </Button>
                </Paper>
            </div>
            <Link to='/'>На главную</Link>
        </div>

    );
}

export default ProfileComponent;

