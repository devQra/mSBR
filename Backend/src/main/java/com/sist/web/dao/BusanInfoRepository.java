package com.sist.web.dao;

import com.sist.web.entity.BusanInfoEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BusanInfoRepository extends JpaRepository<BusanInfoEntity, Integer> {

  @Query(value = "SELECT * FROM busan_info "
      + "ORDER BY no ASC "
      + "LIMIT 0,5", nativeQuery = true)
  public List<BusanInfoEntity> busanInfoMainData();

  @Query(value = "SELECT * FROM busan_info "
      + "WHERE cno=:cno ORDER BY no ASC "
      + "LIMIT :start,12", nativeQuery = true)
  public List<BusanInfoEntity> busanInfoListData(@Param("cno") Integer cno,
      @Param("start") Integer start);

  @Query(value = "SELECT CEIL(COUNT(*)/12.0) FROM busan_info "
      + "WHERE cno=:cno", nativeQuery = true)
  public int busanTotalPage(@Param("cno") Integer cno);

  @Query(value = "SELECT * FROM busan_info "
      + "WHERE title LIKE CONCAT('%',:title,'%')", nativeQuery = true)
  public List<BusanInfoEntity> busanFindData(@Param("title") String title);

  @Query(value = "SELECT * FROM busan_info WHERE no=:no ", nativeQuery = true)
  public BusanInfoEntity busanInfoDetailData(@Param("no") int no);

  public List<BusanInfoEntity> findByTitleContaining(@Param("title") String title);

  public BusanInfoEntity findByNo(int no);

}