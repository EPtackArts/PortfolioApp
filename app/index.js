import * as React from "react"
import { View, Text, StatusBar, Image, Dimensions} from "react-native"
import {
    MaterialCommunityIcons, 
    AntDesign,
    SimpleLineIcons} from "@expo/vector-icons"
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler"
import { TouchableHighlight } from "react-native-web"

const Layout = {
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
}

const Colors = {
    theme: "#E8CC6E",
    purple: "#817094"  
}

const skillIcons= [
    "language-html5",
    "language-css3",
    "language-javascript",
    "language-python"
];

const devProjects= [
    {
        name:"Moondancer",
        icon:"sail-boat"
    },
    {
        name:"goalMates",
        icon:"calendar"
    },
    {
        name:"White Room",
        icon:"controller-classic"
    }
];

const art=[
    {
        name:"Illustration",
        icon:"pen"
    },
    {
        name:"Fine Art",
        icon:"paintBrush"
    },
    {
        name:"Design",
        icon:"desktop"
    },
];

export default function App(props) {
    return(
        <ScrollView>
            <StatusBar 
                translucent={false} 
                barStyle="light-content" 
                backgroundColor={Colors.theme}/>
            <View style={{backgroundColor:Colors.theme,
                paddingTop:Layout.height *0.08,
                paddingBottom:Layout.height *0.1,
                borderBottomLeftRadius: Layout.width * 0.08,
                borderBottomRightRadius: Layout.width * 0.08}}>
                <View style={{alignItems: "flex-end", 
                    paddingHorizontal:32,
                    marginVeritcal:20}}>
                    <SimpleLineIcons
                        name="equalizer"
                        size={20}
                        styel={{color:Colors.white}}/>
                </View>
                <View style={{
                    flexDirection:"row",
                    paddingHorizontal: 32,
                    marginVertical: 36,
                    alignItems: "center",
                    justifyContent: "flex-start"
                }}>
                    <Image 
                        source={require("../assets/images/PopSocket.png")} 
                        style={{width:60,height:60,borderRadius:25, marginRight:16}}/>
                    <View>
                        <Text style={{fontSize:20, color: Colors.black}}>
                            elizabeth ptack
                        </Text>
                        <Text style={{color:Colors.purple}}>
                            digital designer
                        </Text>
                    </View>
                </View>
            </View>

            <View style= {{
                backgroundColor:Colors.purple,
                marginHorizontal: 32,
                padding: 20,
                borderRadius: 20,
                elevation: 8,
                marginBottom: 16,
                marginTop:-Layout.height*.12,}}>
                <View style={{flexDirection:"row", 
                    justifyContent:"space-between",
                    marginVertical: 8,}}>
                    <Text style={{color:Colors.theme}}>about me</Text>
                    <AntDesign name="user" size={20} style={{color:Colors.theme}}/>
                </View>
                <View style={{marginVertical:8}}>
                    <Text>i am a digital designer who combines
                        my passion for storytelling with a keen eye for 
                        detail and mastery of digital tools. with a 
                        background in software development and a focus on 
                        graphic design, ui/ux, and concept art, i bring
                        captivating narratives and vibrant characters
                        to life. i aspire to contribute my artistic 
                        vision to video game pre-production and children's 
                        media, creating innovative and memorable experiences.
                        with continuous learning and a genuine passion for 
                        storytelling, i am ready to embark on my 
                        professional journey, turning imagination into reality 
                        through my creative endeavors.
                    </Text>
                </View>
            </View>

            <View style= {{
                marginHorizontal: 32,
                paddingRight: 20,
                paddingLeft:20,
                borderRadius: 20,
                elevation: 8,
                marginBottom: 16}}>
                <View style={{flexDirection:"row", 
                    justifyContent:"space-between",
                    marginVertical: 8,}}>
                    <Text style={{fontSize:20}}>development</Text>
                </View>
            </View>

            <View style= {{
                backgroundColor:Colors.purple,
                marginHorizontal: 32,
                padding: 20,
                borderRadius: 20,
                elevation: 8,
                marginBottom: 16}}>
                <View style={{flexDirection:"row", 
                    justifyContent:"space-between",
                    marginVertical: 8,}}>
                    <Text style={{color:Colors.theme}}>my skills</Text>
                    <AntDesign name="laptop" size={20} style={{color:Colors.theme}}/>
                </View>
                <ScrollView horizontal style={{marginVertical:8}}>
                    {skillIcons.map(skill => (
                        <View style={{
                            width:48,
                            height: 48,
                            borderRadius: 24,
                            borderWidth:2,
                            borderColor:Colors.theme,
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: 5
                        }}>
                            <MaterialCommunityIcons 
                            name={skill} size={30}
                            style={{color:Colors.theme}}/>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <ScrollView horizontal>
                {devProjects.map(project => (
                    <View key={project.name}
                    style={{
                        backgroundColor: Colors.theme,
                        marginHorizontal: 35,
                        padding:20,
                        borderRadius:16,
                        marginBottom:16,
                        alignItems: "center",
                        width: Layout.width*0.82
                    }}>
                        <Text style={{fontSize:20, color:Colors.purple}}>{project.name}</Text>
                        <MaterialCommunityIcons name={project.icon} size={150} style={{
                            color: Colors.purple, marginVeritcal:40
                        }}/>
                        <TouchableOpacity>
                            <View style={{
                                backgroundColor:Colors.purple, 
                                borderRadius:10, 
                                paddingHorizontal: 20,
                                paddingVertical: 10}}>
                                <Text style={{color: Colors.theme}}>view project</Text>
                            </View>
                        </TouchableOpacity>    
                    </View>
                ))}
            </ScrollView>

            <View style= {{
                marginHorizontal: 32,
                paddingRight: 20,
                paddingLeft:20,
                borderRadius: 20,
                elevation: 8,
                marginBottom: 16}}>
                <View style={{flexDirection:"row", 
                    justifyContent:"space-between",
                    marginVertical: 8,}}>
                    <Text style={{fontSize:20}}>art &</Text>
                </View>
            </View>

            <View style= {{
                backgroundColor:Colors.purple,
                marginHorizontal: 32,
                padding: 20,
                borderRadius: 20,
                elevation: 8,
                marginBottom: 16}}>
                <View style={{flexDirection:"row", 
                    justifyContent:"space-between",
                    marginVertical: 8,}}>
                    <Text style={{color:Colors.theme}}>my skills</Text>
                    <AntDesign name="laptop" size={20} style={{color:Colors.theme}}/>
                </View>
                <ScrollView horizontal style={{marginVertical:8}}>
                    {skillIcons.map(skill => (
                        <View style={{
                            width:48,
                            height: 48,
                            borderRadius: 24,
                            borderWidth:2,
                            borderColor:Colors.theme,
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: 5
                        }}>
                            <MaterialCommunityIcons 
                            name={skill} size={30}
                            style={{color:Colors.theme}}/>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <ScrollView horizontal>
                {devProjects.map(project => (
                    <View key={project.name}
                    style={{
                        backgroundColor: Colors.theme,
                        marginHorizontal: 35,
                        padding:20,
                        borderRadius:16,
                        marginBottom:16,
                        alignItems: "center",
                        width: Layout.width*0.82
                    }}>
                        <Text style={{fontSize:20, color:Colors.purple}}>{project.name}</Text>
                        <MaterialCommunityIcons name={project.icon} size={150} style={{
                            color: Colors.purple, marginVeritcal:40
                        }}/>
                        <TouchableOpacity>
                            <View style={{
                                backgroundColor:Colors.purple, 
                                borderRadius:10, 
                                paddingHorizontal: 20,
                                paddingVertical: 10}}>
                                <Text style={{color: Colors.theme}}>view project</Text>
                            </View>
                        </TouchableOpacity>    
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
}