# 安装部署

## 系统要求

*   操作系统: Windows 10/11, macOS 12+, Linux (Ubuntu 20.04+)
*   Node.js: v18.0.0+
*   C++ 编译器: MSVC / Clang / GCC (支持 C++20)
*   CMake: 3.20+

## 步骤

1.  克隆仓库
    ```bash
    git clone https://github.com/your-org/small-phone.git
    cd small-phone
    ```

2.  安装依赖
    ```bash
    npm install
    ```

3.  编译核心库
    ```bash
    mkdir build && cd build
    cmake ..
    cmake --build .
    ```

4.  运行示例
    ```bash
    npm run dev
    ```
