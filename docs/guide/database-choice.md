# 数据库的选择

在小手机项目中，推荐优先选择 **IndexedDB**，而不是 `localStorage`。

## 为什么选 IndexedDB，而不是 localStorage

`localStorage` 适合少量、简单的键值存储，但在小手机这类长期运行、数据量可能持续增长的项目中会遇到明显限制：

- 容量通常较小，容易触发上限
- 同步 API，频繁读写可能阻塞主线程
- 结构简单，不适合复杂数据模型和查询

而 `IndexedDB` 更适合这类场景：

- 可存储更大规模的数据
- 异步读写，性能更稳
- 支持索引与事务，方便构建聊天记录、联系人、设置等结构化数据

## 必须申请持久化存储（Persistent Storage）

即使使用 IndexedDB，也必须申请“持久化存储”。  
原因是浏览器在存储压力较大时，可能会清理非持久化站点数据。申请成功后，数据被系统自动清理的风险会显著降低。

你可以在合适时机（如首次完成初始化后）调用：

```js
if (navigator.storage && navigator.storage.persist) {
  const isPersisted = await navigator.storage.persist();
  console.log(`是否已启用持久化存储: ${isPersisted}`);
}
```

## 实时监控：使用查询 API (Storage Estimation)

虽然不能手动改写存储上限，但你可以调用 `navigator.storage.estimate()` 来实时查看当前应用已使用多少空间以及总额度。  
这能帮助你根据剩余空间调整业务逻辑，比如提示用户清理设备。

```js
if (navigator.storage && navigator.storage.estimate) {
  const { quota, usage } = await navigator.storage.estimate();
  const remaining = quota - usage;
  console.log(`总额度: ${(quota / 1024 / 1024 / 1024).toFixed(2)} GB`);
  console.log(`已使用: ${(usage / 1024 / 1024).toFixed(2)} MB`);
}
```

## 落地建议

- 业务主数据（聊天记录、联系人、配置）优先使用 IndexedDB
- 对非常小且无需复杂查询的偏好项，可酌情使用 `localStorage`
- 在关键写入前后做容量检测，避免接近上限时写入失败
- 对“存储不足”设计降级策略，例如分批清理缓存、提示用户释放设备空间
