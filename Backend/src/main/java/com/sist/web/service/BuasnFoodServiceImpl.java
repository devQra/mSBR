package com.sist.web.service;

import com.sist.web.dao.BusanFoodRepository;
import com.sist.web.dao.BusanInfoRepository;
import com.sist.web.entity.BusanFoodEntity;
import com.sist.web.entity.BusanInfoEntity;
import com.sist.web.vo.BusanFoodVO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuasnFoodServiceImpl implements BusanFoodService {

  @Autowired
  private BusanFoodRepository bDao;

  @Autowired
  private BusanInfoRepository iDao;

  @Override
  public List<BusanFoodVO> busanMainData() {
    return bDao.busanMainData();
  }

  @Override
  public List<BusanInfoEntity> busanInfoMainData() {
    return iDao.busanInfoMainData();
  }

  @Override
  public List<BusanFoodVO> busanListData(int start) {
    return bDao.busanListData(start);
  }

  @Override
  public int busanFoodTotalPage() {
    return bDao.busanFoodTotalPage();
  }

  @Override
  public BusanFoodEntity busanDetailData(int fno) {
    return bDao.findByFno(fno);
  }

  @Override
  public BusanInfoEntity busanInfoDetailData(int no) {
    return iDao.busanInfoDetailData(no);
  }

  @Override
  public List<BusanInfoEntity> busanInfoListData(int cno, int start) {
    return iDao.busanInfoListData(cno, start);
  }

  @Override
  public int busanTotalPage(int cno) {
    return iDao.busanTotalPage(cno);
  }

  @Override
  public List<BusanInfoEntity> findByTitleContaining(String title) {
    return iDao.findByTitleContaining(title);
  }

}