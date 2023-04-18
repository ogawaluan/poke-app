import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { IButtonProps } from '@/types';

const ButtonComponent = ({ isHome = true, ...rest }: IButtonProps) => {
	const navigate = useNavigate();
	const whichRoute = isHome ? '/list' : '/';

	const handleButtonClick = () => navigate(whichRoute);
	return (
		<Button
			leftIcon={!isHome ? <MdArrowBack size={29} /> : undefined}
			rightIcon={isHome ? <MdArrowForward size={29} /> : undefined}
			iconSpacing={'5'}
			px="36px"
			py="32px"
			borderRadius={'34px'}
			transition={'all .5s'}
			bgGradient={'linear(to-r, #F0932E, #FFB72C)'}
			color="white"
			_hover={{ opacity: 0.5 }}
			onClick={handleButtonClick}
			{...rest}
		>
			{isHome ? 'Access my list' : 'Go back to home'}
		</Button>
	);
};

export default ButtonComponent;
