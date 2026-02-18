# API 快速入门

Small Phone 提供了统一的 API 层来处理跨平台的业务逻辑。

## 初始化

```cpp
#include <small_phone/core.h>

int main() {
    auto app = small_phone::Application::Create();
    app->Initialize();
    return app->Run();
}
```

## AI 模型加载

```cpp
auto model = app->GetAIContext()->LoadModel("llama-3-8b-quantized.gguf");
auto response = model->Generate("Hello, Small Phone!");
```

更多 API 请参考 [API 参考文档](/api/reference)。
