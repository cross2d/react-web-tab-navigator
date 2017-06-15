'use strict';

import React from 'react';
import {
    Animated,
    Platform,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import Util from './../../common/util';

import Layout from './Layout';

export default class TabBar extends React.Component {
    static propTypes = {
        ...Animated.View.propTypes,
        shadowStyle: View.propTypes.style,
    };

    render() {
        return (
            <Animated.View {...this.props} ref={(comp)=> this.tabBarViewRef = comp} style={[styles.container, this.props.style]}>
                <Image style={styles.tabBarBg} source={require("./../../../images/menu_tabbar_bg.png")}/>
                {this.props.children}
                <View style={[styles.shadow, this.props.shadowStyle]}/>
            </Animated.View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: Layout.tabBarHeight,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        transform: [
            {translateX: 0},
            {translateY: Util.getScreenHeight()},
            {scale: 1},
            {rotate: '0rad'},
        ],
    },
    tabBarBg: {
        resizeMode:'stretch',
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
    },
    shadow: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: Layout.pixel,
        position: 'absolute',
        left: 0,
        right: 0,
        top: Platform.OS === 'android' ? 0 : -Layout.pixel,
    },
});
