// material-ui
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

// project import
import { drawerWidth } from 'config';

const openedMixin = (theme) => ({
    width: drawerWidth,
    borderRight: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        position: 'relative',
        float: 'right'
    }),
    overflowX: 'hidden',
    boxShadow: 'none'
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        position: 'relative',
        float: 'right'
    }),
    overflowX: 'hidden',
    width: 0,
    borderRight: 'none',
    boxShadow: theme.customShadows.z1
});

// ==============================|| DRAWER - MINI STYLED ||============================== //

const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    position: 'relative',
    float: 'right',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

export default MiniDrawerStyled;
