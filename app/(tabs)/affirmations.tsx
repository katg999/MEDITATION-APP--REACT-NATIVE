import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';

const Affirmations = () => {
	return (
		<View className='flex-1'>
			<AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text className='text-zinc text-3l font-bold'>
						Change your beliefs with Affirmations
					</Text>
					<View></View>
				</ScrollView>
			</AppGradient>
		</View>
	);
};

export default Affirmations;
