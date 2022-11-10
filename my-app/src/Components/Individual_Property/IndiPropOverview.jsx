import React from 'react';
import propertyStyles from './IndividualProperty.module.css';

export const IndiPropOverview = () => {
    return (
        <div style={{textAlign:"left"}} id={propertyStyles.individualPropOverview}>
            <div className={propertyStyles.individualPropOverView2}>
                <div className={propertyStyles.individualPropOverView2LEFT}>
                    <div className={propertyStyles.individualPropTypeOfProperty}>
                        <div className={propertyStyles.individualPropTypeOfPropertyText}>
                            <span>Villa</span>
                            <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Type Of Property</span>
                        </div>
                    </div>
                    <div className={propertyStyles.individualPropBedAndBath}>
                        <div>
                            <span>2</span>
                            <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Bedrooms</span>
                        </div>
                    </div>
                    <div className={propertyStyles.individualPropBedAndBath}>
                        <div>
                            <span>2</span>
                            <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Bedrooms</span>
                        </div>
                    </div>
                    <div className={propertyStyles.individualPropBedAndBath}>
                        <div>
                            <span>2</span>
                            <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Bedrooms</span>
                        </div>
                    </div>
                    <div className={propertyStyles.individualPropBedAndBath}>
                        <div>
                            <span>2</span>
                            <span style={{ fontSize: '.875rem', lineHeight: 1.4, color: '#999' }}>Bedrooms</span>
                        </div>
                    </div>
                </div>
                <div className={propertyStyles.individualPropOverView2RIGHT}>
                    <div className={propertyStyles.individualPropContentDesc}>
                        It is a 2 BHK Beautiful Villa apartment setup with Gated 24 hr security.The complex has a Lawn tennis court and a swimming pool.Good for a small family or 02 Couples.Super Clean Apartment With the provision of Sofa Sets and Queen size beds the Apartment can accommodate up to 05 persons ( 02 couples or a couple with 02 Kids) Both the bedrooms have air conditioning.The Hall is provided with a 40' LCD TV With satellite connection. The cook will prepare food for the guest on the charges of INR.1000 for per day, if the guest wish to have meals outside then the restaurant is only 2 km's away, & the grocery store is 500m away from the property
                    </div>
                    <div style={{ marginTop: '15px', fontWeight: 'bolder', textAlign: 'left' }}>Best For</div>
                    <div className={propertyStyles.individualPropTopTagsHeadDiv}>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>VILLA</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>2 BEDROOMS</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>2 BATHROOMS</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>5 MAX GUESTS</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>WIFI</span>
                        </div>
                    </div>
                    <br />
                    <div style={{ color: '#1e87f0', textDecoration: 'none', cursor: 'pointer' }}>What can you do in & around Marna, Siolim</div>
                </div>
            </div>
        </div>
    )
}