# 用户反馈功能设置指南

## 🎯 功能概述

Dandy's World Calculator 现在包含一个完整的用户反馈系统，允许用户报告问题、提出建议或报告bug。反馈数据会自动发送到你的邮箱。

## 🛠️ Formspree 设置步骤

### 第一步：注册 Formspree 账号

1. 访问 [https://formspree.io](https://formspree.io)
2. 点击 "Get Started" 或 "Sign Up"
3. 使用邮箱注册账号（支持 Google 账号登录）

### 第二步：创建新表单

1. 登录后，点击 "New Form" 或 "+" 按钮
2. 输入表单名称，例如：`Dandy's World Calculator Feedback`
3. 选择表单类型：选择 "Contact Form"
4. 点击 "Create Form"

### 第三步：获取表单ID

1. 创建表单后，你会看到一个表单ID
2. 格式类似：`xrgjqjqr` 或 `abc123def`
3. 复制这个ID

### 第四步：配置代码

1. 打开 `src/config/formspree.ts` 文件
2. 将 `YOUR_FORM_ID` 替换为实际的表单ID：

```typescript
export const FORMSPREEE_CONFIG = {
  FORM_ID: 'xrgjqjqr', // 替换为你的实际ID
  // ... 其他配置
};
```

### 第五步：配置邮件通知

1. 在 Formspree 仪表板中，点击你的表单
2. 在 "Settings" 标签页中：
   - 确保 "Email Notifications" 已启用
   - 验证接收邮箱地址
   - 可以设置邮件模板和主题

### 第六步：测试功能

1. 启动开发服务器：`npm run dev`
2. 访问 Calculator 页面
3. 点击右下角的 "🐛 Report Issue" 按钮
4. 填写反馈表单并提交
5. 检查你的邮箱是否收到通知

## 📧 反馈数据结构

每次用户提交反馈时，你会收到包含以下信息的邮件：

### 基本信息
- **问题类型**: character-data, calculation-bug, ui-issue, feature-request
- **相关角色/页面**: 用户输入的相关信息
- **详细描述**: 用户的问题描述或建议
- **用户邮箱**: 如果用户提供了的话

### 自动捕获的技术信息
- **当前页面**: 用户提交反馈时的页面路径
- **当前标签页**: Calculator中的活动标签（research/unlock/strategy）
- **提交时间**: ISO格式的时间戳
- **用户代理**: 浏览器和设备信息

## 🎨 自定义选项

### 修改反馈按钮样式

在 `src/components/FeedbackButton.tsx` 中，你可以：

1. 更改按钮颜色和样式
2. 修改按钮位置
3. 调整弹窗大小和布局
4. 自定义成功提示消息

### 添加新的问题类型

在 `FeedbackData` 接口中添加新的问题类型：

```typescript
interface FeedbackData {
  issueType: 'character-data' | 'calculation-bug' | 'ui-issue' | 'feature-request' | 'new-type' | '';
  // ... 其他字段
}
```

然后在表单的select选项中添加对应的选项。

## 🔒 隐私和安全

### 数据保护
- 用户邮箱是可选的
- 所有技术信息都是自动收集的
- 数据只发送到你的Formspree账户
- 不存储在任何第三方服务器上

### 垃圾邮件防护
- Formspree 内置反垃圾邮件保护
- 可以设置验证码要求
- 支持IP地址限制

## 📱 响应式设计

反馈系统完全响应式，支持：
- 桌面端：标准弹窗布局
- 平板端：自适应宽度
- 移动端：全屏弹窗，触摸友好

## 🚀 部署注意事项

### 生产环境
1. 确保Formspree配置正确
2. 测试反馈功能是否正常工作
3. 监控邮件通知是否正常接收

### 环境变量（可选）
如果需要更安全的配置，可以使用环境变量：

```typescript
export const FORMSPREEE_CONFIG = {
  FORM_ID: process.env.REACT_APP_FORMSPREE_ID || 'YOUR_FORM_ID',
  // ... 其他配置
};
```

然后在 `.env` 文件中设置：
```
REACT_APP_FORMSPREE_ID=xrgjqjqr
```

## ❓ 常见问题

### Q: 收不到邮件通知？
A: 检查Formspree设置中的邮箱配置，确保邮箱地址正确。

### Q: 表单提交失败？
A: 检查表单ID是否正确，网络连接是否正常。

### Q: 如何更改接收邮箱？
A: 在Formspree仪表板的表单设置中修改通知邮箱。

### Q: 可以添加更多字段吗？
A: 可以，在FeedbackData接口和表单中添加新字段即可。

## 📞 技术支持

如果在设置过程中遇到问题：
1. 查看 [Formspree 官方文档](https://help.formspree.io/)
2. 检查浏览器控制台是否有错误信息
3. 验证网络请求是否成功发送

---

**注意**: 请确保在生产环境中使用前，将 `YOUR_FORM_ID` 替换为实际的Formspree表单ID！
