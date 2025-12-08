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
          <h1 className="hero-title">你好，我是 <span className="highlight">开发者</span></h1>
          <p className="hero-description">
            全栈开发工程师 | React & Node.js 爱好者
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
            我是一名充满热情的开发者，专注于构建优秀的Web应用程序。
            我喜欢学习新技术，并将它们应用到实际项目中。
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">技能</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>前端开发</h3>
              <p>React, Vue, JavaScript, TypeScript, HTML, CSS</p>
            </div>
            <div className="skill-card">
              <h3>后端开发</h3>
              <p>Node.js, Python, Express, FastAPI</p>
            </div>
            <div className="skill-card">
              <h3>数据库</h3>
              <p>MongoDB, MySQL, PostgreSQL</p>
            </div>
            <div className="skill-card">
              <h3>工具</h3>
              <p>Git, Docker, VS Code, Linux</p>
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
              <h3>项目 1</h3>
              <p>使用React构建的现代化Web应用</p>
              <div className="project-links">
                <a href="#" className="project-link">查看详情</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>项目 2</h3>
              <p>基于Node.js的RESTful API服务</p>
              <div className="project-links">
                <a href="#" className="project-link">查看详情</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>项目 3</h3>
              <p>全栈电商应用程序</p>
              <div className="project-links">
                <a href="#" className="project-link">查看详情</a>
                <a href="#" className="project-link">GitHub</a>
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
            <p>如果你想与我合作或有任何问题，欢迎联系我！</p>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">📧 Email</a>
              <a href="https://github.com/yourusername" className="contact-link">💻 GitHub</a>
              <a href="https://linkedin.com/in/yourusername" className="contact-link">💼 LinkedIn</a>
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
