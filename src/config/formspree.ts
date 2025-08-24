// Formspree configuration
// 注意：需要替换为实际的Formspree表单ID
export const FORMSPREEE_CONFIG = {
  // 从环境变量获取Formspree表单ID，如果没有设置则使用默认值
  FORM_ID: import.meta.env.VITE_FORMSPREE_ID || 'YOUR_FORM_ID',
  
  // Formspree API端点
  ENDPOINT: 'https://formspree.io/f/',
  
  // 完整的表单提交URL
  getSubmitUrl: () => `${FORMSPREEE_CONFIG.ENDPOINT}${FORMSPREEE_CONFIG.FORM_ID}`,
  
  // 检查配置是否有效
  isValid: () => {
    const formId = FORMSPREEE_CONFIG.FORM_ID;
    return formId && formId !== 'YOUR_FORM_ID' && formId.length > 0;
  },
};

// 使用说明：
// 1. 访问 https://formspree.io 注册账号
// 2. 创建新表单项目
// 3. 复制表单ID（格式类似：xrgjqjqr）
// 4. 将ID替换到上面的FORM_ID字段
// 5. 在Formspree设置中配置你的邮箱接收通知
