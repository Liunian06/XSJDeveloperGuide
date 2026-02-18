# 初次运行

环境配置完成后，您可以开始构建项目。

## 编译核心库

运行构建脚本以编译共享的 C++ 动态库。

```bash
./scripts/build_core.sh
```

## 运行 Android 应用

1.  使用 Android Studio 打开 `android/` 目录。
2.  等待 Gradle 同步完成。
3.  点击 "Run" 按钮 (绿色三角形) 部署到模拟器或真机。

## 运行 iOS 应用

1.  使用 Xcode 打开 `ios/SmallPhone.xcodeproj` 或 `.xcworkspace`。
2.  选择目标设备。
3.  点击 "Run" 按钮。
