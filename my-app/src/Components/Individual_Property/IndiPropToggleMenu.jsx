import React from 'react';
import propertyStyles from './IndividualProperty.module.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import TocOutlinedIcon from '@material-ui/icons/TocOutlined';

export const IndiPropToggleMenu = () => {
    return (
        <div className={propertyStyles.individualPropToggleMenu}>
            <ul className={propertyStyles.individualPropToggleMenuUL}>
                <li className={propertyStyles.individualPropToggleMenuLI}>
                    <InfoOutlinedIcon style={{ color: '#999' }} /> <span>OVERVIEW</span>
                </li>
                <li className={propertyStyles.individualPropToggleMenuLI}>
                    <LocalOfferOutlinedIcon style={{ color: '#999' }} /> <span>AMENITIES</span>
                </li>
                <li className={propertyStyles.individualPropToggleMenuLI}>
                    <LocationOnOutlinedIcon style={{ color: '#999' }} /> <span>MAP</span>
                </li>
                <li className={propertyStyles.individualPropToggleMenuLI}>
                    <TocOutlinedIcon style={{ color: '#999' }} /> <span>POLICIES & FEES</span>
                </li>
            </ul>
        </div>
    )
}