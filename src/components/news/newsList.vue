<template>
  <div>
    <ul class="mui-table-view" v-for="item in this.news" :key="item.uniquekey">
      <li class="mui-table-view-cell mui-media">
        <a :href="item.url">
          <img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>{{item.date}}</span>
              <span>来源:{{item.author_name}}</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {Toast} from "mint-ui"
    export default {
        name: "newsList",
      data(){
          return{
            news:[]
          }
      },
      created(){
          this.getNewsList();
      },
      methods:{
          getNewsList(){
            this.axios.get("/api/toutiao/index",{params:{type:"keji",key:"a6557979e51d6b44776f798b715452a0"}}).then(result=>{
                this.news = result.data.result.data;
                // console.log(result);
              }).catch(error=>{
                Toast("新闻列表获取失败"+error);
              // console.log(error);
            })
            }
          }
      }
</script>

<style scoped lang="scss">
  .mui-table-view{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color: mediumblue;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
