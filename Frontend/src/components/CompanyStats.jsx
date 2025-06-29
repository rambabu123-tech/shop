import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import {serverURL} from '../constants'

const CompanyStats = ({finalSearchValue}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(finalSearchValue == ""){
          setData(null)
            return 
        }
        const response = await fetch(serverURL + 'counturl/' + finalSearchValue);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [finalSearchValue]);

  return (
    <Container style={{ minWidth: '100%' , margin:10,  flexGrow:1}}>
      <Grid container spacing={2} justifyContent="space-evenly" style={{width: '100%'}}>
        {data &&
          Object.entries(data).map(([source, count]) => (
            <Grid item xs={12} sm={4} key={source}>
              <Card>
                <CardContent style={{textAlign:'center'}}>
                  <Typography variant="h5" component="div" style = {{textTransform: 'capitalize'}} >
                    {source}
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {count}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CompanyStats;
