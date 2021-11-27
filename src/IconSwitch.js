import ForumIcon from "@mui/icons-material/Forum";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MmsIcon from '@mui/icons-material/Mms';
import * as React from "react";

const iconSwitch = (text) => {
    // eslint-disable-next-line default-case
    switch (text) {
        case 'Беседка':
            return <ForumIcon />;
        case 'Спорт':
            return <SportsBaseballIcon />;
        case 'Игры':
            return <SportsEsportsIcon />;
        default:
            return <MmsIcon />;
    }
}

export default iconSwitch;