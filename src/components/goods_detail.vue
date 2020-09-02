<template>
    <div style="font-size:1rem">
        <!-- 返回导航 -->
        <div class="navBarClass">
            <van-nav-bar title="网易严选" >
                <template #left>
                    <van-icon name="wap-home-o" size="58" @click="goToHome"/>
                </template>

                <template #right>
                    <van-icon name="shopping-cart-o" size="58" />
                </template>
            </van-nav-bar>
        </div>
        <!-- 商品详情页 -->
        <div class="goods_detail">
            <img :src="goods_img">
            <p>{{goods_name}}</p>
            <p>{{goods_price}}</p>
        </div>

        <!-- 商品购买导航 -->
        <div class="goodsActionClass">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
                <van-goods-action-button type="warning" text="加入购物车" />
                <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="buyGoodsBtn"
                />
            </van-goods-action>
        </div>

        <!-- sku商品规格 -->
        <div class="skuClass">
            <van-sku
                v-model="show"
                :sku="sku"
                :goods="goods"
                goods-id="goodsId"
                @buy-clicked="onBuyClicked"
                >
                <template  slot="sku-actions-top">
                    <van-uploader v-model="fileList" :after-read="afterRead">
                    </van-uploader>
                </template>
            </van-sku>
        </div>
    </div>
</template>

<script>
export default {
    name:'goods_detail',
    data() {
        return {
            msg:'商品详情页',
            goods_name:'',
            // 图片预览
            fileList: [],
            //用来保存图片上传的信息
            update_img_arr:[],
            goods_img:'',
            goods_price:0,
            show:false,
            goods: {
                    // 默认商品 sku 缩略图
                    picture: ''
                    },
            sku: {
                    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                    tree: [
                        {
                        k: '颜色', // skuKeyName：规格类目名称
                        k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                            {
                            id: '11', // skuValueId：规格值 id
                            name: '红色', // skuValueName：规格值名称
                            imgUrl: 'https://yanxuan-item.nosdn.127.net/c552b8bf17d88aa9bba6972f1d449483.png', // 规格类目图片，只有第一个规格类目可以定义图片
                            previewImgUrl: 'https://yanxuan-item.nosdn.127.net/c552b8bf17d88aa9bba6972f1d449483.png', // 用于预览显示的规格类目图片
                            },
                            {
                            id: '22',
                            name: '蓝色',
                            imgUrl: 'https://yanxuan-item.nosdn.127.net/55793ff7a0b3eb47b4b562cabd1670d9.png',
                            previewImgUrl: 'https://yanxuan-item.nosdn.127.net/55793ff7a0b3eb47b4b562cabd1670d9.png',
                            }
                        ],
                        largeImageMode: false, //  是否展示大图模式
                        },{
                            k:'尺码xx',
                            k_s: 's2',
                            v:[ {
                                    id: '33', // skuValueId：规格值 id
                                    name: 'goods_S', // skuValueName：规格值名称
                                    imgUrl: 'https://yanxuan-item.nosdn.127.net/c552b8bf17d88aa9bba6972f1d449483.png', // 规格类目图片，只有第一个规格类目可以定义图片
                                    previewImgUrl: 'https://yanxuan-item.nosdn.127.net/c552b8bf17d88aa9bba6972f1d449483.png', // 用于预览显示的规格类目图片
                                }, {
                                    id: '44', // skuValueId：规格值 id
                                    name: 'goods_M', // skuValueName：规格值名称
                                    imgUrl: 'https://yanxuan-item.nosdn.127.net/55793ff7a0b3eb47b4b562cabd1670d9.png', // 规格类目图片，只有第一个规格类目可以定义图片
                                    previewImgUrl: 'https://yanxuan-item.nosdn.127.net/55793ff7a0b3eb47b4b562cabd1670d9.png', // 用于预览显示的规格类目图片
                            }]
                        }
                    ],
                    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                    list: [
                        {
                        id: 2259, // skuId
                        s1: '11', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: '33', // 规格类目 k_s 为 s2 的对应规格值 id
                        price: 100, // 价格（单位分）
                        stock_num: 333 // 当前 sku 组合对应的库存
                        }, {
                        id: 2259, // skuId
                        s1: '11', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: '44', // 规格类目 k_s 为 s2 的对应规格值 id
                        price: 100, // 价格（单位分）
                        stock_num: 444 // 当前 sku 组合对应的库存
                        }, {
                        id: 2259, // skuId
                        s1: '22', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: '33', // 规格类目 k_s 为 s2 的对应规格值 id
                        price: 100, // 价格（单位分）
                        stock_num: 444 // 当前 sku 组合对应的库存
                        }, {
                        id: 2259, // skuId
                        s1: '22', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: '44', // 规格类目 k_s 为 s2 的对应规格值 id
                        price: 100, // 价格（单位分）
                        stock_num: 444 // 当前 sku 组合对应的库存
                        }
                    ],
                    price: '1.00', // 默认价格（单位元）
                    stock_num: 227, // 商品总库存
                    collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                    none_sku: false, // 是否无规格商品
                    hide_stock: false, // 是否隐藏剩余库存
                    messages: [
                                {
                                // 商品留言
                                datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                                multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                                name: '留言1', // 留言名称
                                type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                                required: '1', // 是否必填 '1' 表示必填
                                placeholder: '' // 可选值，占位文本
                                },
                                {
                                // 商品留言
                                datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                                multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                                name: '留言2', // 留言名称
                                type: 'date', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                                required: '1', // 是否必填 '1' 表示必填
                                placeholder: '' // 可选值，占位文本
                                }
                            ],
                }
        }
    },
    created() {
        console.log(this.$route.params.goodsInfo);
        let _n = this.$route.params.goodsInfo;

        this.goods_name = _n.goods_name;
        this.goods_img = _n.goods_img;
        this.goods_price = _n.goods_price;

        //缩略图
        this.goods.picture = _n.goods_img
    },
    methods: {
        onClickIcon() {
        console.log('点击图标');
        },
        // sku显示购买
        buyGoodsBtn() {
            this.show = true ;
        },
        // 返回主页
        goToHome(){
            this.$router.push('/')
            localStorage.setItem('save_inx',0);
        },
        // sku立即购买
        onBuyClicked(_data){
            console.log(_data);
            console.log(this.update_img_arr);
        },
         afterRead(file) {
            // 此时可以自行将文件上传至服务器
            // console.log(file);
            this.update_img_arr.push(file);
            }
    }
}
</script>

<style scoped>

</style>