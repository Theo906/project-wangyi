<template>
    <!-- footerbar -->
    <div class="footer_div">
      <van-tabbar v-model="footer_model" active-color='#f00' @change="footerBarChange">
         <van-tabbar-item to="/">
          <span>首页</span>
          <template #icon="props">
            <div :class="props.active ? icon.a : icon.a1" ></div>
          </template>
        </van-tabbar-item>

         <van-tabbar-item to="/cateList">
          <span>分类</span>
          <template #icon="props">
            <div :class="props.active ? icon.b : icon.b1" ></div>
          </template>
        </van-tabbar-item>

         <van-tabbar-item >
          <span>值得买</span>
          <template #icon="props">
            <div :class="props.active ? icon.c : icon.c1" ></div>
          </template>
        </van-tabbar-item>

         <van-tabbar-item >
          <span>购物车</span>
          <template #icon="props">
            <div :class="props.active ? icon.d : icon.d1" ></div>
          </template>
        </van-tabbar-item>

         <van-tabbar-item to="/login">
          <span>个人</span>
          <template #icon="props">
            <div :class="props.active ? icon.e : icon.e1" ></div>
          </template>
        </van-tabbar-item>
      </van-tabbar>

    </div>
</template>

<script>
export default {
    name:'footerBar',
    data() {
        return {
            footer_model:'',
            icon: {
                a: 'footerIcon footer_icon_1_red',
                a1: 'footerIcon footer_icon_1',
                b: 'footerIcon footer_icon_2_red',
                b1: 'footerIcon footer_icon_2',
                c: 'footerIcon footer_icon_3_red',
                c1: 'footerIcon footer_icon_3',
                d: 'footerIcon footer_icon_4_red',
                d1: 'footerIcon footer_icon_4',
                e: 'footerIcon footer_icon_5_red',
                e1: 'footerIcon footer_icon_5'
              }
        }
    },
    mounted() {
        let _n =  localStorage.getItem('save_inx');
        // console.log(typeof _n)

        this.footer_model = Number(_n);
    },
    methods: {
        footerBarChange(_inx){
            console.log(_inx);

            switch (_inx) {
              case 0:
                this.$router.push('/');
                localStorage.setItem('save_inx',_inx);
                break
              case 1:  
                this.$router.push('/cateList');
                localStorage.setItem('save_inx',_inx);
                break
              case 4: 
                this.$router.push('/login');
                localStorage.setItem('save_inx',_inx); 
                break
              default:
                break;
            }
        }   
    }
}
</script>

<style scoped>
    /* footer icon 公共样式 */
  .footerIcon{
    width: .53rem;
    height: .53rem;
    margin:  0 auto;
    background-image: url('../assets/footer_icon.png');
    background-size: .53rem;
    background-repeat: no-repeat;
  }
  /* 第一个icon */
  .footer_icon_1{
    background-position: 0 -250px;
  }
  .footer_icon_1_red{
    background-position: 0 -200px;
  }
  /* 第二个icon */
  .footer_icon_2{
    background-position: 0px -150px;
  }
  .footer_icon_2_red{
    background-position: 0px -100px;
  }
  /* 第三个icon */
  .footer_icon_3{
    background-position: 0 -350px;
  }
  .footer_icon_3_red{
    background-position: 0 -300px;
  }
  /* 第四个icon */
  .footer_icon_4{
    background-position: 0 -50px;
  }
  .footer_icon_4_red{
    background-position: 0 0;
  }
  /* 第五个icon */
  .footer_icon_5{
    background-position: 0 -450px;
  }
  .footer_icon_5_red{
    background-position: 0 -400px;
  }
</style>