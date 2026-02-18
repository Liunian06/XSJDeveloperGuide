# UI 层架构

Small Phone 坚持使用“原生优先” (Native-First) 的策略来构建用户界面，以获得最佳的性能和平台一致性。

## Android
*   **Jetpack Compose**: 现代化的声明式 UI 工具包。
*   **Material 3**: 遵循最新的设计规范。

## iOS
*   **SwiftUI**: 苹果生态系统的声明式框架。
*   **Combine**: 响应式编程支持。

## ViewModel 模式

我们通过 C++ 绑定 (FFI/JNI) 或抽象接口，将核心业务逻辑暴露给各平台的 ViewModel，从而驱动 UI 状态的变化。
