import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple'
});
const THEMES_COLOR = ['Blue', 'Orange', 'Green', 'Purple'];

class Themes extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func
    }

    handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"/>
                {
                    THEMES_COLOR.map( (color, index) => {
                        let isColor = '';
                        switch (color) {
                            case 'Blue':
                                isColor = styles.$blue;
                                break;
                            case 'Orange':
                                isColor = styles.$orange;
                                break;
                            case 'Green':
                                isColor = styles.$green;
                                break;
                            case 'Purple':
                                isColor = styles.$purple;
                                break;
                            default:
                                break;
                        }

                        return (
                            <React.Fragment key={index}>
                                <ListItem
                                    text={color}
                                    onPress={() => this.handleThemePress(isColor)}
                                    selected
                                    checkmark={false}
                                    iconBackground={isColor}
                                />
                                <Separator/>
                            </React.Fragment>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

export default connect()(Themes);