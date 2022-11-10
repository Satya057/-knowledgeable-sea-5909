import React from 'react';
import { NavBar } from '../Home_NavBar/NavBar';
import propertyStyles from './IndividualProperty.module.css';
import { IndiPropPricing } from './IndiPropPricing';
import { IndiPropBreadCrumb } from './IndiPropBreadCrumb';
import { IndiPropPolicies } from './IndiPropPolicies';
import { IndiPropMap } from './IndiPropMap';
import { AmenitiesBox } from './AmenitiesBox';
import { IndiPropOverview } from './IndiPropOverview';
import { IndiPropToggleMenu } from './IndiPropToggleMenu';
import { IndiPropTitle } from './IndiPropTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHotel } from '../../Redux/SingleHotel/action';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ErrorPage } from '../Error_Page/ErrorPage';

export const IndividualProperty = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.singleHotels.data);
    const isLoading = useSelector(state => state.singleHotels.isLoading);
    const isError = useSelector(state => state.singleHotels.isError);

    useEffect(() => {
        dispatch(getHotel(id));
    }, [dispatch, id]);

    // const { amenitiesArr, basePrice, city, country, hotImg1, hotImg2, hotImg3, latitude, longitude, mapLink, state, tagsArr, topTitle } = data;
    return (
        isLoading ? <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <CircularProgress />
      </Box> :
            isError ? <ErrorPage/> : <div>
                <NavBar />
                <div className={propertyStyles.individualPropMainFlexDiv674}>
                    <div>
                        <IndiPropBreadCrumb {...data} />
                        <IndiPropTitle {...data} />
                        <IndiPropToggleMenu />
                        <IndiPropOverview />
                        <AmenitiesBox {...data} />
                        <IndiPropMap />
                        <IndiPropPolicies {...data} />
                    </div>
                    <IndiPropPricing {...data} />
                </div>
            </div>
    )
}