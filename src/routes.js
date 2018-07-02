import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

/**频道页*/
import EventsIndex from './pages/app/events/index.vue';
import GamesIndex from './pages/app/games/index.vue';
import SearchPage from './pages/app/search/index.vue';
import MyIndex from './pages/app/my/index.vue';
import FriendsPage from './pages/app/friends/index.vue';

/**用户认证*/
import LoginPage from './pages/app/auth/login.vue';
import RegistPage from './pages/app/auth/regist.vue';
import ForgetPage from './pages/app/auth/forget.vue';
import ResetPage from './pages/app/auth/reset.vue';

/**
 * 好友
 */
import AddAttention from './pages/app/friends/add-attention.vue';
import FriendsGroup from './pages/app/friends/group.vue';
import AddFriendsGroup from './pages/app/friends/add-group.vue';
import Search from './pages/app/friends/search.vue';
import PersonalInformation from './pages/app/friends/personal-information';
import PersonalDetails from './pages/app/friends/personal-details.vue';

/**动态**/
import View from './pages/app/events/view.vue';

/**赛事**/
import GameViewPage from './pages/app/games/view.vue';
import GameDetailsPage from './pages/app/games/details.vue';
import GameEnrollPlayerPage from './pages/app/games/enroll/player.vue';
import GameEnrollAgainstPage from './pages/app/games/enroll/against.vue';
import GameEnrollOrderPage from './pages/app/games/enroll/order.vue'
import GameEnrollFormPage from './pages/app/games/enroll/form.vue';
import GameEnrollPersonalPage from './pages/app/games/enroll/personal.vue';
import GameEnrollMethodPage from './pages/app/games/enroll/method.vue';
import GameEnrollTeamPage from './pages/app/games/enroll/team.vue';
import GameEnrollGroupPage from './pages/app/games/enroll/group.vue';
import GameEnrollLivePage from './pages/app/games/enroll/live.vue';
import GameEnrollSuccessPage from './pages/app/games/enroll/success.vue';
import GameEnrollOrderdetail from './pages/app/games/enroll/orderdetail.vue';
import GameEnrollLosePage from './pages/app/games/enroll/lose.vue';
import GameEnrollHotelPage from './pages/app/games/enroll/hotel.vue';
import GameEnrollFoodsPage from './pages/app/games/enroll/foods.vue';
import GameEnrollColonyPage from './pages/app/games/enroll/colony.vue';
import GameEnrollCreatePage from './pages/app/games/enroll/create.vue';
import GameEnrollSearchPage from './pages/app/games/enroll/search.vue';
import GameEnrollFindAgainst from './pages/app/games/enroll/find-against.vue';
import GameEnrollLookOrder from './pages/app/games/enroll/look-order.vue';
import GameEnrollSelectPlayer from './pages/app/games/enroll/select-player.vue';
import GameEnrollApply from './pages/app/games/enroll/apply.vue';
import GameEnrollTitleSearch from './pages/app/games/enroll/title-search.vue';

/**个人中心*/
import MyGames from './pages/app/my/my-games.vue';
import UpdatePhone from './pages/app/my/update-phone.vue';
import ApplyCard from './pages/app/my/apply-card.vue';
import MyOrder from './pages/app/my/my-order.vue';
import OrderDetails from './pages/app/my/order-details.vue';
import GamePlayer from './pages/app/my/game-player.vue';
import MyDetail from './pages/app/my/my-detail.vue';
import MyAddress from './pages/app/my/my-address.vue';
import SetAddress from './pages/app/my/set-address.vue';
import MyPlayers from './pages/app/my/my-players.vue';
import MyAttention from './pages/app/my/my-attention.vue';
import AttentionMy from './pages/app/my/attention-my.vue';
import PlayerInfo from './pages/app/my/player-info.vue';
import IdCard from './pages/app/my/id-card.vue';
import LevelInfo from './pages/app/my/level-info.vue';
import CertificateAddress from './pages/app/my/certificate-address.vue';
import Group from './pages/app/my/group.vue';
import AddGroup from './pages/app/my/add-group.vue';
import FriendRequests from './pages/app/my/friend-requests.vue';
import TransferAuth from './pages/app/my/transfer-auth.vue';

import MyNewsApplyCard from './pages/app/my/news/apply-card.vue';
import MyNewsIdCard from './pages/app/my/news/id-card.vue';
import MyNewsLevelInfo from './pages/app/my/news/level-info.vue';
import MyNewsPlayerInfo from './pages/app/my/news/player-info.vue';
import MyNewsSetAddress from './pages/app/my/news/set-address.vue';
import MyNewsAbout from './pages/app/my/news/about.vue';
import Service from './pages/app/my/service.vue';

/**路由设置*/
export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },

    /**频道**/
    {
        path: '/events/',
        component: EventsIndex,
    },
    {
        path: '/games/',
        component: GamesIndex,
    },
    {
        path: '/search/',
        component: SearchPage,
    },
    {
        path: '/friends/',
        component: FriendsPage,
    },
    {
        path: '/my/',
        component: MyIndex,
    },
    /**认证**/
    {
      path: '/login/',
      component: LoginPage,
    },
    {
        path: '/register/',
        component: RegistPage,
    },
    {
        path: '/forget/',
        component: ForgetPage,
    },
    {
        path: '/reset/',
        component: ResetPage,
    },

    //动态
    {
      path: '/events/view/:id',
      component: View,
    },

//赛事
    {
        path: '/game/details/:id',
        component: GameDetailsPage
    },
    {
        path: '/game/:id',
        component: GameViewPage
    },
    {
        path: '/game/enroll/player/',
        component: GameEnrollPlayerPage
    },

    {
        path: '/game/enroll/order/:id',
        component: GameEnrollOrderPage
    },
    {
        path: '/game/enroll/against/',
        component: GameEnrollAgainstPage
    },
    {
        path: '/game/enroll/form/',
        component: GameEnrollFormPage,
    },
    {
        path: '/game/enroll/form/:id',
        component: GameEnrollPersonalPage,
    },
    {
        path: '/game/enroll/method/',
        component: GameEnrollMethodPage,
    },
    {
        path: '/game/enroll/team/',
        component: GameEnrollTeamPage,
    },
    {
        path: '/game/enroll/group/',
        component: GameEnrollGroupPage,
    },
    {
        path: '/game/enroll/live/:id',
        component: GameEnrollLivePage,
    },
    {
        path: '/game/enroll/success/',
        component: GameEnrollSuccessPage,
    },
    {
        path: '/game/enroll/orderdetail/:id',
        component: GameEnrollOrderdetail,
    },
    {
        path: '/game/enroll/lose/',
        component: GameEnrollLosePage,
    },
    {
        path: '/game/enroll/hotel/',
        component: GameEnrollHotelPage,
    },
    {
        path: '/game/enroll/foods/',
        component: GameEnrollFoodsPage,
    },
    {
        path: '/game/enroll/colony/',
        component: GameEnrollColonyPage,
    },
    {
      path: '/game/enroll/personal/',
      component: GameEnrollPersonalPage,
    },
    {
        path: '/game/enroll/create/',
        component: GameEnrollCreatePage,
    },
    {
        path: '/game/enroll/search/:id',
        component: GameEnrollSearchPage,
    },
    {
        path: '/game/enroll/find-against/:id',
        component: GameEnrollFindAgainst,
    },
    {
        path: '/game/enroll/look-order/:id',
        component: GameEnrollLookOrder,
    },
    {
        path: '/game/enroll/select-player',
        component: GameEnrollSelectPlayer,
    },
    {
        path: '/game/enroll/apply',
        component: GameEnrollApply,
    },
    {
        path: '/game/enroll/title-search/',
        component: GameEnrollTitleSearch,
    },

    //好友
    {
        path: '/friends/add-attention/:id',
        component: AddAttention,
    },
    {
        path: '/friends/group/:id',
        component: FriendsGroup,
    },
    {
        path: '/friends/add-group/:id',
        component: AddFriendsGroup,
    },
    {
        path: '/friends/search/:id',
        component: Search,
    },
    {
        path: '/friends/personal-information/:id',
        component: PersonalInformation,
    },
    {
      path: '/friends/personal-details/:id',
      component: PersonalDetails,
    },

    //我的
    {
        path: '/my/my-game/:id',
        component: MyGames
    },
    {
        path: '/my/update-phone/:id',
        component: UpdatePhone
    },
    {
        path: '/my/apply-card/:id',
        component: ApplyCard
    },
    {
        path: '/my/my-order/:id',
        component: MyOrder
    },
    {
        path: '/my/order-details/:id',
        component: OrderDetails
    },
    {
        path: '/my/game-player/:id',
        component: GamePlayer
    },
    {
        path: '/my/my-detail/:id',
        component: MyDetail
    },
    {
        path: '/my/my-address/:id',
        component: MyAddress
    },
    {
        path: '/my/set-address/:id',
        component: SetAddress
    },
    {
        path: '/my/my-players/:id',
        component: MyPlayers
    },
    {
        path: '/my/my-attention/:id',
        component: MyAttention
    },
    {
        path: '/my/attention-my/:id',
        component: AttentionMy
    },
    {
        path: '/my/player-info/:id',
        component: PlayerInfo
    },
    {
        path: '/my/certificate-address/:id',
        component: CertificateAddress
    },
    {
        path: '/my/level-info/:id',
        component: LevelInfo
    },
    {
        path: '/my/id-card/:id',
        component: IdCard
    },
    {
        path: '/my/group/:id',
        component: Group
    },
    {
        path: '/my/add-group/:id',
        component: AddGroup
    },
    {
        path: '/my/friend-requests/:id',
        component: FriendRequests
    },
    {
        path: '/my/transfer-auth/:id',
        component: TransferAuth
    },


{
        path: '/my/news/apply-card/:id',
        component: MyNewsApplyCard
    },
    {
        path: '/my/news/id-card/:id',
        component: MyNewsIdCard
    },
    {
        path: '/my/news/level-info/:id',
        component: MyNewsLevelInfo
    },
    {
        path: '/my/news/player-info/:id',
        component: MyNewsPlayerInfo
    },
    {
        path: '/my/news/set-address/:id',
        component: MyNewsSetAddress
    },
    {
        path: '/my/news/about/:id',
        component: MyNewsAbout
    },
    {
        path: '/my/service/:id',
        component: Service
    },



    {
        path: '(.*)',
        component: NotFoundPage,
    },


];
