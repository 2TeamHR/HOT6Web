function SeveranceTableY() {
    

    return (
        <>
            <div className="container-fluid">
                <div className="table-area">
                    <table className="table table-hover">
                        <thead>
                            <tr style={{ "backgroundColor": "#DDDDDD" }}>
                                <th>구분</th>
                                <th>퇴직번호</th>
                                <th>조직</th>
                                <th>직급</th>
                                <th>이름</th>
                                <th>퇴직일</th>
                                <th>퇴직금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ "cursor": "pointer" }}>
                                <td>1</td>
                                <td>인사팀</td>
                                <td>부장</td>
                                <td>이상목</td>
                                <td>1,680,000</td>
                                <td>N</td>
                                <td style={{width:120}}>
                                    <button className="btn btn-primary">상세보기</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div align="center">
                    <form name="search-form" autoComplete="off" style={{ "display": "inline-block" }}>
                        <select id="searchCondition" name="searchCondition">
                            <option value="communityTitle">제목</option>
                            <option value="nickName">작성자</option>
                        </select>
                        <input type="search" id="searchValue" name="searchValue" placeholder="검색할 내용을 입력하세요." 
                        />
                        <input type="submit" id="searchList" className="btn btn-secondary" value="검색" />
                    </form>
                        {/* <button type="submit" className="btn btn-primary float:right">지급하기</button> */}
                </div>
            </div>
        </>
    )
}

export default SeveranceTableY;
