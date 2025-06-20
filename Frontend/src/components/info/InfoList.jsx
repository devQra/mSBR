import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { fetchInfoList } from "../../actions/infoActions";

function InfoList() {
  const { no } = useParams();
  const dispatch = useDispatch();
  const [curpage, setCurpage] = useState(1);
  const [cno, setCno] = useState(no);

  useEffect(() => {
    setCurpage(1);
    setCno(no);
  }, [no]);
  useEffect(() => {
    dispatch(fetchInfoList(cno, curpage));
  }, [cno, curpage]);

  const infoList = useSelector((state) => state.infos.info_data);
  const change = (no) => {
    setCno(no);
    setCurpage(1);
  };
  const prev = () => {
    setCurpage(infoList.curpage > 1 ? infoList.curpage - 1 : infoList.curpage);
  };
  const next = () => {
    setCurpage(
      infoList.curpage < infoList.totalpage
        ? infoList.curpage + 1
        : infoList.curpage,
    );
  };
  return (
    <Fragment>
      <div
        className="breadcumb-area"
        style={{ backgroundImage: "url(/img/bg-img/slide-4.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="bradcumb-title text-center">
                <h2>
                  {cno == 1 && "명소"}
                  {cno == 3 && "쇼핑"}
                  {cno == 2 && "음식"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="archive-area section_padding_80">
        <div className="container">
          <div className="row">
            {infoList.list &&
              infoList.list.map((info) => (
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-post wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="post-thumb">
                      <Link to={"/info/detail/" + info.no}>
                        <img src={info.poster} />
                      </Link>
                    </div>

                    <div className="post-content">
                      <div className="post-meta d-flex"></div>
                      <Link to={"/food/detail/" + info.no}>
                        <h4 className="post-headline">{info.title}</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            {/* 페이지 나누기 */}
            <div className="col-12">
              <div className="pagination-area d-sm-flex mt-15">
                <nav aria-label="#">
                  <button className={"btn-sm btn-info"} onClick={prev}>
                    이전
                  </button>
                  <button className={"btn-sm btn-info"} onClick={next}>
                    다음
                  </button>
                </nav>
                <div className="page-status">
                  <p>
                    Page {infoList.curpage} of {infoList.totalpage} results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default InfoList;
