import logo from './logo.svg';
import './App.css';
import {Nav, Navbar, Container} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Navbar style={{borderBottom : '2px solid',}}>
        <Container >
          <Navbar.Brand href='/'>MyBlog - 블로그에 오신걸 환영한다 어쩌고 내용</Navbar.Brand>
          <Nav style={{float : 'right', '--bs-nav-link-color': 'unset'}}>
            <Nav.Link href="#home">경력 학력 자격증 등등</Nav.Link>
            <Nav.Link href="#features">내 프로젝트?</Nav.Link>
            <Nav.Link href="#pricing">깃,티스토리주소</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <div className='back-ima'>
        <div className='brown-box' style={{color : 'white',padding : '100px', fontSize : '30px'}}>ㅠㅠㅠㅠㅠㅠㅠㅠ</div>
        <div style={{padding : '270px'}}></div>
      </div>


      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#675D50', width: '100%', height:'14vh', alignItems: 'center', justifyContent: 'center', color : 'white' }}>
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
