import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {callBoardNoticeListAPI} from "../../apis/BoardNoticeAPICalls";

function BoardNotice() {

    const dispatch = useDispatch();
    const boardNotice = useSelector(state => state.boardNoticeReducer);

    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(callBoardNoticeListAPI());
        }
        , []
    );

    return (
        <>
            <div className="container">
                <h1 className="mt-5 text-center">공지사항</h1>
                <div className="table-area">
                    <table className="table">
                        <tr style={{"backgroundColor": "#DDDDDD"}}>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                        <thead>
                        </thead>
                        <tbody>
                        {boardNotice.map((notice, index) => (
                            <tr key={notice.noticeCode} className="text-center">
                                <td className='align-middle'>{index + 1}</td>
                                <td className='align-middle'>{notice.noticeTitle}</td>
                                <td className='align-middle'>{notice.memberCode}</td>
                                <td className='align-middle'>{notice.noticeDate}</td>
                                <td className='align-middle'>{notice.noticeCount}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="search-area" align="center">
                    <form name="search-form" autoComplete="off" style={{"display": "inline"}}>
                        <select id="searchCondition" name="searchCondition">
                            <option value="noticeTitle">제목</option>
                            <option value="nickName">작성자</option>
                        </select>
                        <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요."/>
                        <input type="submit" className="btn btn-secondary" value="검색"/>
                    </form>
                    <Link to="/board/notice/write" className={""}>
                        <input type="submit" id="" className="btn btn-info me-1"
                               style={{"float": "right", "backgroundColor": "black", "borderColor": "black"}}
                               value="글쓰기"/>
                    </Link>
                </div>
                <br/>
                {/* 페이지 처리 */}
                <div className="pagingArea" align="center">
                    {/* 맨 앞으로 이동 버튼 */}
                    <button onClick={() => ""}>
                        &lt;&lt;
                    </button>
                    {/* 이전 페이지 버튼 */}
                    <button onClick={() => ""}>
                        &lt;
                    </button>
                    {/* 숫자 버튼 */}
                    <button onClick={() => ""}>1</button>
                    <button onClick={() => ""}>2</button>
                    {/* 다음 페이지 버튼 */}
                    <button onClick={() => ""}>
                        &gt;
                    </button>
                    {/* 마지막 페이지로 이동 버튼 */}
                    <button onClick={() => ""}>
                        &gt;&gt;
                    </button>
                </div>
            </div>
        </>
    );
}

export default BoardNotice;
