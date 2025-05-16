import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({focused,icon,title}:any)=>{
    if(focused){
    return(
        <ImageBackground 
                    source={images.highlight}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        flex: 1,
                        minWidth: 112,
                        minHeight: 64,
                        marginTop: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 999999,
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        source={icon}
                        tintColor="#151312"
                        style={{
                            width: 20,     // 1.25rem = 20px
                            height: 20,
                        }}
                        />
                    <Text style={{
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#151312',
                        fontWeight: 'semibold',
                        marginLeft: 8,
                    }}>{title}</Text>
                </ImageBackground>
    )
}else{
    return(
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flex: 1,
            minWidth: 112,
            minHeight: 64,
            marginTop: 16,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image
                source={icon}
                tintColor="#A8B5DB"
                style={{
                    width: 20,     // 1.25rem = 20px
                    height: 20,
                }}
                />
            
        </View>
    )
}
}

const _layout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle:{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabBarStyle:{
            backgroundColor: '#0f0D23',
            borderRadius: 50,
            position: 'absolute',
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '#0f0D23',

        }
    }}
    >
        <Tabs.Screen name='index' options={{ 
            title: 'Home',
            headerShown: false ,
            tabBarIcon: ({focused})=>(
                <TabIcon
                focused={focused}
                icon={icons.home}
                title='Home'
                />
            )
            }} />
        <Tabs.Screen name='search' options={{ 
            title: 'Search',
            headerShown: false, 
            tabBarIcon: ({focused})=>(
                <TabIcon
                focused={focused}
                icon={icons.search}
                title='Search'
                
                />
            )
            }} />
        <Tabs.Screen name='saved' options={{ 
            title: 'Saved',
            headerShown: false, 
            tabBarIcon: ({focused})=>(
                <TabIcon
                focused={focused}
                icon={icons.save}
                title='Saved'
                
                />
            )
            }} />
        <Tabs.Screen name='profile' options={{ 
            title: 'Profile',
            headerShown: false, 
            tabBarIcon: ({focused})=>(
                <TabIcon
                focused={focused}
                icon={icons.person}
                title='Profile'
                
                />
            )
            }} />
    </Tabs>
  )
}

export default _layout