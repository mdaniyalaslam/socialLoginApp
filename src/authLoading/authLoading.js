import React, {useState} from 'react';
import {AuthContext} from '../context/context';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../modules/screens/Login';
import Tabs from '../navigation/Tabs';

export default function AuthLoading() {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   props.showHideLoader(false, '');
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     // console.log('===>>>', state);
  //     setConnection(state.isConnected);
  //     props.setNetworkConnection({connection: state.isConnected});
  //     if (state.isConnected === true) {
  //       getHomeData();
  //       // console.log('===>>>connections true');
  //     }
  //     if (state.isConnected === false && props.homeData.length !== 0) {
  //       //goto home without connection and pick home data from local storage
  //       // console.log('===>>>connections false with data');

  //       setLoading(false);
  //     }
  //     if (state.isConnected === false && props.homeData.length === 0) {
  //       return;
  //       // console.log('===>>>connections false with  no data');
  //     }
  //   });
  //   return () => {
  //     // Unsubscribe
  //     unsubscribe();
  //   };
  // }, []);

  // Using Context Memory for Login Authentication
  const authContext = React.useMemo(() => ({
    login: () => {
      setUserToken('Hello');
    },
  }));

  // if (loading) {
  //   return (
  //     <>
  //       {!props.network && (
  //         <View
  //           style={{
  //             backgroundColor: colors.lightGray,
  //             height: 20,
  //             alignItems: 'center',
  //             width: '100%',
  //           }}>
  //           <Text>No Internet Connection.</Text>
  //         </View>
  //       )}
  //       <View
  //         style={{
  //           flex: 1,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           backgroundColor: 'black',
  //         }}>
  //         <Image source={logo} />
  //       </View>
  //     </>
  //   );
  // } else

  return (
    <AuthContext.Provider value={authContext}>
      {/* {!props.network && (
          <View
            style={{
              backgroundColor: colors.lightGray,
              height: 20,
              alignItems: 'center',
              width: '100%',
            }}>
            <Text>No Internet Connection.</Text>
          </View>
        )} */}
      <NavigationContainer>
        {/* {spinner.loading && (
            <Spinner
              animation="fade"
              overlayColor={'rgba(0, 0, 0, 0.80)'}
              visible={spinner.loading}
              textContent={spinner.text}
              textStyle={styles.spinnerTextStyle}
              // customIndicator
              // indicatorStyle
              // children
            />
          )} */}
        {userToken === null ? <Login /> : <Drawer />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// const styles = StyleSheet.create({
//   spinnerTextStyle: {
//     color: '#FFF',
//   },
// });
// const mapStateToProps = state => {
//   return {
//     spinner: state.spinner,
//     network: state.spinner.networkConnection,
//     homeData: state.appCache.homeData, //[]
//   };
// };
// function matchDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {setNetworkConnection, _setHomeData, showHideLoader, _setAllClasses},
//     dispatch,
//   );
// }

// export default connect(mapStateToProps, matchDispatchToProps)(AuthLoading);
