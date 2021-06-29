import React from "react";
import {Link} from "react-router-dom";

const Pager = () => {
  return (
    <>
      <div className="margin-top align-center pager">
        <div>
            <span className="btn btn-prev" onClick={() => {
              alert('이전 페이지가 없습니다.');
            }}>이전</span>

        </div>
        <ul className="-list- center">
          {
            [1,1,1,1,1].map((v,i) => {
              return <li><Link className="-text- orange bold" to={`?p=${i+1}&t=&q=`}>{i+1}</Link></li>
            })
          }

        </ul>
        <div>
            <span className="btn btn-next" onClick={() => {
              alert('다음 페이지가 없습니다.');
            }}>다음</span>
        </div>
      </div>
    </>
  )
}

export default Pager;