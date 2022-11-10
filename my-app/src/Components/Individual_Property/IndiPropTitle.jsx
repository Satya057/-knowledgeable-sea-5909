import React from 'react';
import propertyStyles from './IndividualProperty.module.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

export const IndiPropTitle = ({city, country, hotImg1, hotImg2, hotImg3, state, tagsArr, topTitle}) => {
    return (
        <div className={propertyStyles.individualPropPicsWalaHeadDiv}>
            <div className={propertyStyles.individualPropPicsWalaSUBDiv}>
                <div className={propertyStyles.individualPropPicsWalaImage1Div}>
                    <div className={propertyStyles.individualPropPicsWalaImage1SUBDiv}>
                        <img src={hotImg1} alt="IMG1" />
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div className={propertyStyles.individualPropPicsWalaImage2Div}>
                        <div className={propertyStyles.individualPropPicsWalaImage2SUBDiv}>
                            <img src={hotImg2} alt="IMG2" />
                        </div>
                    </div>
                    <div className={propertyStyles.individualPropPicsWalaImage2Div}>
                        <div className={propertyStyles.individualPropPicsWalaImage2SUBDiv}>
                            <img src={hotImg3} alt="IMG3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={propertyStyles.individualPropPicsWalaTitleHeadDiv}>
                <div className={propertyStyles.individualPropPicsWalaTitleSubDiv}>
                    <h1 style={{ fontSize: '30px !important', fontWeight: 300 }}>{topTitle}
                        <div style={{ display: 'block', marginTop: '20px', fontSize: '0.5em', color: '#484848' }} >
                            <span className={propertyStyles.individualPropLocIcon}> <LocationOnOutlinedIcon /> </span>
                            <span>{`${city}, ${state}, ${country}`}</span>
                        </div>
                    </h1>
                    <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
                    <div className={propertyStyles.individualPropTopTagsHeadDiv}>
                        {tagsArr.map((item, index) => (<div key={`tagNo${index+1}`}>
                            <span>{item}</span>
                        </div>) ) }
                    </div>
                </div>
            </div>
        </div>
    )
}