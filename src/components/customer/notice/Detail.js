import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import moment from "moment";

const Detail = ({match}) => {

  const [n, setN] = useState('');
  const id = match.params;
  useEffect(() => {
    fetch(`http://localhost:8080/api/notice/${id.id}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        setN(json);
        console.log(n);
      });
  }, []);

  return (
    <div>
      <main>
        <h2 className="main title">공지사항</h2>

        <div className="breadcrumb">
          <h3 className="hidden">breadlet</h3>
          <ul>
            <li>home</li>
            <li>고객센터</li>
            <li>공지사항</li>
          </ul>
        </div>

        <div className="margin-top first">
          <h3 className="hidden">공지사항 내용</h3>
          <table className="table">
            <tbody>
            <tr>
              <th>제목</th>
              <td className="text-align-left text-indent text-strong text-orange" colSpan="3">{n.title}</td>
              {/*<td className="text-align-left text-indent text-strong text-orange" colSpan="3">sdf</td>*/}
            </tr>
            <tr>
              <th>작성일</th>
              <td className="text-align-left text-indent" colSpan="3">{moment(n.regDate).format("YYYY-MM-DD")}</td>
              {/*<td className="text-align-left text-indent" colSpan="3">dsfs</td>*/}
            </tr>
            <tr>
              <th>작성자</th>
              <td>{n.writerId}</td>
              {/*<td>dfdf</td>*/}
              <th>조회수</th>
              <td>{n.hit}</td>
              {/*<td>dsdsd</td>*/}
            </tr>
            <tr>
              <th>첨부파일</th>
              <td colSpan="3"></td>
            </tr>
            <tr className="content">
              <td colSpan="4">
                <div><br/></div>
                <div>{n.content}</div>
                <div><br/></div>
                <div><a href="http://www.newlecture.com/resource/spring2.zip"><b><u><font size="5" color="#dd8a00">예제
                  다운로드하기</font></u></b></a></div>
                <div><br/></div>
                <div><br/></div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="margin-top text-align-center">
          <Link className="btn btn-list" to="/customer/notice/list">목록</Link>
        </div>

        <div className="margin-top">
          <table className="table border-top-default">
            <tbody>

            <tr>
              <th>다음글</th>
              <td colSpan="3" className="text-align-left text-indent">다음글이 없습니다.</td>
            </tr>


            <tr>
              <th>이전글</th>
              <td colSpan="3" className="text-align-left text-indent"><a className="text-blue text-strong" href="">스프링
                DI 예제 코드</a></td>
            </tr>


            </tbody>
          </table>
        </div>

      </main>

    </div>
  )
}
export default Detail;