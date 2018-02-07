/*
	列表效果合集

	@author zhuwenlong
	@date 2018-1-31
*/

import React, { Component } from 'react'
import {
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	Image
} from 'react-native'

export default class Item extends Component {

    _getUserIcon () {
        if (this.props.data.icon) {
            return (
                <View style={[myStyle.iconBox, this.props.style && this.props.style.iconBox]}>
                    <Image
                        style={[myStyle.icon, this.props.style && this.props.style.icon]}
                        source={{uri: this.props.data.icon}}
                        />
                </View>
            )
        } else {
            return null
        }
    }

    _getTxt () {

        let _title = (type, lines) => {
            if (this.props.data.hasOwnProperty(type)) {
                let inner = ''
                if (type === 'preview') {
                    lines = parseInt(this.props.data[type].line)
                    inner = this.props.data[type].inner
                } else {
                    inner = this.props.data[type]
                }
                return <Text
                    numberOfLines={lines}
                    style={[myStyle[type], this.props.style && this.props.style[type]]}>{inner}</Text>
            }
        }

        return (
            <View style={[myStyle.txtBox, this.props.style && this.props.style.txtBox]}>
                {_title('title', 1)}
                {_title('subTitle', 1)}
                {_title('preview')}
            </View>
        )
    }

    _getSeparator () {
        if (this.props.data.hasOwnProperty('separator')) {
            let rotateVal = '0deg'
            switch (this.props.data.separator) {
                case 'up':
                    rotateVal = '-90deg'
                    break;
                case 'down':
                    rotateVal = '90deg'
                    break;
                case 'left':
                    rotateVal = '180deg'
                    break;

                default:
            }

            return <View style={[myStyle.separatorBox, {transform: [{rotate: rotateVal}]}]}>
                <Image
                    source={require('./img/arrow.png')}
                />
            </View>
        } else {
            return null
        }
    }

    _accessory () {
        if (this.props.data.hasOwnProperty('accessory')) {
            if (!this.props.data.accessory.inner) {
                return null
            }

            if (this.props.data.accessory.type === 'img') {
                return (
                    <View style={[myStyle.accessoryBox, this.props.style && this.props.style.accessoryBox]}>
                        <Image
                            style={[myStyle.accessoryImg, this.props.style && this.props.style.accessoryImg]}
                            source={{uri: this.props.data.accessory.inner}}
                        />
                    </View>
                )
            } else if (this.props.data.accessory.type === 'text') {
                return (
                    <View style={[myStyle.accessoryBox, this.props.style && this.props.style.accessoryBox]}>
                        <Text style={[myStyle.accessoryTxt, this.props.style.accessoryTxt]}>{this.props.data.accessory.inner}</Text>
                    </View>
                )
            }
        } else {
            return null
        }
    }

    /*
        props:
        @data [Object] 渲染内容
            {
                @icon [uri] 图标
                @title [String] 标题
                @subTitle [String] 副标题
                @preview [Object] 预览设置
                    {
                        @line [Number] 显示个数
                        @inner [String] 显示内容
                    }
                @accessory 附件设置
                    {
                        @type ['img'|'text'] 文字或图像
                        @inner [String] 内容
                    }
                @separator [null|'up'|'down'|'left'|'right'] 箭头方向
            }
        @index [Number] 索引
        @that [Object] 原 this 指针
        @hdImgRange [Array] 指定高清图片取值范围
        @style [style] 自定义样式
        @callback [Function] 回调函数
    */
    render () {
        if (this.props.data) {
            return (
                <TouchableOpacity
                    activeOpacity={this.props.activeOpacity}
                    style={[myStyle.list, this.props.style && this.props.style.list]}
                    onPress={() => {
                        if (this.props.callback) this.props.callback(this)
                    }}
                >
                    <View style={[myStyle.body, this.props.style && this.props.style.body]}>
                        {this._getUserIcon()}
                        {this._getTxt()}
                        {this._accessory()}
                        {this._getSeparator()}
                    </View>
                    <View style={[myStyle.line, this.props.style &&this.props.style.line]}></View>
                </TouchableOpacity>
            )
        } else {
            return (
                <View>
                    <Text>No Data!</Text>
                    <Text>没有发现数据!</Text>
                </View>
            )
        }
    }

}


const myStyle = StyleSheet.create({
	flex: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
    // 盒子
    list: {
        height: 80,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    // 下划线
    line: {
        height: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#eee'
    },
    // 主体
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    // 图标盒子
    iconBox: {
        width: 60,
        height: 80,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // 图标
    icon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f5f5f5'
    },
    // 文字主体
    txtBox: {
        flex: 4
    },
    // 标题
    title: {
        fontSize: 16,
        lineHeight: 18,
        color: '#333',
        fontWeight: 'bold'
    },
    // 副标题
    subTitle: {
        fontSize: 14,
        lineHeight: 18,
        color: '#333'
    },
    // 预览信息
    preview: {
        color: 12,
        lineHeight: 16,
        color: '#999'
    },
    // 箭头盒子 * 不可自定义
    separatorBox: {
    },
    // 附件信息
    accessoryBox: {
        flex: 1,
    },
    // 图片附件
    accessoryImg: {
        width: 60,
        height: 60
    },
    // 文字附件
    accessoryTxt: {
        fontSize: 12,
        color: '#999'
    }
})
