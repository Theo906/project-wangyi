<template>
  <div>
    <div class="titele_div">
      <!-- 顶部header -->
      <van-row type="flex" justify="space-between">
        <van-col span="5">
          <img class="logo" src="../assets/logo-img.png">
        </van-col>
        <van-col span="15" class="search_div" @click="toSearchFn">
          <van-icon name="search" size='.5rem' />
          <span>请输入商品名</span>
        </van-col>
        <van-col span="3">
          <van-button 
              class="loginBtn" 
              type="primary" 
              @click="goToLoginBtn"
              size="mini">
                登录
              </van-button>
        </van-col>
      </van-row>
    </div>

    <!-- 分类标签页 -->
    <div class="tabList">
        <van-tabs v-model="tabList_model" swipeable class="tabBtnWrap">
          <van-tab v-for="(n,index) in goodsTabArr" :key="index" :title=n>
            <!-- {{n}} -->
          </van-tab>
        </van-tabs>
    </div>
   
   <!-- 轮播图 -->
    <div>
        <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
          <van-swipe-item v-for="(n,index) in  swipeImgList" :key="index">
            <img :src="n">
          </van-swipe-item>
        </van-swipe>
    </div>

    <!-- icon图标 -->
    <div class="indexServicePolicy">
      <ul>
        <li>
          <i style="background-image: url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png')"></i>
          网易自营品牌
        </li>
        <li>
          <i  style="background-image: url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png')"></i>
          30天无忧退货
        </li>
        <li>
          <i style="background-image: url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png')"></i>
          48小时快速退款
        </li>
      </ul>
    </div>

    <!-- 宫格 -->
    <div class="goodsColumnWrap">
        <van-grid :column-num="5">
          <van-grid-item v-for="(n,index) in goodsColumnArr" :key="index" :icon=n.img_url :text=n.img_txt />
        </van-grid>
    </div>

    <!-- 限时购 -->
    <div class="goodS_countDown">
        <p>限时购</p>
        <van-count-down :time="time_val"  class="countDownStyle">
          <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
        <a ref="#">更多 ></a>
    </div>

    <!-- 限时购商品 -->
    <div class="goodsList_wrap">
      <van-grid :column-num="3">
          <van-grid-item v-for="(n,index) in goodsListObj" :key="index" :icon=n.img_url :text=n.img_txt />
      </van-grid>
    </div>

    <footerBar></footerBar>
   </div>

</template>

<script>
  import '../assets/reset_vant.css';
  import axios from 'axios'
  import footerBar from './footerBar'

  export default {
    name: "IndexWrap",
    components:{footerBar},
    created() {
      // 导航标签列表
      axios.get('http://localhost:3344/getGoodsTapList')
        .then(_d => {
          // console.log(_d.data);
          this.goodsTabArr = _d.data;
        });
      
      //轮播图
      axios.get('http://localhost:3344/getSwipeGoodsImg')
        .then(_d => {
          // console.log(_d.data);
          this.swipeImgList = _d.data;
        });
    },
    data() {
      return {
        msg:'IndexWrap',
        tabList_model:'',
        time_val: 10 * 60 * 60 * 1000,
        goodsTabArr:[],
        swipeImgList:[],
        goodsColumnArr:[
            {
              img_url:'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
              img_txt:'新品首发'
            },{
              img_url:'http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
              img_txt:'居家生活'
            },{
              img_url:'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
              img_txt:'服饰鞋包'
            },{
              img_url:'http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
              img_txt:'美食酒水'
            },{
              img_url:'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
              img_txt:'个护清洁'
            },{
              img_url:'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
              img_txt:'母婴亲子'
            },{
              img_url:'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
              img_txt:'运动旅行'
            },{
              img_url:'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
              img_txt:'数码家电'
            },{
              img_url:'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
              img_txt:'全球特色'
            },{
              img_url:'http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
              img_txt:'好货抄底'
            }
        ],
        goodsListObj:[{
            img_url:'https://yanxuan-item.nosdn.127.net/e78096b543cc65af16da3a93cacb4071.png?quality=75&type=webp&imageView&thumbnail=216x216',
            img_txt:'￥219'
          },{
            img_url:'https://yanxuan-item.nosdn.127.net/570e762763536175b9ec226c0d93a7cd.png?quality=75&type=webp&imageView&thumbnail=216x216',
            img_txt:'￥167'
          },{
            img_url:'https://yanxuan-item.nosdn.127.net/f3f18a4fe9e7905cd7c9ff28e42ff0c2.png?quality=75&type=webp&imageView&thumbnail=216x216',
            img_txt:'￥50.2'
          },{
            img_url:'https://yanxuan-item.nosdn.127.net/0b05c22b99e8fc2cf3015e4bbb8d7c3f.png?quality=75&type=webp&imageView&thumbnail=216x216',
            img_txt:'￥139'
          },{
            img_url:'https://yanxuan-item.nosdn.127.net/ec55e5314bfd670320c3c15ce5e0b095.png?quality=75&type=webp&imageView&thumbnail=216x216',
            img_txt:'￥42.8'
          },{
            img_url:'https://yanxuan-item.nosdn.127.net/f815bf4d31ece0500089d69475c2014c.png?quality=75&type=webp&imageView&thumbnail=216x216',
            img_txt:'￥249'
          }]
      }
    },
    methods: {
      toSearchFn(){
        this.$router.push({path:'/searchPage'});
      },
      goToLoginBtn(){
        this.$router.push({path:'/login'});
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .titele_div{
    padding: .21333rem .4rem;
  }
 .logo{
  width: 1.84rem;
  height: .5333333333333333rem;
  margin-top: .1rem;
   }
  .loginBtn {
    width: .98667rem;
    height: .53333rem;
    line-height: .53333rem;
    text-align: center;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    border-radius: .10667rem;
    margin-left: .21333rem;
    font-size: .32rem;
    background: #fff;
    margin-top: .1rem;
  }
  .search_div{
    background-color: #ededed;
      border-radius: .10667rem;
      height: .74667rem;
      font-size: .3733rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .tabBtnWrap{
    font-size: .35rem;
  }
  .tabList{
    margin-top: .2rem;
    padding: 0 .1rem;
    background: #fff;
  }
  .my-swipe .van-swipe-item {
    height: 4rem;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .indexServicePolicy{
    width: 100%;
  }
  .indexServicePolicy ul{
    height: .96rem;
    line-height: .96rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    zoom: 1;
    margin-left: -.3rem;
  }
  .indexServicePolicy ul li{
    flex: 1;
    float: left;
    font-size: .32rem;
    color: #333;
    margin-left: .10667rem;
    line-height: .42667rem;
  }
  .indexServicePolicy ul li i{
    width: .4266666666666667rem;
    height: .4266666666666667rem;
    display: inline-block;
    vertical-align: top;
    background-size: 100% 100%;
    background-position: 50%;
  }
  .colon {
    display: inline-block;
    font-size: .4rem;
    font-weight: bold;
    margin: 0 2px;
  }
  .block {
    display: inline-block;
    width: .48rem;
    height: .48rem;
    color: #fff;
    font-size: .32rem;
    line-height: .48rem;
    text-align: center;
    margin: 0 .13333rem;
    background-color: #333;
    font-weight: bold;
  }
  .goodS_countDown{
    height: 1rem;
    line-height:1.33333rem ;
    padding: 0 .4rem;
    overflow: hidden;
  }
  .goodS_countDown p{
    float: left;
    font-size: .42667rem;
  }
  .goodS_countDown a{
    font-size: .37333rem;
    float: right;
    color: #333;
  }
  .countDownStyle{
    float: left;
    margin: 30px 0 0 14px;
  }
  
</style>
