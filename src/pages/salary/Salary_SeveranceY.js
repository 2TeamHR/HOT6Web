import React, { useState } from 'react';
import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import SalarySeveranceTableY from './SalarySeveranceTableY';
import SeveraceDatePiker from './Salary_SeveranceDatePiker';

function SeveranceY(){
    
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
        <div className={`ml-5 ${salaryStyle.checkTitle}`}>
            <div>
                <h1 className="fs-1 mt-5">퇴직금 지급 현황</h1>
            </div>
            <div className={salaryStyle.selectDate}>
                <SeveraceDatePiker />
            </div>
        </div>

        <div className="pt-5 pl-5">
            <SalarySeveranceTableY />
        </div>
        </>
    );
}

export default SeveranceY;