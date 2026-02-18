# C++ 核心架构

Small Phone 的核心逻辑采用现代 C++ (C++17/20) 编写，以确保高性能和跨平台兼容性。

## 模块划分

*   **AI Engine (AI 引擎)**: 负责模型加载、推理和上下文管理。支持 GGML/llama.cpp 等后端。
*   **Data Management (数据管理)**: 处理跨设备的数据同步和本地存储 (SQLite/FlatBuffers)。
*   **Networking (网络层)**: 高效的异步网络通信库。

## 线程模型

我们采用基于线程池 (Thread Pool) 的架构来处理非阻塞操作，确保 UI 线程永远不会被卡住。
