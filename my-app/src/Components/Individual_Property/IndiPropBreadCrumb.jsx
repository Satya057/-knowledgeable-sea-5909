import React from 'react';
import propertyStyles from './IndividualProperty.module.css';

export const IndiPropBreadCrumb = ({country, state, city, _id}) => {
    return (
        <div className={propertyStyles.individualPropTopBreadcrumbDiv}>
            <ul className={propertyStyles.individualPropTopBreadcrumbUL}>
                <li className={propertyStyles.individualPropTopBreadcrumbLI}>Home‎</li>
                <span style={{margin:'0px 10px'}}>/</span>
                <li className={propertyStyles.individualPropTopBreadcrumbLI}>{country}</li>
                <span style={{margin:'0px 10px'}}>/</span>
                <li className={propertyStyles.individualPropTopBreadcrumbLI}>{state}</li>
                <span style={{margin:'0px 10px'}}>/</span>
                <li className={propertyStyles.individualPropTopBreadcrumbLI}>{city}‎</li>
                <span style={{margin:'0px 10px'}}>/</span>
                <li className={propertyStyles.individualPropTopBreadcrumbLI}>{_id}</li>
            </ul>
            <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
        </div>
    )
}
