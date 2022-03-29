import React, {useState, useEffect, createRef} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'; 

const List = ({ place, childClicked }) => {
    const classes = useStyles();
    const {type, setType} = useState('restaurants');
    const {rating, setRating} = useState('')
    const [elRefs, setElRefs] = useState([]);

useEffect(() => {
    const refs = Array(places.length).fill().map((_, i) =>refs[i] || createRef()));

    setElRefs(refs);

}, [place]);
   

    return(
        <div className={classes.container}>
            <Typography variant="h4"> Restraunts, Hotels and Attractions around you</Typography>
            <FormControl className={classes.formcontrol}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants"> Restaurants </MenuItem>
                    <MenuItem value="hotels"> Hotels </MenuItem>
                    <MenuItem value="attractions"> Attractions </MenuItem>
                    </Select>
            </FormControl>
            <FormControl className={classes.formcontrol}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}> All </MenuItem>
                    <MenuItem value={3}> Above 4.0 </MenuItem>
                    <MenuItem value={4.5}> Above 4.5 </MenuItem>
                    </Select>
            </FormControl>
            <Grid container spacing ={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid  ref={elRefs[i]} item key={i} xs={12} >
                        <PlaceDetails 
                        place={place} 
                        selected={Number(childClicked) === i}
                        refProp={elRefs[i]}
                        />
                        </Grid>

                ))}
                </Grid>
            
        </div> 
        );
}

export default List;