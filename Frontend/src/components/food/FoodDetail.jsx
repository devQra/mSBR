import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFoodDetail } from "../../actions/foodActions";
import FoodMap from "./FoodMap";
/* global kakao */
// => Redux - toolkit
// redirect , useRef , useCallback , useMemo
// => history.back() Navigate
/*const MapLocation=(props)=>{
    const [state,setState] = useState({im
        // 위도 / 경도
        center:{lat:null,lng:null},
        isShow:true // 지도를 이동할때 부드럽게 출력
    })
    useEffect(() => {
        // 일반 주소를 위도.경도를 출력
        const geocoder = new kakao.maps.services.Geocoder();
        // 주소 입력 => 좌표 변환
        let callback=function(result,status){
            if(status==kakao.maps.services.Status.OK){
                // 변환이 가능한 주소가 들어 온 경우
                const newSearch=result[0];
                setState({
                    center:{lat:newSearch.y,lng:newSearch.x}
                })
            }
        }
        geocoder.addressSearch(`${props.address}`,callback)
        // 주소를 위도/경도를 찾아주는 역할
    }, []);
    return (
        <div>
            <Map center={state.center}
                 isPanto={state.isShow}
                 style={{
                     width:"600px",
                     height:"500px",
                     borderRadius:'20px'
                 }}
            >
                <MapMarker position={state.center}
                           style={{border:'transparent'}}
                >
                    <div
                        style={{
                            color:'gray',
                            fontSize:'19px',
                            fontWeight:'700',
                            border:'4px solid gray',
                            borderRadius:'10px',
                            padding:'2px'
                        }}
                    >
                        {props.name}
                    </div>
                </MapMarker>
            </Map>
        </div>
    )
}*/

function FoodDetail() {
  const { fno } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(fetchFoodDetail(fno)); // 데이터를 서버에서 읽어서 저장
  }, []);
  const foodDetail = useSelector((state) => state.foods.food_detail);
  const listClick = () => {
    nav("/food/list");
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
                <h2>맛집 상세보기</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="archive-area section_padding_80">
        <div className="container">
          <div className="row">
            <table className={"table"}>
              <tbody>
                <tr>
                  <td className="text-center" width={"30%"} rowSpan={"8"}>
                    <img
                      src={
                        foodDetail &&
                        "https://www.menupan.com" + foodDetail.poster
                      }
                      style={{ width: "320px", height: "300px" }}
                    />
                  </td>
                  <td colSpan={"2"}>
                    <h3>
                      {foodDetail && foodDetail.name}&nbsp;
                      <span style={{ color: "orange" }}>
                        {foodDetail && foodDetail.score}
                      </span>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <th width={"15%"} className={"text-center"}>
                    주소
                  </th>
                  <td width={"55%"}>{foodDetail && foodDetail.address}</td>
                </tr>
                <tr>
                  <th width={"15%"} className={"text-center"}>
                    전화
                  </th>
                  <td width={"55%"}>{foodDetail && foodDetail.phone}</td>
                </tr>
                <tr>
                  <th width={"15%"} className={"text-center"}>
                    음식종류
                  </th>
                  <td width={"55%"}>{foodDetail && foodDetail.type}</td>
                </tr>
                <tr>
                  <th width={"15%"} className={"text-center"}>
                    가격대
                  </th>
                  <td width={"55%"}>{foodDetail && foodDetail.price}</td>
                </tr>
                <tr>
                  <th width={"15%"} className={"text-center"}>
                    주차
                  </th>
                  <td width={"55%"}>{foodDetail && foodDetail.parking}</td>
                </tr>
                <tr>
                  <th width={"15%"} className={"text-center"}>
                    영업시간
                  </th>
                  <td width={"55%"}>{foodDetail && foodDetail.time}</td>
                </tr>
                <tr>
                  <th width={"15%"} className={"text-center"}>
                    테마
                  </th>
                  <td width={"55%"}>{foodDetail && foodDetail.theme}</td>
                </tr>
              </tbody>
            </table>
            <table className={"table"}>
              <tbody>
                <tr>
                  <td>{foodDetail && foodDetail.content}</td>
                </tr>
                <tr>
                  <td className={"text-right"}>
                    <button className={"btn-sm btn-danger"} onClick={listClick}>
                      목록
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FoodMap
                      address={foodDetail.address}
                      name={foodDetail.name}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default FoodDetail;
