import { useState, useEffect } from 'react'
import './App.css'

// API基础URL - 部署到阿里云后需要修改为你的服务器地址
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

function App() {
  const [flowers, setFlowers] = useState([])
  const [flowerCount, setFlowerCount] = useState(0)
  const [viewCount, setViewCount] = useState(0)

  // 页面加载时先增加访问量，然后获取最新统计数据
  useEffect(() => {
    const initStats = async () => {
      // 先增加访问量
      await incrementView()
      // 然后获取最新的统计数据（包括刚刚增加的访问量和服务器的献花数）
      await fetchStats()
    }
    initStats()
  }, [])

  // 获取统计数据（完全以服务器为准）
  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/stats`)
      const result = await response.json()
      if (result.success) {
        setViewCount(result.data.viewCount)
        setFlowerCount(result.data.flowerCount)
      }
    } catch (error) {
      console.error('获取统计数据失败:', error)
      // API失败时显示0，不使用本地存储
      setViewCount(0)
      setFlowerCount(0)
    }
  }

  // 增加访问量
  const incrementView = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/view`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      const result = await response.json()
      if (result.success) {
        setViewCount(result.data.viewCount)
      }
    } catch (error) {
      console.error('增加访问量失败:', error)
    }
  }

  // 增加献花次数（完全以服务器返回值为准）
  const incrementFlower = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/flower`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      const result = await response.json()
      if (result.success) {
        // 使用服务器返回的献花数，确保同步
        setFlowerCount(result.data.flowerCount)
        console.log(`献花成功！当前献花数: ${result.data.flowerCount}`)
      }
    } catch (error) {
      console.error('增加献花次数失败:', error)
      alert('献花失败，请检查网络连接')
    }
  }

  const createFlower = () => {
    const newFlower = {
      id: Date.now() + Math.random(),
      left: Math.random() * 100,
      animationDuration: 3 + Math.random() * 2,
      size: 20 + Math.random() * 20,
      rotation: Math.random() * 360,
      type: ['🌸', '🌺', '🌼', '🌻', '🌷'][Math.floor(Math.random() * 5)]
    }

    setFlowers(prev => [...prev, newFlower])

    // 5秒后移除花瓣
    setTimeout(() => {
      setFlowers(prev => prev.filter(f => f.id !== newFlower.id))
    }, 5000)
  }

  const handleFlowerClick = () => {
    // 调用API增加献花次数
    incrementFlower()

    // 每次点击创建5-8片花瓣
    const count = 5 + Math.floor(Math.random() * 4)
    for (let i = 0; i < count; i++) {
      setTimeout(() => createFlower(), i * 100)
    }
  }

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

      {/* Flower Section */}
      <section className="flower-section">
        <div className="flower-container-center">
          <button className="flower-button-center" onClick={handleFlowerClick}>
            <span className="flower-icon">💐</span>
            <span className="flower-text">献花</span>
          </button>
          <div className="flower-count">
            <span className="count-number">{flowerCount}</span>
            <span className="count-text">人已献花</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 我的作品集. All rights reserved.</p>
          <div className="footer-stats">
            <span className="stat-item">
              <span className="stat-icon">👁️</span>
              <span className="stat-text">访问量: <strong>{viewCount}</strong></span>
            </span>
            <span className="stat-divider">|</span>
            <span className="stat-item">
              <span className="stat-icon">💐</span>
              <span className="stat-text">献花: <strong>{flowerCount}</strong></span>
            </span>
          </div>
        </div>
      </footer>

      {/* Falling Flowers */}
      <div className="flowers-container">
        {flowers.map(flower => (
          <div
            key={flower.id}
            className="flower"
            style={{
              left: `${flower.left}%`,
              fontSize: `${flower.size}px`,
              animationDuration: `${flower.animationDuration}s`,
              '--rotation': `${flower.rotation}deg`
            }}
          >
            {flower.type}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
