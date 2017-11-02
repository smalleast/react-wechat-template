/**
 * Created by zch on 2017/5/18.
 */
import { $wechat } from 'components/scripts/index';

export default class extends React.Component {

  componentWillMount(){
    $wechat.updateTitle('竞拍须知');
  }

  render() {
    return (
      <div className="help-bidding-view bg-f">
        竞拍须知
      </div>
    );
  }
}
