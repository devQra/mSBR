package com.sist.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

@Entity(name = "busan_food")
@Data
@DynamicUpdate
public class BusanFoodEntity {

  @Id
  private int fno;
  private String name, type, phone, address, poster, images, time, parking, content, price, theme;
  private int hit, jjimcount, likecount, replycount;
  private double score;
}