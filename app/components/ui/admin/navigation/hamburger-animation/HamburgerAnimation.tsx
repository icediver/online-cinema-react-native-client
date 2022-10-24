import { FC } from 'react';
import Animated from 'react-native-reanimated';

import { useHamgurgerAnimation } from '@/components/ui/admin/navigation/hamburger-animation/useHamgurgerAnimation';

const className = 'w-6 h-0.5 bg-[#ecf0f1]';

const HamburgerAnimation: FC<{ isShow: boolean }> = ({ isShow }) => {
	const animation = useHamgurgerAnimation(isShow);
	return (
		<Animated.View style={animation.styleAnimation}>
			<Animated.View
				className={className}
				style={animation.transformFirstLineAnimation}
			/>
			<Animated.View
				className={className}
				style={animation.widthSecondLineAnimation}
			/>
			<Animated.View
				className={className}
				style={animation.transformThirdLineAnimation}
			/>
		</Animated.View>
	);
};

export default HamburgerAnimation;
