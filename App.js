import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import {BackspaceIcon} from "react-native-heroicons/outline"

export function App(){

	const [equation,setEquation] = useState("")
	const [answer,setAnswer] = useState("")
    const symbols = ["*","/","-","+","%"];

	const addToEquation = (prop) =>{
        switch((!isNaN(parseFloat(prop)) && isFinite(prop)) || prop==".") {
            case true:
                setEquation(equation+prop);
              break;
            default:
              switch(prop){
                  case "C":
                    setEquation("")
                    setAnswer("")
                    break;
                  case "*":
                  case "/":
                  case "+":
                  case "-":
                  case "%":
                    let c = equation.substr(equation.length - 1);
                    if(c!=null && !symbols.includes(c)){
                        setEquation(equation+prop);
                    }
                    break;
                case "=":
                    calculate(true)
                    break;

              }
        }
	}

    const deleleLast = () =>{
        if(equation.length>0){
            let temp = equation.substring(0,equation.length-1);
            setEquation(temp);
            if(temp==""){
                setAnswer("")
            }
        }
    }

    const doesNotContainAnySubstring = (mainString) => {
        return symbols.every(substring => !mainString.includes(substring));
    };

    const calculate = (prop)=>{
        if(equation!="" && doesNotContainAnySubstring(equation)){
            setAnswer(equation)
        }else if(equation!=""){
            const operatorRegex = /[+\-x/]$/;

            if (operatorRegex.test(equation)) {
                const modifiedEquation = equation.slice(0, -1);

                try {
                const result = eval(modifiedEquation);
                setAnswer(result);
                } catch (error) {
                    console.log(equation)
                    console.log("Error 1")
                return `Error: ${error.message}`;
                }
            } else {
                try {
                const result = eval(equation);
                setAnswer(result);
                } catch (error) {
                    console.log(equation)
                    console.log("Error 2")
                return `Error: ${error.message}`;
                }
            }
        }
        if(prop){
            setEquation("")
        }
    }

	useEffect(() => {
        calculate()
	}, [equation])

	


    return (
        <View className="flex-1 bg-slate-800">
        <SafeAreaView className="flex-1">
            <View className="px-5 py-5">
                <Text className="text-white pb-2 text-5xl text-right w-full">{(equation.length>50)?(".."+equation.substring(equation.length-49,equation.length-1)):equation}</Text>
                <ScrollView style={{maxHeight:160}}>
                    <Text className={" pb-2 text-right w-full"+((equation=="")?" text-5xl text-white":" text-3xl text-purple-100")}>
                        {answer}
                    </Text>
                </ScrollView>
            </View>
            <View className="bg-blue-1000 absolute bottom-0 right-0 left-0 pb-5">
                <View className="px-1">
                    <View className="flex-row">
                        {/* <Text className="bg-violet-950 text-white ml-3 text-center w-8 h-6 my-2 rounded-full ">sa</Text>
                        <Text className="bg-violet-950 text-white ml-3 text-center w-8 h-6 my-2 rounded-full ">sa</Text>
                        <Text className="bg-violet-950 text-white ml-3 text-center w-8 h-6 my-2 rounded-full ">sa</Text>
                        <Text className="bg-violet-950 text-white ml-3 text-center w-8 h-6 my-2 rounded-full ">sa</Text> */}
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
                                onPress={deleleLast}
                                >
                                <BackspaceIcon  size="30" strokeWidth={2} color="white"  />
                            </TouchableOpacity>
                    </View>
                    <View className="flex-row flex-wrap">
                            {["7","8","9","*"].map((item, index) => (
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
                            {["00","0",".","="].map((item, index) => (
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
