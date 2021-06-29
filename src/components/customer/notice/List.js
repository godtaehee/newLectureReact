import React from "react";
import {Link} from "react-router-dom";
import Pager from "../../inc/Pager";

export default class List extends React.Component {
  constructor() {
    super();
    //1
    // fetch("http://localhost:8080/api/notice/list")
    fetch("http://localhost:8080/api/notice/list")
      .then(response => {
        return response.json()
      })
      .then(json => {
        let list = json.list;
        let count = json.count;
        let lastPage =
          Math.floor(count / 10) + ((count % 10 >= 0)
          ? 1 : 0);
        console.log(list, count, lastPage);
        this.setState({
          list,
          lastPage
        })
        console.log(json);

      });
    this.state = {
      list: [],
      startPage: 1,
      lastPage: 0,
      page: 1
    };
  }

  componentDidMount() {
//3
  }

  componentDidUpdate() {
    //state 변경
    //3-1
  }

  componentWillUnmount() {
    //페이지 사라질때
    //3-2
  }

  render() {
    //2

    return (
      <main className="main">
        <h2 className="main title">공지사항</h2>

        <div className="breadcrumb">
          <h3 className="hidden">경로</h3>
          <ul>
            <li>home</li>
            <li>고객센터</li>
            <li>공지사항</li>
          </ul>
        </div>

        <div className="search-form margin-top first align-right">
          <h3 className="hidden">공지사항 검색폼</h3>
          <form className="table-form">
            <fieldset>
              <legend className="hidden">공지사항 검색 필드</legend>
              <label className="hidden">검색분류</label>
              <select name="f">
                <option value="title">제목</option>
                <option value="writerId">작성자</option>
              </select>
              <label className="hidden">검색어</label>
              <input type="text" name="q" value=""/>
              <input className="btn btn-search" type="submit" value="검색"/>
            </fieldset>
          </form>
        </div>

        <div className="notice margin-top">
          <h3 className="hidden">공지사항 목록</h3>
          <table className="table">
            <thead>
            <tr>
              <th className="w60">번호</th>
              <th className="expand">제목</th>
              <th className="w100">작성자</th>
              <th className="w100">작성일</th>
              <th className="w60">조회수</th>
            </tr>
            </thead>
            <tbody>

            {
              this.state.list.map(n => {
                return (
                  <>
                    <tr>
                      <td>{n.id}</td>
                      <td className="title indent text-align-left"><Link
                        to={`/customer/notice/${n.id}`}>{n.title}</Link></td>
                      <td>{n.writerId}</td>
                      <td>
                        {n.regDate.substr(0, 10)}
                      </td>
                      <td>{n.hit}</td>
                    </tr>
                  </>
                )
              })
            }


            </tbody>
          </table>
        </div>

        <div className="indexer margin-top align-right">
          <h3 className="hidden">현재 페이지</h3>
          <div><span className="text-orange text-strong">{this.state.page}</span> / {this.state.lastPage} pages</div>
        </div>

        <Pager/>
      </main>
    )
  }
}