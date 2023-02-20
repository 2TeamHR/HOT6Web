import React, { useState } from 'react';
import salaryStyle from '../../resources/css/pages/salary/salary.module.css';
import {useFormControl} from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import SalaryDataTable2Y from './SalaryDataTable2Y';
import SelectDatePiker3 from './Salary_DatePiker3';

function SeveranceY(){
    
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
        <div className={`ml-5 ${salaryStyle.checkTitle}`}>
            <div>
                <h1 className="fs-1 mt-5">퇴직금 지급 현황</h1>
            </div>
            <div className={salaryStyle.selectDate}>
                <SelectDatePiker3 />
            </div>
        </div>

        <div className="pt-5 pl-5">
            <SalaryDataTable2Y />
        </div>
        </>
    );
}

export default SeveranceY;