import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import HomePage from '../../Components/HomePage/HomePage';
import ActivitiesPage from '../../Components/ActivitiesPage/ActivitiesPage';
import AnnouncementPage from '../../Components/Announcement/AnnouncementPage';
import AuctionPage from '../../Components/Nft/AuctionPage';
import BlogDetailsPage from '../../Components/Blog/BlogDetailsPage';
import BlogPage from '../../Components/Blog/BlogPage';
import CategoryPage from '../../Components/Category/CategoryPage';
import CollectionDetailsPage from '../../Components/Collections/CollectionDetailsPage';
import CollectionsPage from '../../Components/Collections/CollectionsPage';
import CreatorsPage from '../../Components/CreatorsPage/CreatorsPage';
import ExplorePage from '../../Components/Explore/ExplorePage';
import ItemDetailsPage from '../../Components/Nft/ItemDetailsPage';
import PrivacyPage from '../../Components/PrivacyPage/PrivacyPage';
import ProfilePage from '../../Components/Profile/Profile';
import RankingsPage from '../../Components/Rankings/RankingsPage';
import StudentsPage from '../../Components/Students/StudentsPage';
import WalletPage from '../../Components/Wallet/WalletPage';
import ProfessionalsPage from '../../Components/ProfessionalsPage/ProfessionalsPage';
import Create from '../../Components/Nft/Create';
import CreateCollection from '../../Components/Collections/CreateCollection'
import Four0Four from '../../Components/PageNoteFound/404';
import CreateBlog from '../../Components/Blog/CreateBlogPage';
import NotificationDetailPage from '../../Components/Notifications/NotificationDetailPage';
import NotificationsPage from '../../Components/Notifications/NotificationsPage';
import CreatorDetailsPage from '../../Components/CreatorsPage/CreatorDetails';
import Chains from '../../Components/chains/Chains';

function Routes() {
    return (

        <ReactRoutes>
            <Route path='/' element={<HomePage />} />
            <Route path='/rankings' element={<RankingsPage />} />
            <Route path='/activities' element={<ActivitiesPage />} />
            <Route path='/auction' element={<AuctionPage />} />
            <Route path='/creators' element={<CreatorsPage />} />
            <Route path='/professionals' element={<ProfessionalsPage />} />

            <Route path='/students' element={<StudentsPage />} />
            <Route path='/explore' element={<ExplorePage />} />
            <Route path='/notification-details' element={<NotificationDetailPage />} />
            <Route path='/notifications' element={<NotificationsPage />} />

            <Route path='/category' element={<CategoryPage />} />
            <Route path='/item-details' element={<ItemDetailsPage />} />
            <Route path='/collections' element={<CollectionsPage />} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/announcements' element={<AnnouncementPage />} />


            <Route path='/wallets' element={<WalletPage />} />
            <Route path='/author' element={<CreatorDetailsPage />} />
            <Route path='/collection-details' element={<CollectionDetailsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog-details' element={<BlogDetailsPage />} />
            <Route path='/create-blog' element={<CreateBlog />} />
            <Route path='/items-create' element={<Create />} />
            <Route path='/items-collections' element={<CreateCollection />} />
            <Route path='/items-create-start' element={<Chains />} />
            <Route path='*' element={<Four0Four />} />
        </ReactRoutes>
    )
}

export default Routes