import React from 'react';
import propertyStyles from './IndividualProperty.module.css';


export const IndiPropMap = () => {
    return (
        <div className={propertyStyles.individualPropMapsMain}>
            <div style={{ fontSize: '1.5rem', lineHeight: 1.5, color: '#333', textAlign: 'left' }}>Map</div>
            <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
            <div className={propertyStyles.individualPropRealMap}>
                <div className={propertyStyles.yeHaiMapWalaDiv}>

                </div>
            </div>
        </div>
    )
}