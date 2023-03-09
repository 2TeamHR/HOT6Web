import {
    GET_MEMBER,
    POST_LOGIN,
    POST_REGISTER,
    PUT_MYINFO
} from '../modules/MemberModule';

/* 개인정보조회 API */
export const callGetMemberAPI = ({memberCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/members/${memberCode}`;

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
            .then(response => response.json());

        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);

        dispatch({ type: GET_MEMBER,  payload: result });

    };
}

/* 로그인 API */
export const callLoginAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/auth/login`;

    return async (dispatch, getState) => {

        /* 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능 */
        /* 서버에서 cors 허용을 해주어야 함 */
        /* headers에 Access-Control-Allow-Origin을 *로 해서 모든 도메인에 대해 허용한다. */
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                memberCode: form.memberCode,
                memberPassword: form.memberPassword
            })
        })
            .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);
        }
        dispatch({ type: POST_LOGIN,  payload: result });

    };
}

/* 로그아웃 API */
export const callLogoutAPI = () => {

    return async (dispatch, getState) => {

        dispatch({ type: POST_LOGIN,  payload: '' });
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}

/* 사원 등록 API */
export const callRegisterAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/auth/signup`;

    return async (dispatch, getState) => {

        const profileImageDTO = {
            name: form.get('memberImage').name,
            type: form.get('memberImage').type
        };
        
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
            
        })
            .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);

        dispatch({ type: POST_REGISTER,  payload: result });
    };
}

/* 마이페이지 개인정보 수정 */
export const callMyInfoUpdateAPI = ({form, memberCode}) => {
    console.log('[MemberAPICalls] callMyInfoUpdateAPI Call');
    console.log('memberCode', memberCode);
    console.log('form', form);

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/v1/mypage/management/update/${memberCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callMyInfoUpdateAPI RESULT : ', result);

        dispatch({ type: PUT_MYINFO,  payload: result });
        
    };    
}