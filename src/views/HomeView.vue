<script>
import { getData } from '../api/index'
export default {
  mounted() {
    // 此时组件已经挂载。

  },
  mounted() {
    getData().then((data) => {
      console.log(data)
    })
  }
}
</script>

<template>
  <el-row class="home" :gutter="20" type="flex">
    <el-col :span="8" style="margin-top:20px;">
      <el-card shadow="hover">
        <div class="user">
          <img src="../assets/images/QQ图片20221125222615.jpg" alt="">
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录事件<span>2022-7-11</span></p>
          <p>上次登录地点<span>江苏</span></p>
        </div>

      </el-card>
      <el-card shadow="hover" style="margin-top:20px;">
        <template #header>
          <div class="card-header">
            <span>最近的书签</span>
          </div>
        </template>
        <div style="height:260px">暂无书签</div>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top:20px ;">
      <div class="block text-center" m="t-4">
        <el-carousel trigger="click" height="240px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-card shadow="hover" style="margin-top:20px;">
        <template #header>
          <div class="card-header">
            <span>最近的笔记</span>
          </div>
        </template>

        <div style="height:230px">暂无笔记</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__item h3 {
  text-align: center;
  color: #475669;
  opacity: 0.75;
  line-height: 240px;
  margin: 0;
}

.user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.user img {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  margin-right: 40px;
}

.userinfo>p {
  line-height: 30px;
  font-size: 14px;
  color: #999;
}

p>span {
  color: #666;
  margin-left: 70px;
}
</style>
