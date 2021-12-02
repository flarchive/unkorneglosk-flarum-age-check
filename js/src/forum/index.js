import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import IndexPage from 'flarum/forum/components/IndexPage';
import SiteSplash from './splash';
import { extend, override } from 'flarum/common/extend';

app.initializers.add('webbinaro/flarum-age-check', () => {

extend(DiscussionPage.prototype, 'pageContent', (items) => { 
  items.add('agebox', <SiteSplash />);
  return items;
});


extend(IndexPage.prototype, 'viewItems', (items) => { 
  items.add('agebox', <SiteSplash />);
  return items;
});

  console.log('[webbinaro/flarum-age-check] intialized');
  
});

