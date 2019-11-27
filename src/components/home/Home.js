import React,{Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Drawer,Card, CardContent} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Matches from '../component/Matches';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Home(){
        const classes = useStyles();
        return(
            <div className={classes.root}>

            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="left"
            >
              <Card className={classes.toolbar} style={{backgroundColor:'#09F',borderRadius:'0',color:'#FFF'}} elevation='0' >
                  <CardContent>Baji DashBoard</CardContent>
              </Card>
              <List>
                {['Matches', 'Onboaring Baji', 'Open baji', 'User Amount Requests',].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            
            </Drawer>
            <main className={classes.content}>
                  <Matches/>
            </main>
          </div>
        );
}