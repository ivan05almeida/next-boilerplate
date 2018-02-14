import Header from './Header';
import "../styles.less";

const Layout = (props) => (
  <div className="layoutStyle">
    <Header />
    {props.children}
  </div>
)

export default Layout
