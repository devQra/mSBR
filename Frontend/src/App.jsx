import { Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import store from "./store/store";
import { Provider } from "react-redux";
import FoodList from "./components/food/FoodList";
import FoodFind from "./components/food/FoodFind";
import FoodDetail from "./components/food/FoodDetail";
import YoutubeFind from "./components/youtube/YoutubeFind";
import InfoList from "./components/info/InfoList";
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardDelete from "./components/board/BoardDelete";
import BoardUpdate from "./components/board/BoardUpdate";
import InfoDetail from "./components/info/InfoDetail.jsx";
import InfoFind from "./components/info/InfoFind.jsx";
import NewsList from "./components/news/NewsList.jsx";
import "../public/style.css";
import "../public/map.css";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="flex flex-col w-screen px-80 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/food/list"} element={<FoodList />} />
          <Route path={"/food/find"} element={<FoodFind />} />
          <Route path={"/food/detail/:fno"} element={<FoodDetail />} />
          <Route path={"/youtube/find"} element={<YoutubeFind />} />
          <Route path={"/info/list/:no"} element={<InfoList />} />
          <Route path={"/board/list"} element={<BoardList />} />
          <Route path={"/board/insert"} element={<BoardInsert />} />
          <Route path={"/board/detail/:no"} element={<BoardDetail />} />
          <Route path={"/board/delete/:no"} element={<BoardDelete />} />
          <Route path={"/board/update/:no"} element={<BoardUpdate />} />
          <Route path={"/info/detail/:no"} element={<InfoDetail />} />
          <Route path={"/info/find"} element={<InfoFind />} />
          <Route path={"/news/list"} element={<NewsList />} />
        </Routes>
      </div>
    </Provider>
  );
}
