export class NavigationUtils {

  static navigation:any
  static goPage(page: string, params?: any) {
    const navigation = NavigationUtils.navigation

    if (!navigation) {
      console.log('navigation can not find');
    } else {
      navigation.navigate(page, {
        ...params
      })
    }
  }
}