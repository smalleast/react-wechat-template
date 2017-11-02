import AppBase, {$api, $app, $store,$utils} from 'components/scripts/index';

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
        imgList: [],
        detail: {},
        changeData: []
      }
    }
  }

  componentWillMount() {
    this.init();
  }

  init() {
    this._products().then(res => {

      AppBase.$.memory = {
        detail: res.data
      };
    })
  }

  _products() {
    let id = 37;
    return $api.test('get', id);
  }
  componentDidMount() {
    $utils.downloadLink();
  }
  render() {
    const {detail} = AppBase.$.memory;
    return (
      <div className="product-detail">
        <SwiperSlider list={imgList}/>
        <Detail detail={detail} changeData={changeData} />
        <Download/>
      </div>
    )
  }
}
