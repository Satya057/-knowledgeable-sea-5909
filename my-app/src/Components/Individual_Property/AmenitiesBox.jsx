import React from 'react';
import propertyStyles from './IndividualProperty.module.css';

export const AmenitiesBox = ({amenitiesArr}) => {
    return (
        <div className={propertyStyles.individualPropAmenitiesMain}>
            <div style={{ fontSize: '1.5rem', lineheight: 1.5, color: '#333', textAlign: 'left' }}>Key Amenities</div>
            <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
            <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                {amenitiesArr.filter((item, index) => index < 15).map((item, index) => (<div key={`amenNo${index+1}`} style={{ padding: '7px 15px 8px 0px' }}>
                    <span style={{ border: '1px solid #ddddde', color: '#666' }}>{item}</span>
                </div>))}
            </div>
            <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Living Room</div>
            <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                <div style={{ padding: '7px 15px 8px 0px' }}>
                    <span style={{ border: '1px solid #ddddde', color: '#666' }}>TELEVISION WITH CABLE CONNECTION</span>
                </div>
                <div style={{ padding: '7px 15px 8px 0px' }}>
                    <span style={{ border: '1px solid #ddddde', color: '#666' }}>SOFA</span>
                </div>
                <div style={{ padding: '7px 15px 8px 0px' }}>
                    <span style={{ border: '1px solid #ddddde', color: '#666' }}>DINING TABLE</span>
                </div>
            </div>
            <div style={{ alignContent: 'space-around', flexWrap: 'wrap', display: 'flex' }}>
                <div style={{ width: '50%', boxSizing: 'border-box', marginBottom: '20px' }}>
                    <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Bedroom 1</div>
                    <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>AC</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>WARDROBE</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>BALCONY</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>1 QUEEN BED(S)</span>
                        </div>
                    </div>
                </div>
                <div style={{ width: '50%', boxSizing: 'border-box', marginBottom: '20px' }}>
                    <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Bedroom 2</div>
                    <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>AC</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>WARDROBE</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>1 QUEEN BED(S)</span>
                        </div>
                    </div>
                </div>
                <div style={{ width: '50%', boxSizing: 'border-box', marginBottom: '20px' }}>
                    <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Bathroom 1</div>
                    <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>WESTERN TOILET</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>TOILET PAPER</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>JET SPRAY</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>BATH TUB</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>SANITIZER</span>
                        </div>
                    </div>
                </div>
                <div style={{ width: '50%', boxSizing: 'border-box', marginBottom: '20px' }}>
                    <div style={{ fontWeight: 'bolder', textAlign: 'left' }}>Bathroom 2</div>
                    <div className={propertyStyles.individualPropAmenitiesTagsContainer}>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>WESTERN TOILET</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>JET SPRAY</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>BATH TUB</span>
                        </div>
                        <div style={{ padding: '7px 15px 8px 0px' }}>
                            <span style={{ border: '1px solid #ddddde', color: '#666' }}>SANITIZER</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}