<template>
    <div style="position:relative;padding-left:2.16rem" >
        <!-- 侧边栏 -->
        <div class="sidebarClass">
            <van-sidebar v-model="sidebarKey" @change="onchangeSidebar">
                <van-sidebar-item v-for="(n,inx) in sidebar_arr" :key="inx" :title= n.txt />
            </van-sidebar>
        </div>

        <!-- 右侧商品区 -->
        <div class="goodsSidebar">
            <div class="goodsItem" v-for="(n,inx) in goodsListObj" :key="inx" @click="goToGoodsBuy(n)"> 
                <img :src=n.goods_img />
                <p>{{n.goods_name}}</p>
                <b>{{n.goods_price}}</b>
            </div>
        </div>

        <footerBar></footerBar>
    </div>
</template>

<script>
    import footerBar from './footerBar'
    import axios from 'axios'

    export default {
        name:'cateList',
        components:{footerBar},
        data(){
            return{
                msg:'分类页',
                sidebarKey:0,
                sidebar_arr:[{
                        txt:'推荐专区'
                    },{
                        txt:'新品专区'
                    },{
                        txt:'居家生活'
                    }
                    // ,{
                    //     txt:'服饰鞋包'
                    // },{
                    //     txt:'美食酒水'
                    // },{
                    //     txt:'个护清洁'
                    // },{
                    //     txt:'母婴亲子'
                    // },{
                    //     txt:'运动旅行'
                    // },{
                    //     txt:'数码家电'
                    // },{
                    //     txt:'严选全球'
                    // }
                    ],
                goodsListObj:''

            }
        },
        created(){
             axios.get('http://localhost:3344/cate_goods_list_0')
                    .then(_d => {
                        // console.log(_d.data);
                        this.goodsListObj = _d.data;
                    })
        },
        methods: {
            //切换侧边栏
            onchangeSidebar(_inx){
                console.log(_inx);

                axios.get('http://localhost:3344/cate_goods_list_'+_inx)
                    .then(_d => {
                        // console.log(_d.data);
                        this.goodsListObj = _d.data;
                    })
            },
            // 商品购买页
            goToGoodsBuy(_n){
                // console.log(_n);

                this.$router.push({
                    name:'goods_detail',
                    params:{goodsInfo: _n}
                })
            }
        }
    }
</script>

<style scoped>
    .goodsItem{
        float: left;
        width: 44%;
        margin: 0rem 0.2rem 0.44rem 0.2rem;
        font-size:  .37333rem;
        overflow: hidden;
    }
    .goodsItem img{
        height: 4.6rem;
    }
    .sidebarClass{
        position: fixed;
        left: 0;
        top: 0;
    }
</style>