import { Feather } from '@expo/vector-icons';
import cn from 'clsx';
import { BlurView } from 'expo-blur';
import { FC, PropsWithChildren } from 'react';
import { Pressable } from 'react-native';

import { IBlurButton } from '@/components/ui/blur-button/blur-button.interface';

const BlurButton: FC<PropsWithChildren<IBlurButton>> = ({
	children,
	icon,
	iconSize = 21,
	color = '#fff',
	className,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint={'light'}
				className={cn(
					'w-12 h-12 items-center justify-center rounded-2xl overflow-hidden',
					className
				)}
			>
				{children ? (
					children
				) : (
					<Feather name={icon} size={iconSize} color={color} />
				)}
			</BlurView>
		</Pressable>
	);
};

export default BlurButton;
