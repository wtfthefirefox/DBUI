import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, incrementCountOfProduct} from '../../actions';
import Spinner from '../spinner/';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => menuError());
    }

    render() {
        const {menuItems, loading, incrementCountOfProduct} = this.props;

        if (loading) {
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem 
                                key={menuItem.id} 
                                menuItem={menuItem}
                                onAddToCart={() => incrementCountOfProduct(menuItem.id)}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = ({menu, loading}) => {
    return {
        menuItems: menu,
        loading: loading
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    incrementCountOfProduct
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));