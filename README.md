# Notes till Class#35
 
 - We need to import all components from react native
- div ----- View
- paragraph, headings ---- Text
- for styling we need to import styleSheet too  
- Image 
	to put image from internet
	<Image source = {uri('link.com') />
	
	to put image from assets folder
	<Image source = {require('./')} />
	
- text input

	- to get value from input we use onChangeText
	
	<TextInput onChangeText = {(text)=> console.log(text)} />
	
	multiple input types : 
		types can be seen on react's website	
	<TextInput onChangeText = {(text)=> console.log(text)}  keyboardType = {"number-pad"}/>
	
	to use this input as psasword we add secureTextEntry prop
	
	<TextInput onChangeText = {(text)=> console.log(text)} secureTextEntry = {true}/>
	
- Button 

	- import krnge
	- onClick ki jaga onPress use krnge.  
	
- Touchable opacity : 

	-we will use this as button
	-jb hum ispe click krte hien tou yeh ghayb horha ha tou isse 1 prop dete hien activeOpacity ka takey ghayb na ho
	- to run a function on click we use onPress here as well
	
	<TouchableOpaicty activeOpacity>
		<Text> Click me <Text/>
	<TouchableOpaicty/>

- By default flex applied hota ha react native mien aur flex : 1 ya flex : 2 se uski height bari choti hoti ha tou matlb direction column hoti ha

- for box shadow use react-native elevation

-Scroll View	

scroll view ko hum us screen k parent(sbse pehle view se bhi pehle lkhnge); 
mtlb jo parent container hoga screen ka woh scroll view k andar aega

- Flat list

- RN mien map ki jaga flat list use krte

- flat list k just like map ki trha kaam krta ha and we dont need scrollView with it coz it provides scrollView itself


UI LIBRARIES : 

-native base
-react native elements

For icons :
-react native vector icons


- Image background :

iske andar jtne bhi child hnge woh sarey us image background k agey ajaenga aur isko width aur height dena lazmi ha


-Activity indicator :

loader ha isko size aur color dena lazmi hota ha

      REACT NATIVE NAVIGATION
				
reactnavigation.org
npm install @react-navigation/native
Install dependencies in EXPO managaed project can be found on website	

- REACT NATIVE STACK NAVIGATION
	
	npm i @react-navigation/stack
	- Basic navigator
	- Jese hum react-router mien path rkhte thay ihdr name ka prop aata sirf naam lkhte koi '/' wghera nhi
	- Jese react mien home-screen hum '/' se dete thay ismien jo screen sbse upar hogi woh homescreen hogi
	- Agr kisi dusri screen pe jana ha tou button k onPress pe props.navigation.navigate('About').
	- To change the styling, content of header we have an options prop for Stack.Screen
	- to give background color to header we have a property in options prop names as headerStyle which takes and object.
	- to have a custom header : 
				options = {{ headerStyle : props => <Component {...props} /> }}
	 
- Bottom Navigation 

	-Just like whatsApp's chat, status, setting navigation
	-
- Drawer Navigation

	- Jo side bar khulta ha



- We have web view as iFrames

			REACT NATIVE ASYNC STORAGE (LOCAL STORAGE)
[Class: 35 ENDED]
