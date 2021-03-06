import { Layout } from 'antd';
import HeaderBanner from "../../components/header/headerbanner";
import './homepage.css';
import ContextBody from "../../components/contextbody/contextbody";
import FooterSite from "../../components/footersite/footersite";

const { Header, Footer, Content } = Layout;
function Home(){
  return(
      <Layout>
        <div className="test">
          <Header style={{ position: 'sticky', margin:'0', width: '100%' }}><HeaderBanner/></Header>
          <br/>
          <br/>
          <Content><ContextBody/></Content>
        </div>
        <Footer><FooterSite/></Footer>
      </Layout>
  );
}

export default Home;