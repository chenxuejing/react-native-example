import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  top_box: {
    width: '100%',
    height: 250,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 90,
  },
  backgroundimg: {
    width: '100%',
    height: 250,
    position: 'absolute',
    left: 0,
    top: 0
  },
  titleName: {
    alignItems: 'center',
  },
  top_news: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8CE2A',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    height: 80,
    paddingLeft: 10,
    paddingRight: 10
  },
  top_news_buttom: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'orangered',
    borderRadius: 15,
    height: 30,
    lineHeight: 30
  },
  item_box: {
    backgroundColor: '#fff',
    width: '95%',
    marginBottom: 10,
    marginLeft: '2.5%',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 5,
    paddingRight:20,
    paddingLeft:20,
    marginTop:10
  },
  item: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  item_left: {
    flexDirection: 'row',
  }
});