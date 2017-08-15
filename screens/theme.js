
import 		React 					from 'react';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	} 	from 'react-native';
import { 	connect 			} 	from 'react-redux';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		actions 				from '../actions/theme';
import 		themes 					from '../properties/themes';
import 		scene 					from '../styles/scene';
import 		style 					from '../styles/list-control';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Theme extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const 	language 	= screenProps.language , 
				theme 		= screenProps.theme 	;

		return {
			title 		: language.screens.theme.title ,		
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()} 
				theme 	= { theme 					}
				value 	= { language.actions.return }
			/>
		};
	};

	themes () {

		const 	current 	= this.props.theme ,
				language 	= this.props.language;

		return Object.keys ( themes ).map (( theme , index ) => {

			const 	icon 		= theme 	=== current.id 	? 'ios-radio-button-on-outline' : 'ios-radio-button-off-outline' ,
					background 	= index % 2 === 0 			? current.primary 				: current.base;

			console.log ( themes [ theme ].names );

			return (
				<TouchableOpacity 
					key 	= { index 	}
					onPress = {() => 	{
						this.props.dispatch ( actions.save ( theme ))
					}}
					style 	= {{
						...style ( current ).control ,
						...{
							backgroundColor : background
						}
					}}
				>
					<Text style = { style ( current ).text 		}>
						{ themes [ theme ].names [ language.id 	]}
					</Text>
					<Ionicons
						name 	= { icon 						}
						size 	= { 18 							}
						color 	= { current.secondary 			}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		const theme = this.props.theme;

		return (
			<ScrollView style = { scene ( theme ).body }>
				{ this.themes ()}
			</ScrollView>
		);
	}
});
