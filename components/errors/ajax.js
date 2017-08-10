
import 		React 					from 'react';
import { 	Text 				, 
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		style 					from '../../styles/errors';
import 		strings 				from '../../properties/strings';
import 		theme 					from '../../configuration/palette';
import 		layout 					from '../../styles/layout';

export default class Error extends React.Component {

	render () {

		const text = this.props.text || strings.errors.default;

		// If there is no error return
		if ( ! this.props.error ) {
			return null;
		}

		return (
			
			<View style = {{
				...layout.fill ,
				...layout.row
			}}>
				
				<TouchableOpacity 
					style 	= { style.ajax.view 	} 
					onPress = { this.props.press 	}>

					<Ionicons
						name 	= 'ios-refresh'
						size 	= { 64 					}
						color 	= { theme.secondary}
					/>

					<Text style = { style.ajax.text }>
						{ text }
					</Text>

				</TouchableOpacity>
			</View>
			
		);
	}	
};