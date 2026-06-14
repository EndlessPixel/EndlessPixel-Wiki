### 查询EndlessPixel服务器硬件信息

<Badge type="tip" text="GET" /> `https://www.epmc.top/api/hardware-info`

获取 EndlessPixel 服务器的硬件配置信息，包括 CPU、内存、磁盘、GPU 和网络适配器的详细规格。

#### 返回示例

**获取硬件信息成功** <Badge type="tip" text="200" />

```json:line-numbers
{
  // CPU 信息
  "cpu": {
    // CPU 型号
    "model": "Intel(R) Xeon(R) Gold 6148 CPU @ 2.40GHz",
    // 逻辑核心数
    "cores": 16,
    // 物理核心数
    "physical_cores": 16
  },
  // 内存信息
  "memory": {
    // 总内存大小，单位：GB
    "total": 32.0,
    // 内存硬件型号
    "model": "QEMU 定制内存"
  },
  // 磁盘分区列表
  "disks": [
    {
      // 磁盘设备路径
      "device": "C:\\",
      // 磁盘挂载点
      "mountpoint": "C:\\",
      // 文件系统类型
      "fstype": "NTFS",
      // 磁盘总容量，单位：GB
      "total": 149.46,
      // 磁盘已使用容量，单位：GB
      "used": 20.91,
      // 磁盘使用率，单位：%
      "usage_percent": 14.0
    },
    {
      "device": "D:\\",
      "mountpoint": "D:\\",
      "fstype": "NTFS",
      "total": 200.0,
      "used": 45.01,
      "usage_percent": 22.5
    }
  ],
  // GPU 信息
  "gpu": {
    // GPU 型号（无法检测时为 Unknown）
    "model": "Unknown",
    // GPU 是否可用
    "available": false
  },
  // 网络适配器列表
  "network": [
    {
      // 网络适配器名称
      "name": "物理以太网",
      // IP 地址列表
      "addresses": ["192.168.1.100"]
    },
    {
      "name": "虚拟组网网卡",
      "addresses": ["10.0.0.1"]
    },
    {
      "name": "本地回环接口",
      "addresses": ["127.0.0.1"]
    }
  ]
}
```

#### 错误响应

**服务内部错误** <Badge type="danger" text="500" />

```json:line-numbers
{
  "code": "INTERNAL_ERROR",
  "message": "获取硬件信息失败，请稍后重试"
}
```

---

### 查询EndlessPixel服务器硬件实时数据

<Badge type="tip" text="GET" /> `https://www.epmc.top/api/real-time-data`

获取 EndlessPixel 服务器的实时监控数据，包括 CPU、内存、GPU 使用率、网络速度、系统负载等时序数据。

#### 返回示例

**获取服务器硬件实时数据成功** <Badge type="tip" text="200" />

```json:line-numbers
{
  // CPU 使用率时序数据 [时间戳(ms), 使用率(%)]
  "cpu_usage": [
    [1744272000000, 3.9],
    [1744272060000, 4.4],
    [1744272120000, 5.5]
  ],
  // 内存使用率时序数据 [时间戳(ms), 使用率(%)]
  "mem_usage": [
    [1744272000000, 93.5],
    [1744272060000, 93.5],
    [1744272120000, 93.8]
  ],
  // GPU 使用率时序数据 [时间戳(ms), 使用率(%)]
  "gpu_usage": [
    [1744272000000, 0],
    [1744272060000, 0],
    [1744272120000, 0]
  ],
  // 网络上传速度时序 [时间戳(ms), 速度(MB/s)]
  "net_upload_speed": [
    [1744272000000, 125.68],
    [1744272060000, 142.74],
    [1744272120000, 138.21]
  ],
  // 网络下载速度时序 [时间戳(ms), 速度(MB/s)]
  "net_download_speed": [
    [1744272000000, 6.54],
    [1744272060000, 6.97],
    [1744272120000, 7.23]
  ],
  // 系统负载时序 [时间戳(ms), 负载值]
  "system_load": [
    [1744272000000, 0.0],
    [1744272060000, 0.2],
    [1744272120000, 0.1]
  ],
  // 进程数量时序 [时间戳(ms), 进程数]
  "process_count": [
    [1744272000000, 203],
    [1744272060000, 205],
    [1744272120000, 202]
  ],
  // CPU 温度时序数据（若无传感器则为空数组）
  "cpu_temperature": [],
  // 各 CPU 核心实时使用率 (%)，按核心顺序排列
  "cpu_core_usage": [14.1, 52.9, 18.8, 12.9, 9.4, 15.3, 10.6, 4.7],
  // 系统启动时间戳（毫秒）
  "boot_time": 1744200000000,
  // 电池信息（服务器通常为空对象）
  "battery_info": {},
  // 当前数据时间戳（毫秒）
  "timestamp": 1744272120000
}
```

#### 响应字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| cpu_usage | array | CPU 使用率时序数据，每个元素为 `[timestamp, value]` |
| mem_usage | array | 内存使用率时序数据，每个元素为 `[timestamp, value]` |
| gpu_usage | array | GPU 使用率时序数据（若无 GPU 则全为 0） |
| net_upload_speed | array | 网络上传速度时序数据，单位 MB/s |
| net_download_speed | array | 网络下载速度时序数据，单位 MB/s |
| system_load | array | 系统负载时序数据（Load Average） |
| process_count | array | 进程数量时序数据 |
| cpu_temperature | array | CPU 温度时序数据（若无传感器则为空） |
| cpu_core_usage | array | 各 CPU 核心当前使用率（%） |
| boot_time | number | 系统启动时间戳（毫秒） |
| battery_info | object | 电池信息（服务器环境为空对象） |
| timestamp | number | 当前数据时间戳（毫秒） |

#### 错误响应

**服务内部错误** <Badge type="danger" text="500" />

```json:line-numbers
{
  "code": "INTERNAL_ERROR",
  "message": "获取实时数据失败，请稍后重试"
}
```

---

### 查询服务器磁盘占用信息

<Badge type="tip" text="GET" /> `https://www.epmc.top/api/disk-usage`

获取 EndlessPixel 服务器各磁盘分区的使用情况。

#### 返回示例

**获取磁盘占用数据成功** <Badge type="tip" text="200" />

```json:line-numbers
[
  {
    // 磁盘设备路径
    "device": "C:\\",
    // 磁盘挂载点
    "mountpoint": "C:\\",
    // 文件系统类型
    "fstype": "NTFS",
    // 磁盘总容量，单位：GB
    "total": 149.46,
    // 磁盘已使用容量，单位：GB
    "used": 20.91,
    // 磁盘使用率，单位：%
    "usage_percent": 14.0
  },
  {
    "device": "D:\\",
    "mountpoint": "D:\\",
    "fstype": "NTFS",
    "total": 200.0,
    "used": 45.01,
    "usage_percent": 22.5
  }
]
```

#### 响应字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| device | string | 磁盘设备路径 |
| mountpoint | string | 磁盘挂载点 |
| fstype | string | 文件系统类型（如 NTFS、ext4） |
| total | number | 磁盘总容量，单位：GB |
| used | number | 磁盘已使用容量，单位：GB |
| usage_percent | number | 磁盘使用率，单位：% |

#### 错误响应

**服务内部错误** <Badge type="danger" text="500" />

```json:line-numbers
{
  "code": "INTERNAL_ERROR",
  "message": "获取磁盘信息失败，请稍后重试"
}
```

---

## 通用错误码说明

| HTTP状态码 | 错误码 | 说明 |
|-----------|--------|------|
| 500 | INTERNAL_ERROR | 服务器内部错误，请稍后重试 |