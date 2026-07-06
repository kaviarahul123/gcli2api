// GCLI2API English Translation Patch
document.addEventListener("DOMContentLoaded", () => {
    const dict = {
        "GCLI2API 管理面板": "GCLI2API Admin Panel",
        "GCLI2API 控制面板": "GCLI2API Control Panel",
        "GCLI2API 移动端控制面板": "GCLI2API Mobile Panel",
        "请输入访问密码：": "Please enter access password:",
        "输入密码": "Enter password",
        "登录": "Login",
        "退出登录": "Logout",
        "加载中...": "Loading...",
        "检查更新": "Check for Updates",
        "获取认证链接": "Get Auth Link",
        "认证链接：": "Auth Link:",
        "点击此链接进行认证": "Click this link to authenticate",
        "重要说明：": "Important Notes:",
        "点击上方认证链接，会在新窗口中打开Google OAuth页面": "Click the link above to open Google OAuth in a new window",
        "完成Google账号登录和授权": "Sign in to your Google Account and authorize",
        "授权成功后会跳转到localhost:11451显示成功页面": "After successful authorization, it will redirect to localhost:11451",
        "关闭OAuth窗口，返回本页面": "Close the OAuth window and return to this page",
        "点击下方\"获取认证文件\"按钮完成流程": "Click the 'Get Credentials File' button below to finish",
        "获取认证文件": "Get Credentials File",
        "认证文件内容：": "Credentials Content:",
        "无法回源？试试快捷方式": "Cannot redirect? Try alternative shortcut",
        "适用场景：": "Applicable scenarios:",
        "云服务器、VPS等非本地环境": "Cloud servers, VPS, and other remote environments",
        "防火墙阻止了11451端口访问": "Firewall blocks port 11451 access",
        "网络环境无法正常回源到localhost": "Network cannot redirect to localhost",
        "Docker容器内运行，端口映射问题": "Docker container port mapping issues",
        "什么是回调URL？": "What is a Callback URL?",
        "完成Google OAuth授权后，浏览器地址栏显示的完整URL，通常看起来像这样：": "After Google OAuth authorization, copy the full URL in your browser's address bar, usually like this:",
        "使用步骤：": "Steps to use:",
        "点击上方认证链接，完成Google授权": "Click the link above to complete Google authorization",
        "授权成功后，复制浏览器地址栏的": "After authorization, copy the ",
        "完整URL": "complete URL",
        "粘贴到下方输入框，点击获取凭证即可": "Paste it into the input box below and click Get Credentials",
        "粘贴完整的回调URL，例如：": "Paste the complete callback URL, e.g.:",
        "从回调URL获取凭证": "Get Credentials from Callback URL",
        "Antigravity 认证模式": "Antigravity Auth Mode",
        "获取 Antigravity 认证链接": "Get Antigravity Auth Link",
        "获取凭证": "Get Credentials",
        "批量上传": "Batch Upload",
        "批量上传凭证": "Batch Upload Credentials",
        "拖拽ZIP文件到此处，或点击上传": "Drag ZIP file here, or click to upload",
        "上传说明": "Upload Instructions",
        "选择文件": "Choose File",
        "上传": "Upload",
        "GCLI凭证管理": "GCLI Credentials",
        "Antigravity凭证管理": "Antigravity Credentials",
        "刷新": "Refresh",
        "下载全部": "Download All",
        "批量操作": "Batch Operations",
        "全选": "Select All",
        "批量启用": "Batch Enable",
        "批量禁用": "Batch Disable",
        "批量删除": "Batch Delete",
        "更新所有邮箱": "Refresh All Emails",
        "获取邮箱": "Get Email",
        "已选": "Selected",
        "个凭证": "credentials",
        "配置管理": "Config Management",
        "实时日志": "Real-time Logs",
        "清空日志": "Clear Logs",
        "下载日志": "Download Logs",
        "关于项目": "About Project",
        "项目信息": "Project Info",
        "版本号": "Version",
        "运行环境": "Runtime Environment",
        "存储适配器": "Storage Adapter",
        "项目地址": "Project URL",
        "保存配置": "Save Config",
        "还原默认": "Restore Defaults",
        "当前配置": "Current Config",
        "提交修改": "Submit Changes",
        "关闭": "Close",
        "确定": "OK",
        "取消": "Cancel",
        "提示": "Hint",
        "成功": "Success",
        "失败": "Failed",
        "警告": "Warning",
        "信息": "Info",
        "启用": "Enable",
        "禁用": "Disable",
        "删除": "Delete",
        "状态": "Status",
        "操作": "Actions",
        "正常": "Normal",
        "异常": "Error",
        "冷却中": "Cooling down",
        "已禁用": "Disabled",
        "高级选项：Google Cloud Project ID": "Advanced Options: Google Cloud Project ID",
        "(不用管，直接点击获取链接即可)": "(Optional, just click get link directly)",
        "Google Cloud Project ID (可选):": "Google Cloud Project ID (Optional):",
        "留空将尝试自动检测，或手动输入项目ID": "Leave blank to auto-detect, or enter project ID manually",
        "提示：如果你不懂这是什么，可以留空此字段让 system 自动检测项目ID": "Tip: If you don't know what this is, leave it blank to auto-detect",
        "自动化优化：": "Automated Optimization:",
        "系统现在会在认证成功后自动为您的项目启用必需的API服务": "The system will automatically enable the required API services for your project after successful authentication:",
        "说明：": "Description:",
        "无需手动启用API，系统会自动处理这些配置步骤，让认证流程更加顺畅。": "No manual API activation is required, the system will handle these configuration steps automatically.",
        "副本集": "Replica Set",
        "环境变量锚定": "Env Locked",
        "服务器监听地址": "Server Host",
        "服务器端口": "Server Port",
        "聊天API访问密码": "API Password",
        "控制面板访问密码": "Panel Password",
        "通用访问密码": "Universal Password",
        "PostgreSQL 存储": "PostgreSQL Storage",
        "MongoDB 存储": "MongoDB Storage",
        "Redis 缓存": "Redis Cache",
        "代理配置": "Proxy Config",
        "自动封禁": "Auto Ban",
        "自动封禁错误码": "Auto Ban Error Codes",
        "重试 429 错误": "Retry 429 Errors",
        "429 最大重试次数": "429 Max Retries",
        "429 重试间隔": "429 Retry Interval",
        "日志级别": "Log Level",
        "日志文件": "Log File",
        "流式抗截断最大尝试次数": "Anti-truncation Max Retries",
        "服务器配置": "Server Config",
        "密码配置": "Password Config",
        "存储配置": "Storage Config",
        "错误处理和重试配置": "Error & Retry Config",
        "日志配置": "Log Config",
        "高级功能配置": "Advanced Config",
        "保存成功": "Saved successfully",
        "保存失败": "Save failed",
        "密码验证成功": "Password verified successfully",
        "密码验证失败": "Password verification failed",
        "未登录": "Not logged in",
        "确定要删除选中的凭证吗？": "Are you sure you want to delete the selected credentials?",
        "确定要删除这个凭证吗？": "Are you sure you want to delete this credential?",
        "暂无日志": "No logs yet",
        "自动滚动": "Auto Scroll",
        "日志过滤": "Log Filter",
        "全部": "All",
        "调试": "Debug",
        "警告": "Warning",
        "严重": "Critical",
        "过滤日志...": "Filter logs...",
        "双击显示/隐藏敏感信息": "Double-click to show/hide sensitive info",
        "模型": "Model",
        "次数": "Calls",
        "上次使用时间": "Last Used Time",
        "重置": "Reset",
        "使用统计": "Usage Stats",
        "使用限制": "Usage Limits",
        "限制设置": "Limit Settings",
        "冷却时间(秒)": "Cooldown (seconds)",
        "单次最大额度": "Max Quota per Request",
        "日最大额度": "Daily Max Quota",
        "重置时间": "Reset Time",
        "设置成功": "Set successfully",
        "重置成功": "Reset successfully",
        "设置失败": "Failed to set",
        "重置失败": "Failed to reset",
        "加载配置失败": "Failed to load config",
        "加载版本失败": "Failed to load version",
        "更新失败": "Update failed",
        "已是最新版本": "Already on the latest version",
        "发现新版本": "New version found",
        "是否现在更新？": "Update now?",
        "正在更新中...": "Updating...",
        "更新成功，请刷新页面": "Update successful, please refresh the page"
    };

    function t(text) {
        if (!text) return text;
        const trimmed = text.trim();
        if (dict[trimmed]) {
            return text.replace(trimmed, dict[trimmed]);
        }
        for (let key in dict) {
            if (trimmed === key) {
                return dict[key];
            }
        }
        return text;
    }

    function walk(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = t(node.nodeValue);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.placeholder) {
                node.placeholder = t(node.placeholder);
            }
            if (node.tagName === 'INPUT' && (node.type === 'button' || node.type === 'submit') && node.value) {
                node.value = t(node.value);
            }
            for (let child of node.childNodes) {
                walk(child);
            }
        }
    }

    // 1. Initial page translation
    walk(document.body);
    document.title = t(document.title);

    // 2. Observe dynamic changes to translate dynamically rendered elements (like tables, logs, etc.)
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                walk(node);
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
