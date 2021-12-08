import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import IndexPage from 'flarum/forum/components/IndexPage';
import SiteSplash from './splash';
import { extend, override } from 'flarum/common/extend';

app.initializers.add('unkorneglosk/flarum-age-check', () => {

extend(DiscussionPage.prototype, 'pageContent', (items) => { 
  items.add('agebox', <SiteSplash />);
  $(".DiscussionPage-stream").addClass('thegoods')
  return items;
});


extend(IndexPage.prototype, 'sidebarItems', (items) => { 
  items.add('agebox', <SiteSplash />);
  $(".DiscussionList").addClass('thegoods')
  $(".item-nav").addClass('thegoods')
  $(".App-primaryControl ").addClass('thegoods')

  return items;
});

  console.log('[unkorneglosk/flarum-age-check] intialized');
  
});
/* 
override(IndexPage.prototype, 'hero', (items) => { 

  return (<SiteSplash/>)
}); */
