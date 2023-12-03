import logo from './logo.svg';
import './App.css';
import {Nav, Navbar, Container} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Navbar style={{borderBottom : '2px solid',}}>
        <Container style= {{paddingLeft :'150px', paddingRight : '150px', paddingBottom : '2px', paddingTop : '2px' }}>
          <Navbar.Brand href='/'>MyBlog - 블로그에 오신걸 환영한다 어쩌고 내용</Navbar.Brand>
          <Nav style={{float : 'right', '--bs-nav-link-color': 'unset'}}>
            <Nav.Link href="#home">경력 학력 자격증 등등</Nav.Link>
            <Nav.Link href="#features">내 프로젝트?</Nav.Link>
            <Nav.Link href="#pricing">깃,티스토리주소</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='back-ima'>
        <div className='green-box'></div>
        <h1 style={{color : '#04CE6E'}}>웹 개발자 전종현 포트폴리오</h1>
        <p style={{color : '#04CE6E'}}>안녕하세요 블라블라~ 나는 이런 사람이예요~
        🪪 📞 📬 🗓️ 👤 ✏️
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#04CE6E', width: '100%', height: '24vh', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ display: 'flex', marginBottom: '10px' }}>
    <a className='emoji-github' style={{ textAlign: 'center', marginRight: '10px' }} href="https://github.com/JJONGHyun-JEON" target="_blank" rel="noopener noreferrer"></a>
    <a className='emoji-tistory' style={{ textAlign: 'center', marginRight: '10px' }} href="https://jjong-page.tistory.com/" target="_blank" rel="noopener noreferrer"></a>
    <a className='emoji-instagram' style={{ textAlign: 'center' }} href="https://www.instagram.com/_jjonghyn/" target="_blank" rel="noopener noreferrer"></a>
  </div>
  <div>© 2023 GitHub, Inc. Footer navigation</div>
</div>
      {/* <div style={{display:'flex',  backgroundColor : '#6c757d', width : '100%', height : '24vh', alignItems: 'center', justifyContent: 'center'}}>
        <a className='emoji-github' style={{textAlign : 'center',}} href=""></a>
        <a className='emoji-tistory' style={{textAlign : 'center',}} href=""></a>
        <a className='emoji-instagram' style={{textAlign : 'center',}} href=""></a>
        <div>© 2023 GitHub, Inc. Footer navigation</div>
      </div> */}
      
    </div>
  );
}

export default App;
