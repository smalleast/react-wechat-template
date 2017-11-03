import {Tabs, WhiteSpace, Badge} from 'antd-mobile';
import {Link} from 'react-router';

export default class extends React.PureComponent {

  render() {
    return (
      <section>
        <div className="row">
          <div className="col"><Link to="/test1">测试1</Link>
          </div>
          <div className="col"><Link to="/test2">测试2</Link>
          </div>
          <div className="col"><Link to="/test3">测试3</Link>
          </div>
        </div>
        <WhiteSpace/>
        <div className="row row-center">
          <div className="col tc">
            {this.props.children}
          </div>
        </div>
      </section>
    )

  }
}
