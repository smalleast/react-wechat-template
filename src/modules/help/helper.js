/**
 * Created by dcpai on 2017/6/16.
 */
import AppBase, {$wechat} from 'components/scripts/index';

export default class extends React.Component {

  componentWillMount() {
    $wechat.updateTitle('帮助中心');
  }

  render() {
    return (
      <div className="help-helper wp-icon-help-1 bg-f">
        帮助中心
      </div>
    );
  }
}
