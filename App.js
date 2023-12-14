import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import {BackspaceIcon} from "react-native-heroicons/outline"

export function App(){

	const [equation,setEquation] = useState("")

	const addToEquation = (prop) =>{
        console.log(prop)
	}

	useEffect(() => {

	}, [])

	


    return (
        <View className="flex-1 bg-slate-800">
        <SafeAreaView className="flex-1">
            <View className="px-5 py-5">
                <Text className="text-white pb-2 text-5xl text-right w-full">5+5+5</Text>
                <Text className="text-white pb-2 text-3xl text-right w-full">15</Text>
            </View>
            <View className="bg-blue-1000 absolute bottom-0 right-0 left-0 pb-5">
                <View className="px-1">
                    <View className="flex-row">
                        <Text className="bg-violet-950 text-white ml-3 text-center w-8 h-6 my-2 rounded-full ">sa</Text>
                        <Text className="bg-violet-950 text-white ml-3 text-center w-8 h-6 my-2 rounded-full ">sa</Text>
                        <Text className="bg-violet-950 text-white ml-3 text-center w-8 h-6 my-2 rounded-full ">sa</Text>
                        <Text className="bg-violet-950 text-white ml-3 text-center w-8 h-6 my-2 rounded-full ">sa</Text>
                    </View>
                    <View className="flex-row flex-wrap">
                            {["C","%","/"].map((item, index) => (
                                <TouchableOpacity 
                                key={item}
                                className="bg-blue-950 p-4 rounded-md flex-1 m-1"
                                onPress={() => addToEquation(item)}
                                >
                                    <Text className="text-white text-3xl font-bold text-center">{item}</Text>
                                </TouchableOpacity>
                            ))}
                            <TouchableOpacity key={"->"} className="bg-blue-950 p-4 items-center rounded-md flex-1 m-1"
                                onPress={() => console.log(`Button ${"->"} pressed`)}
                                >
                                <BackspaceIcon  size="30" strokeWidth={2} color="white"  />
                            </TouchableOpacity>
                    </View>
                    <View className="flex-row flex-wrap">
                            {["7","8","9","x"].map((item, index) => (
                                <TouchableOpacity key={item} className="bg-blue-950 p-4 rounded-md flex-1 m-1"
                                    onPress={() => addToEquation(item)}
                                    >
                                    <Text className="text-white text-3xl font-bold  text-center">{item}</Text>
                                </TouchableOpacity>
                            ))}
                    </View>
                    <View className="flex-row flex-wrap">
                            {["4","5","6","-"].map((item, index) => (
                                <TouchableOpacity key={item} className="bg-blue-950 p-4 rounded-md flex-1 m-1"
                                    onPress={() => addToEquation(item)}
                                    >
                                    <Text className="text-white text-3xl font-bold  text-center">{item}</Text>
                                </TouchableOpacity>
                            ))}
                    </View>
                    <View className="flex-row flex-wrap">
                            {["1","2","3","+"].map((item, index) => (
                                <TouchableOpacity key={item} className="bg-blue-950 p-4 rounded-md flex-1 m-1"
                                    onPress={() => addToEquation(item)}
                                    >
                                    <Text className="text-white text-3xl font-bold  text-center">{item}</Text>
                                </TouchableOpacity>
                            ))}
                    </View>
                    <View className="flex-row flex-wrap">
                            {["00","0","•","="].map((item, index) => (
                                <TouchableOpacity key={item} className="bg-blue-950 p-4 rounded-md flex-1 m-1"
                                    onPress={() => addToEquation(item)}
                                    >
                                    <Text className="text-white text-3xl font-bold  text-center">{item}</Text>
                                </TouchableOpacity>
                            ))}
                    </View>
                </View>
            </View>
        </SafeAreaView>
        </View>
    );
}

export default App;
