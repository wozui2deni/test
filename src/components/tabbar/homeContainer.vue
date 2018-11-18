<template>
    <div>
      <!--轮播图Swipe 区域-->
      <mt-swipe :auto="2000" :speed="400">
        <mt-swipe-item v-for="item in this.content.slice(0,10)" :key="item.uniquekey">
          <a :href="item.url">
            <h2>{{item.title}}</h2>
            <img :src="item.thumbnail_pic_s" alt="轮播图">
          </a>
          <!--<p>{{item.id+":"+item.ctime}}</p>-->
        </mt-swipe-item>
      </mt-swipe>

      <!--六宫格 区域-->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
          <img src="../../assets/menu1.png">
          <div class="mui-media-body">新闻资讯</div></router-link></li>
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
            this.axios.get("/api/toutiao/index",{params:{type:"shishang",key:"a6557979e51d6b44776f798b715452a0"}}).then(result=>{
            this.content = result.data.result.data;
          }).catch(error=>{
            Toast("获取图片失败"+error)
            });
        }
    }}
</script>

<style scoped lang="scss">
.mint-swipe{
  height: 25em;
  text-align: center;
  img{
    height: 80%;
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
