// 在页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 创建样式元素
  const style = document.createElement('style');
  
  // 添加CSS规则 - 设计改进版本
  style.textContent = `
    /* 宠物卡片新配色 - 优化设计 */
    .pet-card { 
      border: 1px solid rgba(19, 135, 192, 0.15) !important;
      box-shadow: 0 8px 20px rgba(19, 135, 192, 0.08) !important; 
      transition: all 0.4s ease-out !important;
    }
    
    .pet-card:hover { 
      transform: translateY(-8px) !important;
      box-shadow: 0 15px 25px rgba(19, 135, 192, 0.15) !important; 
      border-color: rgba(253, 109, 46, 0.3) !important; 
    }
    
    .pet-name { 
      color: #1387C0 !important;
      font-weight: 600 !important;
      transition: all 0.3s ease !important;
    }
    
    .pet-card:hover .pet-name { 
      color: #FD6D2E !important; 
    }
    
    .pet-status { 
      background-color: rgba(19, 135, 192, 0.85) !important; 
      box-shadow: 0 2px 8px rgba(19, 135, 192, 0.2) !important;
      font-size: 0.65rem !important;
      padding: 5px 10px !important;
    }
    
    .gender-icon { 
      background-color: rgba(19, 135, 192, 0.1) !important; 
      color: #1387C0 !important; 
    }
    
    .pet-trait { 
      background-color: rgba(250, 237, 209, 0.6) !important; 
      color: #333 !important; 
      border: 1px solid rgba(253, 109, 46, 0.15) !important;
      font-size: 0.7rem !important;
      padding: 2px 8px !important;
    }
    
    .pet-card:hover .pet-trait { 
      background-color: rgba(250, 237, 209, 0.8) !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 2px 6px rgba(253, 109, 46, 0.1) !important;
    }
    
    .pet-cta-button { 
      background: linear-gradient(135deg, #FD6D2E 0%, #e55b20 100%) !important;
      box-shadow: 0 3px 8px rgba(253, 109, 46, 0.2) !important;
    }
    
    .pet-cta-button:hover {
      box-shadow: 0 5px 12px rgba(253, 109, 46, 0.25) !important;
      transform: translateY(-2px) !important;
    }
    
    .pet-type-icon { 
      border: 1px solid rgba(250, 237, 209, 0.5) !important;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08) !important;
    }
    
    .pet-card[data-type="cat"] .pet-type-icon { 
      background: linear-gradient(135deg, #1387C0 0%, #0e6a99 100%) !important; 
    }
    
    .pet-card[data-type="dog"] .pet-type-icon { 
      background: linear-gradient(135deg, #FD6D2E 0%, #e55b20 100%) !important; 
    }
    
    /* 可领养标签改为白底彩色细边框 */
    .adopt-badge {
      background: white !important;
      color: #FD6D2E !important;
      border: 1px solid #FD6D2E !important;
      box-shadow: 0 1px 3px rgba(253, 109, 46, 0.1) !important;
      font-weight: 500 !important;
      font-size: 0.65rem !important;
    }
    
    /* 图片容器优化 */
    .pet-image-container {
      border-bottom: none !important;
      background: none !important;
    }
  `;
  
  // 将样式添加到文档头部
  document.head.appendChild(style);
  console.log('优化后的样式覆盖已应用');
});
