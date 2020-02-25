import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  box_container: {
    width: '100%',
    position: 'relative',
    backgroundColor:'#fff'
  },
  top_box: {
    width: '100%',
    position: 'absolute',
    zIndex: 99,
    left: 0,
    top: 0,
    paddingTop:34,
    paddingBottom:10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  top_box_1:{
    backgroundColor:'rgb(255,255,255)',
  },
  switch:{
    backgroundColor: 'rgba(100,100,100,.5)',
    color:'#FFF',
    height: 30,
    lineHeight:30,
    borderRadius: 15,
    width:80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(100,100,100,.5)',
    width: 160,
    height: 30,
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 10,
    lineHeight:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  scrollview: {
    zIndex: 2,
  },
  banner: {
    width: '100%',
    height: 120,
  },
  gridclass_box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  gridclass: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridclass_img: {
    width: 40,
    height: 40
  },
  gridclass_text: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 12
  },
  lists: {
    paddingRight: 20,
    paddingLeft: 20
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  item_title_box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  item_icon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  item_title: {
    fontSize: 18,
    color: '#835E28',
    fontWeight: 'bold'
  },
  item_more_box: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  item_more: {
    fontSize: 12,
    color: '#835E28'
  },
  item_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  item_content_item: {
    width: '45%',
    marginBottom: 10
  },
  item_content_item_1: {
    width: '30%',
    marginBottom: 10
  },
  item_content_item_img: {
    width: '100%',
    height: 140,
    borderRadius: 10
  },
  item_content_item_img_1: {
    width: '100%',
    height: 100,
    borderRadius: 10
  },
  item_content_item_title: {
    fontSize: 15,
    color: '#835E28',
    fontWeight: 'bold'
  },
  item_content_item_p: {
    fontSize: 12,
    color: '#DCBB8A'
  }


});
