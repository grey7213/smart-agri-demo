export const cropData = {
  '红香椿': {
    producer: {
      demand: '上升',
      demandArrow: '↑',
      demandColor: '#4caf50',
      wholesalePrice: '6-8',
      ecomPrice: '15 - 25',
      suggestedPrice: '18 - 22'
    },
    distributor: {
      supplies: [
        {
          origin: '河北秦皇岛',
          grade: 'A级',
          quantity: '500斤',
          status: '符合[智农]标准'
        }
      ]
    },
    logistics: {
      route: {
        description: '今日推荐路线 (仓库A -> 区域B): 已规划，预计节省运输成本 12%，避开拥堵路段 C。'
      },
      temperature: [
        {
          vehicleId: '沪A888',
          temperature: '3.5°C',
          status: '正常',
          statusIcon: '✅',
          isWarning: false
        },
        {
          vehicleId: '京B999',
          temperature: '7.0°C',
          status: '警告 - 轻微偏高，已发送提醒',
          statusIcon: '⚠️',
          isWarning: true
        }
      ]
    },
    consumer: {
      productName: '[智农优选] 有机红香椿',
      batchNumber: 'ZN20250427XH',
      origin: '河北省秦皇岛市抚宁区',
      farmer: '李**农',
      harvestDate: '2025-04-26',
      qualityCheck: '合格 (报告编号: Q250427)',
      logistics: '全程冷链 (沪A888)',
      seller: '[合作超市/平台]',
      certifications: ['有机认证', '[智农]品质认证']
    }
  },
  '苹果': {
    producer: {
      demand: '平稳',
      demandArrow: '→',
      demandColor: '#ff9800',
      wholesalePrice: '3-4',
      ecomPrice: '6 - 9',
      suggestedPrice: '7 - 8.5'
    },
    distributor: {
      supplies: [
        {
          origin: '山东烟台',
          grade: '特级',
          quantity: '1000箱',
          status: '符合[智农]标准'
        }
      ]
    },
    logistics: {
      route: {
        description: '今日推荐路线 (仓库B -> 区域C): 已规划，预计节省运输成本 8%，避开拥堵路段 A。'
      },
      temperature: [
        {
          vehicleId: '沪C777',
          temperature: '2.8°C',
          status: '正常',
          statusIcon: '✅',
          isWarning: false
        },
        {
          vehicleId: '津D555',
          temperature: '3.2°C',
          status: '正常',
          statusIcon: '✅',
          isWarning: false
        }
      ]
    },
    consumer: {
      productName: '[智农优选] 烟台有机苹果',
      batchNumber: 'ZN20250315PG',
      origin: '山东省烟台市栖霞区',
      farmer: '王**果',
      harvestDate: '2025-03-10',
      qualityCheck: '合格 (报告编号: Q250315)',
      logistics: '全程冷链 (沪C777)',
      seller: '[合作超市/平台]',
      certifications: ['有机认证', '[智农]品质认证', 'GAP认证']
    }
  },
  '小米': {
    producer: {
      demand: '下降',
      demandArrow: '↓',
      demandColor: '#f44336',
      wholesalePrice: '4-5',
      ecomPrice: '8 - 12',
      suggestedPrice: '9 - 11'
    },
    distributor: {
      supplies: [
        {
          origin: '山西沁县',
          grade: '优等',
          quantity: '2吨',
          status: '符合[智农]标准'
        }
      ]
    },
    logistics: {
      route: {
        description: '今日推荐路线 (仓库D -> 区域E): 已规划，预计节省运输成本 15%，避开拥堵路段 F。'
      },
      temperature: [
        {
          vehicleId: '京E333',
          temperature: '22.5°C',
          status: '正常',
          statusIcon: '✅',
          isWarning: false
        }
      ]
    },
    consumer: {
      productName: '[智农优选] 山西黄小米',
      batchNumber: 'ZN20250210XM',
      origin: '山西省长治市沁县',
      farmer: '赵**种',
      harvestDate: '2025-01-25',
      qualityCheck: '合格 (报告编号: Q250210)',
      logistics: '标准运输 (京E333)',
      seller: '[合作超市/平台]',
      certifications: ['[智农]品质认证', '地理标志产品']
    }
  }
}; 