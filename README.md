# 智农参谋 Demo - React 版本

这是一个使用 React 构建的智农参谋演示应用，展示了全链条智慧农业服务平台的功能和价值。

## 项目结构

```
/
├── components/                # 组件目录
│   ├── Header.js             # 头部组件
│   ├── Footer.js             # 底部组件
│   ├── ProducerView.js       # 生产者视角组件
│   ├── DistributorView.js    # 经销商视角组件
│   ├── LogisticsView.js      # 物流视角组件
│   ├── ConsumerView.js       # 消费者视角组件
│   └── *.css                 # 各组件对应的样式文件
├── assets/                    # 静态资源目录
├── App.js                     # 主应用组件
├── App.css                    # 主应用样式
├── data.js                    # 模拟数据
├── index.js                   # 应用入口
└── README.md                  # 项目说明
```

## 如何运行

1. 首先，确保你的系统中已安装 Node.js 和 npm。

2. 创建一个新的 React 应用：

   ```bash
   npx create-react-app smart-agri-demo
   cd smart-agri-demo
   ```

3. 将本项目中的所有文件复制到新创建的 React 应用中，覆盖原有文件。

4. 安装依赖并启动应用：

   ```bash
   npm install
   npm start
   ```

5. 浏览器将自动打开并访问 `http://localhost:3000`，你将看到智农参谋 Demo 的界面。

## 功能说明

本演示应用展示了智农参谋平台针对四类用户的不同功能：

1. **生产者视角**：展示市场需求趋势、价格参考和智能定价建议。
2. **经销商视角**：显示可整合的农产品供应信息。
3. **物流视角**：提供配送路径优化和智能温控监测。
4. **消费者视角**：展示产品溯源信息，确保食品安全和透明度。

所有数据均为模拟数据，用于演示效果。

## 技术特点

- 使用 React 函数式组件和 Hooks 构建
- 基于组件化设计，每个用户视角都是独立组件
- 使用 CSS 实现响应式布局，适配不同设备
- 采用统一的绿色主题，符合农业产品特性 