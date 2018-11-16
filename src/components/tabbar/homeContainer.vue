<template>
    <div>
      <!--轮播图Swipe 区域-->
      <mt-swipe :auto="2000" :speed="200">
        <mt-swipe-item v-for="item in this.content" :key="item.id">
          <!--<img :src="item.img" alt="轮播图">-->
          <p>{{item.id+":"+item.ctime+"'通过GET请求从http://www.liulongbin.top:3005/api/getprodlist'获取数据,仅供测试"}}</p>
        </mt-swipe-item>
      </mt-swipe>

      <!--六宫格 区域-->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../assets/menu1.png">
          <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../assets/menu2.png">
          <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../assets/menu3.png">
          <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../assets/menu4.png">
          <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../assets/menu5.png">
          <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../assets/menu6.png">
          <div class="mui-media-body">联系我们</div></a></li>
      </ul>

    </div>
</template>

<script>
  import { Toast } from "mint-ui"
    export default {
        name: "homeContainer",
      data(){
          return {
            content:[]
          }
      },
      created(){
        this.getLunbotu();
      },
      methods:{
          getLunbotu(){
            this.axios.get("http://www.liulongbin.top:3005/api/getprodlist").then(result=>{
              if (result.data.status === 0){
                this.content = result.data.message;
                console.log(result);
                // Toast("轮播图加载成功");
              }else{
                Toast("轮播图加载失败");
              }
          });
        }
    }}
</script>

<style scoped lang="scss">
  .mint-swipe{
    height: 200px;
    .mint-swipe-item{
      &:nth-child(1){
        background-color: royalblue;
      }
      &:nth-child(2){
        background-color: palegreen;
      }
      &:nth-child(3){
        background-color: greenyellow;
      }
      &:nth-child(4){
        background-color: salmon;
      }
      &:nth-child(5){
        background-color: firebrick;
      }
      &:nth-child(6){
        background-color: #6641e2;
      }
      &:nth-child(7){
        background-color: hotpink;
      }
    }
    p{
      font-size: 20px;
      line-height: 30px;
    }
  }

  .mui-grid-view.mui-grid-9{
    img{
      width: 60px;
      height: 60px;
    }
    .mui-media-body{
      font-size: 10px;
    }
  }
</style>
