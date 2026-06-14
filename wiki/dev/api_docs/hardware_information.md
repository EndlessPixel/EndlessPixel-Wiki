### 查询EndlessPixel服务器硬件信息
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/hardware-info`

#### 返回示例：
**获取硬件时序数据成功** <Badge type="tip" text="200" />
```json:line-numbers
{
  "cpu": {
    "model": "Intel(R) Xeon(R) Gold 6148 CPU @ 2.40GHz",  // CPU型号
    "cores": 16,  // 逻辑核心数
    "physical_cores": 16  // 物理核心数
  },
  "memory": {
    "total": 32.0,  // 总内存大小，单位：GB
    "model": "QEMU 定制内存"  // 内存硬件型号
  },
  "disks": [  // 磁盘分区列表
    {
      "device": "C:\\",  // 磁盘设备路径
      "mountpoint": "C:\\",  // 磁盘挂载点
      "fstype": "NTFS",  // .文件系统类型
      "total": 149.46,  // 磁盘总容量，单位：GB
      "used": 20.91,  // 磁盘已使用容量，单位：GB
      "usage_percent": 14.0  // 磁盘使用率，单位：%
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
  "gpu": {
    "model": "Unknown",  // GPU型号
    "available": false  // GPU是否可用
  },
  "network": [  // 网络适配器列表
    {
      "name": "物理以太网",
      "addresses": ["内网地址"]
    },
    {
      "name": "虚拟组网网卡",
      "addresses": ["组网地址"]
    },
    {
      "name": "本地回环接口",
      "addresses": ["127.0.0.1"]
    }
  ]
}
```

---

### 查询EndlessPixel服务器硬件实时数据
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/real-time-data`

#### 返回示例：
**获取服务器硬件实时数据成功** <Badge type="tip" text="200" />
```json:line-numbers
{
  // CPU使用率时序数据 [时间戳, 使用率(%)]
  "cpu_usage": [
    [时间戳, 3.9],
    [时间戳, 4.4],
    [时间戳, 5.5],
    // ... 更多历史时序数据
  ],
  // 内存使用率时序数据 [时间戳, 使用率(%)]
  "mem_usage": [
    [时间戳, 93.5],
    [时间戳, 93.5],
    // ...
  ],
  // GPU使用率时序数据 [时间戳, 使用率(%)]
  "gpu_usage": [
    [时间戳, 0],
    [时间戳, 0],
    // ...
  ],
  // 网络上传速度时序 [时间戳, 速度(MB/s)]
  "net_upload_speed": [
    [时间戳, 125.68],
    [时间戳, 142.74],
    // ...
  ],
  // 网络下载速度时序 [时间戳, 速度(MB/s)]
  "net_download_speed": [
    [时间戳, 6.54],
    [时间戳, 6.97],
    // ...
  ],
  // 系统负载时序 [时间戳, 负载值]
  "system_load": [
    [时间戳, 0.0],
    // ...
  ],
  // 进程数量时序 [时间戳, 进程数]
  "process_count": [
    [时间戳, 203],
    // ...
  ],
  // CPU温度时序数据
  "cpu_temperature": [],
  // 各CPU核心实时使用率(%)
  "cpu_core_usage": [
    14.1,52.9,18.8,12.9,9.4,15.3,10.6,4.7,
    // ... 更多核心使用率
  ],
  // 系统启动时间戳
  "boot_time": 时间戳,
  // 电池信息（无则为空）
  "battery_info": {},
  // 当前数据时间戳
  "timestamp": 时间戳
}
```

---

### 查询服务器磁盘占用信息
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/disk-usage`

#### 返回示例：
**获取磁盘占用数据成功** <Badge type="tip" text="200" />
```json:line-numbers
[
  {
    "device": "C:\\",
    "mountpoint": "C:\\",
    "fstype": "NTFS",
    "total": 149.46,
    "used": 20.91,
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