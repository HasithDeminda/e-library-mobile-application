import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import plus from "../../assets/plus.png";
// Font Awesome Icons...
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef } from "react";

import Books from "../screens/Admin/Books/Books";
import Profile from "../screens/Admin/Profile/Profile";
import Blogs from "../screens/Admin/Blogs/Blogs";
import Advertisement from "../screens/Admin/Advertisements/Advertisements";

const BlogsStack = createNativeStackNavigator();
const BooksStack = createNativeStackNavigator();
const AdvertisementStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function BooksStackScreen() {
  return (
    <BooksStack.Navigator>
      <BooksStack.Screen
        name="Books"
        component={Books}
        options={{
          headerShown: false,
        }}
      />
    </BooksStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}

function AdvertisementStackScreen() {
  return (
    <AdvertisementStack.Navigator>
      <AdvertisementStack.Screen
        name="Advertisement"
        component={Advertisement}
        options={{
          headerShown: false,
        }}
      />
    </AdvertisementStack.Navigator>
  );
}

function BlogsStackScreen() {
  return (
    <BlogsStack.Navigator>
      <BlogsStack.Screen
        name="Blogs"
        component={Blogs}
        options={{
          headerShown: false,
        }}
      />
    </BlogsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function AdminTabs() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        style: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 20,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 15,
          // Shadow...
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 20,
        },
      }}
    >
      {
        // Tab Screens....
        // Tab ICons....
      }
      <Tab.Screen
        name={"Home"}
        component={BooksStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="book"
                size={22}
                color={focused ? "#2E2EFF" : "gray"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: 8,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      <Tab.Screen
        name={"Advertisements"}
        component={AdvertisementStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="newspaper"
                size={22}
                color={focused ? "#2E2EFF" : "gray"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: 92,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      {
        // Extra Tab Screen For Action Button..
      }

      <Tab.Screen
        name={"ActionButton"}
        component={AdvertisementStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <View
                style={{
                  width: 55,
                  height: 55,
                  backgroundColor: "#5C5CFF",
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: Platform.OS == "android" ? 50 : 30,
                }}
              >
                <Image
                  source={plus}
                  style={{
                    width: 22,
                    height: 22,
                    tintColor: "white",
                  }}
                ></Image>
              </View>
            </TouchableOpacity>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"BlogsStack"}
        component={BlogsStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="file-invoice"
                size={21}
                color={focused ? "#2E2EFF" : "gray"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2.64,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      <Tab.Screen
        name={"ProfileStack"}
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="user-alt"
                size={22}
                color={focused ? "#2E2EFF" : "gray"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3.88,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
