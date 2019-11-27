import React,{Component, Fragment} from 'react';
import {Box, Card,GridList, CardHeader, CardContent, Grid} from '@material-ui/core';
import axios from 'axios';

const matchListCard={
    width:'300px',
    height:'auto',
    marginTop:'10px',
    borderRadius:'8px',
    marginLeft:'10px',
    marginRight:'10px',
    marginBottom:'10px',
    textAlign:'center'
};
const teamLogo={
    height:'80px',
    width:'80px'
};

class Matches extends Component{
    constructor(props){
        super(props);
        this.state={
            items:["milan","shrestha","anil","shrestha"],
            data : null
        }
    }

    componentDidMount(){
        //const header = `Authorization: "asdasdsadasdasd"`;
    //     axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
    //   .then(res => {
    //     const data = res.data;
    //     this.setState({ data : data });
    //     console.log("data", data);
    //   })

        fetch("https://baji-karo.herokuapp.com/game/match/list")
        .then(response=>{ 
            
            return response.json(); })
        .then(data=>{ 
            this.setState({
                data:data
            })
            // console.log("data",data);
        });
    }

    render(){
        const  {data}= this.state;
        

        if (!data) return null;
        console.log("log data",data.games)
        

        return(
            <div>
                {
                    data.games.map((data,index)=>{
                        return(
                            <Fragment key={index}>
                
                <Box component="div">
                    <div>
                        <div style={{fontSize:'30px',fontWeight:'bold'}}>{data.name}</div>
                     <div style={{fontSize:'16px',marginTop:'5px'}}>aa</div>
                    </div>

                    <GridList cols={2.5} style={{marginTop:'20px'}}>
                        { data.matches === [] ? null
                        :
                        data.matches.map((value,index)=>{
                            return(
                                <Card style={matchListCard} key={index}>
                                     <CardHeader 
                                     title={
                                         <div style={{fontSize:'18px',fontWeight:'bold',color:'#E91E63',fontFamily:'semibold'}}>
                                             {data.matches[index].timeStamp}
                                         </div>
                                     }
                                     
                                     subheader={
                                     <div style={{fontSize:'12px',color:'#000',fontFamily:'medium',marginTop:'3px'}}>aa</div>
                                    }>
                                     </CardHeader>

                                     <CardContent>
                                      <Grid container >
                                          {/* for team one logo and name*/}
                                          <Grid item sm>
                                              <div>
                                                <img style={teamLogo} src={data.matches[index].teamOne.imageUrl} alt="Team One"/>
                                              </div>
                                              <div style={{fontSize:'12px',color:'gray',marginTop:'5px'}}>{data.matches[index].teamOne.name}</div>
                                         </Grid>

                                          {/* for vs and time layout*/}
                                          <Grid item sm style={{textAlign:'center'}}>
                                              <div style={{fontSize:'18px',fontWeight:'bold',color:'#E91E63',marginTop:'10px'}}>Vs</div>
                                              <div style={{fontSize:'12px',color:'gray',marginTop:'5px'}}>12:45 PM</div>
                                          </Grid>

                                          {/* for team two logo and name*/}
                                          <Grid item sm>
                                                <div>
                                                <img style={teamLogo} src={data.matches[index].teamTwo.imageUrl} alt="Team two"/>   
                                              </div>
                                              <div style={{fontSize:'12px',color:'gray',marginTop:'5px'}}>{data.matches[index].teamTwo.name}</div>
                                          </Grid>
                                      </Grid>
                                      <div style={{marginTop:'20px',fontSize:'14px',fontWeight:'bold',color:'#12A234',textAlign:'left'}}>Total Baji: 44</div>
                                     </CardContent>
                                                                     
                                </Card>
                            )
                        })}
                        
                    </GridList>
                </Box>
            </Fragment>
                        );
                    })
            
                }
            </div>
            
            );
    }
}
export default Matches;