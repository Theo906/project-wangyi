// 项目的中间件
let express = require('express');
let app = express();

//解决跨域问题
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
    }
    else {
      next();
    }
  });

// 搜索
app.get('/search',(req,res)=>{
    console.log(req.query.search_key);
    // 传入的搜索值
    let _searchKey = req.query.search_key;

    // 临时商品，假数据
    let _tempGoods = [{
        name:"好看的男装",
        price:99
    },{
        name:"美丽的女装",
        price:77
    },{
        name:"可爱的童装",
        price:33
    },{
        name:"时尚的工装",
        price:66
    }];

    // 过滤结果
    let _filterGoods = _tempGoods.filter(n=>{
        return n.name.indexOf(_searchKey) !== -1
    });

    // 简单的二次判断
    let _result = _filterGoods.length > 0 ? _filterGoods[0] : {msg:'未找到搜索结果'}

    res.send(_result);
});

// 商品列表
app.get('/getGoodsTapList',(req,res)=>{
    let _goodsObj = ['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运行旅行','数码家电','全球特色'];
    res.send(_goodsObj);
});

//轮播图
app.get('/getSwipeGoodsImg',(req,res)=>{
    let swipeImgList = [
        'https://yanxuan.nosdn.127.net/b5e19c5a6269225458c00dabbd75a62a.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/30e9502b88799f65375d9604f13dfb28.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/72440d65cbb26a337dbf84233d97e23b.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/45db13b06bdc06373f924a10ca820400.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
    ];

    res.send(swipeImgList);
});

// 分类页商品列表
app.get('/cate_goods_list_0',(req, res)=>{
	let _d = [{
		goods_img:'https://yanxuan-item.nosdn.127.net/0afcd9dd065aa207e56d34dd85aa136e.png',
		goods_name:'睡出丝滑娇肤，100%桑蚕丝防螨提花被 薄被',
		goods_price:679
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/c552b8bf17d88aa9bba6972f1d449483.png',
		goods_name:'自带清凉，黑科技持久冷感垫 三件套',
		goods_price:159
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/55793ff7a0b3eb47b4b562cabd1670d9.png',
		goods_name:'可折叠爽滑冰丝席 三件套',
		goods_price:189
	}];

	res.send( _d );
});

app.get('/cate_goods_list_1',(req, res)=>{
	let _d = [{
		goods_img:'https://yanxuan-item.nosdn.127.net/aa8d1a3f633f954474e421ef627c075a.png',
		goods_name:'法国原产条纹圆领短袖T恤情侣款',
		goods_price:578
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/8563f498cec5b5f9474c8daadce4ca9f.png',
		goods_name:'男式舒适丝棉条纹短袖衬衫',
		goods_price:209
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/16e78d60046c37375f8161e947258a70.png',
		goods_name:'女式方扣中跟乐福鞋',
		goods_price:349
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/e3b6d3274397cdc5c1632ebf63059897.png',
		goods_name:'男式无缝休闲运动T恤',
		goods_price:49.9
	}];

	res.send( _d );
});

app.get('/cate_goods_list_2',(req, res)=>{
	let _d = [{
		goods_img:'https://yanxuan-item.nosdn.127.net/ab5de9e34349e85581487446ea44b3e9.png',
		goods_name:'夏季宵食吮指好味，盱眙小龙虾4-6钱 3斤装',
		goods_price:109
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/926865f19bd4b3dc10285cb8307144e6.png',
		goods_name:'逛吃逛吃的青春季，想见你 情侣零食礼袋',
		goods_price:99
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/9e3ec5ff3fc254c30583ad9b65d39a9a.png',
		goods_name:'山药脆片 烧烤味 70克*3袋',
		goods_price:19
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/23a9fba86c3942f1a574731792854bc2.png',
		goods_name:'女式无缝运动T恤',
		goods_price:49.9
	},{
		goods_img:'https://yanxuan-item.nosdn.127.net/927f79fa2979260fa8e87fdb2187f701.png',
		goods_name:'女式低强度无缝运动文胸',
		goods_price:49.9
	}];

	res.send( _d );
});

app.listen(3344,()=>{
    console.log('高仿网易严选middleware已启动！')
})