import React from 'react';
import propertyStyles from './IndividualProperty.module.css';

export const IndiPropPolicies = () => {
    return (
        <div className={propertyStyles.individualPropMapsMain}>
            <div style={{ fontSize: '1.5rem', lineHeight: 1.5, color: '#333', textAlign: 'left' }}>Policies & Fees</div>
            <hr className={propertyStyles.individualPropTopBreadcrumbHRTAG} />
            <div className={propertyStyles.individualPropPoliciesMain}>
                <div className={propertyStyles.individualPropPoliciesMainFirstCol}>
                    <div style={{ marginBottom: '10px', fontWeight: 'bolder', textAlign: 'left' }}>Default Cancellation Policy</div>
                    <div className={propertyStyles.individualPropStringentDiv}>
                        <p style={{ margin: '0 0 20px 0' }}>
                            <strong>Stringent</strong>: No charges will be levied if booking is canceled 61 days prior to check-in. If cancellation is done between 30 to 60 days prior to check-in, 50% of the total booking amount will be charged. Post that, there will be no refund.
                        </p>
                    </div>
                </div>
                <div className={propertyStyles.individualPropPoliciesMainFirstCol}>
                    <div style={{ marginBottom: '10px', fontWeight: 'bolder', textAlign: 'left' }}>House Rules</div>
                    <div className={propertyStyles.individualPropStringentDiv}>
                        <p> Loud Music not allowed. Pets not allowed. Stags / All Male Groups not allowed. Feel at home treat it as your own home dont abuse things appliances. kindly dont pluck the fruits and flowers in the complex. Drink responsibly and definitely not in the pool. Smokers may smoke in the common airy areas and the balcony only. Smoking in the bedrooms especially in the bed is strictly not acceptable. Please bear in mind that you are required to use the drying lines (Provided) to dry your clothes after wash. The apartment complex management does not allow clothes to be hung on the balcony railing. The swimming pool is closed post 8 pm. Swimwear is Mandatory for use of pool. As required by law every Guest above the age of 18 must carry a Government issued Photo ID Card, and present it to the caretaker upon request, alongside signing the Guest Register with complete name, email ID and contact number</p>
                    </div>
                </div>
                <div className={propertyStyles.individualPropPoliciesMainFirstCol}>
                    <div style={{ marginBottom: '10px', fontWeight: 'bolder', textAlign: 'left' }}>Cleaning Fee</div>
                    <div className={propertyStyles.individualPropStringentDiv}>
                        <p>
                            Cleaning Fee INR 327.00 Fixed Amount Per Stay
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}