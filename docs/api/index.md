# API 参考

Small Phone 提供了一套跨平台的 C++ 核心 API 以及针对 Android (Kotlin/Compose) 和 iOS (Swift/SwiftUI) 的原生绑定。

## 核心模块

*   [Application](/api/core/application) - 应用程序生命周期管理
*   [AI Context](/api/core/ai-context) - AI 模型加载与推理上下文
*   [Data Store](/api/core/data-store) - 跨端数据同步存储

## 平台绑定

### Android
*   `SmallPhoneApp` (Composable)
*   `SmallPhoneContext`

### iOS
*   `SmallPhoneApp` (SwiftUI View)
*   `SmallPhoneContext`
