import { createStore, createLogger } from 'vuex';
import LeftPanelList from './modules/LeftPanel/List';
import MainPanel from './modules/MainPanel';
import MainPanelListItem from './modules/MainPanel/List/ListItem';
import getters from './getters';
import state from './state';

export default createStore({
  plugins: [createLogger()],
  modules: {
    LeftList: LeftPanelList,
    MainPanel,
    MainListItem: MainPanelListItem,
  },
  state,
  getters,
});
