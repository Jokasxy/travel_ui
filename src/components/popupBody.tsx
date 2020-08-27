import React from 'react';
import { Location } from '../types/locationsResponse';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core';

interface Props {
    location: Location;
}

const PopupBody = (props: Props) => {
    const { location } = props;
    const classes = useClasses();

    return (
        <>
            <h3 className={classes.title}>{location.name}</h3>
            <p>Country: {location.country}</p>
            <Carousel className={classes.carousel} infiniteLoop showThumbs={false}>
                {location.imageurls.map((url: string, key: number) =>
                    <img key={key} src={url} />
                )}
            </Carousel>
            <p>{location.description}</p>
        </>
    )
}

export default PopupBody;

const useClasses = makeStyles({
    carousel: {
        '& .slide': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '& img': {
            maxHeight: '250px',
        },
    },
    title: {
        textAlign: 'center',
        fontSize: '1.4em',
    },
})
