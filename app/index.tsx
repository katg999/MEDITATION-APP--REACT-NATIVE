import { View, Text, ImageBackground, SafeAreaView } from 'react-native';
//import beachImage from '@assets/Simple-Meditation-Assets/meditation-images/beach.webp';
import beachImage from '../assets/Simple-Meditation-Assets/meditation-images/beach.webp';
//import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import AppGradient from '@/components/AppGradient';

const App = () => {
	const router = useRouter();

	return (
		<View className='flex-1'>
			<ImageBackground
				source={beachImage}
				resizeMode='cover'
				className='flex-1'
			>
				<AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
					<SafeAreaView className='flex-1 px-1  justify-between'>
						<View className='flex-1 justify-between'>
							<View>
								<Text className='text-center text-white font-bold text-2xl mt-4'>
									Simple Meditation
								</Text>
								<Text className='text-center text-white text-regular text-1xl mt-3'>
									Simplifying Meditation For Me And Everyone
								</Text>
							</View>
							<View className='mt-auto'>
								<CustomButton
									onPress={() => router.push('/nature-meditate')}
									title='Get Started'
								/>
							</View>
						</View>
					</SafeAreaView>
				</AppGradient>
			</ImageBackground>
		</View>
	);
};

export default App;
