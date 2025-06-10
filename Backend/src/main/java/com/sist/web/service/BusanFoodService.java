package com.sist.web.service;

import com.sist.web.entity.BusanFoodEntity;
import com.sist.web.entity.BusanInfoEntity;
import com.sist.web.vo.BusanFoodVO;
import java.util.List;

public interface BusanFoodService {

  public List<BusanFoodVO> busanMainData();

  public List<BusanInfoEntity> busanInfoMainData();

  public List<BusanFoodVO> busanListData(int start);

  public int busanFoodTotalPage();

  public BusanFoodEntity busanDetailData(int fno);

  public BusanInfoEntity busanInfoDetailData(int no);

  public List<BusanInfoEntity> busanInfoListData(int cno, int start);

  public int busanTotalPage(int cno);

  public List<BusanInfoEntity> findByTitleContaining(String title);
}