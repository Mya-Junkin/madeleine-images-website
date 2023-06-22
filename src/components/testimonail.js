import { Card, Grid } from '@mui/material'

const Testimonial = ({title=null, message, name, org=null, imageEx}) => {
    return(
        <Card style={{width: '40vw', height: '250px'}}>
        <Grid container spacing={2}>
        <Grid item>
            <img alt="complex" src={ imageEx } height={'250px'}/>
        </Grid>
        <Grid item xs={12} sm container >
          <Grid item xs container direction="column">
            <Grid item xs>
              <h2>{ title }</h2>
              <p>"{ message }"</p>
            </Grid>
            <Grid item>
              <h4>{ name }<br />{ org }</h4>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Card>
    );
}

export default Testimonial;