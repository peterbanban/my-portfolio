import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <nav className="nav">
          <h1 className="logo">我的作品集</h1>
          <ul className="nav-links">
            <li><a href="#about">关于</a></li>
            <li><a href="#skills">技能</a></li>
            <li><a href="#projects">项目</a></li>
            <li><a href="#contact">联系</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">你好，我是 <span className="highlight">移动端全栈工程师</span></h1>
          <p className="hero-description">
            Android · 鸿蒙 · 微信小程序 | 探索量化交易的未来
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">查看项目</a>
            <a href="#contact" className="btn btn-secondary">联系我</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">关于我</h2>
          <p className="about-text">
            我是一名专注于移动端开发的全栈工程师，拥有丰富的大型Android项目开发经验，
            熟悉鸿蒙应用开发和微信小程序生态。我热衷于探索新技术，
            目前正在深入学习量化交易领域，将技术与金融相结合，创造更多可能性。
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">技能</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>移动端开发</h3>
              <p>Android (Java/Kotlin), 鸿蒙 (ArkTS), 微信小程序, React Native</p>
            </div>
            <div className="skill-card">
              <h3>前端开发</h3>
              <p>React, Vue, JavaScript, TypeScript, HTML5, CSS3</p>
            </div>
            <div className="skill-card">
              <h3>后端开发</h3>
              <p>Node.js, Python, Java Spring Boot, RESTful API</p>
            </div>
            <div className="skill-card">
              <h3>量化交易</h3>
              <p>Python量化策略, akshare数据分析, 回测系统</p>
            </div>
            <div className="skill-card">
              <h3>数据库</h3>
              <p>MySQL, MongoDB, SQLite, Room Database</p>
            </div>
            <div className="skill-card">
              <h3>开发工具</h3>
              <p>Git, Android Studio, DevEco Studio, VS Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">项目展示</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>大型Android应用</h3>
              <p>企业级Android应用开发，MVVM架构，Jetpack组件，Material Design</p>
              <div className="project-links">
                <a href="#" className="project-link">查看详情</a>
                <a href="https://github.com/peterbanban" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>鸿蒙应用开发</h3>
              <p>基于ArkTS的鸿蒙原生应用，适配多设备形态，流畅用户体验</p>
              <div className="project-links">
                <a href="#" className="project-link">查看详情</a>
                <a href="https://github.com/peterbanban" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>微信小程序</h3>
              <p>高性能微信小程序，云开发集成，丰富的交互体验</p>
              <div className="project-links">
                <a href="#" className="project-link">查看详情</a>
                <a href="https://github.com/peterbanban" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>量化交易系统</h3>
              <p>Python量化交易策略开发，实时数据分析，自动化回测系统</p>
              <div className="project-links">
                <a href="#" className="project-link">查看详情</a>
                <a href="https://github.com/peterbanban" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>全栈Web应用</h3>
              <p>React前端 + Node.js后端，RESTful API设计，响应式布局</p>
              <div className="project-links">
                <a href="#" className="project-link">查看详情</a>
                <a href="https://github.com/peterbanban" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>跨平台移动应用</h3>
              <p>React Native跨平台开发，iOS与Android双端适配</p>
              <div className="project-links">
                <a href="#" className="project-link">查看详情</a>
                <a href="https://github.com/peterbanban" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">联系我</h2>
          <div className="contact-info">
            <p>如果你对移动端开发、量化交易或技术合作感兴趣，欢迎与我交流！</p>
            <div className="contact-links">
              <a href="mailto:peterbanban@163.com" className="contact-link">📧 Email</a>
              <a href="https://github.com/peterbanban" className="contact-link">💻 GitHub</a>
              <a href="https://linkedin.com/in/peterbanban" className="contact-link">💼 LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 我的作品集. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
