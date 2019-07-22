import React from 'react';

class PersistGate extends React.Component {
    componentDidMount() {
        this.props.persistor.initilize();
    }

    componentWillUnmount() {
        console.log('PersistGate componentWillUnmount');
        // 这里只会在组件卸载时，保存数据到本地
        // 但是页面刷新时，是触发不了这个生命周期钩子的
        // 如果想要页面刷新时保存：
        // 要么每次修改状态都去保存一次；
        // 要么尝试监听浏览器的事件，看看能不能去保存
        this.props.persistor.save();
    }

    render() {
        return this.props.children;
    }
}

export {PersistGate}