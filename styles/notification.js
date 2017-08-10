
import theme 	from '../configuration/palette';
import colors 	from '../utilities/colors'

export default {

	default : {

		borderWidth 		: 1 	,
		borderRadius 		: 3 	,
		marginHorizontal 	: 15 	,
		marginVertical 		: 15 	,
		paddingHorizontal 	: 15 	,
		paddingVertical 	: 10

	} ,

	notification : {

		backgroundColor : theme.positive ,
		borderColor 	: colors.shade ( theme.positive , -0.15 ) ,

	}
	
};