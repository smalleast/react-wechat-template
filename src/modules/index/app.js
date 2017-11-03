import AppBase, {$api, $app, $store, $utils} from 'components/scripts/index';

import Detail from './components/detail';
import SwiperSlider from './components/swiper-slide';
import Download from './components/download';

export default class extends AppBase {

  static initialState() {
    return {
      local: {
        wxImages: []
      },
      memory: {
        imgList: [
          'http://oss.zhulogic.com/5d154786c35848c5881b42ea2b38ca1e?x-oss-process=style/w750',
          'http://oss.zhulogic.com/18f7729282d84fdc8696c5e54c41567c?x-oss-process=style/w750',
          'http://oss.zhulogic.com/dc07e2bbae6a4a1880c7ccbf3329b7ec?x-oss-process=style/w750',
          'http://oss.zhulogic.com/984ac972bd5945b882c1f4e4480ed724?x-oss-process=style/w750',
        ],
        detail: {
          "id": 37,
          "name": "餐椅",
          "categoryId": 135,
          "category": "餐椅",
          "styleId": 191,
          "style": "北欧风格",
          "code": "XD-CY-000003",
          "stockStatus": 0,
          "coverFileId": 2414,
          "coverFile": {
            "id": 2414,
            "name": "HTB1yYlLKVXXXXcWaXXXq6xXFXXXG.jpg",
            "key": "aadce388-8609-2656-91ca-345eba6d66d1",
            "size": null,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 452,
            "width": 336,
            "suffix": "jpg"
          },
          "partFiles": [{
            "id": 313,
            "name": "HTB1s4V7KVXXXXb4XpXXq6xXFXXXa.jpg",
            "key": "b3c8f60d-790b-486b-8147-0a6eb2d51864",
            "size": 32031,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 600,
            "width": 600,
            "suffix": "jpg"
          }, {
            "id": 314,
            "name": "Heldu-Von-Alki-chair-design (1).jpg",
            "key": "ee390aa6-38de-2652-f2e1-ed3880e127f1",
            "size": 34234,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 600,
            "width": 600,
            "suffix": "jpg"
          }, {
            "id": 315,
            "name": "Heldu-Von-Alki-chair-design (3).jpg",
            "key": "e4992436-9218-6046-aa45-22222574d93c",
            "size": 46628,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 600,
            "width": 600,
            "suffix": "jpg"
          }, {
            "id": 316,
            "name": "Heldu-Von-Alki-chair-design (4).jpg",
            "key": "c0fd3ee3-4ca2-4ae9-fb33-f685904105c0",
            "size": 58101,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 600,
            "width": 600,
            "suffix": "jpg"
          }, {
            "id": 317,
            "name": "HTB1kpdTKVXXXXbDXVXXq6xXFXXXM.jpg",
            "key": "c765798b-7295-1b76-303a-9c7aa5b07cac",
            "size": 25834,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 600,
            "width": 600,
            "suffix": "jpg"
          }, {
            "id": 2415,
            "name": "UT8K1dfXUNXXXagOFbXV.jpg",
            "key": "7d2a620f-c0e8-a2d9-9a1c-52045e91d4b2",
            "size": 25647,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 600,
            "width": 600,
            "suffix": "jpg"
          }, {
            "id": 2416,
            "name": "UT8SWReXRBaXXagOFbX3.jpg",
            "key": "35aa8143-af57-52f4-56fa-e3997589f90b",
            "size": 40978,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 534,
            "width": 800,
            "suffix": "jpg"
          }, {
            "id": 2417,
            "name": "UT8vpxhXH4XXXagOFbXG.jpg",
            "key": "f21d0fd7-57a0-527b-6da7-fef50ec68b06",
            "size": 24479,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 600,
            "width": 600,
            "suffix": "jpg"
          }, {
            "id": 2418,
            "name": "UT8UpRgXRhXXXagOFbXR.jpg",
            "key": "9be3a58c-344d-82d3-b613-b9fd60232a3b",
            "size": 23624,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 600,
            "width": 600,
            "suffix": "jpg"
          }, {
            "id": 2419,
            "name": "UT8D3lgXMVXXXagOFbXL.jpg",
            "key": "c2c632c8-e412-e1fb-37e0-c075924eee93",
            "size": 21724,
            "price": 0,
            "downloads": 0,
            "type": 1,
            "height": 600,
            "width": 600,
            "suffix": "jpg"
          }],
          "modelFileId": null,
          "modelFile": null,
          "drawingFileId": null,
          "drawingFile": null,
          "realFileId": null,
          "specs": [{
            "id": 6,
            "productId": 37,
            "colorId": 275,
            "color": "粉红色系",
            "material": "曲木+水曲柳",
            "size": "500*540*800",
            "factoryPrice": null,
            "quotedPrice": 0.02,
            "supplierId": 2,
            "supplier": "名达威",
            "supplierProductCode": null,
            "specFileId": null,
            "specFile": null,
            "createTime": null,
            "updateTime": null,
            "sevenDeliveryPrice": 0.02,
            "thirtyDeliveryPrice": 0.02,
            "thirtyWithFortyFiveDeliveryPrice": 0.02,
            "fortyFiveWithNinetyDeliveryPrice": 0.02
          }, {
            "id": 2347,
            "productId": 37,
            "colorId": 275,
            "color": "粉红色系",
            "material": "曲木",
            "size": "500*540*900",
            "factoryPrice": null,
            "quotedPrice": 0.02,
            "supplierId": 2,
            "supplier": "名达威",
            "supplierProductCode": null,
            "specFileId": null,
            "specFile": null,
            "createTime": null,
            "updateTime": null,
            "sevenDeliveryPrice": 0.02,
            "thirtyDeliveryPrice": 0.02,
            "thirtyWithFortyFiveDeliveryPrice": 0.02,
            "fortyFiveWithNinetyDeliveryPrice": 0.02
          }],
          "collectedNum": 142,
          "minPrice": 0.02,
          "sold": 19,
          "remark": "餐椅",
          "productCustomizations": [{
            "part": "餐椅腿",
            "choices": [{
              "id": 2,
              "productCustomizationId": 2,
              "name": "木饰面黄色",
              "coverFileId": 304,
              "coverFile": {
                "id": 304,
                "name": "98e1353763f93fa01a6797d2d5689688.jpg",
                "key": "102e8789-15fb-af7d-7da2-8c4f06213d33?x-oss-process=style/w660",
                "size": null,
                "price": 0,
                "downloads": 0,
                "type": 1,
                "height": 687,
                "width": 1024,
                "suffix": "jpg"
              },
              "code": "mushimianhuangse",
              "parentId": 1,
              "children": []
            }]
          }, {
            "part": "餐椅面",
            "choices": [{
              "id": 3,
              "productCustomizationId": 4,
              "name": "木饰面红色",
              "coverFileId": 305,
              "coverFile": {
                "id": 305,
                "name": "1280x800.jpg",
                "key": "d637dcad-149c-2583-2660-058b0d1868d0?x-oss-process=style/w660",
                "size": null,
                "price": 0,
                "downloads": 0,
                "type": 1,
                "height": 800,
                "width": 1280,
                "suffix": "jpg"
              },
              "code": "mushimianhongse",
              "parentId": 1,
              "children": []
            }]
          }],
          "createTime": 1493882141000,
          "weightValue": 10,
          "status": 1,
          "creatorId": 1,
          "disabled": 0
        },
        changeData:[{
          "id": 6,
          "productId": 37,
          "colorId": 275,
          "color": "粉红色系",
          "material": "曲木+水曲柳",
          "size": "500*540*800",
          "factoryPrice": null,
          "quotedPrice": 0.02,
          "supplierId": 2,
          "supplier": "名达威",
          "supplierProductCode": null,
          "specFileId": null,
          "specFile": null,
          "createTime": null,
          "updateTime": null,
          "sevenDeliveryPrice": 0.02,
          "thirtyDeliveryPrice": 0.02,
          "thirtyWithFortyFiveDeliveryPrice": 0.02,
          "fortyFiveWithNinetyDeliveryPrice": 0.02
        }, {
          "id": 2347,
          "productId": 37,
          "colorId": 275,
          "color": "粉红色系",
          "material": "曲木",
          "size": "500*540*900",
          "factoryPrice": null,
          "quotedPrice": 0.02,
          "supplierId": 2,
          "supplier": "名达威",
          "supplierProductCode": null,
          "specFileId": null,
          "specFile": null,
          "createTime": null,
          "updateTime": null,
          "sevenDeliveryPrice": 0.02,
          "thirtyDeliveryPrice": 0.02,
          "thirtyWithFortyFiveDeliveryPrice": 0.02,
          "fortyFiveWithNinetyDeliveryPrice": 0.02
        }]
      }
    }
  }

  componentWillMount() {
    //this.init();
  }


  init() {
    /*this._products().then(res => {
      AppBase.$.memory = {
        detail: res.data
      };
    })*/
  }

  _products() {
    let id = 37;
    return $api.test('get', id);
  }

  componentDidMount() {
    $utils.downloadLink();
  }

  render() {
    const {detail,imgList,changeData} = AppBase.$.memory;
    return (
      <div className="product-detail">
        <SwiperSlider list={imgList}/>
        <Detail detail={detail} changeData={changeData}/>
        <Download/>
      </div>
    )
  }
}
