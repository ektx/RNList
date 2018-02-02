# RNList

基础列表模板

## 使用

```javascript
import RNList from 'rnlist'

// 与 FlatList 使用
<FlatList
    data={list}
    renderItem={({item, index}) => 
        <RNList data={item} style={listStyle}/>
    }
    keyExtractor={(item, index) => index}
>
</FlatList>

// 列表自定义样式
const listStyle = StyleSheet.create({
	list: {
		height: 52,
	},
    // 文字主体
    txtBox: {
        flex: 1,
    },
    // 标题
    title: {
        fontSize: 14,
		color: '#666',
		fontWeight: 'normal'
	},
	// 附件信息
	accessoryBox: {
		flex: 3,
	},
	// 文字附件
	accessoryTxt: {
		fontSize: 14,
		color: '#333'
	}	
})
```

## 样式参数
| 参数           | 类型		  	 | 说明                       |
| ---           | ---			| ---                         |
| data          | Object		| 显示内容						|
| style         | Style			| 自定义样式                          |

### data 参数内容
| 参数           | 类型		  	 | 说明                       |
| ---           | ---			| ---                         |
|icon           | String		| 图标						|
|title          | String		|标题                          |
|subTitle       | String		|副标题                        |
|preview        | String		|预览信息                       |
|accessory      | Object		|附件信息                       |
|separator      | List			|箭头                       |

#### preview 预览
| 参数           | 类型		  	 | 说明                       |
| ---           | ---			| ---                         |
| line			| Number		| 用于规定显示的行数				|
| inner			| String		| 显示的内容						|

#### accessory 附件
| 参数           | 类型		  	 | 说明                       |
| ---           | ---			| ---                         |
| type			| List			| 用于规定显示的类型,可选 ['text','img']|
| inner			| String		| 显示的内容						|

#### separator 箭头
| 参数           | 类型		  	 | 说明                       |
| ---           | ---			| ---                         |
| up			| String		| 显示向上的箭头				|
| down			| String		| 显示向下的箭头				|
| left			| String		| 显示向左的箭头				|
| right			| String		| 显示向右的箭头				|


### Style 自定义样式
| 参数           | 说明                       |
| ---           | ---                         |
|list           | 盒子                         |
|line           | 下划线                       |
|body           | 主体                        |
|iconBox        | 图标盒子						|
|icon           | 图标						|
|txtBox         | 文字主体                      |
|title          |标题                          |
|subTitle       |副标题                        |
|preview        |预览信息                       |
|accessoryBox   |附件信息                       |
|accessoryImg   |图片附件                       |
|accessoryTxt   |文字附件                       |


> 具体可以查看 index.js 的样式部分